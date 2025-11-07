# ARC Raiders Wiki

一个专注于《ARC Raiders》游戏的资讯和攻略网站，使用 Next.js 14、TypeScript 和 Tailwind CSS 构建。

## 🎮 功能特性

- ✨ **官网风格设计** - 参考 ARC Raiders 官网的视觉效果
- 🎬 **首页视频** - 进入网站即可观看游戏发布预告片
- 📱 **响应式布局** - 完美适配桌面和移动设备
- 📝 **攻略系统** - 完整的攻略列表和详情页面
- 📊 **Google Analytics** - 集成流量分析
- 🚀 **高性能** - Next.js 14 App Router + SSR
- 🎨 **霓虹灯效果** - 青色、紫色、橙色科幻视觉风格

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel (推荐)

## 📦 安装

\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
\`\`\`

## 🌐 访问

开发环境: [http://localhost:3000](http://localhost:3000)

## 📄 页面结构

- `/` - 首页(Hero + 视频 + 游戏介绍)
- `/about` - 游戏详细介绍
- `/guides` - 攻略列表
- `/guides/[slug]` - 攻略详情
- `/videos` - 视频专区

## 🎬 首页视频

首页已经集成 YouTube 视频播放器，显示游戏发布预告片。如需更换视频:

1. 打开 `app/page.tsx`
2. 找到 `<iframe>` 标签
3. 替换 `src` 属性中的视频 ID

## 📊 Google Analytics

1. 在 Google Analytics 创建账户并获取 Measurement ID
2. 复制 `.env.example` 为 `.env.local`
3. 填入你的 GA ID:

\`\`\`
NEXT_PUBLIC_SITE_URL=https://arc-raiders.net
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

## 🔍 SEO 优化

网站已完成以下 SEO 优化:

- ✅ **Meta 标签**: 优化的 title、description、keywords
- ✅ **Open Graph**: 社交媒体分享优化
- ✅ **Twitter Card**: Twitter 分享卡片
- ✅ **Canonical URLs**: 规范化链接
- ✅ **robots.txt**: 搜索引擎爬取规则
- ✅ **sitemap.xml**: 动态生成的网站地图
- ✅ **结构化数据**: Schema.org JSON-LD
- ✅ **移动端友好**: 响应式设计

详细的 SEO 清单和待办事项请查看 `SEO-CHECKLIST.md`。

### 需要添加的资源

在部署前,请添加以下图片资源到 `/public` 目录:

- `og-image.jpg` (1200x630) - Open Graph 分享图
- `twitter-image.jpg` (1200x600) - Twitter 卡片图
- `logo.png` - 网站 Logo
- `video-thumbnail.jpg` - 视频缩略图

## 📝 添加攻略

在 `app/guides/[slug]/page.tsx` 的 `guideContent` 对象中添加新攻略:

\`\`\`typescript
"your-guide-slug": {
  title: "你的攻略标题",
  category: "分类",
  difficulty: "难度",
  color: "cyan", // cyan, purple, orange
  content: `攻略内容...`,
},
\`\`\`

然后在 `app/guides/page.tsx` 的 guides 数组中添加条目。

## 🎨 自定义样式

全局样式在 `app/globals.css` 中定义:

- `.neon-text` - 霓虹灯文字效果
- `.neon-border` - 霓虹灯边框效果
- `.glass` - 毛玻璃效果
- `.hover-glow` - 悬停发光效果

Tailwind 配置在 `tailwind.config.ts` 中，包含自定义霓虹色:

- `neon-cyan` - 青色 (#00ffff)
- `neon-purple` - 紫色 (#bf00ff)
- `neon-orange` - 橙色 (#ff6600)

## 🚀 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 添加环境变量 `NEXT_PUBLIC_GA_ID`
4. 自动部署完成

### 其他平台

支持任何 Node.js 托管平台:
- Netlify
- Cloudflare Pages
- Railway
- 自建服务器

## 📄 License

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request!

## 📧 联系

如有问题或建议，请通过 GitHub Issues 联系我们。

## 🧾 更新日志

- 2025-11-07：在 `app/[lang]/layout.tsx` 通过 Next.js `<Script>` 全局注入 Google Analytics 4 `gtag.js`，Measurement ID：`G-D2B8JR77WV`。覆盖所有页面的初次加载。
- 2025-11-07：将英文设为根路径默认语言（无 `/en` 前缀）。新增 `middleware.ts` 将未加语言前缀的路径内部重写到 `/en`；更新 `components/Navigation.tsx` 使英文链接不含 `/en`；更新 `components/LanguageSwitcher.tsx` 切换到英文时跳转到无前缀路径；修正 `app/[lang]/layout.tsx` 与隐私页的 canonical/OG URL 在英文下不包含 `/en`。