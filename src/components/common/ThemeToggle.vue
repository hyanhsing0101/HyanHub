<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
    :title="isDark ? '切换到浅色模式' : '切换到深色模式'"
  >
    <!-- 太阳图标（浅色模式） -->
    <svg v-if="!isDark" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="5" stroke-width="2" />
      <line x1="12" y1="1" x2="12" y2="3" stroke-width="2" />
      <line x1="12" y1="21" x2="12" y2="23" stroke-width="2" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke-width="2" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke-width="2" />
      <line x1="1" y1="12" x2="3" y2="12" stroke-width="2" />
      <line x1="21" y1="12" x2="23" y2="12" stroke-width="2" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke-width="2" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke-width="2" />
    </svg>

    <!-- 月亮图标（深色模式） -->
    <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: var(--radius-full);
  background: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.theme-toggle:hover {
  background: var(--bg-tertiary);
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.icon {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
  transition: transform var(--transition-base);
}

.theme-toggle:hover .icon {
  transform: rotate(15deg);
}

/* 深色模式下的月亮图标旋转动画 */
[data-theme='dark'] .icon {
  animation: moonRotate 0.5s ease;
}

@keyframes moonRotate {
  0% {
    transform: rotate(-180deg);
    opacity: 0;
  }
  100% {
    transform: rotate(0deg);
    opacity: 1;
  }
}

/* 浅色模式下的太阳图标缩放动画 */
[data-theme='light'] .icon {
  animation: sunScale 0.5s ease;
}

@keyframes sunScale {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

