import { appConfig, hasSupabaseLeadEndpoint } from '@/config/app';
import type { ContactRequestInput } from '@/lib/storage/contactRequests';

export interface MarketingEventInput {
  type: string;
  locale: string;
  source: string;
  metadata?: Record<string, unknown>;
}

const postJson = async (endpoint: string, body: unknown) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: appConfig.integrations.supabase.anonKey,
      Authorization: `Bearer ${appConfig.integrations.supabase.anonKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Remote persistence failed with status ${response.status}`);
  }
};

export const persistLeadToRemote = async (payload: ContactRequestInput) => {
  if (!hasSupabaseLeadEndpoint) {
    return false;
  }

  await postJson(appConfig.integrations.supabase.leadsEndpoint, payload);
  return true;
};

export const trackMarketingEvent = async (payload: MarketingEventInput) => {
  if (!appConfig.integrations.supabase.marketingEventsEndpoint || !appConfig.integrations.supabase.anonKey) {
    return false;
  }

  try {
    await postJson(appConfig.integrations.supabase.marketingEventsEndpoint, payload);
    return true;
  } catch (error) {
    console.warn('Failed to send marketing event to remote endpoint.', error);
    return false;
  }
};
