<template>
  <section id="hero" class="hero section">
    <div class="container">
      <div class="hero-content">
        <!-- 主标题 -->
        <div class="hero-text animate-fade-in">
          <h1 class="hero-title">
            你好，我是 <span class="text-gradient">Hyan</span>
          </h1>
          <h2 class="hero-subtitle">全栈开发工程师 · 创造者 · 技术爱好者</h2>
          <p class="hero-description">
            专注于构建优雅、高效的 Web 应用，<br />
            用代码创造美好的用户体验
          </p>

          <!-- CTA 按钮 -->
          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">
              查看作品
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a href="#contact" class="btn btn-secondary">联系我</a>
          </div>
        </div>

        <!-- 装饰性元素 -->
        <div class="hero-visual animate-float">
          <div class="visual-circle circle-1"></div>
          <div class="visual-circle circle-2"></div>
          <div class="visual-circle circle-3"></div>
          <div class="code-snippet">
            <pre><code>{{ codeSnippet }}</code></pre>
          </div>
        </div>
      </div>

      <!-- 滚动提示 -->
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>向下滚动</span>
      </div>
    </div>

    <!-- 背景装饰 -->
    <div class="hero-background">
      <div class="grid-overlay"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const codeSnippet = ref(`const developer = {
  name: 'Hyan',
  skills: ['Vue', 'React', 'Node'],
  passion: '∞'
}`)
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 70px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  position: relative;
  z-index: 2;
}

/* 文本内容 */
.hero-text {
  animation: fadeIn 1s ease-out;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
}

.hero-subtitle {
  color: var(--text-secondary);
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: 500;
  margin-bottom: var(--spacing-lg);
}

.hero-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: var(--spacing-2xl);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.hero-actions .btn {
  gap: var(--spacing-sm);
}

.hero-actions .icon {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-base);
}

.btn-primary:hover .icon {
  transform: translateY(3px);
}

/* 视觉元素 */
.hero-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 400px;
  height: 400px;
  background: var(--gradient-tech);
  animation-delay: 0s;
}

.circle-2 {
  width: 300px;
  height: 300px;
  background: var(--gradient-primary);
  animation-delay: 1s;
}

.circle-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #00d9ff 0%, #00e676 100%);
  animation-delay: 2s;
}

.code-snippet {
  position: relative;
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--bg-tertiary);
  max-width: 400px;
}

.code-snippet pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.code-snippet code {
  color: var(--color-primary);
}

/* 滚动提示 */
.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-tertiary);
  font-size: 0.9rem;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-line {
  width: 2px;
  height: 30px;
  background: var(--gradient-tech);
  border-radius: var(--radius-full);
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

/* 背景装饰 */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(var(--bg-tertiary) 1px, transparent 1px),
    linear-gradient(90deg, var(--bg-tertiary) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .hero-visual {
    height: 300px;
    order: -1;
  }

  .visual-circle {
    width: 250px !important;
    height: 250px !important;
  }

  .circle-2 {
    width: 200px !important;
    height: 200px !important;
  }

  .circle-3 {
    width: 150px !important;
    height: 150px !important;
  }

  .code-snippet {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 100px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .scroll-indicator {
    display: none;
  }

  .hero-visual {
    height: 250px;
  }

  .code-snippet {
    padding: var(--spacing-lg);
  }

  .code-snippet pre {
    font-size: 0.85rem;
  }
}
</style>

