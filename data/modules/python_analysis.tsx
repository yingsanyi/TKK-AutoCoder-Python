import React from 'react';
import { Section } from '../../types';
import { CodeBlock } from '../../components/CodeBlock';

export const pythonAnalysis: Section[] = [
  {
    id: 'py-analysis-framework',
    category: '数据分析与可视化',
    group: '1. 数据分析基础',
    title: '1.1 数据分析整体框架',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-slate-700">
          <strong className="text-indigo-600">数据分析</strong> = 用系统的方法从数据中提取有意义的信息，用来支持决策、优化、预测。
        </p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">典型过程 (6步法)</h3>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
                <li><strong className="text-slate-900">定义问题</strong>：例如“哪类产品卖得最好？”、“下个月销量预测”。</li>
                <li><strong className="text-slate-900">数据收集</strong>：数据库、Excel、爬虫、API。</li>
                <li><strong className="text-slate-900">数据清洗</strong>：处理缺失值、重复值、异常值（最耗时！）。</li>
                <li><strong className="text-slate-900">数据探索 (EDA)</strong>：用统计量和图表理解数据分布。</li>
                <li><strong className="text-slate-900">建模与评估</strong>：使用统计或机器学习模型。</li>
                <li><strong className="text-slate-900">结果解释与可视化</strong>：产出结论和报表。</li>
            </ol>
        </div>

        <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-bold text-slate-900 mb-3">常见数据类型</h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                    <div className="font-bold text-indigo-600 mb-1">结构化数据</div>
                    <p className="text-sm text-slate-600">Excel、SQL 表格。行列清晰。</p>
                </li>
                <li className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                    <div className="font-bold text-indigo-600 mb-1">非结构化数据</div>
                    <p className="text-sm text-slate-600">文本、图片、音视频。</p>
                </li>
                <li className="bg-white p-4 rounded border border-slate-200 shadow-sm">
                    <div className="font-bold text-indigo-600 mb-1">半结构化数据</div>
                    <p className="text-sm text-slate-600">JSON, XML, Python 字典。</p>
                </li>
            </ul>
        </div>
      </div>
    )
  },
  {
    id: 'py-cleaning',
    category: '数据分析与可视化',
    group: '1. 数据分析基础',
    title: '1.2 数据清洗实战',
    type: 'lesson',
    content: (
      <div className="space-y-8">
        <p className="text-slate-700">
            真实世界的数据往往是“脏”的。清洗数据是分析的第一步。
        </p>

        {/* Missing Values */}
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">1. 缺失值 (NaN)</h3>
            <p className="text-slate-600 mb-2">
                Pandas 使用 <code>NaN</code> (Not a Number) 表示缺失。
            </p>
            <CodeBlock code={`import pandas as pd
import numpy as np

# 创建含缺失值的 DataFrame
df = pd.DataFrame({
    "姓名": ["张三", "李四", "王五"],
    "成绩": [85, np.nan, 92]
})

# 方法 A: 删除含缺失值的行
df_drop = df.dropna()

# 方法 B: 填充 (如用平均值)
df["成绩"] = df["成绩"].fillna(df["成绩"].mean())`} />
        </div>

        {/* Duplicates */}
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">2. 重复数据</h3>
            <CodeBlock code={`# 查找重复行
print(df.duplicated())

# 删除重复行
df_clean = df.drop_duplicates()`} />
        </div>

        {/* Outliers */}
        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">3. 异常值</h3>
            <p className="text-slate-600 mb-2">
                例如薪资字段出现“1000万”（可能是输入错误）。常用 IQR (四分位距) 或 Z-score 处理。
            </p>
            <CodeBlock code={`# 简单过滤：保留年龄在 0-100 之间的数据
valid_df = df[df["年龄"].between(0, 100)]`} />
        </div>
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
      title: '清洗成绩数据',
      description: `模拟一份"脏"数据：
1. 包含重复行
2. "gender" 列格式不统一 ("男"/"M", "女"/"F")
3. "math" 列有缺失值

任务：
1. 删除重复行
2. 将 "M" 映射为 "男", "F" 映射为 "女"
3. 用 math 的平均分填充缺失值
4. 打印处理后的 DataFrame`,
      initialCode: `import pandas as pd
import numpy as np

# 模拟脏数据
data = {
    "name": ["张三", "李四", "王五", "赵六", "赵六"],
    "math": [85, np.nan, 92, 40, 40],
    "english": [90, 88, 85, 30, 30],
    "gender": ["男", "M", "女", "F", "F"]
}
df = pd.DataFrame(data)

print("原始数据:")
print(df)
print("-" * 20)

# 1. 删除重复行
# df = ...

# 2. 统一性别 (使用 map)
gender_map = {"男": "男", "女": "女", "M": "男", "F": "女"}
# df["gender"] = ...

# 3. 填充缺失值 (用 mean)
# math_mean = ...
# df["math"] = ...

print("清洗后:")
print(df)`,
      hints: [
        "删除重复: df.drop_duplicates(inplace=True) 或 df = df.drop_duplicates()",
        "映射: df['gender'].map(gender_map)",
        "填充: df['math'].fillna(value)"
      ],
      solutionCode: `import pandas as pd
import numpy as np

data = {
    "name": ["张三", "李四", "王五", "赵六", "赵六"],
    "math": [85, np.nan, 92, 40, 40],
    "english": [90, 88, 85, 30, 30],
    "gender": ["男", "M", "女", "F", "F"]
}
df = pd.DataFrame(data)

# 1. 删除重复行
df = df.drop_duplicates()

# 2. 统一性别
gender_map = {"男": "男", "女": "女", "M": "男", "F": "女"}
df["gender"] = df["gender"].map(gender_map)

# 3. 填充缺失值
math_mean = df["math"].mean()
df["math"] = df["math"].fillna(math_mean)

print("清洗后:")
print(df)`
    }
  }
];