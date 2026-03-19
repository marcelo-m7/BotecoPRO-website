import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '@/components/reactbits/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLocalizedPath } from '@/hooks/use-localized-path';

interface SolutionItem {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  badge?: string;
  bullets?: string[];
}

interface SolutionsContent {
  title: string;
  subtitle?: string;
  items: SolutionItem[];
}

const SolutionsSection: React.FC = () => {
  const { t } = useTranslation('home');
  const localizePath = useLocalizedPath();
  const solutions = t('solutions', { returnObjects: true }) as SolutionsContent;

  if (!solutions?.items?.length) {
    return null;
  }

  return (
    <AnimatedSection depth="surface" containerClassName="space-y-10" id="modulos">
      <div className="space-y-4 text-center">
        <AnimatedItem as="h2" className="text-3xl font-bold text-boteco-neutral md:text-4xl">
          {solutions.title}
        </AnimatedItem>
        {solutions.subtitle && (
          <AnimatedItem as="p" className="mx-auto max-w-3xl text-lg text-boteco-neutral/80">
            {solutions.subtitle}
          </AnimatedItem>
        )}
      </div>
      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
        {solutions.items.map((item) => (
          <AnimatedItem key={item.title} className="flex">
            <Card
              depth="overlay"
              className="flex flex-1 flex-col justify-between border border-boteco-neutral/10 bg-depth-overlay/90 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-6">
                <CardHeader className="space-y-3 px-0 pt-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <CardTitle className="text-xl font-semibold text-boteco-neutral">{item.title}</CardTitle>
                    {item.badge ? <Badge variant="secondary">{item.badge}</Badge> : null}
                  </div>
                  <p className="text-base leading-7 text-boteco-neutral/80">{item.description}</p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <ul className="space-y-2">
                    {item.bullets?.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-boteco-neutral/80">
                        <CheckCircle2 className="mt-1 h-4 w-4 text-boteco-secondary" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              <Button asChild className="mt-8 w-full sm:w-fit">
                <Link to={localizePath(item.href)}>
                  {item.ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </Card>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SolutionsSection;
