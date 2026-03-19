import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Hero } from '@/components/reactbits';
import { AnimatedItem } from '@/components/reactbits';
import { Card, CardContent } from '@/components/ui/card';
import { useOdooOverview } from '@/hooks/use-odoo-overview';

const HeroSection = () => {
  const { t } = useTranslation('home');
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = locale || 'pt';
  const { data } = useOdooOverview();

  const getLocalizedPath = (path: string) => `/${currentLocale}${path}`;
  const heroHighlights = t('hero.highlights', { returnObjects: true }) as string[];
  const heroMetrics = t('hero.metrics', { returnObjects: true }) as { value: string; label: string }[];

  return (
    <div className="bg-gradient-to-br from-boteco-primary via-boteco-primary to-boteco-secondary text-boteco-primary-foreground">
      <div className="container px-4 pt-6 md:pt-10">
        <Badge className="border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white">
          {t('hero.kicker')}
        </Badge>
      </div>
      <Hero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        action={{ label: t('hero.cta'), href: getLocalizedPath('/contato') }}
        secondaryAction={{
          label: t('hero.demoCta'),
          href: getLocalizedPath('/integracoes'),
          'aria-label': t('hero.demoCtaAria'),
        }}
        depth="overlay"
        className="bg-transparent py-10 md:py-16 lg:py-20"
      />
      <div className="container grid gap-6 px-4 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <AnimatedItem>
          <div className="grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <Card key={metric.label} depth="overlay" className="border border-white/10 bg-white/10 text-white">
                <CardContent className="space-y-1 p-5">
                  <p className="text-2xl font-bold md:text-3xl">{metric.value}</p>
                  <p className="text-sm text-white/80">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <Card depth="overlay" className="border border-white/10 bg-white/10 text-white shadow-2xl">
            <CardContent className="space-y-5 p-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{t('hero.integrationLabel')}</p>
                <h2 className="text-2xl font-semibold">{data?.syncLabel ?? t('hero.integrationFallbackTitle')}</h2>
                <p className="text-sm leading-6 text-white/80">{data?.summary ?? t('hero.integrationFallbackDescription')}</p>
              </div>
              <ul className="space-y-3">
                {heroHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/90">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-boteco-tertiary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedItem>
      </div>
    </div>
  );
};

export default HeroSection;
