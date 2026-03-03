<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const sectionRef = ref(null)

const brands = [
  { name: 'NVIDIA', icon: '🟢' },
  { name: 'AMD', icon: '🔴' },
  { name: 'Intel', icon: '🔵' },
  { name: 'MSI', icon: '⚡' },
  { name: 'Corsair', icon: '🎮' },
  { name: 'ASUS', icon: '💎' },
  { name: 'Porsche Design', icon: '🏎️' },
  { name: 'Apple', icon: '🍎' },
  { name: 'Meta', icon: '🥽' },
  { name: 'Hot Toys', icon: '🦸' }
]

const specs = [
  { label: 'RTX 5090 / 5080 / 5070', desc: 'Última geração NVIDIA' },
  { label: 'DDR5 até 128GB', desc: 'Memória de alta velocidade' },
  { label: 'SSD NVMe Gen5', desc: 'Armazenamento ultrarrápido' },
  { label: 'Custom Water Cooling', desc: 'Refrigeração líquida personalizada' }
]

onMounted(() => {
  const obs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.1 }
  )
  if (sectionRef.value) obs.observe(sectionRef.value)
})
</script>

<template>
  <section id="tech" class="tech section" ref="sectionRef">
    <div class="container">
      <div class="tech__header" :class="{ visible }">
        <span class="section__label">// tecnologia</span>
        <h2 class="section__title">
          Só trabalhamos com<br />
          <span class="neon-text">o que há de melhor.</span>
        </h2>
      </div>

      <div class="tech__content" :class="{ visible }">
        <div class="tech__brands">
          <div v-for="(b, i) in brands" :key="i" class="tech__brand" :style="{ '--delay': `${i * 0.06}s` }">
            <span class="tech__brand-icon">{{ b.icon }}</span>
            <span class="tech__brand-name">{{ b.name }}</span>
          </div>
        </div>

        <div class="tech__specs">
          <div v-for="(s, i) in specs" :key="i" class="tech__spec" :style="{ '--delay': `${i * 0.1 + 0.3}s` }">
            <div class="tech__spec-indicator">
              <div class="tech__spec-dot"></div>
              <div class="tech__spec-line" v-if="i < specs.length - 1"></div>
            </div>
            <div class="tech__spec-content">
              <h4>{{ s.label }}</h4>
              <p>{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.tech {
  background: $deep-black;

  &__header {
    margin-bottom: $spacing-lg;
    opacity: 0;
    transform: translateY(25px);
    transition: all 0.7s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: $spacing-lg;
    align-items: start;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.7s ease 0.2s;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: $desktop) {
      grid-template-columns: 1fr;
      gap: $spacing-md;
    }
  }

  &__brands {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    @media (max-width: $tablet) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: $mobile) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 1rem;
    background: $surface;
    border: 1px solid $border;
    border-radius: $radius-md;
    transition: all 0.3s ease;
    transition-delay: var(--delay);

    &:hover {
      border-color: rgba($neon-blue, 0.3);
      transform: translateY(-2px);
    }

    &-icon {
      font-size: 1.5rem;
    }

    &-name {
      font-family: $mono;
      font-size: $font-size-xs;
      font-weight: 600;
      color: $gray;
      letter-spacing: 0.05em;
    }
  }

  &__specs {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  &__spec {
    display: flex;
    gap: 1.2rem;
    transition-delay: var(--delay);

    &-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0.3rem;
    }

    &-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $neon-blue;
      box-shadow: 0 0 12px $accent-glow;
      flex-shrink: 0;
    }

    &-line {
      width: 1px;
      flex: 1;
      min-height: 30px;
      background: rgba($neon-blue, 0.15);
    }

    &-content {
      padding-bottom: 2rem;

      h4 {
        font-size: $font-size-base;
        font-weight: 700;
        color: $white;
        margin-bottom: 0.2rem;
      }

      p {
        font-size: $font-size-sm;
        color: $gray;
      }
    }
  }
}
</style>
