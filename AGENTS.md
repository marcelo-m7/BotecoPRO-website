# AGENTS.md

## Objetivo
Manter e evoluir o website do BotecoPro como ativo comercial da Monynha Softwares, com narrativa forte de produto, integração com Odoo e base técnica segura para expansão futura.

## Stack
- Vite
- React + TypeScript
- React Router
- Tailwind CSS
- shadcn/ui
- TanStack Query
- i18next
- Integrações opcionais com Clerk, Odoo e Supabase

## Setup
- Instalar dependências: `npm install`
- Rodar em desenvolvimento: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Testes unitários: `npm run test`
- Testes visuais: `npm run test:visual`

## Estrutura relevante
- `src/pages/`: páginas roteadas
- `src/components/`: UI reutilizável e secções
- `src/components/home/HomeLanding.tsx`: landing principal atual
- `src/config/app.ts`: branding e variáveis de integração
- `src/services/`: serviços de dados e integrações externas
- `src/hooks/`: hooks de orquestração
- `src/lib/storage/contactRequests.ts`: fallback local de leads
- `TODO.md`: handoff obrigatório entre iterações

## Convenções
- Usar TypeScript em todo código novo.
- Manter rotas em `src/App.tsx`.
- Preferir componentes do shadcn/ui em vez de HTML cru quando fizer sentido.
- Usar Tailwind para layout, responsividade, contraste e estados de foco.
- Extrair configs, endpoints e flags para `.env` / `src/config/app.ts`.

## Branding e conteúdo
- Não reintroduzir copy genérica, placeholder ou “cara de template”.
- BotecoPro deve aparecer como produto da Monynha Softwares.
- Reforçar assinatura institucional de Marcelo Santos / Monynha Softwares quando relevante.
- Manter tom comercial, claro, orientado a dores, benefícios, operação e resultado.
- Toda alteração de copy deve melhorar posicionamento de produto, não apenas “embelezar” texto.

## Integrações
- Odoo: tratar como eixo central do produto. Se backend não existir, manter mock/fallback explícito e documentado.
- Supabase: não hardcodar endpoints. Usar variáveis `VITE_SUPABASE_*` e serviços dedicados.
- Clerk: manter opcional; nunca quebrar renderização quando a chave não estiver configurada.

## Regras de segurança e qualidade
- Não hardcodar endpoints novos diretamente em componentes.
- Não quebrar acessibilidade: headings, contraste, foco visível e semântica são obrigatórios.
- Não editar componentes base do shadcn/ui sem necessidade extrema.
- Preferir refatoração incremental e segura; evitar reescritas grandes sem justificação.
- Se algo ficar incompleto, preparar a estrutura e registrar no `TODO.md`.

## O que não deve ser feito
- Não remover documentação criada para handoff.
- Não deixar mocks “silenciosos”; sempre sinalizar fallback ou limitação.
- Não duplicar lógica de integração em múltiplos componentes.
- Não quebrar testes deliberadamente para “ganhar velocidade”.

## Checklist final para qualquer agente
- Home e páginas alteradas continuam coerentes com branding Monynha.
- Nenhuma copy nova parece boilerplate.
- Endpoints e chaves ficaram fora do código-fonte versionado.
- Projeto compila, linta e os testes relevantes foram executados.
- `TODO.md` foi atualizado com estado real, pendências e riscos.
