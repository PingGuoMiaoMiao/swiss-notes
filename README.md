# Swiss Notes — 个人作品集

基于 Next.js 16 + TypeScript 构建的个人作品集网站，采用极简瑞士平面设计风格。

## 页面结构

```
首页          — 个人介绍 + 关键指标
专业技能       — 三列技能矩阵
精选项目       — 5 个 GitHub 开源项目展示
联系          — QQ 联系方式
```

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Inline Styles（瑞士设计风格）
- **字体**: IBM Plex Mono / IBM Plex Sans / Playfair Display（Google Fonts）
- **动画**: IntersectionObserver 滚动渐入

## 项目结构

```
app/
├── _components/           # UI 组件
│   ├── nav-bar.tsx        # 导航栏
│   ├── hero.tsx           # 首页 Hero
│   ├── expertise-matrix.tsx # 技能矩阵
│   ├── project-card.tsx   # 项目卡片
│   ├── featured-work.tsx  # 精选作品
│   ├── contact.tsx        # 联系板块
│   ├── grid-svg.tsx       # SVG 装饰
│   └── footer.tsx         # 页脚
├── _data/
│   └── constants.ts       # 数据常量
├── _hooks/
│   └── use-reveal.ts      # 滚动显示 Hook
├── layout.tsx
├── page.tsx
└── globals.css
```

## 本地开发

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 部署

支持 Vercel 一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 作者

**PingGuoMiaoMiao**

- GitHub: [@PingGuoMiaoMiao](https://github.com/PingGuoMiaoMiao)
- QQ: 3226742838