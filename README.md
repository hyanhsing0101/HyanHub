<div align="center">

# 🚀 HyanHub

**现代化个人主页 | Modern Personal Portfolio**

[![Vue 3](https://img.shields.io/badge/Vue-3.5.22-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.11-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/hyanhsing0101/HyanHub?style=social)](https://github.com/hyanhsing0101/HyanHub)

[在线预览](https://hyanhsing.xin) · [报告问题](https://github.com/hyanhsing0101/HyanHub/issues) · [功能建议](https://github.com/hyanhsing0101/HyanHub/issues)

</div>

---

## ✨ 特性亮点

<table>
  <tr>
    <td>🎨 <b>科技感设计</b><br/>蓝色渐变主题配色，流畅动画效果</td>
    <td>🌓 <b>主题切换</b><br/>深色/浅色模式，自动适配系统偏好</td>
  </tr>
  <tr>
    <td>📱 <b>响应式布局</b><br/>完美适配手机、平板、桌面设备</td>
    <td>⚡ <b>性能优化</b><br/>Vite 构建，首屏加载快速</td>
  </tr>
  <tr>
    <td>🎭 <b>交互动画</b><br/>精心设计的过渡与动画效果</td>
    <td>📄 <b>全屏滚动</b><br/>可选的整屏滚动导航体验</td>
  </tr>
</table>

---

## 🎬 在线演示

**🌐 访问地址**: [https://hyanhsing.xin](https://hyanhsing.xin)

> 💡 **提示**: 支持 PWA，可添加到主屏幕作为应用使用

---

## 📸 项目预览

### 🌞 浅色模式

> 简洁明亮的浅色主题，适合白天浏览

### 🌙 深色模式

> 护眼的深色主题，适合夜间使用

### 📱 移动端适配

> 完美的响应式设计，流畅的移动端体验

---

## 🛠️ 技术栈

### 核心框架

- **[Vue 3](https://vuejs.org/)** - 渐进式 JavaScript 框架
- **[Vite](https://vitejs.dev/)** - 下一代前端构建工具
- **[Vue Router](https://router.vuejs.org/)** - 官方路由管理器

### 开发工具

- **[ESLint](https://eslint.org/)** - 代码质量检查
- **[Prettier](https://prettier.io/)** - 代码格式化
- **CSS3** - 原生 CSS 变量与动画

### 部署

- **[Nginx](https://nginx.org/)** - Web 服务器
- **[Let's Encrypt](https://letsencrypt.org/)** - 免费 SSL 证书
- **[宝塔面板](https://www.bt.cn/)** - 服务器管理

---

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 20.19.0 或 >= 22.12.0
- **npm**: >= 9.0.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/hyanhsing0101/HyanHub.git

# 进入项目目录
cd HyanHub

# 安装依赖
npm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 代码规范

```bash
# 代码检查
npm run lint

# 代码格式化
npm run format
```

---

## 📁 项目结构

```
HyanHub/
├── public/                    # 静态资源
│   ├── images/               # 图片资源
│   │   ├── avatar.jpg       # 个人头像
│   │   └── projects/        # 项目截图
│   └── favicon.png          # 网站图标
├── src/
│   ├── assets/              # 资源文件
│   │   ├── data/           # 数据文件
│   │   │   └── projects.js # 项目与个人信息
│   │   └── styles/         # 全局样式
│   │       ├── variables.css    # CSS 变量
│   │       ├── global.css       # 全局样式
│   │       └── animations.css   # 动画效果
│   ├── components/         # 组件
│   │   ├── common/        # 通用组件
│   │   │   ├── ThemeToggle.vue      # 主题切换
│   │   │   ├── FullpageToggle.vue   # 全屏滚动开关
│   │   │   └── SectionIndicator.vue # 区块指示器
│   │   ├── layout/        # 布局组件
│   │   │   ├── AppHeader.vue   # 顶部导航
│   │   │   └── AppFooter.vue   # 页脚
│   │   └── sections/      # 页面区块
│   │       ├── HeroSection.vue      # 首屏
│   │       ├── AboutSection.vue     # 关于我
│   │       ├── ProjectsSection.vue  # 项目展示
│   │       └── ContactSection.vue   # 联系方式
│   ├── composables/       # 组合式函数
│   │   ├── useTheme.js         # 主题管理
│   │   └── useFullpageScroll.js # 全屏滚动
│   ├── router/            # 路由配置
│   ├── App.vue           # 根组件
│   └── main.js          # 入口文件
├── .prettierrc          # Prettier 配置
├── eslint.config.js     # ESLint 配置
├── vite.config.js       # Vite 配置
└── package.json         # 项目配置
```

---

## ⚙️ 配置指南

### 1️⃣ 修改个人信息

编辑 `src/assets/data/projects.js`:

```javascript
export const personalInfo = {
  name: '你的名字',
  title: '你的职位',
  bio: '个人简介',
  avatar: '/images/avatar.jpg',
  location: '所在地',
  email: 'your.email@example.com',
  github: 'https://github.com/username',
  bilibili: 'https://space.bilibili.com/your-id',
}
```

### 2️⃣ 添加项目展示

```javascript
export const projects = [
  {
    id: 1,
    title: '项目名称',
    description: '项目描述',
    tags: ['Vue3', 'Vite', 'CSS3'],
    image: '/images/projects/project.png',
    link: 'https://project-url.com',
    github: 'https://github.com/username/project',
    featured: true, // 是否为特色项目
  },
  // 添加更多项目...
]
```

### 3️⃣ 修改主题配色

编辑 `src/assets/styles/variables.css`:

```css
:root {
  --color-primary: #0066ff; /* 主色调 */
  --color-accent: #00d9ff; /* 强调色 */
  --gradient-tech: linear-gradient(135deg, #0066ff 0%, #00d9ff 100%);
}
```

### 4️⃣ 更新技能列表

```javascript
export const skills = [
  {
    category: '前端开发',
    items: ['Vue.js', 'React', 'TypeScript'],
  },
  // 更多技能分类...
]
```

---

## 🎨 功能说明

### 主题切换

- 支持深色/浅色模式
- 自动检测系统主题偏好
- 设置持久化存储

### 全屏滚动

- 可选的整屏滚动功能
- 支持鼠标滚轮、触摸、键盘控制
- 侧边导航指示器

### 项目展示

- 3D 轮播效果
- 自动播放（可配置间隔）
- 支持手动切换

### 响应式设计

- 移动端优先
- 断点：480px / 768px / 1024px / 1280px
- 流畅的动画过渡

---

## 📝 开发说明

### 添加新区块

1. 在 `src/components/sections/` 创建新组件
2. 在 `src/App.vue` 中导入并使用
3. 在 `AppHeader.vue` 添加导航链接

### 自定义动画

所有动画定义在 `src/assets/styles/animations.css`:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 图片资源

将图片放置在 `public/images/` 目录:

```
public/
└── images/
    ├── avatar.jpg           # 头像 (推荐 200x200)
    └── projects/
        └── project1.png     # 项目图 (推荐 1000x700)
```

---

## 🌐 部署指南

### 使用宝塔面板

1. 构建项目: `npm run build`
2. 上传 `dist` 文件夹内容到服务器
3. 配置 Nginx 伪静态规则
4. 申请 SSL 证书并启用 HTTPS

### 使用 Vercel/Netlify

```bash
# 一键部署到 Vercel
vercel

# 或部署到 Netlify
netlify deploy --prod
```

---

## 📊 性能优化

- ✅ 代码分割与懒加载
- ✅ 图片压缩与优化
- ✅ CSS 变量减少重绘
- ✅ 防抖与节流优化
- ✅ 生产环境移除 DevTools

---

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### Commit 规范

```
feat:     新功能
fix:      修复 Bug
docs:     文档更新
style:    代码格式调整
refactor: 重构代码
perf:     性能优化
test:     测试相关
chore:    构建/工具链
```

---

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证 - 详见 LICENSE 文件

---

## 👨‍💻 作者

**Hyan**

- 🌐 个人网站: [https://hyanhsing.xin](https://hyanhsing.xin)
- 💻 GitHub: [@hyanhsing0101](https://github.com/hyanhsing0101)
- 📺 Bilibili: [Hyan的空间](https://space.bilibili.com/3546695350619036)
- 📧 Email: [hyanhsing0101@outlook.com](mailto:hyanhsing0101@outlook.com)

---

## 🙏 鸣谢

- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端工具链
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 字体资源

---

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐️

[![Star History Chart](https://api.star-history.com/svg?repos=hyanhsing0101/HyanHub&type=Date)](https://star-history.com/#hyanhsing0101/HyanHub&Date)

---

<div align="center">

**[⬆ 回到顶部](#-hyanhub)**

Made with ❤️ by Hyan

</div>
