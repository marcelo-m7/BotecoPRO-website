export const runtimeConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'https://botecopro.monynha.com',
  odooApiUrl: import.meta.env.VITE_ODOO_API_URL ?? '',
  odooProjectKey: import.meta.env.VITE_ODOO_PROJECT_KEY ?? '',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  leadWebhookUrl: import.meta.env.VITE_LEAD_WEBHOOK_URL ?? '',
} as const;

export const integrationAvailability = {
  hasOdooApi: Boolean(runtimeConfig.odooApiUrl),
  hasSupabase: Boolean(runtimeConfig.supabaseUrl && runtimeConfig.supabaseAnonKey),
  hasLeadWebhook: Boolean(runtimeConfig.leadWebhookUrl),
} as const;
