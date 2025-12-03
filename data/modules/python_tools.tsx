import React from 'react';
import { Section } from '../../types';
import { CodeBlock } from '../../components/CodeBlock';

export const pythonTools: Section[] = [
  {
    id: 'py-numpy',
    category: '数据分析与可视化',
    group: '2. 核心工具库',
    title: '2.1 NumPy 数组计算',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-700">
            <strong>NumPy</strong> 是 Python 科学计算的基石。它的核心是 <code>ndarray</code>（N维数组）。
        </p>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. 创建数组</h3>
            <CodeBlock code={`import numpy as np

a = np.array([1, 2, 3])                 # 一维
b = np.array([[1, 2, 3], [4, 5, 6]])    # 二维

print(a.shape)  # (3,)
print(b.shape)  # (2, 3)`} />
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. 向量化运算 (重点)</h3>
            <p className="text-slate-600 mb-2">
                NumPy 允许你像操作单个数字一样操作整个数组，无需写 for 循环。
            </p>
            <CodeBlock code={`a = np.array([1, 2, 3])
b = np.array([10, 20, 30])

print(a + b)        # [11 22 33]
print(a * b)        # [10 40 90]
print(np.sqrt(a))   # [1. 1.414 1.732]`} />
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">3. 切片与索引</h3>
            <CodeBlock code={`arr = np.arange(10)  # [0, 1, ..., 9]

print(arr[3:7])    # [3 4 5 6]
print(arr[::-1])   # 倒序 [9 8 ... 0]`} />
        </div>
      </div>
    )
  },
  {
    id: 'py-pandas',
    category: '数据分析与可视化',
    group: '2. 核心工具库',
    title: '2.2 Pandas 表格分析',
    type: 'lesson',
    content: (
      <div className="space-y-8">
        <p className="text-slate-700">
            <strong>Pandas</strong> 提供了 <code>DataFrame</code>，类似于 Excel 表格或 SQL 表。
        </p>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. 创建与查看</h3>
            <CodeBlock code={`import pandas as pd

data = {
    "姓名": ["张三", "李四", "王五"],
    "数学": [85, 78, 92],
    "英语": [90, 88, 80]
}
df = pd.DataFrame(data)

# 查看头部
print(df.head())
# 统计信息
print(df.describe())`} />
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. 筛选与切片</h3>
            <CodeBlock code={`# 选列
df["数学"] 

# 选行 (iloc 按位置)
df.iloc[0:2]  # 前2行

# 条件筛选 (重要!)
high_score = df[df["数学"] >= 90]`} />
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">3. 分组聚合 (GroupBy)</h3>
            <p className="text-slate-600 mb-2">类似 SQL 的 GROUP BY。</p>
            <CodeBlock code={`# 按班级分组算平均分
df.groupby("班级")[["数学", "英语"]].mean()`} />
        </div>
      </div>
    )
  },
  {
    id: 'ex-py-pandas',
    category: '数据分析与可视化',
    group: '2. 核心工具库',
    title: '练习: Pandas 综合操作',
    type: 'exercise',
    exerciseData: {
      title: '分析销售数据',
      description: `已有如下 DataFrame：
   product  region  sales
0  Apple    North   100
1  Banana   North   50
2  Apple    South   120
3  Banana   South   60
4  Apple    East    80

任务：
1. 筛选出 'sales' 大于 80 的所有行
2. 按 'product' 分组，计算每种产品的总销量 (sum)
3. 按 'region' 分组，计算平均销量 (mean)`,
      initialCode: `import pandas as pd

data = {
    "product": ["Apple", "Banana", "Apple", "Banana", "Apple"],
    "region": ["North", "North", "South", "South", "East"],
    "sales": [100, 50, 120, 60, 80]
}
df = pd.DataFrame(data)

# 1. 筛选 sales > 80
# high_sales = ...
# print(high_sales)

# 2. 按产品统计总销量
# product_sales = ...
# print(product_sales)

# 3. 按地区统计平均销量
# region_avg = ...
# print(region_avg)`,
      hints: [
        "筛选: df[df['sales'] > 80]",
        "分组求和: df.groupby('product')['sales'].sum()",
        "分组平均: df.groupby('region')['sales'].mean()"
      ],
      solutionCode: `import pandas as pd

data = {
    "product": ["Apple", "Banana", "Apple", "Banana", "Apple"],
    "region": ["North", "North", "South", "South", "East"],
    "sales": [100, 50, 120, 60, 80]
}
df = pd.DataFrame(data)

# 1. 筛选 sales > 80
high_sales = df[df['sales'] > 80]
print("--- Sales > 80 ---")
print(high_sales)

# 2. 按产品统计总销量
product_sales = df.groupby('product')['sales'].sum()
print("\\n--- Product Total Sales ---")
print(product_sales)

# 3. 按地区统计平均销量
region_avg = df.groupby('region')['sales'].mean()
print("\\n--- Region Average Sales ---")
print(region_avg)`
    }
  }
];