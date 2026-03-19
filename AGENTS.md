# AGENTS.md

## Objetivo
Evoluir o website comercial do BotecoPro como produto da Monynha Softwares, com foco em conversão, clareza de proposta, branding consistente, acessibilidade prática e arquitetura segura para continuidade.

## Stack
- Vite
- React + TypeScript
- React Router
- Tailwind CSS
- shadcn/ui
- i18next
- TanStack Query
- Testes Node (`node:test`) e Playwright

## Setup
- Instalar dependências: `pnpm install`
- Rodar dev server: `pnpm dev`
- Build de produção: `pnpm build`
- Lint: `pnpm lint`
- Testes unitários simples: `pnpm test`
- Testes visuais: `pnpm test:visual`

## Estrutura relevante
- `src/pages/` → páginas roteadas; manter rotas em `src/App.tsx`.
- `src/components/home/` → blocos da landing page principal.
- `src/components/ui/` → componentes shadcn/ui. Não editar sem necessidade forte; prefira compor novos componentes.
- `src/content/<locale>/` → copy traduzida por namespace.
- `src/config/` → configuração de runtime e variáveis de ambiente.
- `src/services/` → integrações, persistência e acesso a dados.
- `src/hooks/` → hooks de acesso/estado reutilizáveis.
- `tests/` → checks automatizados.

## Convenções
- Usar TypeScript em todo código novo.
- Preferir composição com shadcn/ui + Tailwind; evitar CSS ad hoc fora do padrão do projeto.
- Manter separação entre UI, configuração e serviços.
- Reutilizar `Seo`, `AnimatedSection`, `Button`, `Card`, `Badge` e demais primitives antes de criar soluções paralelas.
- Sempre que adicionar nova integração, expor config em `.env.example` e tipar em `src/vite-env.d.ts`.

## Branding e conteúdo
- Não reintroduzir copy genérica, placeholder ou tom de template.
- Sempre reforçar que BotecoPro é produto de Marcelo Santos / Monynha Softwares quando o contexto institucional pedir assinatura.
- Priorizar mensagens orientadas a benefício: atendimento, stock, faturação, produtividade, controlo e vendas.
- Evitar hero vaga. A homepage precisa explicar claramente: o que é, para quem serve, qual dor resolve e qual ganho entrega.
- Preservar consistência visual com a paleta BotecoPro/Monynha já definida em `src/globals.css`.

## Integrações
- Odoo deve ser tratado como parte estratégica da proposta. Qualquer avanço deve começar em `src/services/odoo.ts`, `src/hooks/use-odoo-overview.ts` e `src/config/runtime.ts`.
- Leads/formulários: preferir fluxo via backend/Supabase; manter fallback local apenas como modo seguro de desenvolvimento/demonstração.
- Nunca hardcodar endpoints, chaves ou URLs sensíveis na UI.
- Se uma integração ainda não existir, deixar mock/fallback explícito e documentado no `TODO.md`.

## Regras de segurança e qualidade
- Não quebrar acessibilidade: headings coerentes, foco visível, contraste aceitável, `aria-label` quando necessário.
- Não remover fallback sem substituir por alternativa segura.
- Não mexer em `src/components/ui/` para customizações triviais; criar wrapper/componente novo.
- Refatorar de forma incremental. Evitar reescrever grandes áreas sem necessidade real.
- Atualizar testes e documentação quando comportamento, copy crítica ou arquitetura forem alterados.

## O que não deve ser feito
- Não usar textos lorem ipsum, placeholders genéricos ou depoimentos sem contexto claro.
- Não esconder pendências: documente limitações reais em `TODO.md`.
- Não adicionar dependências novas sem necessidade concreta.
- Não duplicar lógica de integração diretamente em páginas/componentes.
- Não alterar rotas fora de `src/App.tsx`.

## Checklist final para qualquer agente
- [ ] A copy continua específica, comercial e alinhada à Monynha.
- [ ] Não há endpoint hardcoded novo.
- [ ] Mudanças na home foram refletidas nos testes relevantes.
- [ ] `pnpm lint`, `pnpm test` e `pnpm build` foram executados (ou a limitação foi documentada).
- [ ] `TODO.md` foi atualizado com estado atual, pendências e débitos.
- [ ] Branding, acessibilidade e responsividade foram revisados antes de concluir.
