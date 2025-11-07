# SEO 测试指南

## 测试 robots.txt

在浏览器中访问:
```
http://localhost:3000/robots.txt
```

应该看到:
```
User-agent: *
Allow: /

Sitemap: https://arc-raiders.net/sitemap.xml
...
```

## 测试 sitemap.xml

在浏览器中访问:
```
http://localhost:3000/sitemap.xml
```

应该看到 XML 格式的网站地图,包含所有页面 URL。

## 测试 Meta 标签

### 首页
```
http://localhost:3000/
```

查看页面源代码,检查:
- `<title>` 标签 (40-60 字符)
- `<meta name="description">` 
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:image">`
- `<meta name="twitter:card">`
- `<link rel="canonical">`

### 攻略页面
```
http://localhost:3000/guides
http://localhost:3000/guides/beginner-guide
```

## 测试结构化数据

### 方法 1: 查看源代码
在页面源代码中搜索 `application/ld+json`

### 方法 2: 使用 Google 工具
1. 访问: https://validator.schema.org/
2. 输入页面 URL
3. 点击 "Run Test"

## 测试移动端响应

在 Chrome DevTools 中:
1. 按 F12 打开开发者工具
2. 点击设备图标 (Toggle device toolbar)
3. 选择不同设备进行测试

## SEO 分数测试

### Lighthouse (Chrome)
1. 打开 Chrome DevTools (F12)
2. 切换到 "Lighthouse" 标签
3. 选择 "SEO" 和 "Performance"
4. 点击 "Generate report"

目标分数: **90+**

## 社交媒体分享测试

### Facebook/Open Graph
访问: https://developers.facebook.com/tools/debug/
输入页面 URL,查看预览

### Twitter
访问: https://cards-dev.twitter.com/validator
输入页面 URL,查看卡片预览

## 检查清单

- [ ] robots.txt 可访问
- [ ] sitemap.xml 可访问
- [ ] 所有页面有 canonical URL
- [ ] Meta title 长度 40-60 字符
- [ ] Meta description 长度 150-160 字符
- [ ] Open Graph 标签完整
- [ ] Twitter Card 标签完整
- [ ] 结构化数据验证通过
- [ ] 移动端友好
- [ ] Lighthouse SEO 分数 90+

## 命令行测试

### 检查 sitemap
```bash
curl http://localhost:3000/sitemap.xml
```

### 检查 robots.txt
```bash
curl http://localhost:3000/robots.txt
```

### 检查 Meta 标签
```bash
curl -s http://localhost:3000 | grep -i "<title>"
curl -s http://localhost:3000 | grep -i "description"
curl -s http://localhost:3000 | grep -i "canonical"
```
