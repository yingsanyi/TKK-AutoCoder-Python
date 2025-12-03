import React from 'react';
import { Section } from '../../types';
import { CodeBlock } from '../../components/CodeBlock';

export const pythonViz: Section[] = [
  {
    id: 'py-viz-basics',
    category: '数据分析与可视化',
    group: '3. 数据可视化',
    title: '3.1 Matplotlib & Seaborn',
    type: 'lesson',
    content: (
      <div className="space-y-12">
        <div className="flex items-center p-6 bg-gradient-to-r from-indigo-50 to-rose-50 text-indigo-900 rounded-xl border border-indigo-100 shadow-sm">
            <span className="text-4xl mr-6">📊</span>
            <div>
                <h4 className="font-bold text-xl mb-2">Matplotlib 与 Seaborn：数据可视化的双剑客</h4>
                <p className="text-base opacity-90 leading-relaxed">
                    <strong className="text-indigo-700">Matplotlib</strong> 是 Python 最基础的绘图库，灵活但底层；
                    <strong className="text-rose-700">Seaborn</strong> 基于 Matplotlib，更美观且专为统计分析设计。
                    建议配合使用：先用 Seaborn 快速出图，再用 Matplotlib 微调细节。
                </p>
            </div>
        </div>

        {/* 0. Methodology */}
        <section className="bg-indigo-50 rounded-xl border border-indigo-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center">
                <span className="bg-indigo-200 text-indigo-800 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">0</span>
                绘图核心方法论：画布与图层
            </h3>
            <p className="text-indigo-800 mb-6 leading-relaxed">
                在使用 Python 绘图之前，理解 <strong>Figure (画布)</strong> 和 <strong>Axes (坐标系/子图)</strong> 的关系至关重要。这能帮你搞定 90% "图画不出来" 或 "画不到一起" 的问题。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-lg border border-indigo-100 shadow-sm">
                    <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
                        <span className="text-xl mr-2">🖼️</span> Figure (画布)
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                        整个图片的容器，相当于画板。
                    </p>
                    <ul className="text-xs text-slate-500 list-disc list-inside space-y-1">
                        <li>可以包含一个或多个子图 (Axes)</li>
                        <li>控制整体大小 (figsize)、分辨率 (dpi)</li>
                        <li><code>fig = plt.figure()</code></li>
                    </ul>
                </div>
                <div className="bg-white p-5 rounded-lg border border-indigo-100 shadow-sm">
                    <h4 className="font-bold text-indigo-900 mb-2 flex items-center">
                        <span className="text-xl mr-2">📈</span> Axes (坐标系)
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">
                        实际画图的区域，相当于画纸上的一个个格子。
                    </p>
                    <ul className="text-xs text-slate-500 list-disc list-inside space-y-1">
                        <li>包含坐标轴 (Axis)、图例、标题</li>
                        <li>大部分绘图命令都是在 Axes 上操作</li>
                        <li><code>ax.plot()</code>, <code>ax.set_title()</code></li>
                    </ul>
                </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-indigo-100 shadow-sm">
                 <h4 className="font-bold text-indigo-900 mb-3">两种绘图风格对比</h4>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                     <div>
                         <h5 className="text-sm font-bold text-slate-700 mb-2">1. Pyplot 风格 (快速、简单)</h5>
                         <p className="text-xs text-slate-500 mb-2">自动管理 Figure 和 Axes，适合简单单图。</p>
                         <CodeBlock code={`plt.plot(x, y)
plt.title("Title")
plt.show()`} />
                     </div>
                     <div>
                         <h5 className="text-sm font-bold text-slate-700 mb-2">2. 面向对象风格 (推荐、灵活)</h5>
                         <p className="text-xs text-slate-500 mb-2">显式创建对象，适合复杂多图布局。</p>
                         <CodeBlock code={`fig, ax = plt.subplots()
ax.plot(x, y)
ax.set_title("Title")
plt.show()`} />
                     </div>
                 </div>
            </div>
        </section>

        {/* 高级探索分析(Advanced EDA) */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">6</span>
                高级探索分析 (Advanced EDA)
            </h3>
            <div className="space-y-6">
                <p className="text-slate-700">自动化特征分析流程、交互式可视化、统计检验、特征重要性、异常检测与处理。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">交互式可视化 (Plotly)</h4>
                        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                            <li><a className="text-indigo-700 underline" href="/assets/eda/eda_corr_heatmap.html" target="_blank">相关性热力图 (Corr Heatmap)</a></li>
                            <li><a className="text-indigo-700 underline" href="/assets/eda/eda_scatter_matrix.html" target="_blank">散点矩阵 (Scatter Matrix)</a></li>
                            <li><a className="text-indigo-700 underline" href="/assets/eda/eda_distributions.html" target="_blank">分布对比 (Distributions)</a></li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">统计检验 (Statistical Tests)</h4>
                        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                            <li>p值与显著性: t检验(均值差异) / T-test for mean differences</li>
                            <li>置信区间: 均值的95%CI / 95% confidence interval for mean</li>
                            <li>比例差异: 卡方/二项检验 / Chi-square or binomial tests</li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">特征重要性 (Feature Importance)</h4>
                        <p className="text-sm text-slate-700">示例: RandomForest 评估`age/income/spend`等特征对`converted`的影响。</p>
                        <CodeBlock code={`from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nX = df[['age','income','spend','month','dow','spend_per_income']]\ny = df['converted']\nX_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.3, random_state=42)\nrf = RandomForestClassifier(n_estimators=200, random_state=42).fit(X_tr, y_tr)\nimp = pd.Series(rf.feature_importances_, index=X.columns).sort_values(ascending=False)\nprint(imp)`} />
                    </div>
                    <div className="bg-slate-50 p-4 rounded border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">异常检测与处理 (Anomaly Detection)</h4>
                        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                            <li>IQR/Z分数标记异常值；业务判定后过滤或分模型。IQR/Z-score then filter or model.</li>
                            <li>隔离森林(ISOForest)适用于高维异常检测。Isolation Forest for high-dimensional anomalies.</li>
                            <li>处理策略: 标记、替换、分桶、单独建模。Tag/replace/bucket/separate modeling.</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded border border-emerald-200">
                    <p className="text-sm text-emerald-800">参考数据: <a className="underline" href="/assets/files/eda_demo_1000.csv" download>eda_demo_1000.csv</a> · 字段说明: <a className="underline" href="/assets/dicts/eda_demo_1000.md">eda_demo_1000.md</a></p>
                </div>
            </div>
        </section>

        {/* 类型图像详解 */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">4.x</span>
                类型图像详解（适用场景 / 数据要求 / 最佳实践 / 常见错误 / 行业示例）
            </h3>
            <p className="text-slate-600 mb-4 text-sm">提供基础版(快速上手: Matplotlib/Seaborn)与进阶版(交互增强: Plotly)。BASIC vs ADVANCED implementations available.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Line */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">折线图 Line</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 时间序列趋势(销量/温度/活跃用户)。Use for time trends.</li>
                        <li>数据要求: `date`(时间) + `y`数值，可含类别分组。Data: datetime + numeric.</li>
                        <li>最佳实践: 使用标记点、合理平滑、避免过度网格；配色高对比。Markers, smoothing prudently.</li>
                        <li>常见错误: 类别过多导致拥挤；轴范围误导；忽略季节性。Too many lines; misleading axes.</li>
                        <li>行业示例: 股票走势、门店客流、服务器请求数、转化率、温湿度。</li>
                    </ul>
                </div>
                {/* Bar */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">柱状图 Bar</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 类别对比(部门业绩/渠道表现)。Category comparisons.</li>
                        <li>数据要求: `category` + `value`，支持分组/堆叠。Data: categorical + numeric.</li>
                        <li>最佳实践: 一致零基线；标签旋转防遮挡；排序突出重点。Zero baseline; rotate labels; sort.</li>
                        <li>常见错误: 非零基线夸大差异；类别过多；颜色误导。Non-zero baseline; too many bars.</li>
                        <li>行业示例: 销售渠道对比、品类毛利、国家人口、KPI达成率。</li>
                    </ul>
                </div>
                {/* Scatter */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">散点图 Scatter</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 两数值关系/聚类/异常值。Relations/clusters/outliers.</li>
                        <li>数据要求: `x`,`y`数值，可`hue/size/style`分类。Numeric with optional categories.</li>
                        <li>最佳实践: 透明度减遮挡；回归线辅助；限制点大小。Alpha; regression; size limits.</li>
                        <li>常见错误: 过度标注；坐标缩放误导；点重叠未处理。Over-annotation; scaling issues.</li>
                        <li>行业示例: 广告预算vs转化、身高体重、价格vs评分、风速vs发电。</li>
                    </ul>
                </div>
                {/* Heatmap */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">热力图 Heatmap</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 相关性矩阵/地理热度/时段热度。Correlations/geo/time grids.</li>
                        <li>数据要求: 数值矩阵或透视表。Numeric matrix/pivot.</li>
                        <li>最佳实践: 双向标注、颜色条、居中文本、合理色盘。Labels; colorbar; colormap.</li>
                        <li>常见错误: 颜色含义未说明；范围不一致；过度饱和。Unclear scales; inconsistent ranges.</li>
                        <li>行业示例: 特征相关性、班级出勤、网站时段PV、城市热度。</li>
                    </ul>
                </div>
                {/* Histogram */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">直方图 Histogram</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 分布形状/集中趋势/长尾。Distribution shape.</li>
                        <li>数据要求: 单数值列，可叠加类别。Single numeric column.</li>
                        <li>最佳实践: 合理`bins`；叠加KDE；标注均值中位数。Bins; KDE; mean/median.</li>
                        <li>常见错误: bins过大或过小；比较时轴不一致。Bad binning; inconsistent axes.</li>
                        <li>行业示例: 考试成绩、订单金额、会话时长、用户年龄。</li>
                    </ul>
                </div>
                {/* Box/Violin */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">箱线/小提琴 Box/Violin</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 组间分布对比/稳定性。Group distribution comparison.</li>
                        <li>数据要求: 分类`x` + 数值`y`。Category + numeric.</li>
                        <li>最佳实践: 显示四分位与异常点；增加样本数提示。Quartiles/outliers; sample sizes.</li>
                        <li>常见错误: 类别样本极不均衡；尺度混乱。Imbalanced groups; scale issues.</li>
                        <li>行业示例: 品类利润、渠道转化、城市房价分布、响应时间。</li>
                    </ul>
                </div>
                {/* Area/Stacked */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">面积/堆叠 Area/Stacked</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 构成随时间变化。Composition over time.</li>
                        <li>数据要求: 时间 + 多数值序列。Time + multiple series.</li>
                        <li>最佳实践: 累积占比显示；重点区域标记。Cumulative proportions; annotations.</li>
                        <li>常见错误: 总量变化被忽视；颜色相近难区分。Ignoring totals; indistinguishable colors.</li>
                        <li>行业示例: 渠道占比、能耗构成、媒体分发占比、预算分配。</li>
                    </ul>
                </div>
                {/* Pie/Donut */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">饼/环形 Pie/Donut</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 少类别占比(≤6)。Few categories proportion.</li>
                        <li>数据要求: 类别 + 数值。Category + value.
                        </li>
                        <li>最佳实践: 排序/合并小类为Other；标注百分比。Sort; other bucket; % labels.</li>
                        <li>常见错误: 类别过多；扇区面积误读。Too many slices; area misread.</li>
                        <li>行业示例: 成本构成、用户来源、设备占比、产品结构。</li>
                    </ul>
                </div>
                {/* Radar */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">雷达图 Radar</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 多维指标对比(同量纲)。Multivariate metric comparison.</li>
                        <li>数据要求: 多指标数值(归一化)。Multiple normalized metrics.</li>
                        <li>最佳实践: 指标顺序一致；边界闭合；图例清晰。Consistent order; closed path.</li>
                        <li>常见错误: 不同量纲直接比较；过多系列。Mixed scales; too many series.</li>
                        <li>行业示例: 产品性能、车型评估、运营评分、安全评分。</li>
                    </ul>
                </div>
                {/* Sankey */}
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">桑基图 Sankey</h4>
                    <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                        <li>适用场景: 来源→去向流量/成本/能量。Flows and allocations.</li>
                        <li>数据要求: `source`,`target`,`value`，可分渠道/时间。Source/target/value.</li>
                        <li>最佳实践: 保持合计一致；颜色语义化；分层布局。Conservation; semantic colors.</li>
                        <li>常见错误: 数值负正混乱；节点过多；流向不闭合。Sign errors; too many nodes.</li>
                        <li>行业示例: 收入分配、用户路径、供应链流向、能耗流。</li>
                    </ul>
                </div>
            </div>
            <p className="text-xs text-slate-500 mt-4">兼容 Matplotlib / Seaborn / Plotly；建议按复杂度选择库。Compatible with Matplotlib/Seaborn/Plotly.</p>
        </section>

        {/* 0.x Methodology — 标注示意与图层演示 */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">0.x</span>
                画布构成与图层叠加（示意图）
            </h3>
            <div className="space-y-8">
                <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                    <img src="/assets/images/generated/figure_canvas_labeled.png" className="w-full max-w-3xl rounded shadow-sm border border-slate-200" />
                </div>
                <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                    <img src="/assets/images/generated/layer_stack_demo.png" className="w-full max-w-3xl rounded shadow-sm border border-slate-200" />
                </div>
            </div>
        </section>

        {/* 1. Matplotlib Basics */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">1</span>
                Matplotlib 基础用法
            </h3>
            
            <div className="grid grid-cols-1 gap-8">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3 text-lg">1.1 基本模板</h4>
                    <p className="text-slate-600 mb-4 text-sm">
                        这是最标准的绘图起手式。几乎所有的图都遵循这个套路：创建画布 -&gt; 绘图 -&gt; 设置标签 -&gt; 显示。
                    </p>
                    <CodeBlock code={`import matplotlib.pyplot as plt
import numpy as np

# 1. 准备数据
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

# 2. 创建画布 (可选)
plt.figure(figsize=(6, 4))

# 3. 绘图 (折线图)
plt.plot(x, y, label='sin(x)', color='b')

# 4. 设置细节
plt.title('正弦函数')
plt.xlabel('x')
plt.ylabel('y')
plt.legend()
plt.grid(True)

# 5. 显示
plt.show()`} />
                </div>
                <div className="flex flex-col justify-center">
                     <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center">
                        <h4 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">常用图形速览</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                             <div className="text-center">
                                 <img src="/assets/images/generated/viz_line_chart.png" className="w-full rounded shadow-sm border border-slate-200" />
                                 <p className="text-xs mt-2 text-slate-600">折线图 (Line)</p>
                             </div>
                             <div className="text-center">
                                 <img src="/assets/images/generated/viz_bar_plot.png" className="w-full rounded shadow-sm border border-slate-200" />
                                 <p className="text-xs mt-2 text-slate-600">柱状图 (Bar)</p>
                             </div>
                             <div className="text-center">
                                 <img src="/assets/images/generated/viz_scatter_plot.png" className="w-full rounded shadow-sm border border-slate-200" />
                                 <p className="text-xs mt-2 text-slate-600">散点图 (Scatter)</p>
                             </div>
                             <div className="text-center">
                                 <img src="/assets/images/generated/viz_histogram.png" className="w-full rounded shadow-sm border border-slate-200" />
                                 <p className="text-xs mt-2 text-slate-600">直方图 (Hist)</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 2.x 图像元素分析（完整图与标注图） */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-rose-100 text-rose-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">2.x</span>
                图像元素分析与层级归属
            </h3>
            <div className="space-y-8">
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">折线图（完整 vs 标注）</h4>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/line_full.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                        </div>
                        <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/line_annotated.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">散点图（完整 vs 标注）</h4>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/scatter_full.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                        </div>
                        <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/scatter_annotated.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 mb-3">热力图（完整）与雷达图、桑基图</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/heatmap_full.png" className="w-full rounded shadow-sm border border-slate-200" />
                        </div>
                        <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/radar_full.png" className="w-full rounded shadow-sm border border-slate-200" />
                        </div>
                        <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/sankey_full.png" className="w-full rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 2. Seaborn Basics */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-rose-100 text-rose-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">2</span>
                Seaborn 统计绘图 (推荐)
            </h3>
            <p className="text-slate-700 mb-6">
                Seaborn 专为统计数据设计，默认样式更美观，且能自动处理颜色图例。强烈建议<strong>配合 Pandas DataFrame 使用</strong>。
            </p>

            {/* 2.1 Scatter & Line */}
            <div className="mb-10">
                <h4 className="font-bold text-slate-800 mb-4 text-lg border-l-4 border-rose-500 pl-3">2.1 关系图 (Relational Plots)</h4>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <h5 className="font-bold text-slate-700 mb-2">散点图 (Scatter Plot)</h5>
                        <p className="text-sm text-slate-500 mb-2">看两个数值变量的关系，还能用颜色区分类别。</p>
                        <div className="mt-4 bg-white p-4 rounded border border-slate-200">
                            <h6 className="font-bold text-slate-700 mb-2">数据示例（前5行）</h6>
                            <CodeBlock code={`height,weight,gender\n169.4,66.2,男\n175.1,68.0,女\n162.8,60.5,男\n181.2,72.3,女\n168.0,64.1,男`} />
                        </div>
                        <CodeBlock code={`import seaborn as sns
# hue='gender': 按性别自动着色
# style='gender': 按性别自动改变点形状
sns.scatterplot(data=df, x='height', y='weight', 
                hue='gender', style='gender')
plt.title('身高 vs 体重')`} />
                         <div className="mt-4 flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/viz_sns_scatter.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                         </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-700 mb-2">折线图 (Line Plot)</h5>
                        <p className="text-sm text-slate-500 mb-2">看趋势，支持多条线对比。</p>
                        <div className="mt-4 bg-white p-4 rounded border border-slate-200">
                            <h6 className="font-bold text-slate-700 mb-2">数据示例（前7行）</h6>
                            <CodeBlock code={`date,product,sales\n2025-01-01,A,10\n2025-01-02,A,12\n2025-01-03,A,9\n2025-01-04,A,15\n2025-01-05,A,20\n2025-01-06,A,18\n2025-01-07,A,25`} />
                        </div>
                        <CodeBlock code={`sns.lineplot(data=df, x='day', y='sales', 
             hue='product', marker='o')
plt.title('产品销量趋势')`} />
                         <div className="mt-4 flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/viz_sns_line.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                         </div>
                    </div>
                </div>
            </div>

            {/* 2.2 Distribution */}
            <div className="mb-10">
                <h4 className="font-bold text-slate-800 mb-4 text-lg border-l-4 border-rose-500 pl-3">2.2 分布图 (Distribution Plots)</h4>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <h5 className="font-bold text-slate-700 mb-2">直方图 + 密度曲线 (Histplot)</h5>
                        <div className="mt-4 bg-white p-4 rounded border border-slate-200">
                            <h6 className="font-bold text-slate-700 mb-2">数据示例（前5行）</h6>
                            <CodeBlock code={`score\n79.5\n82.3\n77.1\n81.0\n84.2`} />
                        </div>
                        <CodeBlock code={`# kde=True: 显示核密度估计曲线
sns.histplot(data=df, x='score', kde=True, bins=20)
plt.title('分数分布')`} />
                         <div className="mt-4 flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                            <img src="/assets/images/generated/viz_sns_hist.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                         </div>
                    </div>
                    <div>
                        <div className="bg-slate-50 p-4 rounded border border-slate-200">
                            <h5 className="font-bold text-slate-700 mb-2">什么时候看分布？</h5>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                                <li>想知道数据主要集中在哪里（平均水平）</li>
                                <li>看是否有异常值（长尾分布）</li>
                                <li>看是否符合正态分布（很多统计模型的前提）</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2.3 Categorical */}
            <div className="mb-10">
                <h4 className="font-bold text-slate-800 mb-4 text-lg border-l-4 border-rose-500 pl-3">2.3 分类图 (Categorical Plots)</h4>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <h5 className="font-bold text-slate-700 mb-2">箱线图 (Boxplot)</h5>
                        <p className="text-sm text-slate-500 mb-2">对比不同组的分布（中位数、四分位）。</p>
                        <div className="mt-4 bg-white p-4 rounded border border-slate-200">
                            <h6 className="font-bold text-slate-700 mb-2">数据示例（前5行）</h6>
                            <CodeBlock code={`gender,score\n男,78\n女,82\n男,75\n女,88\n男,80`} />
                        </div>
                        <CodeBlock code={`sns.boxplot(data=df, x='gender', y='score')
plt.title('不同性别成绩分布')`} />
                        <div className="mt-4 flex justify-center bg-slate-50 p-4 rounded border border-slate-200">
                            <img src="/assets/images/generated/viz_sns_boxplot.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-700 mb-2">小提琴图 (Violinplot)</h5>
                        <p className="text-sm text-slate-500 mb-2">箱线图的升级版，能看到“胖瘦”（密度）。</p>
                        <div className="mt-4 bg-white p-4 rounded border border-slate-200">
                            <h6 className="font-bold text-slate-700 mb-2">数据示例（前5行）</h6>
                            <CodeBlock code={`gender,score\n男,78\n女,82\n男,75\n女,88\n男,80`} />
                        </div>
                        <CodeBlock code={`sns.violinplot(data=df, x='gender', y='score', 
               inner='quartile')`} />
                        <div className="mt-4 flex justify-center bg-slate-50 p-4 rounded border border-slate-200">
                            <img src="/assets/images/generated/viz_sns_violin.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                </div>
            </div>

             {/* 2.4 Heatmap & Pairplot */}
            <div>
                <h4 className="font-bold text-slate-800 mb-4 text-lg border-l-4 border-rose-500 pl-3">2.4 高级探索 (Advanced EDA)</h4>
                <div className="grid grid-cols-1 gap-10">
                    <div>
                        <h5 className="font-bold text-slate-700 mb-2">相关性热力图 (Heatmap)</h5>
                        <p className="text-sm text-slate-500 mb-2">特征工程必备，一眼看出谁和谁相关。</p>
                        <CodeBlock code={`corr = df.corr()
sns.heatmap(corr, annot=True, cmap='coolwarm')`} />
                        <div className="mt-4 flex justify-center bg-slate-50 p-4 rounded border border-slate-200">
                            <img src="/assets/images/generated/viz_sns_heatmap.png" className="w-full max-w-lg rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-700 mb-2">多变量关系图 (Pairplot)</h5>
                        <p className="text-sm text-slate-500 mb-2">上帝视角，一次看清所有变量的两两关系。</p>
                        <CodeBlock code={`sns.pairplot(df, hue='gender')`} />
                        <div className="mt-4 flex justify-center bg-slate-50 p-4 rounded border border-slate-200">
                            <img src="/assets/images/generated/viz_sns_pairplot.png" className="w-full max-w-3xl rounded shadow-sm border border-slate-200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. Full Case Study */}
        <section className="bg-slate-900 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">🚀</span> 
                完整实战：从数据到洞察
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
                假设你拿到了某产品的销售数据，如何用一套连招快速分析？
            </p>
            
            <div className="space-y-8">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-4">
                        <span className="bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                        <h4 className="text-xl font-bold">准备数据</h4>
                    </div>
                    <CodeBlock code={`import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# 模拟数据
df = pd.DataFrame({
    'date': pd.date_range('2025-01-01', periods=60),
    'product': ['A', 'B', 'C'] * 20,
    'sales': np.random.randint(10, 100, 60),
    'profit': np.random.randint(5, 50, 60)
})`} />
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-4">
                        <span className="bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        <h4 className="text-xl font-bold">看趋势 (Lineplot)</h4>
                    </div>
                    <p className="text-slate-400 mb-2 text-sm">"最近卖得怎么样？"</p>
                    <CodeBlock code={`plt.figure(figsize=(10, 4))
sns.lineplot(data=df, x='date', y='sales', hue='product')
plt.title('各产品销量趋势')
plt.show()`} />
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-4">
                        <span className="bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        <h4 className="text-xl font-bold">看分布与对比 (Boxplot)</h4>
                    </div>
                    <p className="text-slate-400 mb-2 text-sm">"哪个产品发挥最稳定？"</p>
                    <CodeBlock code={`plt.figure(figsize=(6, 4))
sns.boxplot(data=df, x='product', y='profit')
plt.title('各产品利润分布对比')
plt.show()`} />
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center mb-4">
                        <span className="bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                        <h4 className="text-xl font-bold">看相关性 (Heatmap)</h4>
                    </div>
                    <p className="text-slate-400 mb-2 text-sm">"销量越高，利润就越高吗？"</p>
                    <CodeBlock code={`# 只选数值列计算相关性
corr = df[['sales', 'profit']].corr()
sns.heatmap(corr, annot=True, cmap='coolwarm')
plt.title('销量与利润的相关性')
plt.show()`} />
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <h4 className="text-xl font-bold mb-2">Notebook 模板 / Notebook Template</h4>
                    <p className="text-slate-300 mb-3 text-sm">可复现的Jupyter模板，包含清洗→特征→可视化→检验→异常处理→结论。</p>
                    <a href="/assets/notebooks/eda_end_to_end.ipynb" className="inline-block px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-400 text-white text-sm" download>下载：eda_end_to_end.ipynb</a>
                </div>
            </div>
        </section>

        {/* 4. 图表类型扩展 */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">4</span>
                图表类型扩展与适用场景
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">饼图 / 环形图</h4>
                    <p className="text-sm text-slate-500 mb-3">适用少量类别的占比展示；类别过多不推荐。</p>
                    <img src="/assets/images/generated/pie_demo.png" className="w-full rounded shadow-sm border border-slate-200 mb-3" />
                    <img src="/assets/images/generated/donut_demo.png" className="w-full rounded shadow-sm border border-slate-200" />
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">雷达图</h4>
                    <p className="text-sm text-slate-500 mb-3">适用多维指标的综合对比（需同量纲或归一化）。</p>
                    <img src="/assets/images/generated/radar_full.png" className="w-full rounded shadow-sm border border-slate-200" />
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">比例图（堆叠条形 / 面积）</h4>
                    <p className="text-sm text-slate-500 mb-3">适用构成与占比随时间变化的趋势展示。</p>
                    <img src="/assets/images/generated/stacked_bar_demo.png" className="w-full rounded shadow-sm border border-slate-200 mb-3" />
                    <img src="/assets/images/generated/area_demo.png" className="w-full rounded shadow-sm border border-slate-200" />
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200 md:col-span-2 lg:col-span-3">
                    <h4 className="font-bold text-slate-800 mb-2">桑基图（流向）</h4>
                    <p className="text-sm text-slate-500 mb-3">适用来源→去向的流量/成本/能量流关系展示。</p>
                    <div className="flex justify-center">
                        <img src="/assets/images/generated/sankey_full.png" className="w-full max-w-2xl rounded shadow-sm border border-slate-200" />
                    </div>
                </div>
            </div>
        </section>

        {/* 5. 可视化原理与映射 */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">5</span>
                可视化原理：视觉编码与数据映射
            </h3>
            <div className="space-y-8">
                <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                    <img src="/assets/images/generated/encoding_variables.png" className="w-full max-w-3xl rounded shadow-sm border border-slate-200" />
                </div>
                <div className="flex justify-center bg-slate-50 p-4 rounded border border-slate-100">
                    <img src="/assets/images/generated/linear_vs_log.png" className="w-full max-w-3xl rounded shadow-sm border border-slate-200" />
                </div>
            </div>
        </section>

        {/* 6. 动图演示 */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">6</span>
                动图演示：随时间更新的图形
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center bg-slate-50 p-4 rounded border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">折线动态图</h4>
                    <img src="/assets/images/generated/line_animation.gif" className="w-full max-w-xl rounded shadow-sm border border-slate-200" />
                </div>
                <div className="flex flex-col items-center bg-slate-50 p-4 rounded border border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-3">散点演化动态图</h4>
                    <img src="/assets/images/generated/scatter_evolution.gif" className="w-full max-w-xl rounded shadow-sm border border-slate-200" />
                </div>
            </div>
        </section>

        {/* 7. 案例集锦（代码+配图） */}
        <section className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-3 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">7</span>
                案例集锦：10+ 常见场景快速参考
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">1. 日销售趋势</h4>
                    <CodeBlock code={`sns.lineplot(data=df, x='date', y='sales', hue='product')`} />
                    <img src="/assets/images/generated/viz_sns_line.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据（前7行）</h6>
                        <CodeBlock code={`day,product,sales\n2025-01-01,A,10\n2025-01-02,A,12\n2025-01-03,A,9\n2025-01-04,A,15\n2025-01-05,A,20\n2025-01-06,A,18\n2025-01-07,A,25`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_line_sales_120.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_line_sales_120.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">2. 类别占比（环形）</h4>
                    <CodeBlock code={`plt.pie(sizes, labels=labels, autopct='%1.0f%%')`} />
                    <img src="/assets/images/generated/donut_demo.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据</h6>
                        <CodeBlock code={`category,count\nA,45\nB,30\nC,15\nD,10`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_donut_category_txn_400.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_donut_category_txn_400.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">3. 指标雷达对比</h4>
                    <CodeBlock code={`ax=plt.subplot(projection='polar'); ax.plot(angles, values)`} />
                    <img src="/assets/images/generated/radar_full.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据</h6>
                        <CodeBlock code={`metric,A,B\n质量,80,70\n速度,65,70\n稳定,75,80\n易用,70,65\n成本,60,55`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_radar_daily_120.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_radar_daily_120.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">4. 构成比例随时间（面积）</h4>
                    <CodeBlock code={`plt.stackplot(t, y1, y2, labels=['A','B'])`} />
                    <img src="/assets/images/generated/area_demo.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据（前5行）</h6>
                        <CodeBlock code={`date,A,B\n2025-01-01,25.0,20.0\n2025-01-02,28.1,18.6\n2025-01-03,30.2,17.3\n2025-01-04,31.0,16.5\n2025-01-05,32.4,15.8`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_area_comp_150.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_area_comp_150.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">5. 身高体重关系（散点）</h4>
                    <CodeBlock code={`sns.scatterplot(data=df, x='height', y='weight')`} />
                    <img src="/assets/images/generated/viz_sns_scatter.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据（前5行）</h6>
                        <CodeBlock code={`height,weight\n169.4,66.2\n175.1,68.0\n162.8,60.5\n181.2,72.3\n168.0,64.1`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_scatter_hw_300.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_scatter_hw_300.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">6. 分数分布（直方+KDE）</h4>
                    <CodeBlock code={`sns.histplot(data=df, x='score', kde=True, bins=20)`} />
                    <img src="/assets/images/generated/viz_sns_hist.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据（前5行）</h6>
                        <CodeBlock code={`score\n79.5\n82.3\n77.1\n81.0\n84.2`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_hist_scores_1000.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_hist_scores_1000.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">7. 箱线对比（类别稳定性）</h4>
                    <CodeBlock code={`sns.boxplot(data=df, x='product', y='profit')`} />
                    <img src="/assets/images/generated/viz_sns_boxplot.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据（前5行）</h6>
                        <CodeBlock code={`product,profit\nA,35\nB,28\nC,22\nA,40\nB,31`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_box_violin_300.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_box_violin_300.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">8. 相关性热力图</h4>
                    <CodeBlock code={`sns.heatmap(df.select_dtypes(np.number).corr(), annot=True)`} />
                    <img src="/assets/images/generated/heatmap_corr.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据（前5行）</h6>
                        <CodeBlock code={`height,weight,score\n169.4,66.2,79.5\n175.1,68.0,82.3\n162.8,60.5,77.1\n181.2,72.3,81.0\n168.0,64.1,84.2`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_heatmap_corr_300.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_heatmap_corr_300.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">9. 收入流向（桑基）</h4>
                    <CodeBlock code={`from matplotlib.sankey import Sankey; Sankey().add(flows=[...]).finish()`} />
                    <img src="/assets/images/generated/sankey_full.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据</h6>
                        <CodeBlock code={`label,flow\n总收入,100\n成本,-60\n营销,-25\n净利润,-15`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_sankey_flows_raw_300.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_sankey_flows_raw_300.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 p-4 rounded border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-2">10. 构成对比（堆叠条形）</h4>
                    <CodeBlock code={`plt.bar(x, a); plt.bar(x, b, bottom=a)`} />
                    <img src="/assets/images/generated/stacked_bar_demo.png" className="w-full mt-3 rounded shadow-sm border border-slate-200" />
                    <div className="mt-3 bg-white p-3 rounded border border-slate-200">
                        <h6 className="font-bold text-slate-700 mb-2">原始数据</h6>
                        <CodeBlock code={`x,a,b\n0,5,3\n1,6,2\n2,7,4\n3,8,3\n4,6,2`} />
                        <div className="mt-3 flex items-center gap-3 text-sm">
                            <a href="/assets/files/case_stacked_bar_150.csv" className="px-3 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200" download>下载数据 CSV</a>
                            <a href="/assets/dicts/case_stacked_bar_150.md" className="px-3 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200">字段说明</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </div>
    )
  },
  {
    id: 'py-viz-charts',
    category: '数据分析与可视化',
    group: '3. 数据可视化',
    title: '3.2 如何选择图表',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">根据分析目的选择图表是关键。错误的图表会误导读者。</p>
        
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                    <tr>
                        <th className="px-6 py-4 border-b">分析目的</th>
                        <th className="px-6 py-4 border-b">图表类型</th>
                        <th className="px-6 py-4 border-b">应用场景</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-indigo-600">趋势 (Trend)</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                                折线图 (Line Chart)
                            </div>
                        </td>
                        <td className="px-6 py-4">股票走势、气温变化、用户增长</td>
                    </tr>
                    <tr className="bg-slate-50 hover:bg-white transition-colors">
                        <td className="px-6 py-4 font-bold text-indigo-600">对比 (Comparison)</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                                柱状图 (Bar Chart)
                            </div>
                        </td>
                        <td className="px-6 py-4">各部门业绩、不同国家人口</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-indigo-600">结构 (Composition)</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                                饼图 (Pie Chart)
                            </div>
                        </td>
                        <td className="px-6 py-4">市场份额、支出占比（注：类别多时不推荐）</td>
                    </tr>
                    <tr className="bg-slate-50 hover:bg-white transition-colors">
                        <td className="px-6 py-4 font-bold text-indigo-600">关系 (Relationship)</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="12" cy="5" r="1"/></svg>
                                散点图 (Scatter Plot)
                            </div>
                        </td>
                        <td className="px-6 py-4">身高与体重、广告费与销售额</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-indigo-600">分布 (Distribution)</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-2 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                                直方图 (Histogram)
                            </div>
                        </td>
                        <td className="px-6 py-4">考试成绩分布、用户年龄分布</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    )
  },
  {
    id: 'ex-py-project',
    category: '数据分析与可视化',
    group: '3. 数据可视化',
    title: '实战项目: 鸢尾花分析',
    type: 'exercise',
    exerciseData: {
      title: '鸢尾花(Iris)数据集分析',
      description: `使用 Seaborn 内置的 iris 数据集进行分析。
由于环境限制，我们无法直接画图，请计算并打印以下统计信息来模拟分析过程：

1. 加载数据集: sns.load_dataset("iris")
2. 打印数据的基本描述统计信息 (describe)
3. 计算各物种(species)的 "sepal_length" 平均值
4. 计算特征之间的相关系数矩阵 (corr)`,
      initialCode: `import seaborn as sns
import pandas as pd

# 1. 加载数据
# 由于网络限制，这里我们手动创建一部分模拟数据
data = {
    "sepal_length": [5.1, 4.9, 7.0, 6.4, 5.9],
    "sepal_width": [3.5, 3.0, 3.2, 3.2, 3.0],
    "petal_length": [1.4, 1.4, 4.7, 4.5, 5.1],
    "petal_width": [0.2, 0.2, 1.4, 1.5, 1.8],
    "species": ["setosa", "setosa", "versicolor", "versicolor", "virginica"]
}
iris = pd.DataFrame(data)

print("--- 1. 数据预览 ---")
print(iris.head())

# 2. 打印描述统计
# print(iris.describe())

# 3. 按 species 分组，计算 sepal_length 均值
# print(iris.groupby("species")["sepal_length"].mean())

# 4. 计算相关系数矩阵 (排除 species 列)
# print(iris.drop(columns=["species"]).corr())`,
      hints: [
        "描述统计: df.describe()",
        "分组均值: df.groupby('col1')['col2'].mean()",
        "相关系数: df.corr()"
      ],
      solutionCode: `import seaborn as sns
import pandas as pd

# 模拟数据
data = {
    "sepal_length": [5.1, 4.9, 7.0, 6.4, 5.9],
    "sepal_width": [3.5, 3.0, 3.2, 3.2, 3.0],
    "petal_length": [1.4, 1.4, 4.7, 4.5, 5.1],
    "petal_width": [0.2, 0.2, 1.4, 1.5, 1.8],
    "species": ["setosa", "setosa", "versicolor", "versicolor", "virginica"]
}
iris = pd.DataFrame(data)

print("--- 描述统计 ---")
print(iris.describe())

print("\\n--- 各物种花萼长度均值 ---")
print(iris.groupby("species")["sepal_length"].mean())\n\nprint("\\n--- 相关系数矩阵 ---")
# 需要排除非数值列 species
print(iris.drop(columns=["species"]).corr())`
    }
  }
];
