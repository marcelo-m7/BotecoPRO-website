export const appConfig = {
  brand: {
    productName: 'BotecoPro',
    studioName: 'Monynha Softwares',
    founderName: 'Marcelo Santos',
    websiteUrl: 'https://botecopro.com',
    studioUrl: 'https://monynha.com',
  },
  integrations: {
    odoo: {
      enabled: import.meta.env.VITE_ODOO_ENABLED === 'true',
      baseUrl: import.meta.env.VITE_ODOO_BASE_URL ?? '',
      database: import.meta.env.VITE_ODOO_DATABASE ?? '',
      fallbackMode: import.meta.env.VITE_ODOO_FALLBACK_MODE ?? 'mock',
    },
    supabase: {
      url: import.meta.env.VITE_SUPABASE_URL ?? '',
      anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
      leadsEndpoint: import.meta.env.VITE_SUPABASE_LEADS_ENDPOINT ?? '',
      marketingEventsEndpoint: import.meta.env.VITE_SUPABASE_MARKETING_EVENTS_ENDPOINT ?? '',
    },
  },
} as const;

export const hasSupabaseLeadEndpoint = Boolean(
  appConfig.integrations.supabase.url &&
    appConfig.integrations.supabase.anonKey &&
    appConfig.integrations.supabase.leadsEndpoint,
);
