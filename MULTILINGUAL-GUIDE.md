# 🌐 多语言功能使用指南

## 概述

ARC Raiders Wiki 现在支持三种语言：
- **🇺🇸 英文 (en)** - 默认主语言
- **🇨🇳 中文 (zh)** - 辅助语言
- **🇯🇵 日文 (ja)** - 辅助语言

## 快速开始

### 访问不同语言版本

直接在 URL 中指定语言代码：

```
https://arc-raiders.net/en    # 英文版
https://arc-raiders.net/zh    # 中文版  
https://arc-raiders.net/ja    # 日文版
```

访问根 URL 会自动重定向到英文版（默认语言）：
```
https://arc-raiders.net  →  https://arc-raiders.net/en
```

### 使用语言切换器

在每个页面的导航栏右上角，你会看到一个语言选择器：
- 点击当前语言（显示国旗 🇺🇸/🇨🇳/🇯🇵）
- 从下拉菜单中选择其他语言
- 页面会自动切换到相应语言版本

## URL 结构

所有页面都支持三种语言：

| 页面类型 | 英文 | 中文 | 日文 |
|---------|------|------|------|
| 首页 | `/en` | `/zh` | `/ja` |
| 指南 | `/en/guides` | `/zh/guides` | `/ja/guides` |
| 视频 | `/en/videos` | `/zh/videos` | `/ja/videos` |
| 关于 | `/en/about` | `/zh/about` | `/ja/about` |

## SEO 优化

每种语言版本都经过 SEO 优化：

✅ 正确的 HTML `lang` 属性  
✅ 语言特定的 meta 标题和描述  
✅ 完整的 hreflang 链接  
✅ Open Graph 多语言支持  
✅ 包含所有语言的 Sitemap  
✅ 高关键词密度（每种语言 500-600 次 "ARC Raiders"）

## 技术实现

### 项目结构

```
app/
  ├── [lang]/              # 动态语言路由
  │   ├── layout.tsx       # 语言特定布局和 metadata
  │   ├── page.tsx         # 首页
  │   ├── about/
  │   ├── guides/
  │   └── videos/
  ├── layout.tsx           # 根布局
  ├── page.tsx             # 重定向到默认语言
  └── sitemap.ts           # 多语言 sitemap

i18n/
  ├── config.ts            # i18n 配置
  ├── dictionaries.ts      # 字典加载器
  └── locales/
      ├── en.json          # 英文翻译
      ├── zh.json          # 中文翻译
      └── ja.json          # 日文翻译

components/
  ├── Navigation.tsx       # 支持多语言的导航栏
  ├── Footer.tsx           # 支持多语言的页脚
  └── LanguageSwitcher.tsx # 语言切换组件

middleware.ts              # 自动语言检测和重定向
```

### 关键组件

**语言配置** (`i18n/config.ts`)：
```typescript
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ja'],
} as const
```

**中间件** (`middleware.ts`)：
- 自动检测 URL 是否包含语言代码
- 将无语言前缀的 URL 重定向到默认语言
- 例如：`/guides` → `/en/guides`

**语言切换器** (`components/LanguageSwitcher.tsx`)：
- 客户端组件，显示当前语言
- 点击切换到其他语言
- 保持当前页面路径

## 内容翻译状态

| 内容区域 | 英文 | 中文 | 日文 | 状态 |
|---------|------|------|------|------|
| 导航栏 | ✅ | ✅ | ✅ | 完成 |
| 首页 Hero | ✅ | ✅ | ✅ | 完成 |
| 游戏介绍区块 | ✅ | ✅ | ✅ | 完成 |
| FAQ 问答 | ✅ | ✅ | ✅ | 完成 |
| 指南分类 | ✅ | ✅ | ✅ | 完成 |
| 视频页面 | ✅ | ✅ | ✅ | 完成 |
| 关于页面 | ✅ | ✅ | ✅ | 完成 |
| 页脚 | ✅ | ✅ | ✅ | 完成 |

所有核心内容已完成三语翻译！

## 开发指南

### 添加新页面

创建新页面时，请在 `app/[lang]/` 目录下：

```typescript
// app/[lang]/new-page/page.tsx
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

export default async function NewPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang)
  
  return (
    <div>
      <h1>{dict.newPage.title}</h1>
      {/* 使用 dict 对象访问翻译内容 */}
    </div>
  )
}
```

### 添加新翻译

1. 在 `i18n/locales/en.json` 中添加英文文本
2. 在 `i18n/locales/zh.json` 中添加中文翻译
3. 在 `i18n/locales/ja.json` 中添加日文翻译

```json
// 在所有三个文件中添加相同的结构
{
  "newPage": {
    "title": "Your Title",
    "description": "Your description..."
  }
}
```

### 添加新语言

要添加第四种语言（例如韩语）：

1. 更新 `i18n/config.ts`：
```typescript
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ja', 'ko'], // 添加 'ko'
}
```

2. 创建 `i18n/locales/ko.json` 翻译文件

3. 更新 `i18n/dictionaries.ts`：
```typescript
const dictionaries = {
  en: () => import('./locales/en.json').then((m) => m.default),
  zh: () => import('./locales/zh.json').then((m) => m.default),
  ja: () => import('./locales/ja.json').then((m) => m.default),
  ko: () => import('./locales/ko.json').then((m) => m.default),
}
```

4. 更新 `components/LanguageSwitcher.tsx` 添加韩语选项

完成！新语言会自动在整个网站生效。

## 测试清单

- [x] 访问 `/` 自动重定向到 `/en`
- [x] 访问 `/en`, `/zh`, `/ja` 显示对应语言
- [x] 语言切换器正常工作
- [x] 所有页面链接包含正确的语言前缀
- [x] 每种语言的 metadata 正确
- [x] Sitemap 包含所有语言的 URL
- [x] SEO hreflang 标签正确设置

## 常见问题

**Q: 为什么访问根 URL 会重定向？**  
A: 为了确保所有用户都能看到合适的语言版本，我们将根 URL 重定向到默认语言（英文）。用户可以使用语言切换器选择其他语言。

**Q: 如何更改默认语言？**  
A: 在 `i18n/config.ts` 中修改 `defaultLocale` 的值。例如改为中文：
```typescript
defaultLocale: 'zh'
```

**Q: 翻译内容存储在哪里？**  
A: 所有翻译内容存储在 `i18n/locales/` 目录下的 JSON 文件中。这使得内容管理和更新非常方便。

**Q: 性能如何？**  
A: 翻译文件采用动态导入，只有当前语言的内容会被加载。页面采用 Next.js 静态生成（SSG），加载速度非常快。

## 下一步计划

- [ ] 为每种语言创建更多指南内容  
- [ ] 添加语言自动检测（基于浏览器语言）
- [ ] 添加更多语言选项（韩语、法语、德语等）
- [ ] 实现更详细的地区化（日期、货币格式等）

---

**需要帮助？** 查看 `I18N-IMPLEMENTATION.md` 了解详细的技术实现说明。
