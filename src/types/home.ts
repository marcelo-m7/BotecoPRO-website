export type Locale = 'pt' | 'en' | 'es' | 'fr';

export interface HeroMetric {
  value: string;
  label: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ModuleItem extends BenefitItem {
  eyebrow: string;
}

export interface OdooCapability {
  title: string;
  description: string;
  value: string;
}

export interface ProofItem {
  quote: string;
  author: string;
  role: string;
}

export interface HomeContent {
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    metrics: HeroMetric[];
  };
  benefits: { title: string; items: BenefitItem[] };
  modules: { title: string; items: ModuleItem[] };
  odoo: { title: string; description: string; capabilities: OdooCapability[] };
  proof: { title: string; items: ProofItem[] };
  finalCta: { title: string; description: string; primary: string; secondary: string };
}
