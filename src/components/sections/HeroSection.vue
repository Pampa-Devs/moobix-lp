<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => {
  setTimeout(() => { visible.value = true }, 100)
})
</script>

<template>
  <section id="home" class="hero">
    <div class="hero__bg">
      <div class="hero__grid"></div>
      <div class="hero__glow hero__glow--1"></div>
      <div class="hero__glow hero__glow--2"></div>
      <div class="hero__scanline"></div>
    </div>

    <div class="hero__content" :class="{ visible }">
      <div class="hero__text">
        <div class="hero__badge">
          <span class="hero__badge-dot"></span>
          Novidades toda semana
        </div>

        <h1 class="hero__title">
          Seu setup dos
          <span class="neon-text">sonhos</span>
          começa aqui.
        </h1>

        <p class="hero__subtitle">
          PCs personalizados de alta performance, figures colecionáveis, 
          tech de ponta e acessórios — tudo em um só lugar.
        </p>

        <div class="hero__stats">
          <div class="hero__stat">
            <span class="hero__stat-value">500+</span>
            <span class="hero__stat-label">PCs montados</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-value">100%</span>
            <span class="hero__stat-label">Personalizado</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-value">⭐</span>
            <span class="hero__stat-label">Garantia real</span>
          </div>
        </div>

        <div class="hero__actions">
          <a href="#contato" class="btn btn--primary">
            Monte seu PC
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#showcase" class="btn btn--outline">
            Ver galeria
          </a>
        </div>
      </div>

      <div class="hero__visual">
        <div class="hero__card">
          <div class="hero__card-content">
            <div class="hero__card-icon">🖥️</div>
            <div class="hero__card-label">CUSTOM BUILD</div>
            <div class="hero__card-specs">
              <div class="spec-line">
                <span class="spec-dot"></span>
                <span>RTX 50 Series</span>
              </div>
              <div class="spec-line">
                <span class="spec-dot"></span>
                <span>Intel / AMD</span>
              </div>
              <div class="spec-line">
                <span class="spec-dot"></span>
                <span>Custom RGB</span>
              </div>
            </div>
          </div>
          <div class="hero__card-glow"></div>
        </div>

        <div class="hero__float hero__float--1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
          </svg>
        </div>
        <div class="hero__float hero__float--2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/>
          </svg>
        </div>
        <div class="hero__float hero__float--3">⚡</div>
      </div>
    </div>

    <div class="hero__scroll">
      <span>scroll</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 7rem $spacing-md $spacing-lg;
  background: $deep-black;
  overflow: hidden;

  &__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &__grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba($neon-blue, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba($neon-blue, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%);
  }

  &__glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    animation: pulse-glow 6s ease-in-out infinite;

    &--1 {
      top: -10%;
      left: 30%;
      width: 500px;
      height: 500px;
      background: rgba($neon-blue, 0.12);
    }

    &--2 {
      bottom: -15%;
      right: 20%;
      width: 400px;
      height: 400px;
      background: rgba(99, 102, 241, 0.08);
      animation-delay: 3s;
    }
  }

  &__scanline {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba($neon-blue, 0.15), transparent);
    animation: scan-line 8s linear infinite;
    opacity: 0.5;
  }

  &__content {
    max-width: $xl-desktop;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: $spacing-lg;
    align-items: center;
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: $desktop) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: $spacing-md;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: $spacing-xs;
    background: rgba($neon-blue, 0.08);
    border: 1px solid rgba($neon-blue, 0.2);
    padding: 0.4rem 1rem;
    border-radius: $radius-full;
    font-family: $mono;
    font-size: $font-size-xs;
    font-weight: 500;
    color: $neon-blue;
    width: fit-content;
    letter-spacing: 0.04em;

    @media (max-width: $desktop) {
      margin: 0 auto;
    }

    &-dot {
      width: 7px;
      height: 7px;
      background: #22c55e;
      border-radius: 50%;
      animation: blink 2s ease-in-out infinite;
    }
  }

  &__title {
    font-size: clamp($font-size-4xl, 5.5vw, $font-size-6xl);
    font-weight: 900;
    line-height: 1.05;
    color: $white;
    letter-spacing: -0.03em;
  }

  &__subtitle {
    font-size: $font-size-lg;
    color: $gray;
    line-height: 1.8;
    max-width: 520px;

    @media (max-width: $desktop) {
      margin: 0 auto;
    }
  }

  &__stats {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-sm 0;

    @media (max-width: $desktop) {
      justify-content: center;
    }

    @media (max-width: $mobile) {
      gap: $spacing-sm;
    }
  }

  &__stat {
    display: flex;
    flex-direction: column;
    gap: 2px;

    &-value {
      font-size: $font-size-xl;
      font-weight: 800;
      color: $white;
    }

    &-label {
      font-size: $font-size-xs;
      color: rgba($white, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-family: $mono;
    }

    &-divider {
      width: 1px;
      height: 36px;
      background: rgba($white, 0.12);

      @media (max-width: $mobile) {
        display: none;
      }
    }
  }

  &__actions {
    display: flex;
    gap: $spacing-sm;
    flex-wrap: wrap;

    @media (max-width: $desktop) {
      justify-content: center;
    }

    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }

  // Right visual
  &__visual {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: $desktop) {
      order: -1;
      margin-bottom: $spacing-sm;
    }
  }

  &__card {
    position: relative;
    width: 320px;
    padding: 2.5rem 2rem;
    background: linear-gradient(145deg, rgba($surface-elevated, 0.9), rgba($surface, 0.6));
    border: 1px solid rgba($neon-blue, 0.15);
    border-radius: $radius-xl;
    backdrop-filter: blur(20px);

    @media (max-width: $mobile) {
      width: 260px;
      padding: 2rem 1.5rem;
    }

    &-content {
      position: relative;
      z-index: 1;
    }

    &-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    &-label {
      font-family: $mono;
      font-size: $font-size-xs;
      font-weight: 700;
      color: $neon-blue;
      letter-spacing: 0.2em;
      margin-bottom: 1.5rem;
    }

    &-specs {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    &-glow {
      position: absolute;
      inset: -1px;
      border-radius: $radius-xl;
      background: linear-gradient(135deg, rgba($neon-blue, 0.2), transparent 50%, rgba(99, 102, 241, 0.15));
      z-index: 0;
      filter: blur(1px);
    }
  }

  &__float {
    position: absolute;
    padding: 0.75rem;
    background: rgba($surface-elevated, 0.85);
    border: 1px solid rgba($neon-blue, 0.2);
    border-radius: $radius-md;
    color: $neon-blue;
    animation: float 5s ease-in-out infinite;
    backdrop-filter: blur(10px);

    &--1 {
      top: 10px;
      right: -20px;
      animation-delay: 0s;
    }

    &--2 {
      bottom: 50px;
      left: -10px;
      animation-delay: 1.5s;
    }

    &--3 {
      bottom: -10px;
      right: 40px;
      animation-delay: 3s;
      font-size: 1.2rem;
    }
  }

  &__scroll {
    position: absolute;
    bottom: $spacing-md;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba($white, 0.3);
    font-family: $mono;
    font-size: $font-size-xs;
    letter-spacing: 0.15em;

    &-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, rgba($neon-blue, 0.5), transparent);
      animation: scrollPulse 2.5s ease-in-out infinite;
    }

    @media (max-width: $tablet) {
      display: none;
    }
  }
}

.spec-line {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: $font-size-sm;
  color: rgba($white, 0.7);
  font-weight: 500;
}

.spec-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: $neon-blue;
  box-shadow: 0 0 8px $accent-glow;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}
</style>
