<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 60 }
const toggle = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}
const close = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="nav" :class="{ scrolled }">
    <div class="nav__inner">
      <a href="#home" class="nav__logo" @click="close">
        <span class="nav__wordmark">MOOBIX</span>
      </a>

      <div class="nav__menu" :class="{ open: menuOpen }">
        <a href="#categorias" @click="close">Produtos</a>
        <a href="#showcase" @click="close">Galeria</a>
        <a href="#servicos" @click="close">Serviços</a>
        <a href="#tech" @click="close">Tecnologia</a>
        <a href="#contato" @click="close" class="nav__cta">Contato</a>
      </div>

      <button class="nav__toggle" :class="{ open: menuOpen }" @click="toggle" aria-label="Menu">
        <span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.4rem 0;
  transition: all $transition-base;

  &.scrolled {
    background: rgba($true-black, 0.92);
    backdrop-filter: blur(30px) saturate(1.3);
    padding: 0.9rem 0;
    border-bottom: 1px solid $border;
  }

  &__inner {
    max-width: $xl-desktop;
    margin: 0 auto;
    padding: 0 clamp(1.5rem, 4vw, 4rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    z-index: 101;
    text-decoration: none;
  }

  &__wordmark {
    font-family: $font-display;
    font-size: 1.1rem;
    font-weight: 800;
    color: $white;
    letter-spacing: 0.18em;
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 2.8rem;

    a {
      font-size: $font-size-sm;
      font-weight: 400;
      color: $gray-300;
      transition: color $transition-fast;
      letter-spacing: 0.01em;

      &:hover { color: $white; }
    }

    @media (max-width: $desktop) {
      position: fixed;
      inset: 0;
      background: $true-black;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.5rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease;

      &.open {
        opacity: 1;
        pointer-events: all;
      }

      a {
        font-size: $font-size-2xl;
        font-weight: 500;
        color: $white;
      }
    }
  }

  &__cta {
    color: $white !important;
    font-weight: 500 !important;
  }

  &__toggle {
    display: none;
    flex-direction: column;
    gap: 6px;
    padding: 6px;
    z-index: 101;

    @media (max-width: $desktop) { display: flex; }

    span {
      width: 22px;
      height: 1.5px;
      background: $white;
      transition: all $transition-base;
    }

    &.open {
      span:first-child { transform: rotate(45deg) translate(2.5px, 2.5px); }
      span:last-child { transform: rotate(-45deg) translate(2.5px, -2.5px); }
    }
  }
}
</style>
