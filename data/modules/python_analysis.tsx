import React from 'react';
import { Section } from '../../types';
import { CodeBlock } from '../../components/CodeBlock';

// Helper for data tables
const DataTable = ({ headers, rows }: { headers: string[], rows: (string | React.ReactNode)[][] }) => (
  <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm bg-white h-full">
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-700 font-semibold">
          <tr>
            {headers.map((h, i) => <th key={i} className="px-4 py-3 border-b border-slate-200 whitespace-nowrap">{h}</th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              {row.map((cell, j) => <td key={j} className="px-4 py-3 text-slate-600 whitespace-nowrap">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const pythonAnalysis: Section[] = [
  {
    id: 'py-analysis-framework',
    category: '数据分析与可视化',
    group: '1. 数据分析基础',
    title: '1.1 数据分析整体框架',
    type: 'lesson',
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-slate-700">
          <strong className="text-indigo-600">数据分析</strong> 不仅仅是跑代码，而是一个从问题出发，经过数据处理、建模，最终回归到商业/实际决策的闭环过程。
        </p>
        
        {/* 流程可视化 */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">数据分析标准流程 (CRISP-DM 简化版)</h3>
          <div className="w-full overflow-x-auto">
            <svg viewBox="0 0 800 160" className="w-[800px] mx-auto">
              {/* Definitions for markers */}
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                </marker>
              </defs>
              
              {/* Nodes */}
              <g transform="translate(50, 50)">
                <rect x="0" y="0" width="100" height="60" rx="8" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                <text x="50" y="35" textAnchor="middle" className="text-xs font-bold fill-indigo-900">1. 定义问题</text>
              </g>
              
              <g transform="translate(170, 50)">
                 <rect x="0" y="0" width="100" height="60" rx="8" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
                 <text x="50" y="35" textAnchor="middle" className="text-xs font-bold fill-slate-700">2. 数据收集</text>
              </g>

              <g transform="translate(290, 50)">
                 <rect x="0" y="0" width="100" height="60" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
                 <text x="50" y="35" textAnchor="middle" className="text-xs font-bold fill-red-900">3. 数据清洗</text>
              </g>

              <g transform="translate(410, 50)">
                 <rect x="0" y="0" width="100" height="60" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
                 <text x="50" y="35" textAnchor="middle" className="text-xs font-bold fill-amber-900">4. 探索(EDA)</text>
              </g>

              <g transform="translate(530, 50)">
                 <rect x="0" y="0" width="100" height="60" rx="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                 <text x="50" y="35" textAnchor="middle" className="text-xs font-bold fill-green-900">5. 建模/分析</text>
              </g>

              <g transform="translate(650, 50)">
                 <rect x="0" y="0" width="100" height="60" rx="8" fill="#f3e8ff" stroke="#9333ea" strokeWidth="2" />
                 <text x="50" y="35" textAnchor="middle" className="text-xs font-bold fill-purple-900">6. 报告/决策</text>
              </g>

              {/* Arrows */}
              <line x1="150" y1="80" x2="168" y2="80" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="270" y1="80" x2="288" y2="80" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="390" y1="80" x2="408" y2="80" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="510" y1="80" x2="528" y2="80" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
              <line x1="630" y1="80" x2="648" y2="80" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2">核心步骤详解</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li>
                        <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold mr-2">Step 1</span>
                        <strong>定义问题</strong>：这是最重要的一步。比如“为什么用户流失？”比“帮我分析下数据”要具体得多。
                    </li>
                    <li>
                        <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-bold mr-2">Step 3</span>
                        <strong>数据清洗</strong>：通常占用 <strong>60%-80%</strong> 的时间。“Garbage In, Garbage Out” (垃圾进，垃圾出)。
                    </li>
                    <li>
                        <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold mr-2">Step 4</span>
                        <strong>EDA (探索性分析)</strong>：在建模前，先画图看数据分布，寻找相关性，发现异常。
                    </li>
                </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-2">常见数据类型</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start">
                        <div className="bg-white border border-slate-200 p-2 rounded mr-3 shadow-sm w-16 text-center shrink-0">
                            <div className="text-xs text-slate-400">Excel</div>
                            <div className="font-mono text-indigo-600 font-bold">.xlsx</div>
                        </div>
                        <div>
                            <div className="font-bold text-slate-700">结构化数据</div>
                            <p className="text-xs">行列表格，最适合 Pandas 处理。</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="bg-white border border-slate-200 p-2 rounded mr-3 shadow-sm w-16 text-center shrink-0">
                            <div className="text-xs text-slate-400">JSON</div>
                            <div className="font-mono text-indigo-600 font-bold">{`{ }`}</div>
                        </div>
                        <div>
                            <div className="font-bold text-slate-700">半结构化数据</div>
                            <p className="text-xs">嵌套结构，常见于 API 返回的数据。</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    )
  },
  {
    id: 'py-cleaning',
    category: '数据分析与可视化',
    group: '1. 数据分析基础',
    title: '1.2 数据清洗实战 (7大场景)',
    type: 'lesson',
    content: (
      <div className="space-y-16">
        <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900 rounded-xl border border-blue-100 shadow-sm">
            <span className="text-4xl mr-4">🧹</span>
            <div>
                <h4 className="font-bold text-lg">数据清洗的重要性</h4>
                <p className="text-sm opacity-90 mt-1">
                    真实数据往往是"脏"的。如果直接分析，会导致结论偏差甚至错误。掌握以下 7 种常见清洗场景，能解决工作中 90% 的数据问题。
                </p>
            </div>
        </div>

        {/* 1. Missing Values */}
        <section className="border-b border-slate-100 pb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm shadow-indigo-200">1</span>
                缺失值 (Missing Values)
            </h3>
            
            <p className="text-slate-600 mb-6 text-lg">
                数据采集失败或用户未填写会导致缺失。在 Python 中通常显示为 <code>NaN</code> (Not a Number) 或 <code>None</code>。
            </p>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">脏数据示例</h4>
                    <DataTable 
                        headers={['ID', 'Name', 'Score', 'Reason']}
                        rows={[
                            ['001', 'Alice', '85', 'Pass'],
                            ['002', 'Bob', <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded">NaN</span>, 'Fail'],
                            ['003', 'Charlie', '92', <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded">None</span>],
                        ]}
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">Python 清洗代码</h4>
                    <CodeBlock code={`# 方案 A: 删除 (dropna)
df_clean = df.dropna()

# 方案 B: 填充 (fillna)
# 用平均值填充数值列
mean_val = df["Score"].mean()
df["Score"] = df["Score"].fillna(mean_val)

# 用特定值填充类别列
df["Reason"] = df["Reason"].fillna("Unknown")`} />
                </div>
            </div>
            
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-700 mb-4">处理效果可视化</h4>
                <img src="/assets/images/generated/clean_missing_values.png" alt="Missing Values" className="w-full h-auto rounded" />
                <p className="text-xs text-center text-slate-500 mt-4 pt-2 border-t border-slate-100">
                    图示：蓝色柱状图显示了填充均值后的数据分布，红色虚线为均值线。
                </p>
            </div>
        </section>

        {/* 2. Duplicate Data */}
        <section className="border-b border-slate-100 pb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm shadow-indigo-200">2</span>
                重复数据 (Duplicate Data)
            </h3>
            
            <p className="text-slate-600 mb-6 text-lg">
                完全相同的行可能是系统错误导致的重复录入。这会导致统计计数（Count/Sum）虚高。
            </p>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">脏数据示例</h4>
                    <DataTable 
                        headers={['Order_ID', 'Product', 'Amount']}
                        rows={[
                            ['ORD-101', 'Laptop', '$1200'],
                            ['ORD-102', 'Mouse', '$20'],
                            ['ORD-101', <span className="text-red-500 font-bold">Laptop</span>, '$1200'],
                            ['ORD-101', <span className="text-red-500 font-bold">Laptop</span>, '$1200'],
                        ]}
                    />
                    <p className="text-xs text-red-500 mt-2">注意：ORD-101 订单重复出现了三次。</p>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">Python 清洗代码</h4>
                    <CodeBlock code={`# 检查重复行数
print(f"重复行数: {df.duplicated().sum()}")

# 删除重复行
# keep='first' 表示保留第一次出现的，删除后面重复的
df.drop_duplicates(keep='first', inplace=True)`} />
                </div>
            </div>
            
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-700 mb-4">处理前后行数对比</h4>
                <img src="/assets/images/generated/clean_duplicates.png" alt="Duplicate Data" className="w-full h-auto rounded max-w-3xl mx-auto" />
            </div>
        </section>

        {/* 3. Outliers */}
        <section className="border-b border-slate-100 pb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm shadow-indigo-200">3</span>
                异常值 (Outliers)
            </h3>
            
            <p className="text-slate-600 mb-6 text-lg">
                数值显著偏离正常范围。可能是录入错误（如多打了个0）或设备故障。
            </p>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">脏数据示例</h4>
                    <DataTable 
                        headers={['ID', 'Age', 'Salary']}
                        rows={[
                            ['U001', '25', '5000'],
                            ['U002', '30', '6000'],
                            ['U003', <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded">200</span>, '5500'],
                            ['U004', '28', <span className="text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded">-100</span>, '4800'],
                        ]}
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">Python 清洗代码</h4>
                    <CodeBlock code={`# 使用 IQR (四分位距) 检测
Q1 = df['Age'].quantile(0.25)
Q3 = df['Age'].quantile(0.75)
IQR = Q3 - Q1

# 定义正常范围 (Boxplot 标准)
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

# 过滤掉异常值
df_clean = df[(df['Age'] >= lower_bound) & (df['Age'] <= upper_bound)]`} />
                </div>
            </div>
            
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-700 mb-4">箱线图检测法</h4>
                <img src="/assets/images/generated/clean_outliers.png" alt="Outliers" className="w-full h-auto rounded" />
                <p className="text-xs text-center text-slate-500 mt-4 pt-2 border-t border-slate-100">
                    图示：箱线图两端的黑色菱形点即为统计学上的异常值。
                </p>
            </div>
        </section>

        {/* 4. Inconsistent Data Formats */}
        <section className="border-b border-slate-100 pb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm shadow-indigo-200">4</span>
                数据格式不一致 (Inconsistent Formats)
            </h3>
            
            <p className="text-slate-600 mb-6 text-lg">
                同一含义的数据使用了不同的写法。最常见于日期、电话号码或地址。
            </p>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">脏数据示例</h4>
                    <DataTable 
                        headers={['ID', 'Join_Date', 'Phone']}
                        rows={[
                            ['001', <span className="text-red-500 font-bold">2023-01-01</span>, '123-4567'],
                            ['002', <span className="text-amber-500 font-bold">01/01/2023</span>, '(123) 4567'],
                            ['003', <span className="text-blue-500 font-bold">2023.01.01</span>, '1234567'],
                        ]}
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">Python 清洗代码</h4>
                    <CodeBlock code={`# 1. 统一日期格式
# pandas 的 to_datetime 非常强大，能自动识别多种格式
df['Join_Date'] = pd.to_datetime(df['Join_Date'])

# 2. 统一字符串格式
# 去除非数字字符，统一电话格式
df['Phone'] = df['Phone'].str.replace(r'\\D', '', regex=True)`} />
                </div>
            </div>
            
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-700 mb-4">格式分布可视化</h4>
                <img src="/assets/images/generated/clean_formats.png" alt="Inconsistent Formats" className="w-full h-auto rounded max-w-3xl mx-auto" />
            </div>
        </section>

        {/* 5. Inconsistent Categorical Encoding */}
        <section className="border-b border-slate-100 pb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm shadow-indigo-200">5</span>
                类别变量编码不一致 (Categorical Encoding)
            </h3>
            
            <p className="text-slate-600 mb-6 text-lg">
                同一类别用了不同的标签。例如性别列混用了全称和缩写。这会导致分组统计时出现重复的组。
            </p>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">脏数据示例</h4>
                    <DataTable 
                        headers={['ID', 'Name', 'Gender']}
                        rows={[
                            ['001', 'Alice', <span className="text-red-500 font-bold">Female</span>],
                            ['002', 'Bob', <span className="text-amber-500 font-bold">M</span>],
                            ['003', 'Carol', <span className="text-red-500 font-bold">F</span>],
                            ['004', 'Dave', <span className="text-amber-500 font-bold">Male</span>],
                        ]}
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">Python 清洗代码</h4>
                    <CodeBlock code={`# 定义标准映射字典
mapping = {
    'M': 'Male',
    'F': 'Female',
    'Male': 'Male',
    'Female': 'Female'
}

# 使用 map 进行统一替换
df['Gender'] = df['Gender'].map(mapping)`} />
                </div>
            </div>
            
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-700 mb-4">统一前后的类别统计</h4>
                <img src="/assets/images/generated/clean_encoding.png" alt="Categorical Encoding" className="w-full h-auto rounded" />
            </div>
        </section>

        {/* 6. Inconsistent Data Range */}
        <section className="border-b border-slate-100 pb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm shadow-indigo-200">6</span>
                数据值范围不一致 (Inconsistent Range)
            </h3>
            
            <p className="text-slate-600 mb-6 text-lg">
                不同来源的数据量级不同。例如“满意度”评分，有的来源是 0-1 分，有的是 0-100 分。如果不处理直接混合，0-1 的数据会被忽略。
            </p>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">脏数据示例</h4>
                    <DataTable 
                        headers={['Source', 'Satisfaction', 'Scale']}
                        rows={[
                            ['App', <span className="text-red-500 font-bold">0.8</span>, '0-1'],
                            ['App', '0.9', '0-1'],
                            ['Web', <span className="text-blue-500 font-bold">85</span>, '0-100'],
                            ['Web', '92', '0-100'],
                        ]}
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">Python 清洗代码</h4>
                    <CodeBlock code={`# 归一化 (Normalization): 统一映射到 0-1 之间
# 公式: (x - min) / (max - min)

def normalize_score(row):
    if row['Score'] > 1:  # 假设大于1的是百分制
        return row['Score'] / 100
    return row['Score']

df['Score_Norm'] = df.apply(normalize_score, axis=1)`} />
                </div>
            </div>
            
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-700 mb-4">不同量级的数据分布</h4>
                <img src="/assets/images/generated/clean_range.png" alt="Data Range" className="w-full h-auto rounded" />
            </div>
        </section>

        {/* 7. Redundant or Invalid Categories */}
        <section className="pb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm shadow-indigo-200">7</span>
                无效或冗余类别 (Invalid Categories)
            </h3>
            
            <p className="text-slate-600 mb-6 text-lg">
                某些分类可能是拼写错误，或者分类太细导致统计意义不大。需要进行合并或修正。
            </p>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">脏数据示例</h4>
                    <DataTable 
                        headers={['ID', 'Product', 'Category']}
                        rows={[
                            ['001', 'TV', 'Electronics'],
                            ['002', 'T-Shirt', 'Clothing'],
                            ['003', 'Radio', <span className="text-red-500 font-bold">Elec.</span>],
                            ['004', 'Sofa', <span className="text-amber-500 font-bold">Furniture (X-99)</span>],
                        ]}
                    />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-700 mb-2">Python 清洗代码</h4>
                    <CodeBlock code={`# 1. 修正拼写错误
df['Category'] = df['Category'].replace('Elec.', 'Electronics')

# 2. 合并小众/无效类别为 'Other'
valid_cats = ['Electronics', 'Clothing', 'Home']
# ~ 表示取反，即"不在有效列表中的"
df.loc[~df['Category'].isin(valid_cats), 'Category'] = 'Other'`} />
                </div>
            </div>
            
            <div className="w-full bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-slate-700 mb-4">类别频数统计</h4>
                <img src="/assets/images/generated/clean_invalid.png" alt="Invalid Categories" className="w-full h-auto rounded max-w-3xl mx-auto" />
            </div>
        </section>

      </div>
    )
  },
  {
    id: 'py-pandas-basics',
    category: '数据分析与可视化',
    group: '1. 数据分析基础',
    title: '1.3 Pandas 表格分析',
    type: 'lesson',
    content: (
      <div className="space-y-10">
        <div className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-fuchsia-50 text-purple-900 rounded-xl border border-purple-100 shadow-sm">
            <span className="text-4xl mr-4">🐼</span>
            <div>
                <h4 className="font-bold text-lg">Pandas: 数据分析的瑞士军刀</h4>
                <p className="text-sm opacity-90 mt-1">
                    下面用“能马上上手”的方式介绍 <strong>pandas 的主要用法</strong>，并配上完整实例代码。建议在 Jupyter Notebook 或 VS Code 中边看边跑代码。
                </p>
            </div>
        </div>

        {/* 1. Pandas Intro */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">一、pandas 是干嘛用的？</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
                pandas 主要解决“表格数据”的问题——类似 Excel 表：
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4 ml-4">
                <li><strong>行</strong>：一条条记录（订单、学生、传感器读数…）</li>
                <li><strong>列</strong>：不同字段（时间、姓名、温度…）</li>
            </ul>
            <p className="text-slate-700 mb-4">两大核心数据结构：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="text-indigo-600">Series</strong>
                    <p className="text-sm text-slate-600 mt-1">一维，有索引的序列（像“表格的一列”）</p>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <strong className="text-indigo-600">DataFrame</strong>
                    <p className="text-sm text-slate-600 mt-1">二维表格（多列 Series 拼在一起，是最常用的）</p>
                </div>
            </div>
            <CodeBlock code={`import pandas as pd`} />
        </section>

        {/* 2. Series */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">二、Series：一维带标签的数据</h3>
            
            <h4 className="font-bold text-slate-700 mb-2 mt-6">1. 创建 Series</h4>
            <CodeBlock code={`import pandas as pd

# 由列表创建，自动给索引 0,1,2...
s = pd.Series([10, 20, 30])    
print(s)

# 自定义索引
s2 = pd.Series([10, 20, 30], index=['A', 'B', 'C'])
print(s2)`} />
            
            <h4 className="font-bold text-slate-700 mb-2 mt-6">2. Series 的常用操作</h4>
            <CodeBlock code={`print(s2['A'])      # 按标签取值
print(s2.sum())     # 求和
print(s2.mean())    # 平均值
print(s2.max())     # 最大值
print(s2[s2 > 10])  # 条件筛选`} />
        </section>

        {/* 3. DataFrame */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">三、DataFrame：pandas 的核心表格结构</h3>
            
            <h4 className="font-bold text-slate-700 mb-2 mt-6">1. 手动创建一个小表</h4>
            <CodeBlock code={`data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [18, 20, 19],
    '成绩': [85, 92, 78]
}

df = pd.DataFrame(data)
print(df)`} />
            <div className="mt-4 mb-6">
                <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">DataFrame 结构示意</h5>
                <img src="/assets/images/generated/pandas_dataframe.png" alt="Pandas DataFrame Structure" className="w-full max-w-2xl h-auto rounded shadow-sm border border-slate-100" />
            </div>

            <h4 className="font-bold text-slate-700 mb-2 mt-6">2. 从 CSV 读数据（最常用）</h4>
            <div className="flex items-center gap-4 mb-4">
                <p className="text-slate-600 text-sm">假设有 <code>data.csv</code>：</p>
                <a href="/assets/files/data.csv" download className="inline-flex items-center px-3 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded hover:bg-indigo-100 transition-colors border border-indigo-200">
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    下载练习 CSV
                </a>
            </div>
            <CodeBlock code={`name,age,score
Tom,18,88
Jerry,19,92
Spike,20,81`} />
            <p className="text-slate-600 mb-2 mt-2 text-sm">读取：</p>
            <CodeBlock code={`df = pd.read_csv('data.csv')
print(df.head())       # 看前5行`} />
        </section>

        {/* 4. Info/Describe */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">四、快速了解数据：info / describe</h3>
            <p className="text-slate-600 mb-4">常用于“数据分析开头 5 分钟看数据长啥样”。</p>
            <CodeBlock code={`print(df.head())        # 前5行
print(df.tail())        # 后5行
print(df.info())        # 每列类型、非空数量
print(df.describe())    # 数值列的统计信息（均值、标准差、分位数）`} />
        </section>

        {/* 5. Selection */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">五、选择行和列（索引与切片）</h3>
            
            <h4 className="font-bold text-slate-700 mb-2 mt-6">1. 选择列</h4>
            <CodeBlock code={`df['年龄']          # 得到一个 Series
df[['姓名', '成绩']] # 得到一个新的 DataFrame`} />

            <h4 className="font-bold text-slate-700 mb-2 mt-6">2. 按行索引：loc（按标签）、iloc（按位置）</h4>
            <div className="flex flex-col gap-6 mb-4">
                <CodeBlock code={`# loc：行标签，列标签
df.loc[0]                  # 第0行
df.loc[0, '姓名']          # 第0行“姓名”列
df.loc[:, ['姓名', '成绩']] # 所有行，部分列

# iloc：纯整数位置
df.iloc[0]                 # 第1行
df.iloc[0:2]               # 第1~2行（不含第3行）
df.iloc[0, 1]              # 第1行第2列`} />
                <div>
                     <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">选择操作可视化</h5>
                     <img src="/assets/images/generated/pandas_selection.png" alt="Pandas Selection" className="w-full h-auto rounded shadow-sm border border-slate-100" />
                </div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-4">
                <p className="text-amber-700 font-bold">初学建议：记住 <code>loc</code> 用“名字”，<code>iloc</code> 用“数字位置”。</p>
            </div>

            <h4 className="font-bold text-slate-700 mb-2 mt-6">3. 条件筛选（非常常用）</h4>
            <div className="flex flex-col gap-6">
                <CodeBlock code={`# 年龄大于18岁的同学
df[df['年龄'] > 18]

# 年龄>18 且 成绩>=90
df[(df['年龄'] > 18) & (df['成绩'] >= 90)]

# 姓名在给定列表中
df[df['姓名'].isin(['张三', '王五'])]`} />
                 <div>
                     <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">筛选操作可视化</h5>
                     <img src="/assets/images/generated/pandas_filter.png" alt="Pandas Filter" className="w-full h-auto rounded shadow-sm border border-slate-100" />
                </div>
            </div>
        </section>

        {/* 6. Add/Modify/Delete */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">六、增加 / 修改 / 删除列</h3>
            <CodeBlock code={`# 1. 新增列
df['是否及格'] = df['成绩'] >= 60
df['总分'] = df['成绩'] + 5   # 举例：平时分+5

# 2. 修改列（在原列上算）
df['年龄'] = df['年龄'] + 1   # 都加一岁

# 3. 删除列
df = df.drop(columns=['总分'])   # 删除列后返回新 DataFrame
# 或就地删除
df.drop(columns=['总分'], inplace=True)`} />
        </section>

        {/* 7. Missing Values */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">七、缺失值处理（NaN）</h3>
            <p className="text-slate-600 mb-4">真实数据经常会有缺失值，用 <code>NaN</code> 表示。</p>
            <CodeBlock code={`import numpy as np
df = pd.DataFrame({
    'name': ['A', 'B', 'C', 'D'],
    'score': [90, np.nan, 85, np.nan]
})

# 1. 检查缺失
df.isna()          # 每个位置 True/False
df.isna().sum()    # 每列缺失个数

# 2. 删除含缺失值的行
df_drop = df.dropna()       # 默认：只要有NaN那行就删

# 3. 用指定值填充
df_fill0 = df.fillna(0)     # 全部缺失补0

# 只对某一列，用均值填充
mean_score = df['score'].mean()
df['score'] = df['score'].fillna(mean_score)`} />
        </section>

        {/* 8. Groupby */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">八、分组聚合（groupby）</h3>
            <p className="text-slate-600 mb-4">这是数据分析中最强的功能之一。例如：按班级统计平均成绩。</p>
            <CodeBlock code={`data = {
    '班级': ['一班', '一班', '二班', '二班', '二班'],
    '姓名': ['张三', '李四', '王五', '赵六', '钱七'],
    '成绩': [80, 90, 70, 85, 88]
}
df = pd.DataFrame(data)

# 按班级分组，求成绩平均值
grouped = df.groupby('班级')['成绩'].mean()
print(grouped)

# 多个统计指标
df.groupby('班级')['成绩'].agg(['mean', 'max', 'min', 'count'])`} />
        </section>

        {/* 9. Sorting */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">九、排序</h3>
            <CodeBlock code={`# 按成绩从高到低排
df_sorted = df.sort_values(by='成绩', ascending=False)

# 多列排序：先班级，再成绩
df_sorted2 = df.sort_values(by=['班级', '成绩'], ascending=[True, False])`} />
        </section>

        {/* 10. Visualization */}
        <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">十、简单可视化：用 pandas 直接画图</h3>
            <p className="text-slate-600 mb-4">pandas 基于 matplotlib，可以直接对 Series / DataFrame 调 <code>plot</code>。</p>
            <CodeBlock code={`import matplotlib.pyplot as plt

# 假设 df 里有 日期 和 销量 两列
df = pd.DataFrame({
    '日期': pd.date_range('2025-01-01', periods=7),
    '销量': [10, 12, 9, 15, 20, 18, 25]
})

# 把日期设为索引，画折线图
df = df.set_index('日期')
df['销量'].plot(kind='line')     # kind='bar' 就是条形图

plt.title('一周销量变化')
plt.ylabel('销量')
plt.show()`} />
        </section>

        {/* 11. Complete Example */}
        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">十一、完整示例：从 CSV 到分析再到画图</h3>
            <p className="text-slate-600 mb-4">目标：读取 sales.csv，计算每天总销售额，并画图。</p>
            <CodeBlock code={`import pandas as pd
import matplotlib.pyplot as plt

# 1. 读数据
# df = pd.read_csv('sales.csv') 
# 这里模拟数据方便你运行
df = pd.DataFrame({
    'date': ['2025-01-01', '2025-01-01', '2025-01-02', '2025-01-02', '2025-01-03', '2025-01-03'],
    'product': ['A', 'B', 'A', 'B', 'A', 'B'],
    'quantity': [10, 8, 12, 7, 9, 11],
    'price': [5.0, 6.0, 5.0, 6.0, 5.0, 6.0]
})

# 2. 新增一列：销售额 = 数量 * 单价
df['amount'] = df['quantity'] * df['price']

# 3. 按日期分组，求每天总销售额
daily = df.groupby('date')['amount'].sum().reset_index()
print(daily)

# 4. 画图
plt.plot(daily['date'], daily['amount'], marker='o')
plt.title('每日总销售额')
plt.xlabel('日期')
plt.ylabel('销售额')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()`} />
        </section>
        
        {/* 12. Summary */}
        <section>
             <h3 className="text-xl font-bold text-slate-900 mb-4">十二、学习路线总结</h3>
             <ul className="space-y-2 text-slate-700 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <li className="flex items-center"><span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">1</span> <strong>认识对象</strong>：Series 和 DataFrame 是什么</li>
                <li className="flex items-center"><span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">2</span> <strong>会读写</strong>：read_csv / to_csv</li>
                <li className="flex items-center"><span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">3</span> <strong>会选数据</strong>：列选择、loc / iloc、条件筛选</li>
                <li className="flex items-center"><span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">4</span> <strong>会算</strong>：新增列、缺失值处理、groupby 聚合、排序</li>
                <li className="flex items-center"><span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3">5</span> <strong>会画</strong>：plot 简单画图</li>
             </ul>
        </section>

      </div>
    )
  },
    {
    id: 'ex-py-cleaning',
    category: '数据分析与可视化',
    group: '1. 数据分析基础',
    title: '练习: 学生成绩清洗',
    type: 'exercise',
    exerciseData: {
      title: '清洗成绩数据 (100+条)',
      description: `**任务背景**：
教务处发来一份 \`student_grades.csv\`，里面包含 100 多名学生的数学和英语成绩。
但是这份数据非常“脏”，存在以下问题（如下图所示）：

1. **重复录入**：部分学生的数据被重复复制了。
2. **性别格式混乱**：有的用“男/女”，有的用“M/F”。
3. **成绩缺失**：部分学生的数学成绩是空的。

![Data Audit](/assets/images/generated/exercise_cleaning_audit.png)

**你的任务**：
1. 读取 CSV 数据。
2. **数据审查**：打印前 5 行、信息摘要 (info) 和缺失值统计。
3. **清洗数据**：
   - 删除重复行。
   - 将性别统一为“男”和“女” (M->男, F->女)。
   - 用数学成绩的**平均分**填充缺失值。
4. **验证结果**：打印清洗后的 info 信息，确保没有缺失值。

**下载数据文件**：
<a href="/assets/files/student_grades.csv" download className="text-indigo-600 font-bold hover:underline">点击下载 student_grades.csv (100+ rows)</a>`,
      initialCode: `import pandas as pd
import numpy as np
import io

# 为了演示方便，这里使用字符串模拟 CSV 文件内容
# 如果你在本地 VS Code 运行，可以直接用: df = pd.read_csv('student_grades.csv')
csv_data = """name,math,english,gender
Student_1,85.0,90.0,男
Student_2,,88.0,M
Student_3,92.0,85.0,女
Student_4,40.0,30.0,F
Student_4,40.0,30.0,F
Student_5,78.0,82.0,Male
Student_6,95.0,92.0,女
Student_7,,75.0,M
Student_8,60.0,65.0,男
Student_9,88.0,80.0,Female
"""

# 1. 读取数据
df = pd.read_csv(io.StringIO(csv_data))

print("--- 原始数据预览 ---")
print(df.head(10))
print("\n--- 数据信息 ---")
print(df.info())

# 2. 开始清洗
# TODO: 删除重复行
# df.drop_duplicates(...)

# TODO: 统一性别 (M->男, F->女, Male->男, Female->女)
# ...

# TODO: 填充缺失值
# ...

# 3. 验证
print("\n--- 清洗后预览 ---")
# print(df.head())
`,
      hints: [
        "删除重复: df.drop_duplicates(inplace=True)",
        "映射字典: {'M': '男', 'F': '女', 'Male': '男', 'Female': '女'}",
        "替换性别: df['gender'] = df['gender'].replace(mapping)",
        "填充缺失: mean_val = df['math'].mean(); df['math'].fillna(mean_val, inplace=True)"
      ],
      solutionCode: `import pandas as pd
import numpy as np
import io

# 模拟数据加载 (本地请用 pd.read_csv('student_grades.csv'))
csv_data = """name,math,english,gender
Student_1,85.0,90.0,男
Student_2,,88.0,M
Student_3,92.0,85.0,女
Student_4,40.0,30.0,F
Student_4,40.0,30.0,F
Student_5,78.0,82.0,Male
Student_6,95.0,92.0,女
Student_7,,75.0,M
Student_8,60.0,65.0,男
Student_9,88.0,80.0,Female
"""
df = pd.read_csv(io.StringIO(csv_data))

# 1. 数据审查
print("--- 清洗前 ---")
print(df.info())
print("缺失值:\n", df.isna().sum())

# 2. 清洗数据

# 2.1 删除重复
df.drop_duplicates(inplace=True)

# 2.2 统一性别
# 定义映射关系
gender_map = {
    'M': '男', 
    'F': '女',
    'Male': '男',
    'Female': '女'
}
df['gender'] = df['gender'].replace(gender_map)

# 2.3 填充缺失值
math_mean = df['math'].mean()
# 使用 round 保留1位小数让数据更好看
df['math'] = df['math'].fillna(round(math_mean, 1))

# 3. 验证结果
print("\n--- 清洗后 ---")
print(df.info())
print("剩余缺失值:", df['math'].isna().sum())
print("性别分布:\n", df['gender'].value_counts())`
    }
  },

    {
    id: 'py-numpy-basics',
    category: '数据分析与可视化',
    group: '2. 核心工具库',
    title: '2.1 NumPy 数组计算',
    type: 'lesson',
    content: (
      <div className="space-y-12">
        <div className="flex items-center p-6 bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-900 rounded-xl border border-teal-100 shadow-sm">
            <span className="text-4xl mr-6">🔢</span>
            <div>
                <h4 className="font-bold text-xl mb-2">NumPy 基础知识总览</h4>
                <p className="text-base opacity-90 leading-relaxed">
                    NumPy (Numerical Python) 是 Python 科学计算生态的核心库之一，几乎所有数据分析、机器学习库（如 pandas、scikit‑learn、TensorFlow）都依赖它。
                </p>
            </div>
        </div>

        {/* 1. Core Concept */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">1</span>
                核心概念：ndarray 与基本属性
            </h3>
            
            <div className="mb-8">
                <h4 className="font-bold text-slate-800 mb-3 text-lg">1.1 ndarray 是什么？</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                    <code>ndarray</code> 是 NumPy 的核心数据结构，表示 <strong>元素类型相同的多维数组</strong>。与 Python 原生 <code>list</code> 相比：
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <li className="bg-slate-50 p-3 rounded border border-slate-100 text-slate-700 text-sm font-medium flex items-center">
                        <span className="text-teal-500 mr-2">⚡️</span> 存储更紧凑、计算更高效
                    </li>
                    <li className="bg-slate-50 p-3 rounded border border-slate-100 text-slate-700 text-sm font-medium flex items-center">
                        <span className="text-teal-500 mr-2">📦</span> 支持多维（1D 向量、2D 矩阵...）
                    </li>
                    <li className="bg-slate-50 p-3 rounded border border-slate-100 text-slate-700 text-sm font-medium flex items-center">
                        <span className="text-teal-500 mr-2">🚀</span> 支持向量化运算和广播
                    </li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-slate-800 mb-3 text-lg">1.2 基本属性</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <CodeBlock code={`import numpy as np

x = np.array([[1, 2, 3],
              [4, 5, 6]])

print(x.ndim)   # 维度数：2
print(x.shape)  # 形状：(2, 3)
print(x.size)   # 元素总数：6
print(x.dtype)  # 数据类型，例如 int64`} />
                    <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                        <h5 className="font-bold text-slate-700 mb-3 border-b border-slate-200 pb-2">属性速查</h5>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex justify-between">
                                <code className="text-teal-700 font-bold">ndim</code>
                                <span>数组的维度（1 = 向量，2 = 矩阵...）</span>
                            </li>
                            <li className="flex justify-between">
                                <code className="text-teal-700 font-bold">shape</code>
                                <span>每一维的长度，组成的元组</span>
                            </li>
                            <li className="flex justify-between">
                                <code className="text-teal-700 font-bold">size</code>
                                <span>数组总元素个数</span>
                            </li>
                            <li className="flex justify-between">
                                <code className="text-teal-700 font-bold">dtype</code>
                                <span>数组中元素的数据类型</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* 2. Creation */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">2</span>
                数组的创建方式
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center"><span className="w-1.5 h-6 bg-teal-500 rounded-full mr-2"></span> 从 Python 列表创建</h4>
                    <CodeBlock code={`# 一维数组
a = np.array([1, 2, 3])

# 二维数组（列表的列表）
b = np.array([[1, 2, 3],
              [4, 5, 6]])`} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center"><span className="w-1.5 h-6 bg-teal-500 rounded-full mr-2"></span> 常用创建函数</h4>
                    <CodeBlock code={`np.zeros((2, 3))        # 2×3，全 0
np.ones((3, 3))         # 3×3，全 1
np.full((2, 2), 7)      # 2×2，全 7
np.eye(4)               # 4×4 单位矩阵`} />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                     <h4 className="font-bold text-slate-800 mb-3 flex items-center"><span className="w-1.5 h-6 bg-teal-500 rounded-full mr-2"></span> 等差 / 等距序列</h4>
                     <CodeBlock code={`np.arange(0, 10, 2)     # [0 2 4 6 8]
np.linspace(0, 1, 5)    # 0 到 1 等分为 5 个点`} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center"><span className="w-1.5 h-6 bg-teal-500 rounded-full mr-2"></span> 随机数组</h4>
                    <CodeBlock code={`np.random.rand(2, 3)            # 0~1 均匀分布
np.random.randn(2, 3)           # 标准正态分布
np.random.randint(0, 10, size=(2, 3))  # 随机整数`} />
                </div>
            </div>
            
            <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center">
                <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">常见创建方式可视化</h4>
                <img src="/assets/images/generated/numpy_creation.png" alt="NumPy Creation" className="w-full max-w-3xl h-auto rounded shadow-sm" />
            </div>
        </section>

        {/* 3. Indexing & Slicing */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">3</span>
                索引与切片 (Indexing & Slicing)
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">3.1 一维数组</h4>
                    <CodeBlock code={`a = np.array([10, 20, 30, 40, 50])

a[0]        # 10
a[-1]       # 50
a[1:4]      # [20 30 40]
a[::2]      # [10 30 50]`} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">3.2 二维数组</h4>
                    <CodeBlock code={`b = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])

b[0, 0]      # 1
b[1]         # 第二行 [4 5 6]
b[:, 0]      # 第一列 [1 4 7]
b[0:2, 1:3]  # 前两行、后两列`} />
                </div>
            </div>
            
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h4 className="font-bold text-indigo-900 mb-3 text-lg">3.3 布尔索引 (Boolean Indexing) - 高频技巧</h4>
                <p className="text-indigo-700 mb-4 text-sm">不用循环，直接用条件筛选出想要的数据。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <CodeBlock code={`a = np.array([1, 2, 3, 4, 5, 6])

mask = a > 3     # [False False False True True True]
a[mask]          # [4 5 6]`} />
                     <CodeBlock code={`# 写在一起更简洁
# 筛选出所有偶数
a[a % 2 == 0]    # [2 4 6]`} />
                </div>
            </div>
        </section>

        {/* 4. Vectorization & Broadcasting */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">4</span>
                向量化运算与广播
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">4.1 向量化运算</h4>
                    <p className="text-slate-600 mb-4 text-sm">NumPy 允许对整个数组进行“元素级运算”，而不需要显式写 for 循环。</p>
                    <CodeBlock code={`a = np.array([1, 2, 3])
b = np.array([10, 20, 30])

a + b           # [11 22 33]
a * b           # [10 40 90]
a ** 2          # [1 4 9]
np.sin(a)       # 对每个元素求正弦`} />
                </div>

                <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">4.2 广播机制 (Broadcasting)</h4>
                    <p className="text-slate-600 mb-4 text-sm">广播用于不同形状数组之间的运算，NumPy 会自动扩展较小的数组。</p>
                    <div className="space-y-4">
                        <CodeBlock code={`A = np.array([[1, 2, 3],
              [4, 5, 6]])
b = np.array([10, 20, 30])

A + b   # b 被“广播”加到了每一行`} />
                    </div>
                </div>
            </div>
            
            <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center">
                <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">广播机制图解</h4>
                <img src="/assets/images/generated/numpy_broadcasting.png" alt="NumPy Broadcasting" className="w-full max-w-2xl h-auto rounded shadow-sm" />
                <p className="text-sm text-slate-500 mt-3">图示：向量 b (1x3) 自动向下扩展，以匹配矩阵 A (2x3) 的形状</p>
            </div>
        </section>

        {/* 5. Statistics */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">5</span>
                常见统计函数
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3">5.1 一维数组统计</h4>
                    <CodeBlock code={`x = np.array([1, 2, 3, 4, 5])

x.sum()      # 15
x.mean()     # 3.0
x.max()      # 5
x.std()      # 标准差`} />
                </div>
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-3">5.2 多维数组按轴聚合 (axis)</h4>
                    <CodeBlock code={`A = np.array([[1, 2, 3],
              [4, 5, 6]])

A.sum(axis=0)   # 按列求和 -> [5 7 9]
A.sum(axis=1)   # 按行求和 -> [6 15]`} />
                </div>
            </div>
        </section>

        {/* 6. Reshape & Concatenate */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">6</span>
                形状变换与拼接
            </h3>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">6.1 Reshape & Flatten</h4>
                    <CodeBlock code={`a = np.arange(12)
b = a.reshape(3, 4)      # 3×4 矩阵
c = a.reshape(-1, 3)     # 自动推算行数

A.flatten()    # 返回拷贝（一维）`} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">6.2 拼接数组</h4>
                    <CodeBlock code={`x = np.array([1, 2, 3])
y = np.array([4, 5, 6])
np.concatenate([x, y])  # [1 2 3 4 5 6]

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6]])

np.vstack([A, B])       # 竖向拼接 -> 3×2
np.hstack([A, B.T])     # 横向拼接 -> 2×3`} />
                </div>
            </div>

            <div className="mt-8 bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center">
                 <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">Reshape 变换示意</h4>
                 <img src="/assets/images/generated/numpy_reshape_2d.png" className="w-full max-w-lg h-auto rounded shadow-sm" />
            </div>
        </section>

        {/* 7. Linear Algebra */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">7</span>
                线性代数与矩阵运算
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">7.1 点积与矩阵乘法</h4>
                    <CodeBlock code={`a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
np.dot(a, b)      # 向量点积：32

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
A @ B             # 矩阵乘法`} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">7.2 常用函数</h4>
                    <CodeBlock code={`np.linalg.det(A)        # 行列式
np.linalg.inv(A)        # 逆矩阵
w, v = np.linalg.eig(A) # 特征值、特征向量`} />
                </div>
            </div>
        </section>

        {/* 8. Relation with List/Pandas */}
        <section className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">8. NumPy 与 list / pandas 的关系</h3>
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
                    <li className="flex flex-col p-3 bg-slate-50 rounded border border-slate-100">
                        <strong className="text-teal-700 mb-1">List → NumPy</strong>
                        <code>np.array(lst)</code>
                        <span className="text-slate-500 text-xs mt-1">为了高性能计算</span>
                    </li>
                    <li className="flex flex-col p-3 bg-slate-50 rounded border border-slate-100">
                        <strong className="text-teal-700 mb-1">NumPy → List</strong>
                        <code>arr.tolist()</code>
                        <span className="text-slate-500 text-xs mt-1">为了通用接口兼容</span>
                    </li>
                    <li className="flex flex-col p-3 bg-slate-50 rounded border border-slate-100">
                        <strong className="text-teal-700 mb-1">Pandas → NumPy</strong>
                        <code>df.values</code>
                        <span className="text-slate-500 text-xs mt-1">获取底层数据</span>
                    </li>
                </ul>
            </div>
        </section>

        {/* 9. Practical Examples */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">9</span>
                高频实战示例
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">9.1 生成正态分布数据并绘制直方图</h4>
                    <CodeBlock code={`import numpy as np
import matplotlib.pyplot as plt

# 1. 生成 1000 个标准正态分布随机数
data = np.random.randn(1000)

# 2. 计算均值和标准差
print("均值:", data.mean())
print("标准差:", data.std())

# 3. 绘制直方图
plt.hist(data, bins=30, density=True, alpha=0.6, color='g')
plt.title('标准正态分布样本直方图')
plt.show()`} />
                </div>

                <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">9.2 简单的数据清洗（异常值处理）</h4>
                    <CodeBlock code={`# 原始温度数据（带异常）
temps = np.array([22.5, 23.0, -5.0, 24.1, 25.3, 61.2, 23.9])

# 1. 合法温度范围 0~60
valid_mask = (temps >= 0) & (temps <= 60)
valid_temps = temps[valid_mask]

print("原始数据:", temps)
print("合法数据:", valid_temps)

# 2. 用合法值均值替换异常值
mean_valid = valid_temps.mean()
clean_temps = temps.copy()
clean_temps[~valid_mask] = mean_valid

print("清洗后数据:", clean_temps)`} />
                </div>
            </div>
        </section>

        {/* 10. Summary */}
        <section className="bg-teal-50 p-8 rounded-xl border border-teal-100">
             <h3 className="text-2xl font-bold text-teal-900 mb-6 text-center">NumPy 核心知识点速记</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-700">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <strong className="block text-teal-700 mb-1">ndarray 属性</strong>
                    shape (形状), dtype (类型), ndim (维度)
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <strong className="block text-teal-700 mb-1">数组创建</strong>
                    np.array, np.arange, np.zeros, np.random
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <strong className="block text-teal-700 mb-1">索引与切片</strong>
                    基础切片 a[1:5], 布尔索引 a[a&gt;0]
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <strong className="block text-teal-700 mb-1">核心优势</strong>
                    向量化运算 (无循环), 广播机制
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <strong className="block text-teal-700 mb-1">统计函数</strong>
                    sum, mean, std, max, argmax
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                    <strong className="block text-teal-700 mb-1">形状变换</strong>
                    reshape, concatenate, vstack, hstack
                </div>
             </div>
        </section>

      </div>
    )
  },];