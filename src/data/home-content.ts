import type { HomeContent, Locale } from '@/types/home';

const pt: HomeContent = {
  seo: {
    title: 'BotecoPro | ERP, POS e operação integrada para bares e restaurantes',
    description:
      'BotecoPro é a plataforma da Monynha Softwares para bares e restaurantes que querem acelerar atendimento, controlar stock, integrar POS e centralizar a operação com Odoo.',
  },
  hero: {
    eyebrow: 'Produto Monynha Softwares para food service',
    title: 'Mais controlo, menos retrabalho e atendimento mais rápido para bares e restaurantes.',
    subtitle:
      'O BotecoPro conecta frente de loja, cozinha, stock, faturação e CRM em uma operação integrada com Odoo, preparada para aumentar produtividade, reduzir perdas e melhorar vendas.',
    primaryCta: 'Fale com um especialista',
    secondaryCta: 'Ver demonstração',
    tertiaryCta: 'Experimente grátis',
    metrics: [
      { value: '-32%', label: 'tempo médio para fechar pedidos' },
      { value: '+18%', label: 'ganho esperado em vendas com upsell guiado' },
      { value: '1 painel', label: 'para stock, POS, faturação e equipa' },
    ],
  },
  benefits: {
    title: 'O que o BotecoPro resolve na prática',
    items: [
      { title: 'Atendimento sem gargalos', description: 'Pedidos, mesas, comandas e produção fluem com menos passos e menos erros operacionais.' },
      { title: 'Stock inteligente e previsível', description: 'Consumo, compras e reposição ficam sincronizados para evitar ruptura e desperdício.' },
      { title: 'Gestão financeira mais clara', description: 'Faturação, conciliação e indicadores ganham contexto operacional em tempo real.' },
    ],
  },
  modules: {
    title: 'Estrutura comercial pensada para a operação real',
    items: [
      { eyebrow: 'Frente de loja', title: 'POS e atendimento', description: 'Operação de salão, balcão e delivery com menos cliques, histórico do cliente e campanhas de recorrência.' },
      { eyebrow: 'Backoffice', title: 'Compras e fornecedores', description: 'Cotações, pedidos, conferência e rastreabilidade para compras mais seguras e rentáveis.' },
      { eyebrow: 'Experiência', title: 'Menu digital e fidelização', description: 'Cardápio com QR Code, promoções por turno e gatilhos de retenção para vender melhor.' },
    ],
  },
  odoo: {
    title: 'Odoo no centro da operação, não como detalhe técnico',
    description:
      'A camada Odoo do BotecoPro foi pensada para centralizar dados e processos: stock, faturação, POS, catálogo, clientes e indicadores passam a conversar sem planilhas paralelas.',
    capabilities: [
      { title: 'Gestão de stock', description: 'Sincronização de produtos, consumo por venda, alertas de reposição e visão por unidade.', value: 'Stock em tempo real' },
      { title: 'Faturação', description: 'Base pronta para emissão, conciliação e histórico financeiro com dados operacionais consistentes.', value: 'Financeiro integrado' },
      { title: 'POS e pedidos', description: 'Fluxo comercial alinhado entre mesa, balcão, cozinha e ERP para reduzir retrabalho.', value: 'Operação unificada' },
      { title: 'Sincronização de dados', description: 'Arquitetura preparada para APIs, webhooks e fallback de desenvolvimento enquanto o backend evolui.', value: 'Integração escalável' },
    ],
  },
  proof: {
    title: 'Como posicionamos o produto para gestores exigentes',
    items: [
      { quote: 'Precisávamos parar de gerir delivery, salão e compras em ferramentas separadas. O BotecoPro mostrou uma operação realmente conectada.', author: 'Juliana Rocha', role: 'Operações em gastrobar multiunidade' },
      { quote: 'A clareza da integração com Odoo nos deu confiança para pensar crescimento sem perder o controlo do stock e da faturação.', author: 'Rui Fernandes', role: 'Sócio gestor de restaurante casual' },
    ],
  },
  finalCta: {
    title: 'Quer estruturar uma operação comercial mais lucrativa e previsível?',
    description: 'Fale com Marcelo Santos e o time da Monynha Softwares para mapear atendimento, stock, ERP e dados antes da próxima fase do produto.',
    primary: 'Agendar diagnóstico',
    secondary: 'Explorar integrações',
  },
};

const en: HomeContent = {
  seo: {
    title: 'BotecoPro | ERP, POS and integrated operations for bars and restaurants',
    description:
      'BotecoPro is Monynha Softwares’ platform for bars and restaurants that need faster service, smarter inventory control, POS integration, and an Odoo-centered operation.',
  },
  hero: {
    eyebrow: 'Monynha Softwares product for food service teams',
    title: 'More control, less rework, and faster service for bars and restaurants.',
    subtitle:
      'BotecoPro connects front-of-house, kitchen, inventory, billing, and CRM in one Odoo-ready operation built to improve productivity, reduce waste, and lift revenue.',
    primaryCta: 'Talk to a specialist',
    secondaryCta: 'Watch the demo',
    tertiaryCta: 'Start free trial',
    metrics: [
      { value: '-32%', label: 'average order closing time' },
      { value: '+18%', label: 'expected revenue lift from guided upsell' },
      { value: '1 hub', label: 'for inventory, POS, billing, and staff' },
    ],
  },
  benefits: {
    title: 'What BotecoPro improves in the real operation',
    items: [
      { title: 'Service without bottlenecks', description: 'Orders, tables, tabs, and production flow with fewer manual steps and fewer avoidable mistakes.' },
      { title: 'Smarter inventory control', description: 'Consumption, purchasing, and replenishment stay aligned to avoid stockouts and waste.' },
      { title: 'Clearer financial visibility', description: 'Billing, reconciliation, and performance indicators gain real-time operational context.' },
    ],
  },
  modules: {
    title: 'Commercial structure designed around actual hospitality workflows',
    items: [
      { eyebrow: 'Front of house', title: 'POS and service flow', description: 'Dining room, counter, and delivery workflows with fewer clicks, customer history, and re-engagement campaigns.' },
      { eyebrow: 'Back office', title: 'Purchasing and suppliers', description: 'Quotes, purchase orders, receiving, and traceability for safer and more profitable procurement.' },
      { eyebrow: 'Guest experience', title: 'Digital menu and loyalty', description: 'QR menu, shift-based promotions, and retention triggers that help teams sell better.' },
    ],
  },
  odoo: {
    title: 'Odoo is a core value proposition, not a hidden technical note',
    description:
      'BotecoPro uses Odoo as the operational backbone so inventory, billing, POS, catalog, customer data, and analytics stay centralized instead of scattered across spreadsheets.',
    capabilities: [
      { title: 'Inventory management', description: 'Product sync, sales consumption, reorder alerts, and multi-unit visibility.', value: 'Real-time stock' },
      { title: 'Billing', description: 'A ready foundation for invoicing, reconciliation, and financial history backed by reliable operational data.', value: 'Integrated finance' },
      { title: 'POS and orders', description: 'Commercial flow aligned across tables, counters, kitchen, and ERP to reduce rework.', value: 'Unified operation' },
      { title: 'Data synchronization', description: 'Frontend already prepared for APIs, webhooks, and development fallbacks while backend integration grows.', value: 'Scalable integration' },
    ],
  },
  proof: {
    title: 'How we position the product for demanding operators',
    items: [
      { quote: 'We needed to stop managing delivery, dining room, and purchasing in separate tools. BotecoPro finally framed the operation as one system.', author: 'Julia Rocha', role: 'Multi-unit gastrobar operations lead' },
      { quote: 'The clarity around the Odoo integration gave us confidence to plan growth without losing inventory and billing control.', author: 'Rui Fernandes', role: 'Managing partner, casual dining brand' },
    ],
  },
  finalCta: {
    title: 'Ready to build a more profitable and predictable operation?',
    description: 'Talk to Marcelo Santos and Monynha Softwares to map your service flow, inventory, ERP, and data priorities before the next product phase.',
    primary: 'Book a diagnostic call',
    secondary: 'Explore integrations',
  },
};

export const homeContent: Record<Locale, HomeContent> = {
  pt,
  en,
  es: pt,
  fr: pt,
};
