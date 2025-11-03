<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <nav class="container nav">
      <!-- Logo -->
      <a href="#hero" class="logo">
        <span class="logo-text">Hyan</span>
        <span class="logo-dot">.</span>
      </a>

      <!-- 导航菜单 -->
      <div class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <a href="#hero" class="nav-link" @click="closeMobileMenu">首页</a>
        <a href="#about" class="nav-link" @click="closeMobileMenu">关于</a>
        <a href="#projects" class="nav-link" @click="closeMobileMenu">项目</a>
        <a href="#contact" class="nav-link" @click="closeMobileMenu">联系</a>
      </div>

      <!-- 右侧操作区 -->
      <div class="nav-actions">
        <FullpageToggle />
        <ThemeToggle />
        <!-- 移动端菜单按钮 -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="菜单">
          <span class="hamburger" :class="{ active: isMobileMenuOpen }"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from '@/components/common/ThemeToggle.vue'
import FullpageToggle from '@/components/common/FullpageToggle.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all var(--transition-base);
}

.header.scrolled {
  background: rgba(15, 15, 30, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
}

[data-theme='light'] .header.scrolled {
  background: rgba(255, 255, 255, 0.95);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--spacing-xl);
  height: 70px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  z-index: 1001;
}

.logo-text {
  color: var(--text-primary);
  transition: color var(--transition-fast);
}

.logo-dot {
  color: var(--color-primary);
  font-size: 2rem;
  line-height: 0.5;
  animation: pulse 2s ease-in-out infinite;
}

.logo:hover .logo-text {
  color: var(--color-primary);
}

/* 导航菜单 */
.nav-menu {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-tech);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after {
  width: 100%;
}

/* 右侧操作区 */
.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger {
  position: relative;
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition-base);
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition-base);
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.active {
  background: transparent;
}

.hamburger.active::before {
  top: 0;
  transform: rotate(45deg);
}

.hamburger.active::after {
  bottom: 0;
  transform: rotate(-45deg);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: var(--bg-primary);
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-2xl);
    box-shadow: var(--shadow-xl);
    transition: right var(--transition-base);
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.25rem;
  }

  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .nav {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  .logo {
    font-size: 1.25rem;
  }
}
</style>

