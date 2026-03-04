<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <a href="#home" class="footer__wordmark">MOOBIX</a>
        <div class="footer__links">
          <a href="#categorias">Produtos</a>
          <a href="#showcase">Galeria</a>
          <a href="#servicos">Serviços</a>
          <a href="#tech">Tecnologia</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
      <div class="footer__bottom">
        <span>&copy; 2025 Moobix. Todos os direitos reservados.</span>
        <span class="footer__credit">
          Desenvolvido por
          <a href="https://pampadevs.com" target="_blank" rel="noopener">Pampa Devs</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../../styles/variables' as *;

.footer {
  background: $true-black;
  padding: $spacing-lg 0 $spacing-md;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: $spacing-md;
    border-bottom: 1px solid $border;
    margin-bottom: $spacing-md;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 2rem;
      text-align: center;
    }
  }

  &__wordmark {
    font-family: $font-display;
    font-size: 1rem;
    font-weight: 800;
    color: $white;
    letter-spacing: 0.18em;
    text-decoration: none;
  }

  &__links {
    display: flex;
    gap: 2rem;

    @media (max-width: $mobile) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.2rem;
    }

    a {
      font-size: $font-size-sm;
      color: $gray-500;
      font-weight: 400;
      transition: color $transition-fast;

      &:hover { color: $white; }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;

    @media (max-width: $tablet) {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }

    span {
      font-size: $font-size-xs;
      color: $gray-600;
    }
  }

  &__credit a {
    color: $gray-400;
    font-weight: 500;
    transition: color $transition-fast;

    &:hover { color: $white; }
  }
}
</style>
