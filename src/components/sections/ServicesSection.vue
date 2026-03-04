<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const el = ref(null)

const services = [
  { title: 'Montagem sob Medida', desc: 'Cada componente escolhido a dedo pra sua necessidade. Gaming, trabalho, streaming ou tudo junto.' },
  { title: 'Manutenção & Upgrade', desc: 'Limpeza, troca térmica, upgrade de placa, RAM, SSD. Sua máquina como nova.' },
  { title: 'Vídeo de Entrega', desc: 'Toda build ganha um vídeo profissional mostrando cada detalhe. Conteúdo pronto pro seu feed.' },
  { title: 'Consultoria Técnica', desc: 'Não sabe por onde começar? Montamos a config ideal dentro do seu orçamento.' },
  { title: 'Envio Nacional', desc: 'Embalagem reforçada, seguro e rastreio completo. Para todo o Brasil.' },
  { title: 'Garantia Direta', desc: 'Suporte com a equipe Moobix. Sem burocracia, resposta rápida e solução real.' },
]

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) visible.value = true }, { threshold: 0.1 })
  if (el.value) obs.observe(el.value)
})
</script>

<template>
  <section id="servicos" class="services section" ref="el">
    <div class="container">
      <div class="services__layout">
        <div class="services__head reveal" :class="{ visible }">
          <span class="section-label">Serviços</span>
          <h2 class="heading-lg">
            Não é só vender.<br />
            É entregar experiência.
          </h2>
          <p class="body-text">
            Do primeiro contato até a entrega com vídeo — cada etapa com atenção total.
          </p>
        </div>

        <div class="services__list">
          <div
            v-for="(svc, i) in services"
            :key="i"
            class="svc reveal"
            :class="[`stagger-${i + 1}`, { visible }]"
          >
            <span class="svc__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="svc__content">
              <h3 class="svc__title">{{ svc.title }}</h3>
              <p class="svc__desc">{{ svc.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.services {
  padding: $spacing-2xl 0;
  background: $true-black;

  &__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-xl;
    align-items: start;

    @media (max-width: $desktop) {
      grid-template-columns: 1fr;
      gap: $spacing-lg;
    }
  }

  &__head {
    position: sticky;
    top: 8rem;

    @media (max-width: $desktop) {
      position: static;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
  }
}

.svc {
  display: flex;
  gap: 1.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid $border;
  transition: all $transition-base;

  &:first-child {
    border-top: 1px solid $border;
  }

  &:hover {
    .svc__num { color: $white; }
    .svc__title { color: $white; }
  }

  &__num {
    font-family: $font-mono;
    font-size: $font-size-xs;
    color: $gray-600;
    letter-spacing: 0.1em;
    padding-top: 0.3rem;
    transition: color $transition-base;
    flex-shrink: 0;
    width: 2rem;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-family: $font-display;
    font-size: $font-size-xl;
    font-weight: 600;
    color: $gray-200;
    margin-bottom: 0.4rem;
    transition: color $transition-base;
  }

  &__desc {
    font-size: $font-size-sm;
    color: $gray-500;
    line-height: 1.7;
    max-width: 400px;
  }
}
</style>
