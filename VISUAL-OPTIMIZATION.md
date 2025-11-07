# 🎨 视觉样式优化说明

## ✅ 已完成的优化

### 1. 减少过度霓虹效果
- **之前**：强烈的多层霓虹发光，导致视觉疲劳
- **现在**：柔和的阴影效果，仅在关键元素使用淡淡的光晕
- 参考了官方网站 arcraiders.com 的简洁设计风格

### 2. 字体和文字优化
- **标题大小**：从 text-7xl 减少到 text-4xl/text-5xl，更加适中
- **文字颜色**：
  - 主标题：纯白色 `text-white`
  - 正文：灰色 `text-gray-300`
  - 次要文字：`text-gray-400`
- **去除闪烁**：移除了过度的 `neon-text` 类，改用普通文字

### 3. 背景优化
- 添加了 `hero-bg` 类支持背景图片
- 添加了左侧彩虹条纹，仿照官网设计
- 使用渐变叠加层，确保文字可读性

### 4. 按钮样式
新增两种按钮样式，仿照官网：
- **btn-primary**：青色渐变按钮，用于主要操作
- **btn-secondary**：透明边框按钮，用于次要操作

### 5. 卡片样式
- 使用 `card-hover` 类，提供柔和的悬停效果
- 减少边框发光，使用简单的颜色变化
- 更自然的阴影和变换效果

## 📸 如何添加背景图片

### 方法 1：添加自定义背景图片

1. 准备一张背景图片（推荐尺寸：1920x1080 或更大）
2. 将图片命名为 `hero-bg.jpg`
3. 放入 `public` 文件夹：
   ```
   public/
     └── hero-bg.jpg
   ```

### 方法 2：使用在线图片

编辑 `app/globals.css` 中的 `.hero-bg` 类：

```css
.hero-bg {
  background-image: 
    linear-gradient(to bottom, rgba(10, 10, 15, 0.85), rgba(10, 10, 15, 0.95)),
    url('https://your-image-url.com/image.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

### 方法 3：使用游戏截图

可以从官方网站或游戏预告片中截取高质量图片作为背景。

## 🎨 颜色方案

### 主要颜色
- **主背景**：`#0a0a0f` (深黑色)
- **次要背景**：`rgba(10, 10, 15, 0.7)` (半透明黑)
- **主文字**：`#ffffff` (纯白)
- **次要文字**：`#d1d5db` (灰色 300)
- **强调色**：`#00d9ff` (青色) - 用于按钮和链接

### 彩虹条纹（左侧装饰）
```css
#00d9ff (青色)
#00ff9f (绿色)
#ffeb3b (黄色)
#ff9800 (橙色)
#f44336 (红色)
#e91e63 (粉色)
```

## 🔄 对比变化

| 元素 | 之前 | 现在 |
|------|------|------|
| 主标题 | `text-7xl` + 多层霓虹 | `text-5xl` + 纯白色 |
| 正文 | `text-white/80` | `text-gray-300` |
| 按钮 | 霓虹发光 | 渐变 + 柔和阴影 |
| 卡片 | 强发光边框 | 简单悬停效果 |
| 背景 | 纯色渐变 | 支持图片 + 彩虹条纹 |

## 📝 CSS 类使用指南

### 文字样式
```html
<!-- 主标题 -->
<h1 className="text-4xl font-bold text-white">Title</h1>

<!-- 副标题 -->
<h2 className="text-2xl font-bold text-white">Subtitle</h2>

<!-- 正文 -->
<p className="text-gray-300">Body text</p>

<!-- 次要文字 -->
<p className="text-gray-400 text-sm">Secondary text</p>
```

### 按钮
```html
<!-- 主按钮 -->
<button className="btn-primary">Primary Action</button>

<!-- 次要按钮 -->
<button className="btn-secondary">Secondary Action</button>
```

### 卡片
```html
<div className="glass card-hover rounded-xl p-6">
  <h3 className="text-xl font-bold text-white mb-3">Card Title</h3>
  <p className="text-gray-400">Card content...</p>
</div>
```

### 区块背景
```html
<!-- 交替使用不同深度的背景 -->
<section className="py-20 bg-black/30">...</section>
<section className="py-20 bg-black/50">...</section>
```

## 🎯 设计原则

1. **简洁优先**：少即是多，避免过度装饰
2. **可读性**：确保文字清晰易读
3. **层次分明**：使用不同的背景深度区分区块
4. **柔和过渡**：所有动画和效果都使用平滑过渡
5. **性能优化**：减少复杂的阴影和效果

## 🔧 进一步自定义

### 调整按钮颜色
编辑 `app/globals.css` 中的 `.btn-primary`：

```css
.btn-primary {
  background: linear-gradient(135deg, #your-color-1, #your-color-2);
  /* ... */
}
```

### 调整毛玻璃效果
修改 `.glass` 类的透明度：

```css
.glass {
  background: rgba(10, 10, 15, 0.7); /* 调整最后一个数字(0-1) */
  backdrop-filter: blur(12px); /* 调整模糊程度 */
}
```

### 隐藏彩虹条纹
如果不喜欢左侧的彩虹条纹，在 `app/[lang]/page.tsx` 中删除这段代码：

```tsx
<div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 rainbow-stripes"></div>
```

## ✨ 效果预览

刷新页面后，你会看到：
- ✅ 更柔和的文字，不再刺眼
- ✅ 简洁的按钮设计
- ✅ 左侧彩虹装饰条（可选）
- ✅ 支持自定义背景图片
- ✅ 更好的卡片悬停效果
- ✅ 整体更加专业和现代的外观

所有改动都已生效！添加背景图片后效果会更好。
