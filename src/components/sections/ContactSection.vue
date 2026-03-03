<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const obs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) visible.value = true },
    { threshold: 0.15 }
  )
  if (sectionRef.value) obs.observe(sectionRef.value)
})
</script>

<template>
  <section id="contato" class="contact section" ref="sectionRef">
    <div class="contact__glow"></div>
    <div class="container">
      <div class="contact__card" :class="{ visible }">
        <div class="contact__content">
          <span class="section__label">// contato</span>
          <h2 class="contact__title">
            Bora montar seu
            <span class="neon-text">próximo setup?</span>
          </h2>
          <p class="contact__desc">
            Fala com a gente pelo WhatsApp. Orçamento sem compromisso, 
            atendimento direto e rápido. Sem enrolação.
          </p>

          <div class="contact__actions">
            <a href="https://wa.me/5551999999999?text=Oi!%20Quero%20saber%20mais%20sobre%20os%20PCs%20da%20Moobix" 
               target="_blank" rel="noopener" class="btn btn--primary btn--lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chamar no WhatsApp
            </a>
            <a href="https://instagram.com/moobixofficial" target="_blank" rel="noopener" class="btn btn--outline">
              Ver Instagram
            </a>
          </div>

          <div class="contact__info">
            <div class="contact__info-item">
              <span class="contact__info-label">Instagram</span>
              <span class="contact__info-value">@moobixofficial</span>
            </div>
            <div class="contact__info-item">
              <span class="contact__info-label">Atendimento</span>
              <span class="contact__info-value">Seg — Sáb, 9h — 18h</span>
            </div>
          </div>
        </div>

        <div class="contact__decoration">
          <div class="contact__hex contact__hex--1">⬡</div>
          <div class="contact__hex contact__hex--2">⬡</div>
          <div class="contact__hex contact__hex--3">⬡</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.contact {
  background: $black;
  position: relative;

  &__glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 400px;
    background: radial-gradient(ellipse, rgba($neon-blue, 0.06), transparent 70%);
    pointer-events: none;
  }

  &__card {
    position: relative;
    background: linear-gradient(145deg, $surface, rgba($neon-blue, 0.03));
    border: 1px solid rgba($neon-blue, 0.15);
    border-radius: $radius-xl;
    padding: $spacing-xl $spacing-lg;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: $tablet) {
      padding: $spacing-lg $spacing-md;
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 600px;
  }

  &__title {
    font-size: clamp($font-size-3xl, 4vw, $font-size-4xl);
    font-weight: 800;
    color: $white;
    line-height: 1.15;
    margin-bottom: $spacing-sm;
    letter-spacing: -0.02em;
  }

  &__desc {
    font-size: $font-size-lg;
    color: $gray;
    line-height: 1.8;
    margin-bottom: $spacing-md;
  }

  &__actions {
    display: flex;
    gap: $spacing-sm;
    flex-wrap: wrap;
    margin-bottom: $spacing-md;

    .btn--lg {
      padding: 1rem 2rem;
      font-size: $font-size-base;
    }

    @media (max-width: $mobile) {
      flex-direction: column;
    }
  }

  &__info {
    display: flex;
    gap: $spacing-lg;

    @media (max-width: $mobile) {
      flex-direction: column;
      gap: $spacing-sm;
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    &-label {
      font-family: $mono;
      font-size: $font-size-xs;
      color: rgba($white, 0.4);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    &-value {
      font-size: $font-size-sm;
      color: $white;
      font-weight: 500;
    }
  }

  &__decoration {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40%;
    pointer-events: none;
    overflow: hidden;

    @media (max-width: $desktop) {
      display: none;
    }
  }

  &__hex {
    position: absolute;
    color: rgba($neon-blue, 0.06);
    font-size: 10rem;
    line-height: 1;
    animation: float 8s ease-in-out infinite;

    &--1 {
      top: -20px;
      right: 40px;
    }

    &--2 {
      bottom: 20px;
      right: 120px;
      font-size: 6rem;
      animation-delay: 2s;
    }

    &--3 {
      top: 50%;
      right: -20px;
      font-size: 8rem;
      animation-delay: 4s;
    }
  }
}
</style>
