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
      <div className="space-y-6">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-amber-900 text-sm">
            <strong>注意：</strong> 本平台的在线编译器主要输出文本结果。
            对于绘图代码，点击“运行”不会显示图片，但代码逻辑是正确的，你可以将其复制到本地 Jupyter Notebook 中查看效果。
        </div>

        <p className="text-slate-700">
            <strong>Matplotlib</strong> 是基础绘图库，<strong>Seaborn</strong> 是基于它的高级封装，更美观、更适合统计分析。
        </p>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Matplotlib 基础</h3>
            <CodeBlock code={`import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

plt.plot(x, y, label="Trend")
plt.title("Sample Plot")
plt.legend()
plt.show()`} />
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Seaborn 进阶</h3>
            <CodeBlock code={`import seaborn as sns
import matplotlib.pyplot as plt

# 绘制箱线图 (Boxplot)
sns.boxplot(data=df, x="Category", y="Value")
plt.show()

# 热力图 (Heatmap) - 用于看相关性
sns.heatmap(df.corr(), annot=True)`} />
        </div>
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
        <p className="text-slate-700">根据分析目的选择图表是关键。</p>
        
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-600 border border-slate-200">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                    <tr>
                        <th className="px-6 py-3 border-b">分析目的</th>
                        <th className="px-6 py-3 border-b">推荐图表</th>
                        <th className="px-6 py-3 border-b">应用场景</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-bold">趋势</td>
                        <td className="px-6 py-4">折线图, 面积图</td>
                        <td className="px-6 py-4">随时间变化的走势 (如股价、气温)</td>
                    </tr>
                    <tr className="bg-slate-50 border-b">
                        <td className="px-6 py-4 font-bold">对比</td>
                        <td className="px-6 py-4">柱状图, 条形图</td>
                        <td className="px-6 py-4">不同类别的大小比较 (如各部门业绩)</td>
                    </tr>
                    <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-bold">结构</td>
                        <td className="px-6 py-4">饼图, 堆积柱状图</td>
                        <td className="px-6 py-4">占比情况 (如市场份额)</td>
                    </tr>
                    <tr className="bg-slate-50 border-b">
                        <td className="px-6 py-4 font-bold">关系</td>
                        <td className="px-6 py-4">散点图, 热力图</td>
                        <td className="px-6 py-4">变量相关性 (如身高与体重)</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-6 py-4 font-bold">分布</td>
                        <td className="px-6 py-4">直方图, 箱线图</td>
                        <td className="px-6 py-4">数据集中与离散程度 (如考试成绩分布)</td>
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
print(iris.groupby("species")["sepal_length"].mean())

print("\\n--- 相关系数矩阵 ---")
# 需要排除非数值列 species
print(iris.drop(columns=["species"]).corr())`
    }
  }
];