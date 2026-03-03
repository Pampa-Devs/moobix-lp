<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const sectionRef = ref(null)
const activeFilter = ref('all')

const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'pc', label: 'PCs' },
  { id: 'figure', label: 'Figures' },
  { id: 'tech', label: 'Tech' }
]

const items = [
  { id: 1, type: 'pc', title: 'RTX 5090 Build', subtitle: 'High End Gaming', tier: 'HIGH END', color: '#00d4ff' },
  { id: 2, type: 'pc', title: 'Workstation Pro', subtitle: 'Produtividade Máxima', tier: 'WORKSTATION', color: '#a78bfa' },
  { id: 3, type: 'figure', title: 'Hot Toys Collection', subtitle: 'Marvel Series', tier: 'PREMIUM', color: '#f472b6' },
  { id: 4, type: 'pc', title: 'RGB Infinity', subtitle: 'Mid Range Gaming', tier: 'MID RANGE', color: '#34d399' },
  { id: 5, type: 'tech', title: 'Apple Vision Pro', subtitle: 'Realidade Mista', tier: 'TECH', color: '#e2e8f0' },
  { id: 6, type: 'pc', title: 'Stealth Black', subtitle: 'Entry Level Power', tier: 'ENTRY', color: '#00d4ff' }
]

const filteredItems = ref(items)

const setFilter = (id) => {
  activeFilter.value = id
  filteredItems.value = id === 'all' ? items : items.filter(i => i.type === id)
}

onMounted(() => {
  const obs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.1 }
  )
  if (sectionRef.value) obs.observe(sectionRef.value)
})
</script>

<template>
  <section id="showcase" class="showcase section" ref="sectionRef">
    <div class="container">
      <div class="showcase__header" :class="{ visible }">
        <span class="section__label">// galeria</span>
        <h2 class="section__title">
          Builds que falam<br />
          <span class="neon-text">por si só.</span>
        </h2>
      </div>

      <div class="showcase__filters" :class="{ visible }">
        <button
          v-for="f in filters"
          :key="f.id"
          class="showcase__filter"
          :class="{ active: activeFilter === f.id }"
          @click="setFilter(f.id)"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="showcase__grid">
        <div
          v-for="(item, i) in filteredItems"
          :key="item.id"
          class="showcase-card"
          :class="{ visible }"
          :style="{ '--delay': `${i * 0.1}s`, '--accent': item.color }"
        >
          <div class="showcase-card__visual">
            <div class="showcase-card__placeholder">
              <div class="showcase-card__pattern"></div>
              <span class="showcase-card__emoji">
                {{ item.type === 'pc' ? '🖥️' : item.type === 'figure' ? '🦸' : '🥽' }}
              </span>
            </div>
            <div class="showcase-card__badge">{{ item.tier }}</div>
          </div>
          <div class="showcase-card__info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="showcase__cta" :class="{ visible }">
        <p>Quer ver mais? Segue a gente no Instagram.</p>
        <a href="https://instagram.com/moobixofficial" target="_blank" rel="noopener" class="btn btn--outline">
          @moobixofficial
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.showcase {
  background: $deep-black;

  &__header {
    margin-bottom: $spacing-md;
    opacity: 0;
    transform: translateY(25px);
    transition: all 0.7s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__filters {
    display: flex;
    gap: 0.5rem;
    margin-bottom: $spacing-md;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.6s ease 0.2s;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__filter {
    font-family: $mono;
    font-size: $font-size-xs;
    font-weight: 500;
    color: $gray;
    background: $surface;
    border: 1px solid $border;
    padding: 0.5rem 1.2rem;
    border-radius: $radius-full;
    transition: all $transition-base;
    letter-spacing: 0.03em;
    cursor: pointer;

    &:hover {
      color: $neon-blue;
      border-color: rgba($neon-blue, 0.3);
    }

    &.active {
      background: rgba($neon-blue, 0.1);
      color: $neon-blue;
      border-color: rgba($neon-blue, 0.4);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: $desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__cta {
    text-align: center;
    margin-top: $spacing-lg;
    opacity: 0;
    transition: all 0.6s ease 0.4s;

    &.visible {
      opacity: 1;
    }

    p {
      color: $gray;
      font-size: $font-size-sm;
      margin-bottom: $spacing-sm;
    }
  }
}

.showcase-card {
  border-radius: $radius-lg;
  overflow: hidden;
  background: $surface;
  border: 1px solid $border;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(25px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  &:hover {
    border-color: var(--accent);
    transform: translateY(-3px);

    .showcase-card__placeholder {
      transform: scale(1.03);
    }
  }

  &__visual {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
  }

  &__placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba($surface-elevated, 1), rgba($neon-blue, 0.05));
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s ease;
    position: relative;
  }

  &__pattern {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 30% 40%, rgba(var(--accent), 0.06) 0%, transparent 50%),
      linear-gradient(rgba($neon-blue, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba($neon-blue, 0.02) 1px, transparent 1px);
    background-size: 100%, 20px 20px, 20px 20px;
  }

  &__emoji {
    font-size: 3rem;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.3));
  }

  &__badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-family: $mono;
    font-size: 0.6rem;
    font-weight: 700;
    color: var(--accent);
    background: rgba($black, 0.7);
    backdrop-filter: blur(10px);
    padding: 0.3rem 0.7rem;
    border-radius: $radius-full;
    letter-spacing: 0.15em;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  &__info {
    padding: 1.2rem 1.5rem;

    h3 {
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
</style>
