<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const el = ref(null)

const builds = [
  { title: 'RTX 5090 Ultimate', tier: 'HIGH END', desc: 'O máximo em performance gaming. Water cooling custom, RGB sincronizado.', color: '#00aaff' },
  { title: 'Stealth Workstation', tier: 'WORKSTATION', desc: 'Silencioso e brutal. Para criadores de conteúdo e profissionais.', color: '#a78bfa' },
  { title: 'RGB Infinity', tier: 'MID RANGE', desc: 'O equilíbrio perfeito entre performance e custo-benefício.', color: '#34d399' },
  { title: 'First Build', tier: 'ENTRY LEVEL', desc: 'Seu primeiro PC gamer montado com carinho e qualidade.', color: '#f59e0b' },
]

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) visible.value = true }, { threshold: 0.08 })
  if (el.value) obs.observe(el.value)
})
</script>

<template>
  <section id="showcase" class="showcase section" ref="el">
    <!-- Full-width featured build -->
    <div class="showcase__hero reveal" :class="{ visible }">
      <div class="showcase__hero-bg">
        <div class="showcase__hero-grid"></div>
      </div>
      <div class="container">
        <div class="showcase__hero-content">
          <span class="section-label">Destaque</span>
          <h2 class="heading-lg">Builds que<br />falam por si.</h2>
          <p class="body-text">
            Cada máquina é uma obra de engenharia. 
            Com vídeo profissional de entrega incluso.
          </p>
          <a href="https://instagram.com/moobixofficial" target="_blank" class="btn btn--ghost" rel="noopener">
            Ver no Instagram
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Build cards -->
    <div class="container">
      <div class="showcase__grid">
        <div
          v-for="(b, i) in builds"
          :key="i"
          class="build reveal"
          :class="[`stagger-${i + 1}`, { visible }]"
        >
          <div class="build__visual">
            <div class="build__pattern" :style="{ '--c': b.color }"></div>
            <span class="build__tier" :style="{ color: b.color }">{{ b.tier }}</span>
          </div>
          <div class="build__info">
            <h3 class="build__title">{{ b.title }}</h3>
            <p class="build__desc">{{ b.desc }}</p>
          </div>
          <div class="build__footer">
            <a href="#contato" class="build__link">
              Orçamento
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.showcase {
  padding: $spacing-2xl 0;
  background: $black;

  &__hero {
    position: relative;
    padding: $spacing-xl 0;
    margin-bottom: $spacing-xl;

    &-bg {
      position: absolute;
      inset: 0;
      overflow: hidden;
    }

    &-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba($white, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba($white, 0.02) 1px, transparent 1px);
      background-size: 80px 80px;
      mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%);
    }

    &-content {
      position: relative;
      z-index: 1;
      max-width: 560px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: $desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
    }
  }
}

.build {
  background: $surface-card;
  border: 1px solid $border;
  overflow: hidden;
  transition: all $transition-base;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: $border-hover;
    transform: translateY(-3px);

    .build__pattern { transform: scale(1.05); }
    .build__link { color: $white; }
  }

  &__visual {
    aspect-ratio: 4 / 3;
    position: relative;
    overflow: hidden;
    background: $surface;
  }

  &__pattern {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 50% 60%, var(--c, $accent), transparent 60%);
    opacity: 0.08;
    transition: transform $transition-slow;
  }

  &__tier {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-family: $font-mono;
    font-size: $font-size-xs;
    font-weight: 600;
    letter-spacing: 0.15em;
  }

  &__info {
    padding: 1.5rem 1.5rem 1rem;
    flex: 1;
  }

  &__title {
    font-family: $font-display;
    font-size: $font-size-lg;
    font-weight: 600;
    color: $white;
    margin-bottom: 0.4rem;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $gray-500;
    line-height: 1.65;
  }

  &__footer {
    padding: 0 1.5rem 1.5rem;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: $font-size-sm;
    font-weight: 500;
    color: $gray-400;
    transition: all $transition-base;
    text-decoration: none;
  }
}
</style>
