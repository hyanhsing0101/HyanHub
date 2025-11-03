import { ref, onMounted, watch } from 'vue'

/**
 * 主题管理组合式函数
 * 支持深色/浅色主题切换，并持久化到 localStorage
 */
export function useTheme() {
  // 默认为浅色主题
  const theme = ref('light')
  const isDark = ref(false)

  /**
   * 初始化主题
   * 优先从 localStorage 读取，否则使用系统偏好
   */
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      theme.value = savedTheme
    } else if (prefersDark) {
      theme.value = 'dark'
    }

    isDark.value = theme.value === 'dark'
    applyTheme()
  }

  /**
   * 应用主题到 DOM
   */
  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  /**
   * 切换主题
   */
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    isDark.value = theme.value === 'dark'
  }

  /**
   * 设置指定主题
   * @param {string} newTheme - 'light' 或 'dark'
   */
  const setTheme = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      theme.value = newTheme
      isDark.value = newTheme === 'dark'
    }
  }

  // 监听主题变化，应用到 DOM 并保存到 localStorage
  watch(theme, (newTheme) => {
    applyTheme()
    localStorage.setItem('theme', newTheme)
  })

  // 组件挂载时初始化主题
  onMounted(() => {
    initTheme()

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        theme.value = e.matches ? 'dark' : 'light'
        isDark.value = e.matches
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    // 清理监听器
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  })

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
  }
}

