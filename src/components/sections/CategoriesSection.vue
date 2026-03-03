<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const observer = ref(null)
const sectionRef = ref(null)

const categories = [
  {
    icon: '🖥️',
    title: 'PCs Personalizados',
    desc: 'Do entry-level ao high-end, montamos seu PC sob medida com os melhores componentes do mercado.',
    tags: ['Entry Level', 'Mid Range', 'High End', 'Workstation'],
    accent: '#00d4ff'
  },
  {
    icon: '🦸',
    title: 'Figures & Hot Toys',
    desc: 'Coleção premium de action figures e Hot Toys para os verdadeiros entusiastas.',
    tags: ['Hot Toys', 'Action Figures', 'Colecionáveis'],
    accent: '#f472b6'
  },
  {
    icon: '🥽',
    title: 'Tech & Gadgets',
    desc: 'Apple Vision Pro, Meta Quest, displays imersivos e o que há de mais moderno em tecnologia.',
    tags: ['Apple Vision', 'MetaQuest', 'VR/AR', 'Displays'],
    accent: '#a78bfa'
  },
  {
    icon: '📱',
    title: 'Acessórios',
    desc: 'Periféricos, capas, cabos e acessórios de celular com qualidade garantida.',
    tags: ['Celular', 'Periféricos', 'Cabos', 'Cases'],
    accent: '#34d399'
  }
]

onMounted(() => {
  observer.value = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) visible.value = true
    },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.value.observe(sectionRef.value)
})
</script>

<template>
  <section id="categorias" class="categories section" ref="sectionRef">
    <div class="container">
      <div class="categories__header" :class="{ visible }">
        <span class="section__label">// categorias</span>
        <h2 class="section__title">
          Tudo que você precisa,<br />
          <span class="neon-text">num só lugar.</span>
        </h2>
        <p class="section__subtitle">
          De PCs gamers customizados a figures colecionáveis e tech de última geração.
        </p>
      </div>

      <div class="categories__grid">
        <div
          v-for="(cat, i) in categories"
          :key="i"
          class="cat-card"
          :class="{ visible }"
          :style="{ '--delay': `${i * 0.12}s`, '--accent': cat.accent }"
        >
          <div class="cat-card__icon">{{ cat.icon }}</div>
          <h3 class="cat-card__title">{{ cat.title }}</h3>
          <p class="cat-card__desc">{{ cat.desc }}</p>
          <div class="cat-card__tags">
            <span v-for="tag in cat.tags" :key="tag" class="cat-card__tag">{{ tag }}</span>
          </div>
          <div class="cat-card__shine"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.categories {
  background: $black;
  padding: $spacing-xl 0;

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

.cat-card {
  position: relative;
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-lg;
  padding: 2rem 1.5rem;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  &:hover {
    border-color: var(--accent);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(var(--accent), 0.08);

    .cat-card__shine {
      opacity: 1;
    }
  }

  &__icon {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }

  &__title {
    font-size: $font-size-lg;
    font-weight: 700;
    color: $white;
    margin-bottom: 0.6rem;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $gray;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  &__tag {
    font-family: $mono;
    font-size: 0.65rem;
    font-weight: 500;
    color: var(--accent);
    background: rgba(0, 212, 255, 0.06);
    border: 1px solid rgba(0, 212, 255, 0.12);
    padding: 0.25rem 0.6rem;
    border-radius: $radius-full;
    letter-spacing: 0.03em;
  }

  &__shine {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: opacity $transition-base;
  }
}
</style>
