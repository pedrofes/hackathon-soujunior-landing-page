# Landing Page Apoia.se — SouJunior

Criação da Landing page para o Hackathon SouJunior. Campanha de arrecadação da **SouJunior** no [Apoia.se](https://apoia.se/soujunior), construída durante o Hackathon SouJunior. O objetivo é converter visitantes em apoiadores recorrentes a partir de R$ 2/mês, contando a história da comunidade, mostrando impacto real e facilitando o caminho até a doação.

**Site em produção:** https://hackathon-soujunior-landing-page.vercel.app

<img width="400" height="507" alt="IMG-20260924-WA0020" src="https://github.com/user-attachments/assets/9622dcc3-41fb-4198-af53-451dbf892ada" />

---

## Sumário

- [Landing Page Apoia.se — SouJunior](#landing-page-apoiase--soujunior)
  - [Sobre o projeto](#sobre-o-projeto)
  - [Ideia e narrativa da página](#ideia-e-narrativa-da-página)
  - [Stack utilizada](#stack-utilizada)
  - [Arquitetura](#arquitetura)
    - [Carrosséis](#carrosséis)
  - [Estrutura de pastas](#estrutura-de-pastas)
  - [Design system](#design-system)
  - [Acessibilidade e SEO](#acessibilidade-e-seo)
  - [Como rodar o projeto](#como-rodar-o-projeto)
  - [Scripts disponíveis](#scripts-disponíveis)
  - [Fluxo de contribuição](#fluxo-de-contribuição)
  - [Deploy](#deploy)
  - [Integrantes](#integrantes)
  - [Licença](#licença)

---

## Sobre o projeto

A [SouJunior](https://github.com/SouJunior) é uma comunidade que apoia profissionais em início de carreira na área de tecnologia através de mentorias, conteúdos e projetos práticos. Para sustentar essa operação (infraestrutura, eventos, ferramentas), a comunidade mantém uma campanha de apoio recorrente no Apoia.se.

Esta landing page foi desenvolvida em 15 dias por um squad multidisciplinar (dev, UX/UI, QA, PO e PM), denominado Stack Junior, como projeto do hackathon interno, com o critério oficial de avaliação **"Qualidade de Software e Arquitetura"** valendo 30% da nota. Por isso o projeto segue padrões explícitos de Git, código e revisão, documentados em [`CONTRIBUTING.md`](CONTRIBUTING.md) e [`docs/criterios-tecnicos-nextjs.md`](docs/criterios-tecnicos-nextjs.md).

## Ideia e narrativa da página

A página segue o mapa mental do briefing, com cada seção cumprindo um papel específico no funil de conversão do visitante até o clique em "Apoiar":

| Seção                                | Papel na narrativa                                                                                                                                                                                   |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Header** (`header.jsx`)            | Navegação fixa (sticky) com estado visual dinâmico: transparente no topo, com fundo sólido ao rolar a página, e indicador da seção ativa. CTA "Quero apoiar" sempre visível.                         |
| **Hero** (`hero.jsx`)                | Primeira impressão: manifesto da causa ("Quem está começando hoje pode transformar a tecnologia amanhã") + CTA principal, que leva à seção de Planos.                                                |
| **Depoimentos** (`testimonials.jsx`) | Prova social: carrossel contínuo (auto-scroll) com relatos de ex-membros que hoje atuam no mercado de tecnologia.                                                                                   |
| **Causa** (`cause.jsx`)              | Explica objetivamente para onde vai o apoio (infraestrutura, alcance, novos projetos, comunidade ativa), em cards de carrossel.                                                                      |
| **Impacto** (`impact.jsx`)           | Números que comprovam resultado (apoiadores, meta mensal, pessoas empregadas, mentores ativos), com link para a planilha pública de gastos. A transparência é parte da confiança que converte doação. |
| **Planos** (`plans.jsx`)             | Reduz a fricção da decisão: valores de apoio simples e acessíveis, com CTA final reforçado.                                                                                                          |
| **Footer** (`footer.jsx`)            | Identidade da marca e canais oficiais (Apoia.se, WhatsApp, Discord, GitHub).                                                                                                                         |

## Stack utilizada

- **[Next.js 16](https://nextjs.org/)** (App Router) — renderização, roteamento e otimização de imagem/fonte
- **[React 19](https://react.dev/)**
- **[Tailwind CSS 4](https://tailwindcss.com/)** — estilização via tokens de design (`@theme`) e utilitários
- **[ESLint 9](https://eslint.org/)** com `eslint-config-next` — padronização e prevenção de erros
- Deploy contínuo na **[Vercel](https://vercel.com/)**

Sem bibliotecas externas de animação, ícones ou carrossel: os carrosséis, o menu mobile e as transições são implementados com React + Tailwind puro, decisão alinhada ao critério de "sem dependências pesadas desnecessárias" do guia técnico.

## Arquitetura

O projeto usa o **App Router** do Next.js com Server Components por padrão — só os componentes que precisam de estado, efeitos ou eventos do navegador (carrosséis, menu mobile, scroll spy do header) são marcados com `"use client"`. Isso mantém o HTML inicial mais leve e o JavaScript no cliente restrito ao que realmente precisa de interatividade.

Princípios seguidos:

- **`src/app/`** concentra apenas o que é global e específico do App Router: layout raiz, metadata/SEO, estilos globais e a imagem de Open Graph gerada dinamicamente.
- **`src/app/page.js`** é só a composição das seções, na ordem do funil de conversão, sem lógica de UI.
- **`src/components/sections/`** — um componente por bloco da página (Header, Hero, Cause, Impact, Testimonials, Plans, Footer), reunindo copy e layout daquela seção.
- **`src/components/ui/`** — peças reutilizáveis e sem opinião de conteúdo (`CtaButton`, `CarouselArrow`, `CarouselDots`, `PlanCard`, `PlanCarousel`, `CauseCarousel`, `TestimonialCard`), usadas por mais de uma seção ou que encapsulam um padrão de interação (ex.: carrossel).
- **`src/data/`** — conteúdo (planos, causas, depoimentos) separado da apresentação, para que editar textos/preços não exija tocar em JSX.
- **Sem duplicação de CTA**: o link do Apoia.se e o componente `CtaButton` são reaproveitados entre Hero, Header, Planos e Footer.

### Carrosséis

A página usa três padrões de carrossel, cada um resolvendo uma necessidade diferente:

- **Depoimentos** (`testimonials.jsx`): auto-scroll contínuo via `requestAnimationFrame`, com loop infinito (lista triplicada) e pausa ao passar o mouse/tocar, para não competir com a rolagem da página.
- **Causa** (`CauseCarousel.jsx`): carrossel com setas, dots e suporte a swipe em touch, com o número de cards visíveis adaptado por breakpoint (1 no mobile, 2 no tablet, 3 no desktop).
- **Planos** (`PlanCarousel.jsx`): carrossel simples de troca de card único, navegável por teclado (`←`/`→`) e com estado anunciado via `aria-live` para leitores de tela.

`CarouselArrow` e `CarouselDots` foram extraídos para eliminar a duplicação de marcação entre o carrossel de Causa e o de Planos.

## Estrutura de pastas

```
public/
  images/                     # fotos, logos e ícones estáticos
  sou_junior_mascote.svg      # mascote usado no Hero
  impact.png                  # ícone central do diagrama de Impacto

src/
  app/
    layout.js                 # layout raiz: fontes (next/font), metadata, Open Graph, Twitter Card
    page.js                   # composição das seções na ordem do funil
    globals.css               # import do Tailwind, tokens de tema (@theme) e utilitários de vidro (glass-card)
    opengraph-image.jsx       # imagem de compartilhamento gerada dinamicamente (next/og)
    favicon.ico

  components/
    sections/                 # um componente por bloco da landing page
      header.jsx
      hero.jsx
      testimonials.jsx
      cause.jsx
      impact.jsx
      plans.jsx
      footer.jsx
    ui/                       # componentes reutilizáveis entre seções
      CtaButton.jsx
      CarouselArrow.jsx
      CarouselDots.jsx
      CauseCarousel.jsx
      PlanCarousel.jsx
      PlanCard.jsx
      TestimonialCard.jsx

  data/                       # conteúdo desacoplado da UI
    causes.js
    plans.js
    testimonials.js

docs/
  criterios-tecnicos-nextjs.md  # checklist técnico interno (arquitetura, performance, SEO, a11y, responsividade)

CONTRIBUTING.md               # padrão de branches, commits e processo de MR
```

## Design system

Os tokens de cor, fonte e gradiente vêm do Figma oficial do projeto e são centralizados em `src/app/globals.css`, via `@theme` do Tailwind 4 — nenhuma cor de marca é usada em hexadecimal solto nos componentes:

- **Cores de marca:** `primary`, `secondary`, `accent`, `neutral`, `base-white`, `yellow-accent`
- **Cores de superfície (botões/menu):** `dark-surface`, `dark-hover`, `lavender`, `dark-text`
- **Gradiente da seção de Planos/Footer:** `plans-start` → `plans-end`
- **Tipografia:** `Funnel Display` (títulos), `Funnel Sans` (texto), `Radio Canada` (navegação), carregadas via `next/font/google` — sem fontes externas bloqueando o carregamento.
- **Utilitários de vidro** (`glass-card`, `glass-card-3d`) para o efeito glassmorphism do header e dos cards de planos.

## Acessibilidade e SEO

- HTML semântico (`<header>`, `<nav>`, `<section>`, `<footer>`) com `aria-label`/`aria-labelledby` nas seções e regiões de carrossel.
- Todo carrossel é navegável por teclado e anuncia a troca de slide para leitor de tela (`aria-live`, `aria-current`).
- `prefers-reduced-motion` é respeitado tanto na rolagem suave por âncora (`scroll-behavior`) quanto nas transições.
- `scroll-padding-top` compensa o header sticky para as âncoras do menu não ficarem escondidas atrás dele.
- Metadata completa no `layout.js`: título/descrição via Metadata API, Open Graph, Twitter Card e `robots`, essenciais porque a página é compartilhada em redes sociais e WhatsApp como parte da campanha.
- Todas as imagens usam `next/image` (otimização automática de tamanho/formato) e têm `alt` — decorativas usam `alt=""` com `aria-hidden`.

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) 20+ e npm.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

| Comando         | Descrição                                                    |
| --------------- | ------------------------------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento                         |
| `npm run build` | Gera o build de produção                                     |
| `npm run start` | Inicia o servidor com o build de produção                    |
| `npm run lint`  | Executa o ESLint — deve rodar sem erros antes de qualquer PR |

## Fluxo de contribuição

O projeto segue **GitHub Flow**: `main` é sempre estável e protegida, todo desenvolvimento acontece em branches curtas (`feature/*`, `fix/*`, `style/*`, `refactor/*`, `docs/*`, `chore/*`) e só entra em `main` via Pull Request revisado.

Padrão de commits: [Conventional Commits](https://www.conventionalcommits.org/) (`feat`, `fix`, `style`, `refactor`, `docs`, `chore`, `test`).

Detalhes completos — nomenclatura, checklist de PR e critérios de aprovação — em [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Deploy

Deploy contínuo via **Vercel**, conectado ao repositório: cada Pull Request gera automaticamente uma URL de preview, o que agiliza a revisão visual antes do merge em `main`.

## Integrantes

<table>
  <tr>
    <td align="center"><a href="https://github.com/larisouzadesigner"><img style="border-radius: 50%;" src="https://github.com/larisouzadesigner.png" width="100px;" alt=""/><br /><sub><b>Lari Souza</b></sub></a><br /><a href="https://github.com/larisouzadesigner" title="UX/UI">🎨</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/anoemisilva/"><img style="border-radius: 50%;" src="public\images\team\noemi-silva.png" width="100px;" alt=""/><br /><sub><b>Micaela Oliveira</b></sub></a><br /><a href="https://www.linkedin.com/in/anoemisilva/" title="UX/UI">🎨</a></td>
    <td align="center"><a href="https://github.com/paaulo-13"><img style="border-radius: 50%;" src="https://github.com/paaulo-13.png" width="100px;" alt=""/><br /><sub><b>Paulo Moreira</b></sub></a><br /><a href="https://github.com/paaulo-13" title="Dev">💻</a></td>
    <td align="center"><a href="https://github.com/GabrielPassarinVicente"><img style="border-radius: 50%;" src="https://github.com/GabrielPassarinVicente.png" width="100px;" alt=""/><br /><sub><b>Gabriel Passarin</b></sub></a><br /><a href="https://github.com/GabrielPassarinVicente" title="Dev">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/pedrofes"><img style="border-radius: 50%;" src="https://github.com/pedrofes.png" width="100px;" alt=""/><br /><sub><b>Pedro Fonseca</b></sub></a><br /><a href="https://github.com/pedrofes" title="Dev">💻</a></td>
    <td align="center"><a href="https://github.com/duev-santos"><img style="border-radius: 50%;" src="https://github.com/duev-santos.png" width="100px;" alt=""/><br /><sub><b>Duanny Evelyn</b></sub></a><br /><a href="https://github.com/duev-santos" title="Dev">💻</a></td>
    <td align="center"><a href="https://github.com/brunucoelho"><img style="border-radius: 50%;" src="https://github.com/brunucoelho.png" width="100px;" alt=""/><br /><sub><b>Bruno Coelho</b></sub></a><br /><a href="https://github.com/brunucoelho" title="QA">🔍</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/sthefany-gabriela-teodoro/"><img style="border-radius: 50%;" src="public\images\team\stephany-moreira.jpg" width="100px;" alt=""/><br /><sub><b>Sthefany Teodoro</b></sub></a><br /><a href="https://www.linkedin.com/in/sthefany-gabriela-teodoro/" title="P.O">📝</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/daiane-gallina-mkt/"><img style="border-radius: 50%;" src="public\images\team\daiane-gallina.jpg" width="100px;" alt=""/><br /><sub><b>Daiane Gallina</b></sub></a><br /><a href="https://www.linkedin.com/in/daiane-gallina-mkt/" title="P.M">📋</a></td>
    <td align="center"><a href="https://github.com/brunohauck"><img style="border-radius: 50%;" src="https://github.com/brunohauck.png" width="100px;" alt=""/><br /><sub><b>Bruno Hauck</b></sub></a><br /><a href="https://github.com/brunohauck" title="Dev (Mentor)">🧑‍🚀</a></td>
  </tr>
</table>

## Licença

Distribuído sob a licença MIT — veja [`LICENSE`](LICENSE) para mais detalhes.
