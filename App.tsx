import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, BookOpen, Code2, ChevronRight, ChevronDown, GraduationCap, Home, ArrowRight, Sparkles, Book } from 'lucide-react';
import { sections } from './data';
import { ExerciseArea } from './components/ExerciseArea';

// --- Components ---

const LandingPage = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-slate-50">
    <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-600 text-sm font-medium backdrop-blur-sm mx-auto">
        <Sparkles size={14} className="text-yellow-500" />
        <span>Data Science & Web Scraping</span>
      </div>

      {/* Hero Text */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900" style={{ letterSpacing: '-0.02em' }}>
          TKK <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-600">AutoCoder</span>
        </h1>
        <h2 className="text-2xl font-semibold text-slate-700">Python Edition</h2>
        <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
          从数据获取到可视化报表。<br/>
          零基础掌握 Python 数据分析与爬虫核心技能。
        </p>
      </div>

      {/* CTA Button */}
      <div className="pt-8">
        <button 
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full text-lg font-medium transition-all hover:bg-slate-800 hover:scale-105 hover:shadow-xl active:scale-95"
        >
          开始学习
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-left">
        {[
          { title: '网络爬虫', desc: '学习 Requests 与 BeautifulSoup，抓取互联网数据。' },
          { title: 'Pandas 实战', desc: '像操作 Excel 一样清洗与处理百万级数据。' },
          { title: '数据可视化', desc: '掌握 Matplotlib 与 Seaborn 绘图技巧，洞察数据规律。' },
          { title: '在线运行', desc: '浏览器内直接运行 Python 代码，无需本地配置环境。' }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="pt-12 text-slate-400 text-sm">
        Designed for TKK AutoCoder Python
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Sidebar resizing state
  const [sidebarWidth, setSidebarWidth] = useState(288); // Default 18rem (288px)
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);

  // Get unique categories and groups
  const categories = Array.from(new Set(sections.map(s => s.category)));

  // State for expanded items
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

  const activeSection = sections.find(s => s.id === activeSectionId);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => 
      prev.includes(group) 
        ? prev.filter(g => g !== group) 
        : [...prev, group]
    );
  };

  // Auto-expand the category and group of the active section
  useEffect(() => {
    if (activeSection) {
      setExpandedCategories(prev => {
        if (!prev.includes(activeSection.category)) {
          return [...prev, activeSection.category];
        }
        return prev;
      });
      
      if (activeSection.group) {
        setExpandedGroups(prev => {
          if (!prev.includes(activeSection.group!)) {
            return [...prev, activeSection.group!];
          }
          return prev;
        });
      }
    }
  }, [activeSectionId, activeSection]);

  // Resizing Logic
  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);
  const resize = useCallback((mouseMoveEvent: MouseEvent) => {
    if (isResizing) {
      const newWidth = mouseMoveEvent.clientX;
      if (newWidth > 200 && newWidth < 600) {
        setSidebarWidth(newWidth);
      }
    }
  }, [isResizing]);

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden select-none md:select-auto font-sans">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        ref={sidebarRef}
        style={{ width: isSidebarOpen ? '100%' : undefined }}
        className={`
          fixed inset-y-0 left-0 z-30 bg-[#0f172a] text-slate-300 transform transition-transform duration-200 ease-in-out
          md:relative md:translate-x-0 flex flex-col border-r border-slate-800
          ${isSidebarOpen ? 'translate-x-0 w-[80%]' : '-translate-x-full'}
        `}
      >
        {/* Desktop dynamic width wrapper */}
        <div 
           className="flex flex-col h-full w-full"
           style={{ width: typeof window !== 'undefined' && window.innerWidth >= 768 ? `${sidebarWidth}px` : '100%' }}
        >
            <div className="p-6 border-b border-slate-800 shrink-0 bg-[#0f172a]">
              <h1 className="text-xl font-bold text-white flex items-center gap-2 whitespace-nowrap overflow-hidden tracking-tight">
                <GraduationCap className="text-yellow-500 shrink-0" />
                <span className="truncate">TKK Python</span>
              </h1>
            </div>

            <nav className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
              {/* Home Button */}
              <button
                onClick={() => {
                  setActiveSectionId('home');
                  if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all mb-4
                  ${activeSectionId === 'home' 
                    ? 'bg-yellow-600 text-white shadow-lg shadow-yellow-900/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'}
                `}
              >
                <Home size={16} className="shrink-0" />
                <span>首页</span>
              </button>

              {/* Categories */}
              {categories.map(category => {
                const isCategoryExpanded = expandedCategories.includes(category);
                const categorySections = sections.filter(s => s.category === category);
                const isActiveCategory = activeSection?.category === category;

                // Extract unique groups in this category
                const groups = Array.from(new Set(categorySections.map(s => s.group).filter(Boolean))) as string[];
                const ungroupedSections = categorySections.filter(s => !s.group);

                return (
                  <div key={category} className="mb-1">
                    <button
                      onClick={() => toggleCategory(category)}
                      title={category}
                      className={`
                        w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group
                        ${isActiveCategory ? 'text-slate-100 bg-slate-800/80' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'}
                      `}
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="text-xs font-bold uppercase tracking-wider truncate">{category}</span>
                      </div>
                      {isCategoryExpanded 
                        ? <ChevronDown size={14} className="shrink-0 opacity-50" /> 
                        : <ChevronRight size={14} className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                      }
                    </button>

                    <div className={`
                      overflow-hidden transition-all duration-300 ease-in-out border-l border-slate-800 ml-4
                      ${isCategoryExpanded ? 'max-h-[2000px] opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'}
                    `}>
                      <div className="space-y-0.5 pl-2">
                        
                        {/* Render Groups */}
                        {groups.map(group => {
                            const isGroupExpanded = expandedGroups.includes(group);
                            const groupSections = categorySections.filter(s => s.group === group);
                            
                            return (
                                <div key={group} className="mb-1">
                                    <button
                                        onClick={() => toggleGroup(group)}
                                        className={`
                                            w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm transition-colors
                                            ${isGroupExpanded ? 'text-slate-200' : 'text-slate-500 hover:text-slate-300'}
                                        `}
                                    >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                           {/* UPDATED ICON TO BOOK */}
                                           <Book size={14} className="shrink-0 opacity-70" />
                                           <span className="truncate font-medium text-xs">{group}</span>
                                        </div>
                                        {isGroupExpanded 
                                            ? <ChevronDown size={12} className="shrink-0 opacity-50" /> 
                                            : <ChevronRight size={12} className="shrink-0 opacity-50" />
                                        }
                                    </button>

                                    {/* Sub-sections within group */}
                                    <div className={`
                                        overflow-hidden transition-all duration-200 ease-in-out pl-2 border-l border-slate-800/50 ml-2
                                        ${isGroupExpanded ? 'max-h-[1000px] opacity-100 mt-1' : 'max-h-0 opacity-0'}
                                    `}>
                                        {groupSections.map(section => (
                                            <button
                                                key={section.id}
                                                title={section.title}
                                                onClick={() => {
                                                    setActiveSectionId(section.id);
                                                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                                                }}
                                                className={`
                                                  w-full flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-colors mb-0.5
                                                  ${activeSectionId === section.id 
                                                    ? 'text-yellow-400 bg-yellow-500/10' 
                                                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}
                                                `}
                                            >
                                                {section.type === 'lesson' ? <BookOpen size={12} className="shrink-0 opacity-60" /> : <Code2 size={12} className="shrink-0 opacity-60" />}
                                                <span className="truncate leading-tight text-xs">{section.title}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                        {/* Render Ungrouped Sections */}
                        {ungroupedSections.map(section => (
                          <button
                            key={section.id}
                            title={section.title}
                            onClick={() => {
                              setActiveSectionId(section.id);
                              if (window.innerWidth < 768) setIsSidebarOpen(false);
                            }}
                            className={`
                              w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors
                              ${activeSectionId === section.id 
                                ? 'text-yellow-400 font-medium bg-yellow-500/10' 
                                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'}
                            `}
                          >
                            {section.type === 'lesson' ? <BookOpen size={14} className="shrink-0 opacity-70" /> : <Code2 size={14} className="shrink-0 opacity-70" />}
                            <span className="truncate leading-tight">{section.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>
        </div>

        {/* Drag Handle */}
        <div 
          className="hidden md:block absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-yellow-500/50 transition-colors z-40 active:bg-yellow-500"
          onMouseDown={startResizing}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative bg-white">
        {/* Top Mobile Bar */}
        <header className="md:hidden bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-10 shrink-0">
          <h2 className="font-semibold text-slate-800 truncate pr-4">{activeSection ? activeSection.title : 'TKK AutoCoder'}</h2>
          <button onClick={toggleSidebar} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 shrink-0">
            <Menu size={24} />
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-white scroll-smooth">
          {activeSectionId === 'home' ? (
             <LandingPage onStart={() => {
                setActiveSectionId(sections[0].id);
             }} />
          ) : activeSection ? (
             activeSection.type === 'lesson' ? (
              <div className="max-w-4xl mx-auto p-6 md:p-12 animate-in fade-in duration-500">
                 <div className="mb-10 border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-2 text-yellow-600 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-yellow-50 px-2 py-1 rounded text-yellow-700 border border-yellow-100">
                        {activeSection.category}
                      </span>
                      {activeSection.group && (
                         <>
                            <ChevronRight size={10} className="text-slate-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-2 py-1 rounded text-slate-600 border border-slate-200">
                                {activeSection.group}
                            </span>
                         </>
                      )}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 break-words tracking-tight">{activeSection.title}</h1>
                 </div>
                 
                 <div className="prose prose-slate prose-lg max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight
                    prose-p:text-slate-600 prose-p:leading-8
                    prose-code:text-yellow-600 prose-code:bg-yellow-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                    prose-strong:text-slate-900 prose-strong:font-semibold">
                    {activeSection.content}
                 </div>
  
                 {/* Navigation Footer */}
                 <div className="mt-16 flex justify-between items-center border-t border-slate-100 pt-8">
                    <div className="text-sm text-slate-400 font-medium">
                      TKK AutoCoder Python
                    </div>
                    {(() => {
                      const currentIndex = sections.findIndex(s => s.id === activeSectionId);
                      const nextSection = sections[currentIndex + 1];
                      if (nextSection) {
                        return (
                          <button 
                            onClick={() => setActiveSectionId(nextSection.id)}
                            className="group flex items-center gap-2 pl-4 pr-3 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:pr-2"
                          >
                            下一节: {nextSection.title} 
                            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                          </button>
                        )
                      }
                      return null;
                    })()}
                 </div>
              </div>
            ) : (
              activeSection.exerciseData && <ExerciseArea data={activeSection.exerciseData} />
            )
          ) : (
            <div>Section not found</div>
          )}
        </div>
      </main>
    </div>
  );
}