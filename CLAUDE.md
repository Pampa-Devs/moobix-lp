# Guia de Padrões — Moobix LP

Este documento descreve os padrões, convenções e contexto do projeto para o Claude Code.

## Stack Tecnológica

- **Framework**: Vue.js 3 com Composition API (`<script setup>`)
- **Linguagem**: JavaScript (sem TypeScript)
- **Estilização**: SCSS com variáveis globais
- **Build**: Vite
- **Hospedagem**: GitHub Pages (branch `gh-pages`)

## Contexto do Projeto

Landing page para a **Moobix**, loja de:
- PCs personalizados (entry level ao high end)
- Figures e Hot Toys colecionáveis
- Tech/VR (Apple Vision Pro, MetaQuest, etc.)
- Acessórios de celular e periféricos

**Design**: Inspirado em **MSI.com** (dark tech, grid patterns, product showcase) e **Porsche.com** (editorial, whitespace generoso, tipografia confiante).

**Instagram**: @moobixofficial
**Cores da marca**: Azul claro / branco / cinza claro / neon (moderninho)

## Estrutura de Pastas

```
src/
├── components/
│   ├── Nav.vue                  # Navegação fixa
│   └── sections/
│       ├── HeroSection.vue      # Hero principal (full-screen)
│       ├── CategoriesSection.vue # Grid 2x2 de categorias
│       ├── ShowcaseSection.vue   # Galeria de builds
│       ├── ServicesSection.vue   # Lista de serviços (sticky sidebar)
│       ├── TechSection.vue      # Specs + marcas marquee
│       ├── ContactSection.vue   # CTA WhatsApp + Instagram
│       └── FooterSection.vue    # Footer minimal
├── styles/
│   ├── variables.scss           # Todas as variáveis de design
│   └── global.scss              # Reset, utilities, classes globais
├── App.vue                      # Layout principal
└── main.js                      # Entry point
```

## Design System

### Cores Principais

```scss
$true-black: #000000;    // Fundo principal
$black: #0a0a0a;         // Fundo alternativo
$surface: #111111;       // Cards e superfícies
$surface-card: #151515;  // Cards elevados
$white: #ffffff;          // Texto principal
$gray-300: #a1a1a6;      // Texto secundário de destaque
$gray-400: #86868b;      // Texto secundário
$gray-500: #6e6e73;      // Texto terciário
$gray-600: #48484a;      // Elementos sutis
$accent: #00aaff;        // Azul sutil (NÃO neon)
$gold: #c9a96e;          // Accent premium (figures)
```

### Tipografia

- **Display**: `Outfit` (700–800 weight, letter-spacing negativo)
- **Body**: `Outfit` (400–500 weight)
- **Mono/Labels**: `JetBrains Mono` (uppercase, letter-spacing 0.15em+)
- **Hero**: `clamp(3rem, 7vw, 6rem)` — nunca menor que 3rem

### Spacing (Porsche-inspired)

```scss
$spacing-xs: 0.5rem;
$spacing-sm: 1rem;
$spacing-md: 2rem;
$spacing-lg: 4rem;
$spacing-xl: 7rem;     // Generoso entre seções
$spacing-2xl: 10rem;   // Padding das seções principais
```

### Borders

- Divisores: `1px solid rgba(255, 255, 255, 0.06)` — sutil
- Hover: `rgba(255, 255, 255, 0.12)`
- Accent hover: `rgba(0, 170, 255, 0.12)`

## Convenções de CSS/SCSS

### Metodologia BEM

```scss
.hero { }           // Block
.hero__title { }     // Element
.hero__title--lg { } // Modifier
```

### Importação de Variáveis

```scss
<style scoped lang="scss">
@use '../../styles/variables' as *;
</style>
```

### Classes Globais Disponíveis

```scss
.container         // Max-width 1440px com padding responsivo
.section           // Base de seção (position relative, overflow hidden)
.section-label     // Eyebrow text (mono, uppercase, gray-400, 0.7rem)
.heading-lg        // Headings grandes (clamp 2rem—3.75rem)
.heading-xl        // Headings hero (clamp 3rem—6rem)
.body-text         // Corpo de texto (1.125rem, gray-400, max-width 520px)
.btn--primary      // Botão branco sólido (Porsche-style)
.btn--ghost        // Botão texto com border-bottom
.btn--outline      // Botão outline branco sutil
.btn--accent       // Botão azul destaque
.reveal            // Animação de scroll reveal (opacity + translateY)
.stagger-N         // Delay de animação (N * 0.08s, N de 1 a 8)
```

## Padrões de Componente

### Scroll Reveal (IntersectionObserver)

Todos os componentes usam o mesmo padrão:

```vue
<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const el = ref(null)

onMounted(() => {
  const obs = new IntersectionObserver(
    ([e]) => { if (e.isIntersecting) visible.value = true },
    { threshold: 0.1 }
  )
  if (el.value) obs.observe(el.value)
})
</script>

<template>
  <section ref="el">
    <div class="reveal" :class="{ visible }">
      <!-- conteúdo -->
    </div>
  </section>
</template>
```

### Estrutura de Seção

```vue
<template>
  <section id="nome-ancora" class="nome section" ref="el">
    <div class="container">
      <div class="nome__head reveal" :class="{ visible }">
        <span class="section-label">Label</span>
        <h2 class="heading-lg">Título</h2>
      </div>
      <!-- conteúdo -->
    </div>
  </section>
</template>
```

## Princípios de Design

### Do (Fazer)
- Fundo pure black (#000) — como MSI
- Whitespace generoso entre seções — como Porsche
- Tipografia grande e confiante com letter-spacing negativo
- Labels mono uppercase para categorias técnicas
- Dividers de 1px para separar áreas (não backgrounds coloridos)
- Hover sutis (translateY -2px a -3px, border lightens)
- Animações de entrada suaves (0.6s–0.8s ease)

### Don't (Não fazer)
- Cores neon/saturadas — accent é sutil (#00aaff, não brilhante)
- Gradientes chamativos — só radial gradients muito sutis em backgrounds
- Bordas arredondadas grandes — radius max 12–16px, exceto pills
- Emojis em produção — substituir por imagens reais do cliente
- Fontes genéricas (Inter, Arial, Roboto)
- Grids com gap grande — usar borders de 1px como separadores (estilo MSI)

## Feature Flags

```javascript
// src/config/featureFlags.js (criar quando necessário)
export const featureFlags = {
  showHeroVideo: false,     // Vídeo de fundo no hero
  showPrices: false,        // Preços nos cards (cliente não quer preços)
  showTestimonials: false,  // Seção de depoimentos
  showBlog: false,          // Seção de blog
}
```

## Imagens e Assets

- **Formato preferido**: `.webp` para fotos, `.svg` para logo/ícones
- **Organização**: `public/` com subpastas (`builds/`, `figures/`, `tech/`)
- **Placeholder atual**: Emojis nos cards — substituir por fotos reais

### Tamanhos de Imagem

| Slot | Aspecto | Tamanho (2x retina) |
|------|---------|---------------------|
| Card Categoria | 16:9 | 1440 × 810 px |
| Card Build | 4:3 | 720 × 540 px |
| Hero background | 16:9 | 2880 × 1620 px |
| OG Image | 1.91:1 | 1200 × 630 px |

## Deploy

### GitHub Pages (atual)

```bash
npm run build
cd dist
# Push para branch gh-pages
```

### Branch Strategy

- `main` — código fonte
- `gh-pages` — build de produção (gerado)

## Comandos

```bash
npm install       # Instalar dependências
npm run dev       # Desenvolvimento local
npm run build     # Build de produção
npm run preview   # Preview do build local
```
