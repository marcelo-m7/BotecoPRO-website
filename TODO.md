# TODO

## Estado atual
- Landing page reposicionada com copy comercial focada em bares, restaurantes e operações de atendimento.
- Integração com Odoo promovida a secção central da home, com camada inicial de config, serviço e hook para consumo futuro de API.
- Captura de leads preparada para múltiplos destinos: Supabase, webhook e fallback local.
- Branding Monynha reforçado em header, footer, SEO e mensagens institucionais.
- Documentação operacional do repositório atualizada para handoff entre agentes.

## O que foi concluído
- Reescrita da homepage com nova hierarquia: hero, benefícios, módulos, integração Odoo, workflow, prova social, FAQ e CTA final.
- Extração de `src/config/runtime.ts`, `src/services/odoo.ts`, `src/services/lead-capture.ts` e `src/hooks/use-odoo-overview.ts` para separar configuração, serviços e acesso a dados.
- Atualização de SEO técnico (`title`, `description`, canonical, Open Graph e Twitter cards).
- Remoção do script hardcoded do Clerk em `index.html`; autenticação continua dependente do ambiente.
- Criação de `.env.example` com variáveis para Odoo, Supabase e webhook de leads.
- Ajuste do formulário de contacto para usar camada de serviço e fallback seguro.
- Atualização dos testes automatizados da home para refletir o novo posicionamento.

## Pendências prioritárias
### Crítica
- Implementar backend real da integração Odoo e definir contrato estável para `/overview` e fluxos de stock/faturação.
- Conectar captura de leads ao Supabase com autenticação apropriada (edge function ou backend intermediário); o POST direto atual é apenas estrutura inicial.
- Revisar conteúdo equivalente de `es` e `fr` na home. Hoje o reposicionamento completo foi aplicado principalmente a `pt` e `en`.

### Importante
- Revisar páginas internas (`/integracoes`, `/menu-digital`, `/fornecedores`, etc.) para alinhar tom comercial com a nova home.
- Criar prova social real com logos, dados de implantação e casos autorizados pelo cliente.
- Adicionar tracking de eventos de marketing (CTA click, submit de lead, scroll depth) com provider definido.
- Consolidar design tokens e componentes institucionais da Monynha em biblioteca reutilizável.

### Incremental
- Refinar microinterações e estados de loading/skeleton das secções da home.
- Adicionar ícones/ilustrações proprietárias para reforçar branding visual.
- Revisar copy de FAQ e testemunhos com insumos comerciais reais.

## Bugs e limitações conhecidas
- Persistência em Supabase ainda não está funcional sem backend/headers apropriados; fallback local continua sendo a operação segura.
- `es` e `fr` não receberam a mesma profundidade de copy da nova home.
- Testes visuais Playwright podem exigir atualização de snapshots quando forem executados num ambiente com browser configurado.
- Não foi possível gerar screenshot automatizado nesta iteração porque a ferramenta de browser/screenshot indicada não estava disponível no ambiente do agente.

## Próximos passos recomendados
1. Definir contrato backend para Odoo e substituir mock por dados reais controlados por feature flag.
2. Criar função/server endpoint para gravação de leads no Supabase com validação e tracking.
3. Alinhar páginas internas e blog com a nova proposta de valor da Monynha.
4. Revisar acessibilidade com auditoria manual e Lighthouse em ambiente CI.
5. Atualizar testes visuais após estabilizar conteúdo e layout final.

## Ideias futuras
- Calculadora de ROI para bares/restaurantes.
- Demonstração interativa do fluxo salão + cozinha + ERP.
- Área de materiais comerciais para SDR/onboarding.
- CMS leve para gestão de copy institucional e testemunhos.

## Observações para o próximo agente
- Não reintroduzir copy genérica ou CTA fraco. O site deve vender BotecoPro como produto real da Monynha.
- Ao mexer em integrações, começar por `src/config/runtime.ts`, `src/services/*` e `src/hooks/*` antes de tocar UI.
- Se alterar a home, atualizar `tests/homeSections.test.mjs` e revalidar build/lint.
- Documentar qualquer decisão de arquitetura, fallback ou limitação nova neste arquivo antes de concluir a próxima iteração.
