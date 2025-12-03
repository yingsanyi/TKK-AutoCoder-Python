import React from 'react';
import { Section } from '../../types';
import { CodeBlock } from '../../components/CodeBlock';

export const pythonScraper: Section[] = [
  {
    id: 'py-scraper-basics',
    category: '网络爬虫',
    group: '1. 网络爬虫基础',
    title: '1.1 爬虫原理与 Requests',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          <strong className="text-indigo-600">网络爬虫 (Web Crawler)</strong> 是自动获取网页内容的程序。
          它的核心流程通常分为四步：
          <span className="inline-block bg-slate-100 px-2 py-1 rounded text-sm font-mono ml-2">发送请求 → 获取响应 → 解析数据 → 存储数据</span>
        </p>
        
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-amber-900 text-sm">
           <strong>注意：</strong> 本平台的在线运行环境为了安全，通常<strong>不支持</strong>向外部网站发送真实的 HTTP 请求。
           <br/>后续的练习我们将通过解析<strong>本地 HTML 字符串</strong>来模拟爬虫的核心——“解析”环节。
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">1. Requests 库 (理论)</h3>
            <p className="text-slate-600 mb-2">Python 中最流行的 HTTP 库。模拟浏览器发送请求。</p>
            <CodeBlock code={`import requests

# 1. 发送 GET 请求
url = "https://www.example.com"
# 伪装成浏览器 (User-Agent) 是反爬虫的第一步
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)..."
}

response = requests.get(url, headers=headers)

# 2. 检查状态码 (200 表示成功)
if response.status_code == 200:
    print("Success!")
    html_content = response.text  # 获取网页源码
else:
    print("Failed:", response.status_code)`} />
        </div>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">2. 网页结构 (HTML)</h3>
            <p className="text-slate-600 mb-2">网页由标签组成，我们需要根据标签的 <code>id</code> 或 <code>class</code> 来定位数据。</p>
            <CodeBlock language="html" code={`<div class="product-list">
    <div class="item">
        <h2 class="title">iPhone 15</h2>
        <span class="price">¥5999</span>
    </div>
    <div class="item">
        <h2 class="title">MacBook Pro</h2>
        <span class="price">¥12999</span>
    </div>
</div>`} />
        </div>
      </div>
    )
  },
  {
    id: 'py-bs4',
    category: '网络爬虫',
    group: '1. 网络爬虫基础',
    title: '1.2 BeautifulSoup 解析实战',
    type: 'lesson',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700">
            <strong>BeautifulSoup4 (bs4)</strong> 是最适合新手的 HTML 解析库。它可以把复杂的 HTML 文档转换成一个复杂的树形结构，每个节点都是 Python 对象。
        </p>

        <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">常用方法</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                <li><code>soup.find(tag, attrs)</code>: 查找<strong>第一个</strong>符合条件的节点。</li>
                <li><code>soup.find_all(tag, attrs)</code>: 查找<strong>所有</strong>符合条件的节点（返回列表）。</li>
                <li><code>soup.select(css_selector)</code>: 使用 CSS 选择器查找（最强大）。</li>
                <li><code>node.text</code>: 获取标签内的文本。</li>
                <li><code>node['href']</code>: 获取标签的属性（如链接）。</li>
            </ul>

            <CodeBlock code={`from bs4 import BeautifulSoup

html = """
<html>
    <body>
        <h1 id="main-title">今日新闻</h1>
        <div class="news">
            <a href="http://example.com/1">新闻A</a>
            <span class="date">2023-10-01</span>
        </div>
    </body>
</html>
"""

# 1. 创建 soup 对象
soup = BeautifulSoup(html, "html.parser")

# 2. 查找 h1
title = soup.find("h1", id="main-title").text
print(title)  # 输出: 今日新闻

# 3. 查找链接
link = soup.select_one(".news a")["href"]
print(link)   # 输出: http://example.com/1`} />
        </div>
      </div>
    )
  },
  {
    id: 'ex-py-scraper',
    category: '网络爬虫',
    group: '1. 网络爬虫基础',
    title: '练习: 提取商品信息',
    type: 'exercise',
    exerciseData: {
      title: '电商列表解析',
      description: `模拟爬取了一个电商网站的 HTML 源码（已赋值给变量 \`html_doc\`）。
HTML 结构包含多个商品卡片 (\`div class="product-item"\`)。

任务：
1. 导入 BeautifulSoup
2. 解析 HTML
3. 提取所有商品的 **名称 (h3 class="name")** 和 **价格 (span class="price")**
4. 将结果按格式 \`名称: 价格\` 逐行打印出来

HTML 片段示例：
\`\`\`html
<div class="product-item">
    <h3 class="name">机械键盘</h3>
    <span class="price">¥299</span>
</div>
\`\`\``,
      initialCode: `from bs4 import BeautifulSoup

# 模拟获取到的网页源码
html_doc = """
<html>
<head><title>数码商城</title></head>
<body>
    <div id="container">
        <div class="product-item">
            <h3 class="name">Logitech G502</h3>
            <p class="desc">高性能游戏鼠标</p>
            <span class="price">¥399</span>
        </div>
        <div class="product-item">
            <h3 class="name">Keychron K2</h3>
            <p class="desc">蓝牙机械键盘</p>
            <span class="price">¥488</span>
        </div>
        <div class="product-item">
            <h3 class="name">Sony WH-1000XM5</h3>
            <p class="desc">降噪耳机</p>
            <span class="price">¥2499</span>
        </div>
    </div>
</body>
</html>
"""

# 1. 初始化 BeautifulSoup 对象
# soup = ...

# 2. 找到所有商品节点 (find_all 或 select)
# items = ...

# 3. 遍历提取
# for item in items:
#     name = ...
#     price = ...
#     print(f"{name}: {price}")`,
      hints: [
        "初始化: soup = BeautifulSoup(html_doc, 'html.parser')",
        "查找所有卡片: soup.find_all('div', class_='product-item')",
        "在元素内继续查找: item.find('h3', class_='name').text"
      ],
      solutionCode: `from bs4 import BeautifulSoup

html_doc = """
<html>
<head><title>数码商城</title></head>
<body>
    <div id="container">
        <div class="product-item">
            <h3 class="name">Logitech G502</h3>
            <p class="desc">高性能游戏鼠标</p>
            <span class="price">¥399</span>
        </div>
        <div class="product-item">
            <h3 class="name">Keychron K2</h3>
            <p class="desc">蓝牙机械键盘</p>
            <span class="price">¥488</span>
        </div>
        <div class="product-item">
            <h3 class="name">Sony WH-1000XM5</h3>
            <p class="desc">降噪耳机</p>
            <span class="price">¥2499</span>
        </div>
    </div>
</body>
</html>
"""

# 1. 初始化
soup = BeautifulSoup(html_doc, 'html.parser')

# 2. 查找所有商品 div
items = soup.find_all('div', class_='product-item')

print(f"找到 {len(items)} 个商品：\\n")

# 3. 遍历提取
for item in items:
    name = item.find('h3', class_='name').text
    price = item.find('span', class_='price').text
    print(f"{name}: {price}")`
    }
  }
];