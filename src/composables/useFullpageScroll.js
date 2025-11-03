import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 全屏滚动组合式函数
 * 支持鼠标滚轮、触摸滑动和键盘控制
 */
export function useFullpageScroll() {
  const isEnabled = ref(false)
  const currentSection = ref(0)
  const isScrolling = ref(false)
  const sections = ['hero', 'about', 'projects', 'contact']

  // 滚动到指定 section
  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length || isScrolling.value) return

    isScrolling.value = true
    currentSection.value = index

    const element = document.getElementById(sections[index])
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    // 滚动动画完成后重置状态
    setTimeout(() => {
      isScrolling.value = false
    }, 1000)
  }

  // 下一个 section
  const nextSection = () => {
    if (currentSection.value < sections.length - 1) {
      scrollToSection(currentSection.value + 1)
    }
  }

  // 上一个 section
  const prevSection = () => {
    if (currentSection.value > 0) {
      scrollToSection(currentSection.value - 1)
    }
  }

  // 处理滚轮事件
  const handleWheel = (e) => {
    if (!isEnabled.value || isScrolling.value) return

    e.preventDefault()

    if (e.deltaY > 0) {
      // 向下滚动
      nextSection()
    } else {
      // 向上滚动
      prevSection()
    }
  }

  // 处理触摸事件
  let touchStartY = 0
  let touchEndY = 0
  let isTouching = false

  const handleTouchStart = (e) => {
    if (!isEnabled.value) {
      isTouching = false
      return
    }
    isTouching = true
    touchStartY = e.touches[0].clientY
  }

  const handleTouchMove = (e) => {
    if (!isEnabled.value || !isTouching) return

    e.preventDefault()
    touchEndY = e.touches[0].clientY
  }

  const handleTouchEnd = () => {
    if (!isEnabled.value || !isTouching || isScrolling.value) {
      isTouching = false
      return
    }

    const diff = touchStartY - touchEndY

    // 滑动距离超过 50px 才触发
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // 向上滑动（显示下一个）
        nextSection()
      } else {
        // 向下滑动（显示上一个）
        prevSection()
      }
    }

    isTouching = false
  }

  // 处理键盘事件
  const handleKeydown = (e) => {
    if (!isEnabled.value || isScrolling.value) return

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault()
      nextSection()
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault()
      prevSection()
    } else if (e.key === 'Home') {
      e.preventDefault()
      scrollToSection(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      scrollToSection(sections.length - 1)
    }
  }

  // 开启全屏滚动
  const enable = () => {
    isEnabled.value = true
    localStorage.setItem('fullpageScrollEnabled', 'true')

    // 滚动到当前 section
    scrollToSection(currentSection.value)
  }

  // 关闭全屏滚动
  const disable = () => {
    isEnabled.value = false
    localStorage.setItem('fullpageScrollEnabled', 'false')
  }

  // 切换全屏滚动
  const toggle = () => {
    if (isEnabled.value) {
      disable()
    } else {
      enable()
    }
  }

  // 初始化
  const init = () => {
    // 从 localStorage 读取设置
    const saved = localStorage.getItem('fullpageScrollEnabled')
    if (saved === 'true') {
      isEnabled.value = true
    }

    // 添加事件监听
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeydown)
  }

  // 清理
  const cleanup = () => {
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchmove', handleTouchMove)
    window.removeEventListener('touchend', handleTouchEnd)
    window.removeEventListener('keydown', handleKeydown)
  }

  onMounted(() => {
    init()
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    isEnabled,
    currentSection,
    sections,
    scrollToSection,
    nextSection,
    prevSection,
    enable,
    disable,
    toggle,
  }
}
