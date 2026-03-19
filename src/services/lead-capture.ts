import { integrationAvailability, runtimeConfig } from '@/config/runtime';
import { ContactRequestInput, createContactRequest } from '@/lib/storage/contactRequests';

export interface LeadCaptureResult {
  provider: 'supabase' | 'webhook' | 'local';
}

const postJson = async (url: string, payload: unknown) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Falha ao enviar lead: ${response.status}`);
  }
};

const persistToSupabase = async (payload: ContactRequestInput) => {
  await postJson(`${runtimeConfig.supabaseUrl}/rest/v1/leads`, payload);
  return { provider: 'supabase' } as const;
};

const persistToWebhook = async (payload: ContactRequestInput) => {
  await postJson(runtimeConfig.leadWebhookUrl, payload);
  return { provider: 'webhook' } as const;
};

const persistLocally = async (payload: ContactRequestInput) => {
  await createContactRequest(payload);
  return { provider: 'local' } as const;
};

export const submitLeadCapture = async (payload: ContactRequestInput): Promise<LeadCaptureResult> => {
  if (integrationAvailability.hasSupabase) {
    try {
      return await persistToSupabase(payload);
    } catch (error) {
      console.warn('Supabase indisponível, usando fallback local.', error);
    }
  }

  if (integrationAvailability.hasLeadWebhook) {
    try {
      return await persistToWebhook(payload);
    } catch (error) {
      console.warn('Webhook de leads indisponível, usando fallback local.', error);
    }
  }

  return persistLocally(payload);
};
