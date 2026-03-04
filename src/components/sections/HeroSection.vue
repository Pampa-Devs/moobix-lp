<script setup>
import { ref, onMounted } from 'vue'
const loaded = ref(false)
onMounted(() => { setTimeout(() => { loaded.value = true }, 150) })
</script>

<template>
  <section id="home" class="hero">
    <!-- Background atmosphere -->
    <div class="hero__backdrop">
      <div class="hero__gradient-top"></div>
      <div class="hero__gradient-bottom"></div>
    </div>

    <!-- Main content -->
    <div class="hero__content" :class="{ loaded }">
      <div class="hero__eyebrow">
        <div class="hero__line"></div>
        <span>Custom PC · Figures · Tech</span>
      </div>

      <h1 class="hero__title">
        Seu setup.<br />
        <span class="hero__title-accent">Sem limites.</span>
      </h1>

      <p class="hero__desc">
        PCs personalizados de alta performance, figures colecionáveis 
        e tecnologia premium — montado sob medida pra você.
      </p>

      <div class="hero__actions">
        <a href="#contato" class="btn btn--primary">
          Montar meu PC
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#showcase" class="btn btn--ghost">Explorar galeria</a>
      </div>
    </div>

    <!-- Bottom stats bar — MSI-inspired -->
    <div class="hero__bar" :class="{ loaded }">
      <div class="hero__bar-inner">
        <div class="hero__stat">
          <span class="hero__stat-num">500+</span>
          <span class="hero__stat-label">PCs Entregues</span>
        </div>
        <div class="hero__stat-sep"></div>
        <div class="hero__stat">
          <span class="hero__stat-num">RTX 50</span>
          <span class="hero__stat-label">Última Geração</span>
        </div>
        <div class="hero__stat-sep"></div>
        <div class="hero__stat">
          <span class="hero__stat-num">100%</span>
          <span class="hero__stat-label">Personalizado</span>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="hero__scroll" :class="{ loaded }">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 8rem 0 0;
  background: $true-black;
  overflow: hidden;

  &__backdrop {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &__gradient-top {
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 70%;
    background: radial-gradient(ellipse at 50% 20%, rgba($accent, 0.04) 0%, transparent 65%);
  }

  &__gradient-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background: linear-gradient(to top, $true-black, transparent);
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 clamp(1.5rem, 4vw, 4rem);
    position: relative;
    z-index: 1;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1);

    &.loaded {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__eyebrow {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.5rem;

    span {
      font-family: $font-mono;
      font-size: $font-size-xs;
      color: $gray-400;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }
  }

  &__line {
    width: 40px;
    height: 1px;
    background: $gray-600;
  }

  &__title {
    font-family: $font-display;
    font-size: $font-size-hero;
    font-weight: 700;
    line-height: 0.95;
    letter-spacing: -0.04em;
    color: $white;
    margin-bottom: 2rem;

    &-accent {
      color: $gray-300;
    }
  }

  &__desc {
    font-size: clamp($font-size-base, 1.5vw, $font-size-lg);
    color: $gray-500;
    line-height: 1.8;
    max-width: 480px;
    margin-bottom: 3rem;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: $mobile) {
      flex-direction: column;
      gap: 1.2rem;
    }
  }

  // Bottom bar
  &__bar {
    border-top: 1px solid $border;
    padding: 1.5rem 0;
    position: relative;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.8s ease 0.5s;

    &.loaded { opacity: 1; }

    &-inner {
      max-width: $xl-desktop;
      margin: 0 auto;
      padding: 0 clamp(1.5rem, 4vw, 4rem);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;

      @media (max-width: $mobile) {
        gap: 1.5rem;
      }
    }
  }

  &__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;

    &-num {
      font-family: $font-display;
      font-size: $font-size-lg;
      font-weight: 700;
      color: $white;
      letter-spacing: -0.01em;
    }

    &-label {
      font-family: $font-mono;
      font-size: 0.6rem;
      color: $gray-500;
      text-transform: uppercase;
      letter-spacing: 0.15em;
    }

    &-sep {
      width: 1px;
      height: 28px;
      background: $border;
    }
  }

  // Scroll indicator
  &__scroll {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.6s ease 1s;

    &.loaded { opacity: 1; }

    &-line {
      width: 1px;
      height: 48px;
      background: linear-gradient(to bottom, rgba($white, 0.3), transparent);
      animation: scrollDown 2s ease-in-out infinite;
    }

    @media (max-width: $tablet) { display: none; }
  }
}

@keyframes scrollDown {
  0% { opacity: 0.2; transform: scaleY(0.5); transform-origin: top; }
  50% { opacity: 0.6; transform: scaleY(1); }
  100% { opacity: 0.2; transform: scaleY(0.5); transform-origin: bottom; }
}
</style>
