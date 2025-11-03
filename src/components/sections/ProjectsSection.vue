<template>
  <section id="projects" class="projects section">
    <div class="container">
      <h2 class="section-title text-gradient">项目展示</h2>
      <p class="section-subtitle">这里是我最近的一些作品</p>

      <!-- 轮播容器 -->
      <div class="carousel-wrapper">
        <div class="carousel-container">
          <!-- 项目卡片 -->
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="project-card card"
            :class="getCardClass(index)"
            :style="getCardStyle(index)"
            @click="goToSlide(index)"
          >
            <!-- 项目图片 -->
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay" v-if="index === currentIndex">
                <div class="project-links">
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                    title="查看项目"
                    @click.stop
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <a
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                    title="查看代码"
                    @click.stop
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- 项目信息 -->
            <div class="project-info" v-if="index === currentIndex">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <!-- 技术标签 -->
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>

            <!-- 特色标识 -->
            <div v-if="project.featured && index === currentIndex" class="featured-badge">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- 控制按钮 -->
        <button class="carousel-btn prev" @click="prevSlide" aria-label="上一个">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button class="carousel-btn next" @click="nextSlide" aria-label="下一个">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <!-- 指示器 -->
        <div class="carousel-indicators">
          <button
            v-for="(project, index) in projects"
            :key="project.id"
            class="indicator"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
            :aria-label="`转到项目 ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { projects } from '@/assets/data/projects'

const currentIndex = ref(0)
let autoplayTimer = null

// 获取卡片的类名
const getCardClass = (index) => {
  const diff = index - currentIndex.value
  if (diff === 0) return 'active'
  if (diff === 1 || diff === -(projects.length - 1)) return 'next'
  if (diff === -1 || diff === projects.length - 1) return 'prev'
  return 'hidden'
}

// 获取卡片的样式
const getCardStyle = (index) => {
  const diff = index - currentIndex.value
  const totalCards = projects.length
  
  // 处理循环
  let position = diff
  if (diff > totalCards / 2) {
    position = diff - totalCards
  } else if (diff < -totalCards / 2) {
    position = diff + totalCards
  }

  // 中间卡片
  if (position === 0) {
    return {
      transform: 'translateX(0) scale(1)',
      opacity: 1,
      zIndex: 10,
    }
  }
  
  // 左边卡片
  if (position === -1) {
    return {
      transform: 'translateX(-80%) scale(0.85)',
      opacity: 0.5,
      zIndex: 5,
    }
  }
  
  // 右边卡片
  if (position === 1) {
    return {
      transform: 'translateX(80%) scale(0.85)',
      opacity: 0.5,
      zIndex: 5,
    }
  }

  // 其他卡片隐藏
  return {
    transform: position < 0 ? 'translateX(-150%) scale(0.7)' : 'translateX(150%) scale(0.7)',
    opacity: 0,
    zIndex: 1,
  }
}

// 下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length
  resetAutoplay()
}

// 上一张
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
  resetAutoplay()
}

// 跳转到指定幻灯片
const goToSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}

// 自动播放
const startAutoplay = () => {
  autoplayTimer = setInterval(() => {
    nextSlide()
  }, 4000) // 每4秒切换
}

// 重置自动播放
const resetAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
  startAutoplay()
}

// 停止自动播放
const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.projects {
  background: var(--bg-secondary);
  overflow: hidden;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-md);
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-3xl);
}

/* 轮播容器 */
.carousel-wrapper {
  position: relative;
  width: 100%;
  padding: var(--spacing-3xl) 0;
}

.carousel-container {
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
}

/* 项目卡片 */
.project-card {
  position: absolute;
  width: 500px;
  max-width: 90%;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: all;
}

.project-card.active {
  pointer-events: all;
}

.project-card:not(.active) {
  cursor: pointer;
}

/* 项目图片 */
.project-image {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card.active:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 2;
}

.project-card.active:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: var(--spacing-lg);
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  color: white;
  transition: all var(--transition-base);
  transform: translateY(10px);
}

.project-card.active:hover .project-link {
  transform: translateY(0);
}

.project-link:hover {
  background: var(--color-primary-light);
  transform: scale(1.1) translateY(0);
}

.project-link svg {
  width: 24px;
  height: 24px;
}

/* 项目信息 */
.project-info {
  padding: var(--spacing-xl);
  background: var(--bg-secondary);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--bg-tertiary);
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 500;
}

/* 特色标识 */
.featured-badge {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-tech);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-lg);
  animation: pulse 2s ease-in-out infinite;
  z-index: 20;
}

.featured-badge svg {
  width: 20px;
  height: 20px;
  color: white;
}

/* 控制按钮 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: var(--radius-full);
  background: var(--bg-primary);
  color: var(--color-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  z-index: 20;
  box-shadow: var(--shadow-lg);
}

.carousel-btn:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn.prev {
  left: var(--spacing-xl);
}

.carousel-btn.next {
  right: var(--spacing-xl);
}

.carousel-btn svg {
  width: 24px;
  height: 24px;
}

/* 指示器 */
.carousel-indicators {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-md);
  z-index: 20;
}

.indicator {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: var(--radius-full);
  background: var(--bg-tertiary);
  cursor: pointer;
  transition: all var(--transition-base);
  padding: 0;
}

.indicator:hover {
  background: var(--color-primary);
  transform: scale(1.2);
}

.indicator.active {
  background: var(--color-primary);
  width: 32px;
  border-radius: var(--radius-full);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .carousel-container {
    height: 550px;
  }

  .project-card {
    width: 450px;
  }

  .project-image {
    height: 300px;
  }

  .carousel-btn {
    width: 45px;
    height: 45px;
  }

  .carousel-btn.prev {
    left: var(--spacing-md);
  }

  .carousel-btn.next {
    right: var(--spacing-md);
  }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 500px;
  }

  .project-card {
    width: 350px;
  }

  .project-image {
    height: 250px;
  }

  .project-info {
    padding: var(--spacing-lg);
  }

  .project-title {
    font-size: 1.3rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }

  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }

  .carousel-btn.prev {
    left: var(--spacing-sm);
  }

  .carousel-btn.next {
    right: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 450px;
  }

  .project-card {
    width: 300px;
  }

  .project-image {
    height: 200px;
  }

  .project-info {
    padding: var(--spacing-md);
  }

  .project-title {
    font-size: 1.1rem;
  }

  .project-description {
    font-size: 0.9rem;
  }
}
</style>

