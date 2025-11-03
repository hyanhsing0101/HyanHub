/**
 * 项目展示数据
 * 可以根据实际情况修改或添加项目
 */
export const projects = [
  {
    id: 1,
    title: 'HyanHub',
    description: '个人主页项目，展示个人信息、技能和作品集',
    tags: ['Vue3', 'Vite', 'CSS3'],
    image: '/images/projects/pro_hyanhub.png',
    link: 'https://hyanhsing.xin',
    github: 'https://github.com/hyanhsing0101/HyanHub',
    featured: true,
  },
  {
    id: 2,
    title: '项目名称 2',
    description: '这是一个示例项目，展示了某项技术的应用',
    tags: ['Vue3', 'TypeScript', 'Tailwind'],
    image: 'https://via.placeholder.com/400x300/3d8bff/ffffff?text=Project+2',
    link: '#',
    github: 'https://github.com/yourusername/project-2',
    featured: true,
  },
  {
    id: 3,
    title: '项目名称 3',
    description: '另一个精彩的项目，使用了最新的前端技术栈',
    tags: ['React', 'Next.js', 'Node.js'],
    image: 'https://via.placeholder.com/400x300/00d9ff/ffffff?text=Project+3',
    link: '#',
    github: 'https://github.com/yourusername/project-3',
    featured: false,
  },
  {
    id: 4,
    title: '项目名称 4',
    description: '一个全栈应用，包含前端和后端开发',
    tags: ['Vue3', 'Express', 'MongoDB'],
    image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Project+4',
    link: '#',
    github: 'https://github.com/yourusername/project-4',
    featured: false,
  },
]

/**
 * 个人信息数据
 */
export const personalInfo = {
  name: 'Hyan',
  title: '全栈开发工程师',
  bio: '热爱编程，专注于 Web 开发和用户体验设计。拥有丰富的前端和后端开发经验，致力于创造优雅且高效的解决方案。',
  avatar: '/images/avatar.jpg',
  location: '中国',
  email: 'hyanhsing0101@outlook.com',
  github: 'https://github.com/hyanhsing0101',
  bilibili: 'https://space.bilibili.com/3546695350619036',
}

/**
 * 技能数据
 */
export const skills = [
  {
    category: '前端开发',
    items: ['Vue.js', 'React', 'JavaScript/TypeScript', 'HTML5/CSS3', 'Tailwind CSS'],
  },
  {
    category: '后端开发',
    items: ['Node.js', 'Express', 'Python', 'RESTful API', 'GraphQL'],
  },
  {
    category: '工具与平台',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
  },
  {
    category: '其他',
    items: ['UI/UX 设计', '敏捷开发', '团队协作', '问题解决'],
  },
]
