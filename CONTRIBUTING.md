# Guia de Contribuição — Landing Page Apoia.se SouJunior

Este documento define o padrão de branches, commits e revisão de código para o hackathon. Responsável pela fiscalização e aprovação dos Merge Requests (MRs): **Bruno Coelho (QA)**.

Objetivo: manter o repositório organizado, rastreável e alinhado ao critério "Qualidade de Software e Arquitetura" (30% da nota oficial).

---

## 1. Fluxo de trabalho (Git Flow simplificado)

Com 15 dias de hackathon e equipe pequena, usamos **GitHub Flow** — simples, sem branch `develop` separada, que geraria overhead desnecessário:

| Branch | Função | Regras |
|---|---|---|
| `main` | Sempre estável e "apresentável". É o que vai no vídeo de submissão. | Protegida. Ninguém commita direto. Só recebe merge via MR aprovado por Bruno. |
| `feature/*`, `fix/*`, etc. | Onde o desenvolvimento acontece. | Criada a partir de `main` atualizada. Vida curta (idealmente até 2-3 dias). |

**Regra de ouro:** `main` quebrada = ninguém trabalha até corrigir. Não se acumula problema "pra ver depois".

---

## 2. Nomenclatura de branches

Padrão: `tipo/descricao-curta-em-kebab-case`

| Tipo | Quando usar | Exemplo |
|---|---|---|
| `feature/` | Nova funcionalidade ou seção da landing page | `feature/hero-section` |
| `fix/` | Correção de bug | `fix/menu-mobile-overflow` |
| `style/` | Ajuste visual/CSS sem mudar lógica | `style/ajuste-espacamento-footer` |
| `refactor/` | Reestruturação de código sem mudar comportamento | `refactor/componentizar-cards-impacto` |
| `docs/` | Documentação (README, comentários) | `docs/instrucoes-execucao` |
| `chore/` | Configuração, dependências, build | `chore/setup-eslint-prettier` |
| `test/` | Testes | `test/validar-links-footer` |

**Regras:**
- Sempre minúsculo, palavras separadas por hífen (`kebab-case`), sem acento.
- Descrição curta e específica — `feature/hero-section`, não `feature/melhorias`.
- Uma branch = uma responsabilidade. Não misture o CTA de doação com ajuste de footer na mesma branch.

---

## 3. Padrão de commits (Conventional Commits)

Formato: `tipo(escopo): descrição no imperativo`

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `style` | Formatação, CSS, sem mudança de lógica |
| `refactor` | Reestruturação de código |
| `docs` | Documentação |
| `chore` | Configuração, dependências |
| `test` | Testes |

**Exemplos:**
```
feat(hero): adiciona CTA principal com redirecionamento para apoia.se
fix(footer): corrige link quebrado do Discord
style(mural-impacto): ajusta contraste dos números para acessibilidade
docs(readme): adiciona instruções de execução do projeto
chore(deps): atualiza next para a versão 16.4
```

**Regras:**
- Descrição no imperativo ("adiciona", não "adicionado" ou "adicionando").
- Um commit = uma mudança lógica. Evite commits gigantes tipo `feat: várias coisas`.
- Sem commits do tipo `wip`, `ajuste`, `123` — se está incompleto, ainda não deveria ir pra branch compartilhada, ou pelo menos descreva o que foi feito.

---

## 4. Processo de Merge Request (MR)

### Antes de abrir o MR, o autor confere:
- [ ] Testei em mobile (375px) e desktop
- [ ] Sem `console.log`, comentário de debug ou código morto
- [ ] Rodei lint/formatação (se configurado)
- [ ] Branch atualizada com `main` (sem conflitos)

### Template de descrição do MR:
```
## O que foi feito
(resumo objetivo da mudança)

## Como testar
(passo a passo pra revisar)

## Screenshots
(mobile e desktop, obrigatório para mudanças visuais)

## Checklist
- [ ] Testado em mobile e desktop
- [ ] Sem erros no console
- [ ] Links testados (se aplicável)
```

### Critérios de aprovação (checklist de Bruno como QA):

| Critério | O que valido |
|---|---|
| Funcional | A feature faz o que o briefing pede, sem quebrar o que já existia |
| Responsivo | Sem elemento cortado/sobreposto em 375px, 768px e 1440px |
| Acessibilidade | Contraste adequado, `alt` em imagens, navegação por teclado no CTA |
| Nomenclatura | Branch e commits seguem este padrão |
| Escopo | Um MR = uma responsabilidade (não mistura seções não relacionadas) |

**Nenhum merge em `main` sem aprovação.** Se encontrar problema, comento no MR e devolvo — não corrijo por fora.

---

## 5. Estrutura de pastas

Projeto em **Next.js (App Router)** — não é React puro: não usamos `react-router-dom` nem `App.jsx`, o roteamento e a montagem das páginas são resolvidos pelo próprio `src/app/`.

```
public/
├── images/                  # fotos, logos e ícones estáticos
├── sou_junior_mascote.svg
└── impact.png

src/
├── app/
│   ├── layout.js             # layout raiz: fontes (next/font), metadata, Open Graph
│   ├── page.js                # composição das seções, na ordem do funil de conversão
│   ├── globals.css            # import do Tailwind + tokens de tema (@theme)
│   └── opengraph-image.jsx    # imagem de compartilhamento gerada dinamicamente
├── components/
│   ├── sections/               # um componente por bloco da landing page
│   └── ui/                     # componentes reutilizáveis entre seções
└── data/                       # conteúdo (planos, causas, depoimentos) separado da UI

.gitignore
README.md
CONTRIBUTING.md
package.json
```

Cada seção do mapa mental do briefing é um componente próprio em `src/components/sections/` — facilita revisão e evita que uma pessoa sobrescreva o trabalho da outra. Peça usada por mais de uma seção, ou que encapsula um padrão de interação (carrossel, botão de CTA), vai em `src/components/ui/`. Conteúdo (textos, preços, links de imagem) fica em `src/data/`, nunca hardcoded dentro do JSX.

---

## 6. Convenções de nomenclatura e Design Tokens

### Nomes de arquivo

| Pasta | Convenção | Exemplo |
|---|---|---|
| `src/components/sections/` | minúsculo, uma palavra em inglês para o bloco (`hero`, `cause`, `impact`, `testimonials`, `plans`, `footer`) | `hero.jsx`, `cause.jsx`, `testimonials.jsx` |
| `src/components/ui/` | PascalCase, igual ao nome do componente exportado | `CtaButton.jsx`, `PlanCard.jsx`, `CarouselDots.jsx` |
| `src/data/` | minúsculo, plural do conteúdo que exporta | `causes.js`, `plans.js`, `testimonials.js` |

Não misture os dois padrões numa mesma pasta — se o componente é reaproveitado fora de uma seção específica, ele pertence a `ui/` e usa PascalCase.

### Idioma

- **Código** (nomes de componente, função, prop, arquivo) em **inglês**: `Header`, `Hero`, `CtaButton`, `handleNavClick`.
- **`id` da `<section>`, conteúdo visível ao usuário e comentários** em **português** — é o idioma do time e do público da campanha. O nome do arquivo é a tradução em inglês do `id` em português usado no menu/URL:

  | Arquivo (inglês) | `id` da seção (português, usado em `#âncora`) |
  |---|---|
  | `hero.jsx` | `#hero` |
  | `cause.jsx` | `#causa` |
  | `impact.jsx` | `#impacto` |
  | `testimonials.jsx` | `#depoimentos` |
  | `plans.jsx` | `#planos` |
  | `footer.jsx` | `#footer` |

### Design tokens (`src/app/globals.css`)

Não usar cor em hexadecimal direto no componente (`bg-[#0E14BF]`) — sempre pelo token do Tailwind (`@theme`). Se a cor que você precisa ainda não existe, adicione um token novo em `globals.css` em vez de colar o hex no JSX.

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#3C7EF9` | Destaques, ícones, barra de progresso |
| `secondary` | `#0A1662` | Texto/fundo escuro sobre superfícies claras |
| `accent` | `#0E14BF` | Fundo principal do Hero, Causa e Depoimentos |
| `neutral` | `#242731` | Texto padrão sobre fundo claro |
| `base-white` | `#E7E8EA` | Texto claro sobre fundo escuro |
| `yellow-accent` | `#FACC15` | CTA e destaques de maior prioridade |
| `dark-surface` / `dark-hover` | `#171123` / `#2A2140` | Botão escuro (estado normal / hover) |
| `lavender` | `#F0E9FD` | Texto da navbar sobre fundo escuro |
| `dark-text` | `#1D1B1B` | Texto sobre fundo `yellow-accent` |
| `plans-start` → `plans-end` | `#474BE0` → `#595DEC` | Gradiente da seção de Planos e do Footer |

---

## 7. Boas práticas gerais

- **`.gitignore`**: incluir `node_modules/`, arquivos de ambiente (`.env`), builds (`dist/`, `build/`) desde o primeiro commit.
- **Licença open source**: adicionar MIT (a mais simples) já no commit inicial — é requisito de submissão e trava a entrega se esquecido.
- **README.md**: manter atualizado ao longo do hackathon, não deixar para o final. Deve conter: descrição do projeto, stack utilizada, instruções de execução, nomes dos integrantes.
- **Sem commit direto em `main`**: toda mudança passa por branch + MR, mesmo que pareça pequena.
- **Branches de vida curta**: abra o MR assim que a parte estiver testável, não acumule dias de trabalho numa branch só — dificulta a revisão e aumenta risco de conflito.

---

*Documento vivo — pode ser ajustado conforme a equipe evoluir ao longo do hackathon. Dúvidas sobre o padrão, alinhar com Bruno antes de abrir o MR.*
