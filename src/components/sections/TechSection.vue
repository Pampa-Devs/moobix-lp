<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const el = ref(null)

const brands = ['NVIDIA', 'AMD', 'Intel', 'MSI', 'ASUS', 'Corsair', 'Porsche Design', 'Apple', 'Meta', 'Hot Toys']

const specs = [
  { label: 'GeForce RTX 50 Series', note: 'Última geração NVIDIA — 5090 / 5080 / 5070' },
  { label: 'DDR5 até 128GB', note: 'Memória de velocidade extrema para workloads pesados' },
  { label: 'NVMe Gen5 SSD', note: 'Armazenamento ultrarrápido — até 14.000 MB/s' },
  { label: 'Custom Liquid Cooling', note: 'Refrigeração líquida personalizada sob medida' },
]

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) visible.value = true }, { threshold: 0.1 })
  if (el.value) obs.observe(el.value)
})
</script>

<template>
  <section id="tech" class="tech section" ref="el">
    <div class="container">
      <div class="tech__head reveal" :class="{ visible }">
        <span class="section-label">Tecnologia</span>
        <h2 class="heading-lg">
          Componentes<br />
          de referência.
        </h2>
      </div>

      <!-- Specs -->
      <div class="tech__specs reveal" :class="{ visible }">
        <div v-for="(s, i) in specs" :key="i" class="spec" :class="`stagger-${i + 1}`">
          <div class="spec__indicator">
            <div class="spec__dot"></div>
          </div>
          <div>
            <h4 class="spec__label">{{ s.label }}</h4>
            <p class="spec__note">{{ s.note }}</p>
          </div>
        </div>
      </div>

      <!-- Brands marquee -->
      <div class="tech__brands reveal" :class="{ visible }">
        <div class="tech__brands-track">
          <span v-for="(b, i) in [...brands, ...brands]" :key="i" class="tech__brand">{{ b }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.tech {
  padding: $spacing-2xl 0;
  background: $surface;

  &__head {
    margin-bottom: $spacing-lg;
  }

  &__specs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    margin-bottom: $spacing-xl;
    border-top: 1px solid $border;

    @media (max-width: $tablet) {
      grid-template-columns: 1fr;
    }
  }

  &__brands {
    overflow: hidden;
    padding: $spacing-md 0;
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;

    &-track {
      display: flex;
      gap: 4rem;
      animation: marquee 30s linear infinite;
      width: max-content;
    }
  }

  &__brand {
    font-family: $font-display;
    font-size: $font-size-sm;
    font-weight: 600;
    color: $gray-600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    white-space: nowrap;
    flex-shrink: 0;
  }
}

.spec {
  display: flex;
  gap: 1.2rem;
  padding: 2rem;
  border-bottom: 1px solid $border;

  &:nth-child(odd) {
    border-right: 1px solid $border;

    @media (max-width: $tablet) {
      border-right: none;
    }
  }

  &__indicator {
    padding-top: 0.5rem;
    flex-shrink: 0;
  }

  &__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $accent;
  }

  &__label {
    font-family: $font-display;
    font-size: $font-size-lg;
    font-weight: 600;
    color: $white;
    margin-bottom: 0.3rem;
  }

  &__note {
    font-size: $font-size-sm;
    color: $gray-500;
    line-height: 1.6;
  }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
