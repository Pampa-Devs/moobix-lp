<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner">
      <a href="#home" class="nav__logo" @click="closeMenu">
        <span class="nav__logo-icon">⬡</span>
        <span class="nav__logo-text">moobix</span>
      </a>

      <div class="nav__links" :class="{ 'nav__links--open': menuOpen }">
        <a href="#categorias" @click="closeMenu">Produtos</a>
        <a href="#showcase" @click="closeMenu">Galeria</a>
        <a href="#servicos" @click="closeMenu">Serviços</a>
        <a href="#tech" @click="closeMenu">Tech</a>
        <a href="#contato" class="btn btn--primary" @click="closeMenu">Fale Conosco</a>
      </div>

      <button class="nav__hamburger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
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
  padding: 1.2rem 0;
  transition: all $transition-base;

  &--scrolled {
    background: rgba($deep-black, 0.88);
    backdrop-filter: blur(24px) saturate(1.2);
    border-bottom: 1px solid $border;
    padding: 0.7rem 0;
  }

  &__inner {
    max-width: $xl-desktop;
    margin: 0 auto;
    padding: 0 $spacing-md;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $tablet) {
      padding: 0 $spacing-sm;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    z-index: 101;

    &-icon {
      font-size: 1.6rem;
      color: $neon-blue;
      filter: drop-shadow(0 0 8px $accent-glow);
      line-height: 1;
    }

    &-text {
      font-family: $font-family;
      font-size: 1.4rem;
      font-weight: 700;
      color: $white;
      letter-spacing: -0.02em;
    }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 2.5rem;

    a:not(.btn) {
      font-size: $font-size-sm;
      font-weight: 500;
      color: $gray;
      transition: color $transition-fast;
      letter-spacing: 0.01em;

      &:hover {
        color: $neon-blue;
      }
    }

    .btn {
      padding: 0.6rem 1.5rem;
      font-size: $font-size-sm;
    }

    @media (max-width: $desktop) {
      position: fixed;
      inset: 0;
      background: rgba($deep-black, 0.97);
      backdrop-filter: blur(30px);
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      &--open {
        transform: translateX(0);
      }

      a:not(.btn) {
        font-size: $font-size-2xl;
        font-weight: 600;
        color: $white;
      }

      .btn {
        font-size: $font-size-lg;
        padding: 1rem 2.5rem;
      }
    }
  }

  &__hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
    z-index: 101;

    @media (max-width: $desktop) {
      display: flex;
    }

    span {
      width: 24px;
      height: 2px;
      background: $white;
      border-radius: 2px;
      transition: all $transition-base;
    }

    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  }
}
</style>
