import { useTranslation } from 'react-i18next';
import { DatabaseZap, ReceiptText, Store, Workflow } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/reactbits/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useOdooOverview } from '@/hooks/use-odoo-overview';

const iconMap = {
  stock: Store,
  billing: ReceiptText,
  sync: Workflow,
  data: DatabaseZap,
} as const;

const OdooIntegrationSection = () => {
  const { t } = useTranslation('home');
  const { data } = useOdooOverview();
  const modules = t('odoo.items', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: keyof typeof iconMap;
  }>;

  return (
    <AnimatedSection depth="overlay" id="odoo" containerClassName="space-y-10">
      <div className="space-y-4 text-center">
        <Badge className="bg-boteco-primary text-boteco-primary-foreground">{t('odoo.badge')}</Badge>
        <AnimatedItem as="h2" className="text-3xl font-bold md:text-4xl">
          {t('odoo.title')}
        </AnimatedItem>
        <AnimatedItem as="p" className="mx-auto max-w-3xl text-lg text-boteco-neutral/80">
          {data?.summary ?? t('odoo.description')}
        </AnimatedItem>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <AnimatedItem>
          <Card depth="surface" className="h-full border border-boteco-neutral/10 bg-background">
            <CardHeader>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-boteco-primary/80">{t('odoo.syncTitle')}</p>
              <CardTitle className="text-2xl">{data?.syncLabel ?? t('odoo.syncFallback')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-boteco-neutral/80">
              {(data?.capabilities ?? []).map((capability) => (
                <div key={capability.title} className="rounded-xl border border-boteco-neutral/10 bg-depth-overlay/60 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-boteco-neutral">{capability.title}</h3>
                    <span className="rounded-full bg-boteco-tertiary px-3 py-1 text-xs font-medium text-boteco-neutral">{capability.metric}</span>
                  </div>
                  <p className="mt-2">{capability.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </AnimatedItem>

        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => {
            const Icon = iconMap[module.icon];
            return (
              <AnimatedItem key={module.title} className="flex">
                <Card depth="surface" className="flex flex-1 border border-boteco-neutral/10 bg-background">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-boteco-primary/10 text-boteco-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-boteco-neutral">{module.title}</h3>
                      <p className="text-sm leading-6 text-boteco-neutral/80">{module.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default OdooIntegrationSection;
