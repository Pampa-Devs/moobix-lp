<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const el = ref(null)

onMounted(() => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) visible.value = true }, { threshold: 0.15 })
  if (el.value) obs.observe(el.value)
})
</script>

<template>
  <section id="contato" class="contact section" ref="el">
    <div class="container">
      <div class="contact__inner reveal" :class="{ visible }">
        <div class="contact__content">
          <span class="section-label">Contato</span>
          <h2 class="heading-lg">
            Pronto pra montar<br />
            seu próximo setup?
          </h2>
          <p class="body-text">
            Chama no WhatsApp. Orçamento sem compromisso, 
            atendimento direto e sem enrolação.
          </p>

          <div class="contact__buttons">
            <a href="https://wa.me/5551999999999?text=Oi!%20Quero%20saber%20mais%20sobre%20a%20Moobix"
               target="_blank" rel="noopener" class="btn btn--accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://instagram.com/moobixofficial" target="_blank" rel="noopener" class="btn btn--outline">
              Instagram
            </a>
          </div>
        </div>

        <div class="contact__meta">
          <div class="contact__meta-item">
            <span class="contact__meta-label">Instagram</span>
            <span class="contact__meta-value">@moobixofficial</span>
          </div>
          <div class="contact__meta-item">
            <span class="contact__meta-label">Atendimento</span>
            <span class="contact__meta-value">Seg — Sáb · 9h às 18h</span>
          </div>
          <div class="contact__meta-item">
            <span class="contact__meta-label">Localização</span>
            <span class="contact__meta-value">RS, Brasil</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.contact {
  padding: $spacing-2xl 0;
  background: $true-black;

  &__inner {
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
    gap: $spacing-xl;
    align-items: end;
    padding-top: $spacing-lg;
    border-top: 1px solid $border;

    @media (max-width: $desktop) {
      grid-template-columns: 1fr;
      gap: $spacing-lg;
    }
  }

  &__content {
    .heading-lg {
      margin-bottom: 1.2rem;
    }

    .body-text {
      margin-bottom: 2.5rem;
    }
  }

  &__buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    &-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    &-label {
      font-family: $font-mono;
      font-size: $font-size-xs;
      color: $gray-600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    &-value {
      font-size: $font-size-base;
      color: $gray-300;
      font-weight: 500;
    }
  }
}
</style>
