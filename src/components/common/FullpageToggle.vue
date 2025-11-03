<template>
  <button
    class="fullpage-toggle"
    @click="toggle"
    :class="{ active: isEnabled }"
    :title="isEnabled ? '关闭全屏滚动' : '开启全屏滚动'"
  >
    <!-- 全屏滚动图标 -->
    <svg v-if="!isEnabled" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="6" rx="2" />
      <rect x="3" y="15" width="18" height="6" rx="2" />
      <path d="M12 9v6" stroke-linecap="round" />
      <path d="M12 15l-2-2m2 2l2-2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <!-- 自由滚动图标 -->
    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 7h18M3 12h18M3 17h18" stroke-linecap="round" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>

    <span class="tooltip">{{ isEnabled ? '全屏滚动：开启' : '全屏滚动：关闭' }}</span>
  </button>
</template>

<script setup>
import { useFullpageScroll } from '@/composables/useFullpageScroll'

const { isEnabled, toggle } = useFullpageScroll()
</script>

<style scoped>
.fullpage-toggle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: var(--radius-full);
  background: var(--bg-secondary);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.fullpage-toggle:hover {
  background: var(--bg-tertiary);
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.fullpage-toggle.active {
  background: var(--gradient-tech);
  color: white;
}

.fullpage-toggle svg {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-base);
}

.fullpage-toggle:hover svg {
  transform: scale(1.1);
}

/* 提示文本 */
.tooltip {
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.8rem;
  white-space: nowrap;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  pointer-events: none;
  opacity: 0;
  transition: all var(--transition-fast);
  z-index: 10;
}

.fullpage-toggle:hover .tooltip {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

/* 响应式 */
@media (max-width: 768px) {
  .tooltip {
    display: none;
  }
}
</style>

