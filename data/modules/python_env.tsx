
import React from 'react';
import { Section } from '../../types';
import { CodeBlock } from '../../components/CodeBlock';
import { Box, Package, Terminal, Layers, ArrowRight, MonitorPlay, Check, AlertCircle } from 'lucide-react';

// --- Visual Components ---

const EnvRoomVisual = () => (
  <div className="flex flex-col md:flex-row gap-4 my-8 select-none font-sans">
    <div className="flex-1 bg-slate-100 border-2 border-slate-300 border-dashed rounded-xl p-5 relative min-h-[140px]">
        <div className="absolute -top-3 left-4 bg-slate-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">系统全局环境 (System)</div>
        <div className="mt-4 flex flex-col gap-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
            <div className="bg-white p-2 border border-slate-300 rounded text-xs flex items-center gap-2 shadow-sm">
              <Package size={14} className="text-slate-500"/> 
              <span>pandas <span className="text-red-500 font-bold">1.3</span></span>
            </div>
            <div className="bg-white p-2 border border-slate-300 rounded text-xs flex items-center gap-2 shadow-sm">
              <Package size={14} className="text-slate-500"/> 
              <span>numpy <span className="text-red-500 font-bold">1.18</span></span>
            </div>
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] text-slate-400 font-bold uppercase">Public Hall</div>
    </div>
    
    <div className="flex flex-col justify-center items-center text-slate-300 hidden md:flex">
        <div className="text-xs mb-1">隔离</div>
        <ArrowRight size={24} />
    </div>

    <div className="flex-1 bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5 relative shadow-md transition-transform hover:-translate-y-1 duration-300">
        <div className="absolute -top-3 left-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">房间 A: env-data</div>
        <div className="text-xs text-indigo-900 mb-3 font-mono bg-indigo-100 inline-block px-1.5 rounded">Python 3.10</div>
        <div className="space-y-2">
            <div className="bg-white p-2 border border-indigo-100 rounded text-xs flex items-center gap-2 text-indigo-700 shadow-sm">
              <Package size={14}/> 
              <span>pandas <span className="font-bold text-green-600">2.0</span> (新版)</span>
            </div>
            <div className="bg-white p-2 border border-indigo-100 rounded text-xs flex items-center gap-2 text-indigo-700 shadow-sm">
              <Package size={14}/> 
              <span>numpy <span className="font-bold text-green-600">1.24</span></span>
            </div>
        </div>
    </div>

    <div className="flex-1 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5 relative shadow-md transition-transform hover:-translate-y-1 duration-300">
        <div className="absolute -top-3 left-4 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">房间 B: env-web</div>
        <div className="text-xs text-emerald-900 mb-3 font-mono bg-emerald-100 inline-block px-1.5 rounded">Python 3.8</div>
        <div className="space-y-2">
            <div className="bg-white p-2 border border-emerald-100 rounded text-xs flex items-center gap-2 text-emerald-700 shadow-sm">
              <Package size={14}/> 
              <span>pandas <span className="font-bold text-amber-600">1.1</span> (旧版)</span>
            </div>
            <div className="bg-white p-2 border border-emerald-100 rounded text-xs flex items-center gap-2 text-emerald-700 shadow-sm">
              <Package size={14}/> 
              <span>django <span className="font-bold text-amber-600">3.2</span></span>
            </div>
        </div>
    </div>
  </div>
);

const AnacondaVisual = () => (
    <div className="my-8 max-w-2xl mx-auto border border-slate-200 rounded-xl overflow-hidden shadow-lg font-sans">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="font-bold text-lg flex items-center gap-2">
                <Box size={24} /> Anaconda "大礼包"
            </div>
            <div className="text-xs bg-white/20 px-2 py-1 rounded">All-in-One Installer</div>
        </div>
        <div className="bg-slate-50 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-200 rounded-full items-center justify-center z-10 border-4 border-slate-50 text-slate-400">
               <span className="text-xl">+</span>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-green-300 transition-colors">
                <div className="font-bold text-slate-800 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Terminal size={16} className="text-slate-500"/> 核心引擎
                </div>
                <ul className="text-sm space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Python 解释器</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="font-bold text-slate-800">conda</span> (环境管家)</li>
                </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-green-300 transition-colors">
                <div className="font-bold text-slate-800 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Layers size={16} className="text-slate-500"/> 预装库 (Libs)
                </div>
                <ul className="text-sm space-y-2 text-slate-600">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>NumPy, Pandas</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>Matplotlib</li>
                    <li className="text-xs text-slate-400 pl-4">+ 1000 多个科学计算包</li>
                </ul>
            </div>

            <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:border-green-300 transition-colors">
                <div className="font-bold text-slate-800 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <MonitorPlay size={16} className="text-slate-500"/> 图形化工具 (Tools)
                </div>
                <div className="flex gap-3">
                    <div className="bg-slate-100 px-3 py-1.5 rounded text-sm text-slate-700 border border-slate-200">Jupyter Notebook</div>
                    <div className="bg-slate-100 px-3 py-1.5 rounded text-sm text-slate-700 border border-slate-200">Spyder</div>
                    <div className="bg-slate-100 px-3 py-1.5 rounded text-sm text-slate-700 border border-slate-200">Navigator</div>
                </div>
            </div>
        </div>
    </div>
);

const TerminalBlock = ({ lines }: { lines: { text: string; type?: 'cmd' | 'output' | 'comment' | 'success' }[] }) => (
  <div className="my-6 rounded-lg overflow-hidden border border-slate-700 bg-[#1e1e1e] shadow-2xl font-mono text-sm leading-relaxed">
      <div className="bg-[#2d2d2d] px-4 py-2 text-xs text-slate-400 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-2">zsh — Terminal</span>
      </div>
      <div className="p-4 space-y-1">
          {lines.map((line, i) => (
              <div key={i} className={`${
                  line.type === 'cmd' ? 'text-white font-bold' : 
                  line.type === 'comment' ? 'text-slate-500' : 
                  line.type === 'success' ? 'text-green-400' :
                  'text-slate-300'
              }`}>
                  {line.type === 'cmd' && <span className="text-green-500 mr-2">➜</span>}
                  {line.text}
              </div>
          ))}
      </div>
  </div>
);

// --- Content Sections ---

export const pythonEnv: Section[] = [
  {
    id: 'py-env-why',
    category: '数据分析与可视化',
    group: '0. Python 环境与工具',
    title: '0.1 为什么需要虚拟环境？',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-slate-700">
          在数据分析的学习和工作中，我们经常会遇到<strong>“依赖冲突”</strong>的问题。
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg text-blue-900 border border-blue-100">
           <h4 className="font-bold mb-2 flex items-center gap-2"><AlertCircle size={18}/> 典型场景</h4>
           <ul className="list-disc list-inside space-y-1 text-sm">
               <li>项目 A 需要 <code>pandas 1.3</code>（旧版 API）</li>
               <li>项目 B 需要 <code>pandas 2.0</code>（新版功能）</li>
               <li>如果只有一个系统 Python，装了 2.0 就会把 1.3 覆盖，导致项目 A 报错。</li>
           </ul>
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900">通俗理解：独立的房间</h3>
            <p className="text-slate-600 mt-2">
                虚拟环境就像一个个<strong>独立的房间</strong>。我们在不同的房间里安装不同版本的库，互不干扰。
            </p>
            <EnvRoomVisual />
        </div>
      </div>
    )
  },
  {
    id: 'py-env-anaconda',
    category: '数据分析与可视化',
    group: '0. Python 环境与工具',
    title: '0.2 Anaconda 与 Conda',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-xl font-bold text-slate-900 text-green-700">Anaconda (大礼包)</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                    一个打包好的发行版。安装它，相当于一次性安装了：
                    Python 解释器、conda 管理工具、以及 1000+ 个常用的数据科学包（NumPy, Pandas 等）。
                    <br/><br/>
                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-sm font-bold">适合初学者，省去逐个安装的麻烦。</span>
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 text-blue-700">conda (管家)</h3>
                <p className="text-slate-600 mt-2 leading-relaxed">
                    一个命令行工具（Package & Environment Manager）。
                    <br/>它的作用是：
                    <ul className="list-disc list-inside mt-1 ml-2">
                        <li>创建/删除 虚拟环境</li>
                        <li>安装/卸载 软件包</li>
                    </ul>
                </p>
            </div>
        </div>

        <AnacondaVisual />
      </div>
    )
  },
  {
    id: 'py-env-cmd',
    category: '数据分析与可视化',
    group: '0. Python 环境与工具',
    title: '0.3 虚拟环境管理命令',
    type: 'lesson',
    content: (
      <div className="space-y-8">
        <p className="text-slate-700">
            打开终端 (Windows 下是 Anaconda Prompt，Mac 下是 Terminal)，尝试以下命令。
        </p>

        <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 border-l-4 border-indigo-500 pl-3">1. 创建环境</h3>
            <p className="text-slate-600 mb-2 text-sm">创建一个名为 <code>env-data</code> 的环境，指定 Python 版本为 3.10</p>
            <TerminalBlock lines={[
                { type: 'cmd', text: 'conda create -n env-data python=3.10' },
                { type: 'output', text: 'Collecting package metadata (current_repodata.json): done' },
                { type: 'output', text: 'Solving environment: done' },
                { type: 'comment', text: '# 系统询问是否安装' },
                { type: 'output', text: 'Proceed ([y]/n)? y' },
                { type: 'success', text: 'Successfully created env: env-data' }
            ]} />
        </div>

        <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 border-l-4 border-indigo-500 pl-3">2. 激活/退出 环境</h3>
            <p className="text-slate-600 mb-2 text-sm">注意命令行提示符的变化。</p>
            <TerminalBlock lines={[
                { type: 'comment', text: '# 激活前是 base 环境' },
                { type: 'cmd', text: '(base) conda activate env-data' },
                { type: 'comment', text: '# 激活后变成 env-data' },
                { type: 'cmd', text: '(env-data) python --version' },
                { type: 'output', text: 'Python 3.10.12' },
                { type: 'comment', text: '# 退出环境' },
                { type: 'cmd', text: '(env-data) conda deactivate' }
            ]} />
        </div>
      </div>
    )
  },
  {
    id: 'py-env-mirror',
    category: '数据分析与可视化',
    group: '0. Python 环境与工具',
    title: '0.4 配置国内镜像源',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <div className="bg-amber-50 p-4 border border-amber-200 rounded-lg text-amber-900">
            <strong>为什么配置镜像？</strong> 官方源在国外，下载速度慢且不稳定。配置国内镜像（如清华源、阿里源）可以飞速提升下载体验。
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. Conda 镜像配置</h3>
            <p className="text-slate-600 mb-2">修改用户目录下的 <code>.condarc</code> 文件。</p>
            <CodeBlock language="yaml" label=".condarc" code={`channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge
  - defaults
show_channel_urls: true`} />
            <p className="text-xs text-slate-500 mt-2">提示：也可以使用命令行 <code>conda config --add channels ...</code> 添加。</p>
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. Pip 镜像配置</h3>
            <p className="text-slate-600 mb-2">
                <strong>临时使用：</strong> <code>pip install numpy -i https://pypi.tuna.tsinghua.edu.cn/simple</code>
            </p>
            <p className="text-slate-600 mb-2">
                <strong>永久配置：</strong> 修改 <code>pip.conf</code> (Mac/Linux) 或 <code>pip.ini</code> (Windows)。
            </p>
            <CodeBlock language="ini" label="pip.conf" code={`[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple`} />
        </div>
      </div>
    )
  },
  {
    id: 'py-env-jupyter',
    category: '数据分析与可视化',
    group: '0. Python 环境与工具',
    title: '0.5 画出第一张图',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
            一切准备就绪！让我们在 Jupyter Notebook 中完成第一次数据可视化。
        </p>

        <div className="space-y-4">
            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">1</div>
                    <div className="w-0.5 h-full bg-slate-200 my-1"></div>
                </div>
                <div className="pb-6">
                    <h4 className="font-bold text-slate-900">安装必要的包</h4>
                    <p className="text-sm text-slate-600 mb-2">确保在激活的环境中运行：</p>
                    <CodeBlock code="conda install numpy matplotlib jupyter" language="bash" />
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">2</div>
                    <div className="w-0.5 h-full bg-slate-200 my-1"></div>
                </div>
                <div className="pb-6">
                    <h4 className="font-bold text-slate-900">启动 Jupyter Notebook</h4>
                    <CodeBlock code="jupyter notebook" language="bash" />
                    <p className="text-sm text-slate-600">
                        浏览器会自动打开 <code>http://localhost:8888</code>。<br/>
                        点击右上角的 <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-0.5 rounded">New</span> 按钮，选择 <strong>Python 3</strong>，新建一个笔记本。
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">3</div>
                </div>
                <div className="pb-6 w-full">
                    <h4 className="font-bold text-slate-900">编写并运行代码</h4>
                    <p className="text-sm text-slate-600 mb-2">
                        在第一个单元格 (Cell) 中输入以下代码，然后按 <span className="font-mono bg-slate-100 px-1 rounded border border-slate-300">Shift + Enter</span> 运行：
                    </p>
                    <CodeBlock code={`import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("My First Plot")
plt.show()`} />
                    <div className="mt-4 bg-white p-4 border border-slate-200 rounded-lg shadow-sm flex items-center justify-center h-48 bg-slate-50">
                        <span className="text-slate-400 italic flex items-center gap-2">
                             <Check size={16} /> 图表将在此处显示 (正弦波)
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
];
