import React, { useState, useEffect, useRef } from 'react';
import { ExerciseData } from '../types';
import { Play, RotateCcw, CheckCircle2, AlertCircle, Terminal, Loader2, XCircle, Trash2, Code2, FileText, Download } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface ExerciseAreaProps {
  data: ExerciseData;
}

interface ExecutionResult {
  stdout: string;
  stderr: string;
  code: number | null;
  signal: string | null;
}

// Helper component to render description with improved formatting
const DescriptionRenderer: React.FC<{ text: string }> = ({ text }) => {
  // Split text by newlines to handle paragraphs
  const lines = text.split('\n');
  
  return (
    <div className="text-slate-700 leading-relaxed space-y-4">
      {lines.map((line, i) => {
        const trimmedLine = line.trim();
        
        // Handle headers
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
             // It's likely a header or emphasized line
             // Let's strip the ** and make it a header-like paragraph
             const content = trimmedLine.slice(2, -2);
             // Check if it looks like a section title (e.g. "任务背景")
             if (content.includes('任务') || content.includes('下载')) {
                 return <h4 key={i} className="text-lg font-bold text-slate-900 mt-6 mb-2 border-l-4 border-indigo-500 pl-3">{content}</h4>;
             }
        }
        
        // Handle images (Markdown style: ![alt](src))
        const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
            return (
                <div key={i} className="my-6 border border-slate-200 rounded-lg p-2 bg-slate-50 shadow-sm inline-block max-w-full">
                    <img src={imgMatch[2]} alt={imgMatch[1]} className="max-w-full h-auto rounded" />
                    <p className="text-xs text-center text-slate-500 mt-2">{imgMatch[1]}</p>
                </div>
            );
        }
        
        // Handle HTML links (e.g. <a href...>)
        if (line.includes('<a href')) {
             // Render as HTML dangerously (be careful with this in production, but okay here for static content)
             return <div key={i} dangerouslySetInnerHTML={{ __html: line }} />;
        }
        
        // Handle list items (start with - or *)
        // We need to check specifically for standard list markers followed by space
        if (trimmedLine.match(/^[-*]\s/)) {
             const content = trimmedLine.replace(/^[-*]\s/, '');
             // Simple formatting inside list item
             const parts = content.split(/(\*\*.*?\*\*|`.*?`)/g);
             return (
                <div key={i} className="flex items-start gap-2 ml-8">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                    <span className="text-slate-700">
                         {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={j} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
                            }
                            if (part.startsWith('`') && part.endsWith('`')) {
                                return <code key={j} className="bg-indigo-50 px-1.5 py-0.5 rounded text-indigo-700 font-mono text-sm border border-indigo-100 mx-0.5">{part.slice(1, -1)}</code>;
                            }
                            return part;
                        })}
                    </span>
                </div>
             );
        }

        // Handle ordered list items (1. , 2. )
        if (trimmedLine.match(/^\d+\.\s/)) {
            const content = trimmedLine.replace(/^\d+\.\s/, '');
             const parts = content.split(/(\*\*.*?\*\*|`.*?`)/g);
             // Extract the number
             const num = trimmedLine.split('.')[0];
             return (
                <div key={i} className="flex items-start gap-2 ml-2 mt-2">
                    <span className="font-bold text-indigo-600 min-w-[1.5rem] text-right">{num}.</span>
                    <span className="text-slate-700">
                         {parts.map((part, j) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={j} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
                            }
                            if (part.startsWith('`') && part.endsWith('`')) {
                                return <code key={j} className="bg-indigo-50 px-1.5 py-0.5 rounded text-indigo-700 font-mono text-sm border border-indigo-100 mx-0.5">{part.slice(1, -1)}</code>;
                            }
                            return part;
                        })}
                    </span>
                </div>
             );
        }

        // Handle standard text with inline formatting
        // Simple parser for **bold** and `code`
        const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
        return (
          <div key={i} className={trimmedLine === '' ? 'h-2' : ''}>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="text-slate-900 font-bold">{part.slice(2, -2)}</strong>;
              }
              if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={j} className="bg-indigo-50 px-1.5 py-0.5 rounded text-indigo-700 font-mono text-sm border border-indigo-100 mx-0.5">{part.slice(1, -1)}</code>;
              }
              return part;
            })}
          </div>
        );
      })}
    </div>
  );
};

export const ExerciseArea: React.FC<ExerciseAreaProps> = ({ data }) => {
  const [userCode, setUserCode] = useState(data.initialCode);
  const [activeTab, setActiveTab] = useState<'edit' | 'solution'>('edit');
  
  // Execution states
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<ExecutionResult | null>(null);
  const [executionError, setExecutionError] = useState<string | null>(null);
  
  const consoleEndRef = useRef<HTMLDivElement>(null);

  // Reset state when exercise changes
  useEffect(() => {
    setUserCode(data.initialCode);
    setActiveTab('edit');
    setOutput(null);
    setExecutionError(null);
  }, [data]);

  // Auto-scroll to console when output updates
  useEffect(() => {
    if ((output || isRunning || executionError) && activeTab === 'edit') {
      setTimeout(() => {
        consoleEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [output, isRunning, executionError, activeTab]);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    setExecutionError(null);
    setActiveTab('edit');

    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: 'python',
          version: '3.10.0',
          files: [
            {
              content: userCode
            }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('网络请求失败，请稍后重试');
      }

      const result = await response.json();
      
      // Piston API returns { run: { stdout, stderr, code, signal, ... } }
      if (result.run) {
        setOutput({
          stdout: result.run.stdout,
          stderr: result.run.stderr,
          code: result.run.code,
          signal: result.run.signal
        });
      } else {
        throw new Error('无法解析服务器响应');
      }
    } catch (err) {
      setExecutionError(err instanceof Error ? err.message : '运行代码时发生未知错误');
    } finally {
      setIsRunning(false);
    }
  };

  const getSignalDescription = (signal: string) => {
    switch (signal) {
      case 'SIGSEGV': return 'Segmentation Fault (访问了非法内存)';
      case 'SIGFPE': return 'Floating Point Exception (除以零等)';
      case 'SIGILL': return 'Illegal Instruction (非法指令)';
      case 'SIGABRT': return 'Aborted (程序中止)';
      case 'SIGKILL': return 'Process Killed (可能超时或内存溢出)';
      default: return signal;
    }
  };

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto p-4 lg:p-8">
      
      {/* Header Section */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Code2 size={14} />
            练习模式
          </span>
          <h2 className="text-3xl font-bold text-slate-900">{data.title}</h2>
        </div>
        
        {/* Description Card */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
            <DescriptionRenderer text={data.description} />
        </div>
      </div>

      {/* Workspace */}
      <div className="flex-1 flex flex-col gap-6">
        
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('edit')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === 'edit'
                    ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
              >
                <Terminal size={16} />
                代码编辑器
              </button>
              <button
                onClick={() => setActiveTab('solution')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === 'solution'
                    ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
              >
                <CheckCircle2 size={16} />
                查看参考答案
              </button>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button 
                onClick={() => setUserCode(data.initialCode)}
                className="text-slate-500 hover:text-red-600 text-sm flex items-center gap-1.5 transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
                disabled={isRunning}
                title="重置代码到初始状态"
              >
                <RotateCcw size={16} />
                <span className="hidden sm:inline">重置</span>
              </button>
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className={`
                  flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-white shadow-md transition-all
                  ${isRunning 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:shadow-lg active:transform active:scale-95'}
                `}
              >
                {isRunning ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    执行中...
                  </>
                ) : (
                  <>
                    <Play size={18} fill="currentColor" />
                    运行代码
                  </>
                )}
              </button>
            </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Left: Editor/Solution (Takes up 2 columns) */}
            <div className="lg:col-span-2 flex flex-col gap-4 min-h-[500px]">
                {activeTab === 'edit' ? (
                  <div className="flex-1 relative rounded-xl overflow-hidden border border-slate-300 shadow-sm flex flex-col bg-[#1e1e1e]">
                       {/* Editor Header */}
                       <div className="bg-[#2d2d2d] text-slate-400 text-xs px-4 py-2.5 flex items-center justify-between border-b border-black/20 select-none">
                          <span className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></span>
                                <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></span>
                            </div>
                            <span className="ml-3 text-slate-300 font-mono flex items-center gap-2">
                                <FileText size={12} />
                                solution.py
                            </span>
                          </span>
                          <span className="text-slate-500 font-mono">Python 3.10</span>
                       </div>
                       {/* Textarea */}
                       <textarea
                        value={userCode}
                        onChange={(e) => setUserCode(e.target.value)}
                        className="w-full flex-1 p-4 font-mono text-sm bg-[#1e1e1e] text-slate-200 resize-none focus:outline-none leading-relaxed selection:bg-indigo-500/30"
                        spellCheck={false}
                        style={{ tabSize: 4 }}
                      />
                  </div>
                ) : (
                  <div className="flex-1 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                     <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                        <h3 className="font-bold text-slate-700 flex items-center gap-2">
                            <CheckCircle2 className="text-green-600" size={20} />
                            参考答案
                        </h3>
                        <button 
                            onClick={() => {
                                setUserCode(data.solutionCode);
                                setActiveTab('edit');
                                setOutput(null);
                            }}
                            className="text-xs bg-white border border-slate-200 hover:border-indigo-300 text-indigo-600 px-3 py-1.5 rounded-md transition-colors font-medium shadow-sm"
                        >
                            复制并运行
                        </button>
                     </div>
                     <div className="flex-1 overflow-y-auto p-0">
                        <CodeBlock code={data.solutionCode} />
                     </div>
                  </div>
                )}
            </div>

            {/* Right: Output & Hints (Takes up 1 column) */}
            <div className="lg:col-span-1 flex flex-col gap-4 min-h-[500px]">
                
                {/* Output Console */}
                <div className="flex-1 rounded-xl overflow-hidden border border-slate-300 shadow-sm flex flex-col bg-[#1e1e1e] min-h-[300px]">
                    <div className="bg-[#2d2d2d] text-slate-300 px-4 py-2.5 text-xs font-mono flex items-center justify-between border-b border-black/20">
                      <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[10px]">
                        <Terminal size={14} />
                        <span>Terminal Output</span>
                      </div>
                      {output && !isRunning && (
                        <button 
                          onClick={() => setOutput(null)}
                          className="text-slate-500 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
                          title="清空输出"
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                    <div className="flex-1 bg-[#0d1117] p-4 font-mono text-sm overflow-y-auto custom-scrollbar">
                      {isRunning && (
                        <div className="text-slate-400 flex items-center gap-3 animate-pulse">
                          <Loader2 size={16} className="animate-spin text-indigo-400" />
                          <span>正在运行代码...</span>
                        </div>
                      )}
                      
                      {executionError && (
                        <div className="text-red-400 bg-red-900/20 p-3 rounded-lg border border-red-900/50">
                           <div className="flex items-center gap-2 font-bold mb-1 text-red-300">
                               <XCircle size={16} />
                               <span>System Error</span>
                           </div>
                           <p className="opacity-90 text-xs">{executionError}</p>
                        </div>
                      )}

                      {output && (
                        <div className="animate-in fade-in duration-300">
                          {output.stderr && (
                            <div className="text-red-400 whitespace-pre-wrap mb-4 pb-4 border-b border-slate-800">
                              <div className="font-bold text-[10px] uppercase mb-2 text-red-500/70 flex items-center gap-2">
                                 <AlertCircle size={12} />
                                 STDERR
                              </div>
                              {output.stderr}
                            </div>
                          )}
                          
                          {output.stdout ? (
                            <div className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                              {output.stdout}
                            </div>
                          ) : (
                            !output.stderr && !output.signal && (
                                <div className="text-slate-600 italic text-xs mt-2">
                                    (程序执行成功，但没有打印任何内容)
                                </div>
                            )
                          )}
                          
                          <div className="mt-6 pt-3 border-t border-white/10 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                             <span>EXIT: {output.code}</span>
                             {output.signal && <span className="text-amber-500">SIG: {output.signal}</span>}
                             <span className={output.code === 0 ? "text-emerald-500" : "text-red-500"}>
                                {output.code === 0 ? "SUCCESS" : "FAILED"}
                             </span>
                          </div>
                        </div>
                      )}
                      
                      {!isRunning && !output && !executionError && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-2 opacity-50">
                            <Terminal size={32} strokeWidth={1} />
                            <span className="text-xs">点击“运行代码”查看输出</span>
                        </div>
                      )}
                      
                      <div ref={consoleEndRef} />
                    </div>
                </div>

                {/* Hints Panel */}
                {activeTab === 'edit' && (
                  <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-5">
                    <div className="flex items-center gap-2 text-amber-700 font-bold text-sm mb-3">
                        <SparklesIcon />
                        <span>解题提示</span>
                    </div>
                    <ul className="space-y-2">
                      {data.hints.map((hint, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-amber-800 text-sm bg-white/60 p-2 rounded-lg border border-amber-100/50">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center text-xs font-bold mt-0.5">
                                {idx + 1}
                            </span>
                            <span className="leading-relaxed">{hint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

// Simple Sparkles Icon component to replace missing one
const SparklesIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-amber-500"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
);
