# Critérios Técnicos Internos — Next.js + Tailwind
### O que não pode faltar no código (Landing Page Apoia.se SouJunior)

Uso interno da equipe técnica. Enquanto o documento de Produto/UX valida "a página faz o que deveria?", este valida "o código está bem construído?" — pesa direto no critério oficial "Qualidade de Software e Arquitetura" (30% da nota).

---

## 1. Estrutura e organização

| Critério | Descrição |
|---|---|
| App Router usado corretamente | `src/app/layout.js` para elementos globais (fontes, metadata), `src/app/page.js` monta as seções em ordem |
| Componentização por seção | Cada bloco do mapa mental (`Hero`, `Causa`, `Impacto`, `Planos`, `Footer`) é um componente isolado em `src/components/sections/` |
| Sem lógica duplicada | Elementos repetidos (botão de CTA, cards) viram componentes reutilizáveis em `src/components/ui/` |
| Nomenclatura de componentes | PascalCase (`HeroSection.jsx`, `ImpactoCard.jsx`) |
| Sem arquivo `page.js` gigante | Se `page.js` passar de ~30 linhas, provavelmente falta componentizar |

## 2. Performance (Next.js específico)

| Critério | Descrição |
|---|---|
| Imagens usam `next/image` | Nunca `<img>` puro — perde otimização automática de tamanho/formato |
| Fontes usam `next/font` | Evita layout shift e carregamento bloqueante de fonte externa |
| Sem bibliotecas pesadas desnecessárias | Antes de instalar um pacote pra animação/ícone, avaliar se dá pra resolver com Tailwind/CSS puro |

## 3. SEO e compartilhamento

| Critério | Descrição |
|---|---|
| Metadata configurada | `title` e `description` definidos via Metadata API (`export const metadata` no `layout.js`) |
| Open Graph configurado | `og:title`, `og:description`, `og:image` — essencial porque a página vai ser **compartilhada** em redes sociais/WhatsApp como parte da campanha |
| `favicon` configurado | Não deixar o ícone padrão do Next.js |

## 4. Acessibilidade

| Critério | Descrição |
|---|---|
| HTML semântico | `<section>`, `<nav>`, `<footer>`, `<button>` — não usar `<div>` pra tudo |
| `alt` em todas as imagens | Obrigatório, inclusive decorativas (`alt=""` se puramente decorativa) |
| Contraste de texto | Mínimo AA do WCAG — validar com Lighthouse |
| CTA navegável por teclado | Testar `Tab` + `Enter` até o botão de doação |

## 5. Responsividade (Tailwind)

| Critério | Descrição |
|---|---|
| Mobile-first | Classes base pensadas pro mobile, breakpoints (`sm:`, `md:`, `lg:`) adicionam para telas maiores — não o inverso |
| Sem largura fixa em `px` para containers principais | Usar `max-w-*`, `w-full`, `%` ao invés de `width: 1200px` fixo |
| Testado nos 3 breakpoints oficiais | 375px, 768px, 1440px — antes de qualquer MR ser aprovado |

## 6. Configuração e segurança

| Critério | Descrição |
|---|---|
| `.env.local` nunca commitado | Já vem no `.gitignore` padrão do Next.js — não remover essa linha |
| Variáveis expostas ao client usam prefixo `NEXT_PUBLIC_` | Só o necessário — nunca expor chave sensível dessa forma |
| ESLint sem erros antes do MR | Rodar `npm run lint` local antes de abrir o Pull Request |

## 7. Git e processo

| Critério | Descrição |
|---|---|
| Segue o `CONTRIBUTING.md` | Nomenclatura de branch e commit conforme já definido |
| Sem `console.log` esquecido | Revisar antes de abrir MR |
| Sem código comentado "morto" | Se não vai usar, remove — não deixa comentado "só por garantia" |

## 8. Deploy

| Critério | Descrição |
|---|---|
| Deploy contínuo via Vercel | Conectar o repositório assim que criado — cada MR gera um preview automático, facilita sua revisão como QA |
| Lighthouse mínimo antes da submissão final | Performance ≥ 80, Acessibilidade ≥ 90, Boas Práticas ≥ 90, SEO ≥ 90 |

---

*Checklist de gate: nenhum MR é aprovado por Bruno sem passar pelos itens 1 a 7. O item 8 é validado na fase de refatoração/polimento (dias 21-23/09).*
