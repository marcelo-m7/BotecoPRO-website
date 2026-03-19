# TODO

## Estado atual
- Landing page principal reposicionada para BotecoPro como produto comercial da Monynha Softwares, com foco em bares, restaurantes, operação integrada e Odoo.
- Estrutura inicial de configuração por ambiente criada para Odoo, Supabase e branding institucional.
- Persistência de leads preparada para fallback local e envio remoto opcional.

## O que foi concluído
- Reescrita da home com hero, benefícios, módulos, secção Odoo, prova social e CTA final.
- Reforço de branding Monynha no header, footer, SEO e copy institucional.
- Criação de `src/config/app.ts`, `src/services/odoo.ts`, `src/services/leads.ts` e `src/hooks/use-odoo-modules.ts`.
- Criação de `.env.example` com variáveis para Clerk, Odoo e Supabase.
- Atualização da página de contacto para abordagem mais comercial.

## Pendências prioritárias
### Crítica
- Conectar endpoints reais de Odoo e Supabase e validar contratos de payload.
- Remover o fallback mock quando a API de módulos Odoo estiver disponível.
- Validar internacionalização completa para `es` e `fr` com copy própria, sem reuso do português.

### Importante
- Substituir testemunhos placeholder por prova social real com autorização comercial.
- Revisar páginas secundárias (`/integracoes`, `/menu-digital`, `/fornecedores`, etc.) para alinhar a nova narrativa do produto.
- Implementar tracking real de eventos de marketing com consentimento e política de privacidade atualizada.

### Incremental
- Criar componentes reutilizáveis para secções de landing pages futuras.
- Consolidar design tokens e estados de foco para todos os componentes do projeto.
- Refinar navegação com highlights contextuais por rota.

## Bugs e limitações conhecidas
- Persistência remota de leads depende de endpoints externos ainda não configurados.
- Testes visuais precisam de atualização de snapshot devido à nova home.
- Conteúdo em `es` e `fr` ainda usa fallback do português na nova home.

## Próximos passos recomendados
- Integrar `trackMarketingEvent` com eventos de CTA da home e do contacto.
- Criar camada de mapeamento entre entidades Odoo e domínio interno do frontend.
- Adicionar analytics de conversão por origem de lead.
- Revisar acessibilidade com auditoria manual de teclado e leitores de ecrã.

## Ideias futuras
- Área de demonstração guiada com dados mockados por segmento.
- Calculadora de ROI para bares e restaurantes multiunidade.
- Biblioteca de casos de uso por operação: boteco, casual dining, dark kitchen e eventos.

## Observações para o próximo agente
- Não reintroduzir copy genérica, frases de template ou claims sem contexto operacional.
- Antes de alterar a home, validar coerência entre branding Monynha, narrativa Odoo e CTA comercial.
- Documentar qualquer decisão estrutural nova neste arquivo.
