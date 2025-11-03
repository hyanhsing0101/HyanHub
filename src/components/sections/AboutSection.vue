<template>
  <section id="about" class="about section">
    <div class="container">
      <h2 class="section-title text-gradient">关于我</h2>

      <div class="about-content">
        <!-- 个人简介 -->
        <div class="about-intro card animate-slide-in-left">
          <div class="avatar-wrapper">
            <img :src="personalInfo.avatar" :alt="personalInfo.name" class="avatar" />
            <div class="avatar-ring"></div>
          </div>
          <h3>{{ personalInfo.name }}</h3>
          <p class="title">{{ personalInfo.title }}</p>
          <p class="bio">{{ personalInfo.bio }}</p>

          <div class="info-items">
            <div class="info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{{ personalInfo.location }}</span>
            </div>
            <div class="info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a>
            </div>
          </div>
        </div>

        <!-- 技能列表 -->
        <div class="skills-wrapper animate-slide-in-right">
          <div v-for="(skillGroup, index) in skills" :key="index" class="skill-group card">
            <h4 class="skill-category">{{ skillGroup.category }}</h4>
            <div class="skill-tags">
              <span v-for="skill in skillGroup.items" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { personalInfo, skills } from '@/assets/data/projects'
</script>

<style scoped>
.about {
  background: var(--bg-primary);
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-3xl);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

/* 个人简介 */
.about-intro {
  text-align: center;
  position: sticky;
  top: 100px;
}

.avatar-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto var(--spacing-xl);
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: var(--radius-lg);
  object-fit: cover;
  border: 4px solid var(--bg-primary);
  box-shadow: var(--shadow-lg);
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-xl);
  animation: rotate 10s linear infinite;
  opacity: 0.3;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.about-intro h3 {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
}

.about-intro .title {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
}

.bio {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  text-align: left;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  text-align: left;
}

.info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--text-secondary);
}

.info-item svg {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.info-item a {
  color: var(--text-secondary);
  transition: color var(--transition-fast);
}

.info-item a:hover {
  color: var(--color-primary);
}

/* 技能列表 */
.skills-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.skill-group {
  padding: var(--spacing-xl);
}

.skill-category {
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  position: relative;
  padding-left: var(--spacing-lg);
}

.skill-category::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 70%;
  background: var(--gradient-tech);
  border-radius: var(--radius-full);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.skill-tag {
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.skill-tag:hover {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .about-intro {
    position: static;
  }
}

@media (max-width: 768px) {
  .avatar-wrapper {
    width: 150px;
    height: 150px;
  }

  .about-intro h3 {
    font-size: 1.5rem;
  }

  .skill-group {
    padding: var(--spacing-lg);
  }

  .skill-category {
    font-size: 1.1rem;
  }

  .skill-tag {
    font-size: 0.85rem;
    padding: var(--spacing-xs) var(--spacing-md);
  }
}
</style>

