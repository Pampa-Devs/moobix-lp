<script setup>
import Nav from './components/Nav.vue'
import HeroSection from './components/sections/HeroSection.vue'
import CategoriesSection from './components/sections/CategoriesSection.vue'
import ShowcaseSection from './components/sections/ShowcaseSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import TechSection from './components/sections/TechSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import FooterSection from './components/sections/FooterSection.vue'
</script>

<template>
  <div class="moobix-app">
    <Nav />
    <main>
      <HeroSection />
      <CategoriesSection />
      <ShowcaseSection />
      <ServicesSection />
      <TechSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<style lang="scss">
@use './styles/global.scss';

.moobix-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
  }
}
</style>
