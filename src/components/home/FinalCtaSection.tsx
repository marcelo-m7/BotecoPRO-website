import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarRange } from 'lucide-react';
import { AnimatedItem, AnimatedSection } from '@/components/reactbits';

const FinalCtaSection = () => {
  const { t } = useTranslation('home');
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = locale || 'pt';

  const getLocalizedPath = (path: string) => `/${currentLocale}${path}`;

  return (
    <AnimatedSection
      depth="overlay"
      className="bg-boteco-primary text-boteco-primary-foreground"
      containerClassName="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left"
    >
      <div className="space-y-3">
        <AnimatedItem as="h2" className="text-3xl font-bold md:text-4xl">
          {t('finalCta.title')}
        </AnimatedItem>
        <AnimatedItem as="p" className="max-w-2xl text-boteco-primary-foreground/85">
          {t('finalCta.description')}
        </AnimatedItem>
      </div>
      <AnimatedItem>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="text-boteco-neutral">
            <Link to={getLocalizedPath('/contato')}>
              <CalendarRange className="mr-2 h-5 w-5" aria-hidden="true" />
              {t('finalCta.primaryButton')}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
            <Link to={getLocalizedPath('/integracoes')}>
              {t('finalCta.secondaryButton')}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </AnimatedItem>
    </AnimatedSection>
  );
};

export default FinalCtaSection;
