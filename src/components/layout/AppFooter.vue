<template>
  <footer class="footer">
    <div class="container footer-content">
      <!-- 社交链接 -->
      <div class="social-links">
        <a
          :href="personalInfo.github"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          :href="personalInfo.bilibili"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          aria-label="Bilibili"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
            />
          </svg>
        </a>
        <a
          :href="`mailto:${personalInfo.email}`"
          class="social-link"
          aria-label="Email"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

      <!-- 版权信息 -->
      <div class="copyright">
        <p>&copy; {{ currentYear }} Hyan. All rights reserved.</p>
        <p class="made-with">
          Made with <span class="heart">❤️</span> using
          <a href="https://vuejs.org" target="_blank" rel="noopener">Vue 3</a>
        </p>
      </div>

      <!-- 返回顶部按钮 -->
      <button
        v-if="showBackToTop"
        @click="scrollToTop"
        class="back-to-top"
        aria-label="返回顶部"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { personalInfo } from '@/assets/data/projects'

const currentYear = computed(() => new Date().getFullYear())
const showBackToTop = ref(false)

// 监听滚动，显示/隐藏返回顶部按钮
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

// 返回顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.footer {
  background: var(--bg-secondary);
  padding: var(--spacing-2xl) 0;
  border-top: 1px solid var(--bg-tertiary);
  position: relative;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
}

/* 社交链接 */
.social-links {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  transition: all var(--transition-base);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

/* 版权信息 */
.copyright {
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.copyright p {
  margin: 0.25rem 0;
}

.made-with {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.made-with a {
  color: var(--color-primary);
  font-weight: 600;
}

.heart {
  color: #ff5252;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  10%,
  30% {
    transform: scale(1.1);
  }
  20%,
  40% {
    transform: scale(1);
  }
}

/* 返回顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: var(--spacing-2xl);
  right: var(--spacing-2xl);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: var(--radius-full);
  background: var(--gradient-tech);
  color: white;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-base);
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

.back-to-top svg {
  width: 24px;
  height: 24px;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-xl);
}

.back-to-top:active {
  transform: translateY(-1px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-xl) 0;
  }

  .social-links {
    gap: var(--spacing-md);
  }

  .social-link {
    width: 40px;
    height: 40px;
  }

  .social-link svg {
    width: 18px;
    height: 18px;
  }

  .back-to-top {
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 45px;
    height: 45px;
  }

  .copyright {
    font-size: 0.85rem;
  }
}
</style>

