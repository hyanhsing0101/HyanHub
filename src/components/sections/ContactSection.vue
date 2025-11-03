<template>
  <section id="contact" class="contact section">
    <div class="container">
      <h2 class="section-title text-gradient">联系我</h2>
      <p class="section-subtitle">有任何问题或合作意向？欢迎与我联系！</p>

      <div class="contact-content">
        <!-- 联系方式 -->
        <div class="contact-info">
          <div class="contact-card card animate-slide-in-left">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3>电子邮件</h3>
            <a :href="`mailto:${personalInfo.email}`" class="contact-link">
              {{ personalInfo.email }}
            </a>
          </div>

          <div class="contact-card card animate-slide-in-left delay-100">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </div>
            <h3>GitHub</h3>
            <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer" class="contact-link">
              查看我的代码
            </a>
          </div>

          <div class="contact-card card animate-slide-in-left delay-200">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
                />
              </svg>
            </div>
            <h3>Bilibili</h3>
            <a :href="personalInfo.bilibili" target="_blank" rel="noopener noreferrer" class="contact-link">
              我的视频空间
            </a>
          </div>
        </div>

        <!-- 联系表单 -->
        <div class="contact-form-wrapper animate-slide-in-right">
          <form class="contact-form card" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">姓名</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                placeholder="您的姓名"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">邮箱</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject">主题</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                placeholder="邮件主题"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">消息</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="6"
                placeholder="您想说什么..."
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">发送消息</span>
              <span v-else>发送中...</span>
            </button>

            <p v-if="submitMessage" class="submit-message" :class="{ error: submitError }">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { personalInfo } from '@/assets/data/projects'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitError = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  submitError.value = false

  try {
    // 这里可以添加实际的表单提交逻辑
    // 例如：await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData.value) })

    // 模拟提交延迟
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // 成功消息
    submitMessage.value = '消息发送成功！我会尽快回复您。'
    submitError.value = false

    // 重置表单
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  } catch (error) {
    submitMessage.value = '发送失败，请稍后再试或直接发送邮件。'
    submitError.value = true
  } finally {
    isSubmitting.value = false

    // 3秒后清除消息
    setTimeout(() => {
      submitMessage.value = ''
    }, 3000)
  }
}
</script>

<style scoped>
.contact {
  background: var(--bg-primary);
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

/* 联系方式 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-card {
  text-align: center;
  padding: var(--spacing-xl);
  transition: all var(--transition-base);
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-tech);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.contact-icon svg {
  width: 30px;
  height: 30px;
  color: white;
}

.contact-card h3 {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
}

.contact-link {
  color: var(--color-primary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.contact-link:hover {
  color: var(--color-primary-light);
}

/* 联系表单 */
.contact-form-wrapper {
  position: sticky;
  top: 100px;
}

.contact-form {
  padding: var(--spacing-2xl);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  background: var(--bg-tertiary);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: var(--bg-primary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-submit {
  width: 100%;
  padding: var(--spacing-lg);
  font-size: 1.1rem;
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  background: var(--color-success);
  color: white;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.submit-message.error {
  background: var(--color-error);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .contact-form-wrapper {
    position: static;
  }

  .contact-info {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .contact-card {
    flex: 1;
    min-width: 200px;
  }
}

@media (max-width: 768px) {
  .contact-info {
    flex-direction: column;
  }

  .contact-card {
    padding: var(--spacing-lg);
  }

  .contact-icon {
    width: 50px;
    height: 50px;
  }

  .contact-icon svg {
    width: 24px;
    height: 24px;
  }

  .contact-form {
    padding: var(--spacing-xl);
  }
}
</style>

