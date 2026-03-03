<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <a href="#home" class="footer__logo">
            <span class="footer__logo-icon">⬡</span>
            <span class="footer__logo-text">moobix</span>
          </a>
          <p class="footer__tagline">PCs Personalizados, Figures & Tech.</p>
        </div>

        <div class="footer__links">
          <a href="#categorias">Produtos</a>
          <a href="#showcase">Galeria</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </div>

        <div class="footer__social">
          <a href="https://instagram.com/moobixofficial" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2025 Moobix. Todos os direitos reservados.</p>
        <p class="footer__credit">
          Desenvolvido por <a href="https://pampadevs.com" target="_blank" rel="noopener">Pampa Devs</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.footer {
  background: $deep-black;
  border-top: 1px solid $border;
  padding: $spacing-lg 0 $spacing-md;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: $spacing-md;
    border-bottom: 1px solid rgba($white, 0.05);
    margin-bottom: $spacing-md;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: $spacing-md;
      text-align: center;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &-icon {
      font-size: 1.4rem;
      color: $neon-blue;
      filter: drop-shadow(0 0 6px $accent-glow);
    }

    &-text {
      font-size: 1.3rem;
      font-weight: 700;
      color: $white;
      letter-spacing: -0.02em;
    }
  }

  &__tagline {
    font-size: $font-size-sm;
    color: $gray;
  }

  &__links {
    display: flex;
    gap: 2rem;

    a {
      font-size: $font-size-sm;
      color: $gray;
      transition: color $transition-fast;
      font-weight: 500;

      &:hover {
        color: $neon-blue;
      }
    }

    @media (max-width: $mobile) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.2rem;
    }
  }

  &__social {
    a {
      color: $gray;
      transition: color $transition-fast;

      &:hover {
        color: $neon-blue;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }

    p {
      font-size: $font-size-xs;
      color: rgba($white, 0.3);
    }
  }

  &__credit {
    a {
      color: $neon-blue;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
