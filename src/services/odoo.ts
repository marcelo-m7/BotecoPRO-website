import { appConfig } from '@/config/app';

export interface OdooModuleStatus {
  key: string;
  name: string;
  status: 'ready' | 'pilot' | 'planned';
  summary: string;
}

const mockModules: OdooModuleStatus[] = [
  { key: 'inventory', name: 'Stock & compras', status: 'ready', summary: 'Base funcional preparada para sincronização de catálogo, consumo e reposição.' },
  { key: 'billing', name: 'Faturação', status: 'pilot', summary: 'Fluxo modelado no frontend para emissão, reconciliação e histórico financeiro.' },
  { key: 'pos', name: 'POS', status: 'ready', summary: 'Camada prevista para orquestrar pedidos, atendimento e ERP sem retrabalho.' },
  { key: 'analytics', name: 'Dados e dashboards', status: 'planned', summary: 'Estrutura preparada para consolidar KPIs operacionais e marketing.' },
];

export const getOdooModules = async (): Promise<OdooModuleStatus[]> => {
  if (!appConfig.integrations.odoo.enabled || !appConfig.integrations.odoo.baseUrl) {
    return mockModules;
  }

  try {
    const response = await fetch(`${appConfig.integrations.odoo.baseUrl}/api/botecopro/modules`, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Odoo modules: ${response.status}`);
    }

    return (await response.json()) as OdooModuleStatus[];
  } catch (error) {
    console.warn('Using mock Odoo modules because the remote integration is unavailable.', error);
    return mockModules;
  }
};
