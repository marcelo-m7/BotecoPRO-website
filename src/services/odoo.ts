import { runtimeConfig, integrationAvailability } from '@/config/runtime';

export interface OdooCapability {
  title: string;
  description: string;
  metric: string;
}

export interface OdooOverview {
  status: 'mock' | 'connected';
  syncLabel: string;
  summary: string;
  capabilities: OdooCapability[];
}

const mockOverview: OdooOverview = {
  status: 'mock',
  syncLabel: 'Modo demonstração ativo',
  summary:
    'Fluxos comerciais, operacionais e financeiros alinhados entre BotecoPro e Odoo para bares e restaurantes em crescimento.',
  capabilities: [
    {
      title: 'Estoque sincronizado',
      description: 'Baixas automáticas por venda, ficha técnica por item e alertas de reposição por unidade.',
      metric: 'Sincronização contínua',
    },
    {
      title: 'Faturação e financeiro',
      description: 'Pedidos, documentos fiscais e conciliações preparados para rotinas centralizadas no ERP.',
      metric: 'Pedidos ao financeiro',
    },
    {
      title: 'POS e operação',
      description: 'Mesas, balcão e delivery com dados consolidados para análise de turnos e equipas.',
      metric: 'Operação omnicanal',
    },
  ],
};

export const getOdooOverview = async (): Promise<OdooOverview> => {
  if (!integrationAvailability.hasOdooApi) {
    return mockOverview;
  }

  const response = await fetch(`${runtimeConfig.odooApiUrl}/overview`, {
    headers: {
      'Content-Type': 'application/json',
      ...(runtimeConfig.odooProjectKey ? { 'x-project-key': runtimeConfig.odooProjectKey } : {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Falha ao carregar visão geral do Odoo: ${response.status}`);
  }

  const data = (await response.json()) as Partial<OdooOverview>;

  return {
    status: data.status === 'connected' ? 'connected' : 'mock',
    syncLabel: data.syncLabel ?? mockOverview.syncLabel,
    summary: data.summary ?? mockOverview.summary,
    capabilities: data.capabilities?.length ? data.capabilities : mockOverview.capabilities,
  };
};
