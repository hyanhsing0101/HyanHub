<template>
  <nav v-if="isEnabled" class="section-indicator">
    <button
      v-for="(section, index) in sections"
      :key="section"
      class="indicator-dot"
      :class="{ active: currentSection === index }"
      @click="scrollToSection(index)"
      :aria-label="`跳转到${getSectionName(section)}`"
      :title="getSectionName(section)"
    >
      <span class="dot"></span>
      <span class="label">{{ getSectionName(section) }}</span>
    </button>
  </nav>
</template>

<script setup>
import { useFullpageScroll } from '@/composables/useFullpageScroll'

const { isEnabled, currentSection, sections, scrollToSection } = useFullpageScroll()

const getSectionName = (section) => {
  const names = {
    hero: '首页',
    about: '关于',
    projects: '项目',
    contact: '联系',
  }
  return names[section] || section
}
</script>

<style scoped>
.section-indicator {
  position: fixed;
  right: var(--spacing-2xl);
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.indicator-dot {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.dot {
  width: 12px;
  height: 12px;
  border: 2px solid var(--text-tertiary);
  border-radius: var(--radius-full);
  background: transparent;
  transition: all var(--transition-base);
}

.indicator-dot:hover .dot {
  border-color: var(--color-primary);
  transform: scale(1.2);
}

.indicator-dot.active .dot {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: scale(1.3);
  box-shadow: 0 0 10px var(--color-primary);
}

/* 标签文本 */
.label {
  position: absolute;
  right: calc(100% + var(--spacing-md));
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-primary);
  color: var(--text-primary);
  font-size: 0.85rem;
  white-space: nowrap;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  opacity: 0;
  pointer-events: none;
  transform: translateX(10px);
  transition: all var(--transition-base);
}

.indicator-dot:hover .label {
  opacity: 1;
  transform: translateX(0);
}

.indicator-dot.active .label {
  color: var(--color-primary);
  font-weight: 600;
}

/* 响应式 */
@media (max-width: 1024px) {
  .section-indicator {
    right: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  .section-indicator {
    right: var(--spacing-md);
  }

  .label {
    display: none;
  }

  .dot {
    width: 10px;
    height: 10px;
  }
}
</style>

