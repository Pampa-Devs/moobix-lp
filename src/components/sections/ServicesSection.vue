<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const sectionRef = ref(null)

const services = [
  {
    icon: '⚙️',
    title: 'Montagem Personalizada',
    desc: 'Montamos seu PC do zero, com componentes selecionados pra sua necessidade. Gaming, trabalho ou streaming.',
    highlight: true
  },
  {
    icon: '🔧',
    title: 'Manutenção & Upgrade',
    desc: 'Limpeza, troca térmica, upgrade de componentes. Deixamos sua máquina voando de novo.'
  },
  {
    icon: '🎬',
    title: 'Vídeo de Produto',
    desc: 'Cada PC entregue ganha um vídeo profissional mostrando todos os detalhes da build.'
  },
  {
    icon: '📦',
    title: 'Envio Seguro',
    desc: 'Embalagem reforçada e envio para todo o Brasil com rastreamento completo.'
  },
  {
    icon: '🛡️',
    title: 'Garantia Moobix',
    desc: 'Suporte técnico direto com a equipe. Sem burocracia, sem enrolação.'
  },
  {
    icon: '💬',
    title: 'Consultoria',
    desc: 'Não sabe o que precisa? A gente te ajuda a escolher a config ideal pro teu orçamento.'
  }
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
  <section id="servicos" class="services section" ref="sectionRef">
    <div class="services__bg-line"></div>
    <div class="container">
      <div class="services__header" :class="{ visible }">
        <span class="section__label">// serviços</span>
        <h2 class="section__title">
          Não é só vender.<br />
          É <span class="neon-text">entregar experiência.</span>
        </h2>
        <p class="section__subtitle">
          Do orçamento até a entrega com vídeo — cada detalhe importa.
        </p>
      </div>

      <div class="services__grid">
        <div
          v-for="(svc, i) in services"
          :key="i"
          class="svc-card"
          :class="{ visible, 'svc-card--highlight': svc.highlight }"
          :style="{ '--delay': `${i * 0.1}s` }"
        >
          <div class="svc-card__icon">{{ svc.icon }}</div>
          <h3 class="svc-card__title">{{ svc.title }}</h3>
          <p class="svc-card__desc">{{ svc.desc }}</p>
          <div class="svc-card__number">{{ String(i + 1).padStart(2, '0') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.services {
  background: $black;
  position: relative;

  &__bg-line {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba($neon-blue, 0.08), transparent);
  }

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
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: $desktop) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $mobile) {
      grid-template-columns: 1fr;
    }
  }
}

.svc-card {
  position: relative;
  background: $surface;
  border: 1px solid $border;
  border-radius: $radius-lg;
  padding: 2rem 1.5rem;
  transition: all 0.4s ease;
  overflow: hidden;
  opacity: 0;
  transform: translateY(25px);

  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  &:hover {
    border-color: rgba($neon-blue, 0.3);
    transform: translateY(-3px);
  }

  &--highlight {
    border-color: rgba($neon-blue, 0.25);
    background: linear-gradient(145deg, $surface, rgba($neon-blue, 0.04));

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, $neon-blue, transparent);
    }
  }

  &__icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: $font-size-base;
    font-weight: 700;
    color: $white;
    margin-bottom: 0.5rem;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $gray;
    line-height: 1.7;
  }

  &__number {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-family: $mono;
    font-size: $font-size-xs;
    color: rgba($white, 0.08);
    font-weight: 700;
    letter-spacing: 0.1em;
  }
}
</style>
