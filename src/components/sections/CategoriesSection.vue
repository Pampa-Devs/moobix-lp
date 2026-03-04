<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const el = ref(null)

const categories = [
  {
    id: 'pc',
    title: 'PCs Personalizados',
    subtitle: 'Entry Level ao High End',
    desc: 'Montamos do zero com os melhores componentes. Gaming, trabalho ou streaming.',
    icon: '🖥️',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d1117 100%)'
  },
  {
    id: 'figures',
    title: 'Figures & Hot Toys',
    subtitle: 'Coleção Premium',
    desc: 'Action figures e Hot Toys de alta fidelidade para colecionadores exigentes.',
    icon: '🦸',
    gradient: 'linear-gradient(135deg, #1a0f0f 0%, #0d1117 100%)'
  },
  {
    id: 'tech',
    title: 'Tech & VR',
    subtitle: 'Última Geração',
    desc: 'Apple Vision Pro, MetaQuest, displays imersivos e o futuro da tecnologia.',
    icon: '🥽',
    gradient: 'linear-gradient(135deg, #0f0a1a 0%, #0d1117 100%)'
  },
  {
    id: 'acessorios',
    title: 'Acessórios',
    subtitle: 'Celular & Periféricos',
    desc: 'Cases, cabos, periféricos gamers e tudo pra completar seu setup.',
    icon: '📱',
    gradient: 'linear-gradient(135deg, #0a1a0f 0%, #0d1117 100%)'
  }
]

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) visible.value = true }, { threshold: 0.1 })
  if (el.value) obs.observe(el.value)
})
</script>

<template>
  <section id="categorias" class="categories section" ref="el">
    <div class="container">
      <div class="categories__head reveal" :class="{ visible }">
        <span class="section-label">Produtos</span>
        <h2 class="heading-lg">
          Descubra o<br />universo Moobix.
        </h2>
      </div>

      <div class="categories__grid">
        <a
          v-for="(cat, i) in categories"
          :key="cat.id"
          href="#contato"
          class="cat reveal"
          :class="[`stagger-${i + 1}`, { visible }]"
        >
          <div class="cat__visual" :style="{ background: cat.gradient }">
            <span class="cat__icon">{{ cat.icon }}</span>
          </div>
          <div class="cat__body">
            <span class="cat__eyebrow">{{ cat.subtitle }}</span>
            <h3 class="cat__title">{{ cat.title }}</h3>
            <p class="cat__desc">{{ cat.desc }}</p>
            <span class="cat__link">
              Saiba mais
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.categories {
  padding: $spacing-2xl 0;
  background: $true-black;

  &__head {
    margin-bottom: $spacing-lg;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: $border;
    border: 1px solid $border;

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
    }
  }
}

.cat {
  display: flex;
  flex-direction: column;
  background: $true-black;
  text-decoration: none;
  transition: all $transition-base;
  overflow: hidden;

  &:hover {
    .cat__visual { transform: scale(1.02); }
    .cat__link { color: $white; gap: 0.6rem; }
  }

  &__visual {
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform $transition-slow;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 60%, $true-black);
    }
  }

  &__icon {
    font-size: 4rem;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 30px rgba(0,0,0,0.5));
  }

  &__body {
    padding: 1.8rem 2rem 2.2rem;
  }

  &__eyebrow {
    font-family: $font-mono;
    font-size: $font-size-xs;
    color: $gray-500;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    display: block;
    margin-bottom: 0.6rem;
  }

  &__title {
    font-family: $font-display;
    font-size: $font-size-2xl;
    font-weight: 600;
    color: $white;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $gray-500;
    line-height: 1.7;
    margin-bottom: 1.2rem;
    max-width: 360px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: $font-size-sm;
    font-weight: 500;
    color: $gray-400;
    transition: all $transition-base;
  }
}
</style>
