import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '@/components/Seo';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';

const SolutionsSection = lazy(() => import('@/components/home/SolutionsSection'));
const HowItWorksSection = lazy(() => import('@/components/home/HowItWorksSection'));
const OdooIntegrationSection = lazy(() => import('@/components/home/OdooIntegrationSection'));
const TestimonialsSection = lazy(() => import('@/components/home/TestimonialsSection'));
const FaqSection = lazy(() => import('@/components/home/FaqSection'));
const FinalCtaSection = lazy(() => import('@/components/home/FinalCtaSection'));

const SectionSkeleton = () => (
  <div className="flex w-full items-center justify-center py-12" aria-hidden="true">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-boteco-primary border-t-transparent"></div>
  </div>
);

const Home = () => {
  const { t, i18n } = useTranslation('home');

  const pageTitle = t('seo.title');
  const pageDescription = t('seo.description');

  return (
    <>
      <Seo
        title={pageTitle}
        description={pageDescription}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        locale={i18n.language}
      />
      <div className="flex flex-col items-stretch">
        <HeroSection />
        <FeaturesSection />
        <Suspense fallback={<SectionSkeleton />}>
          <SolutionsSection />
          <OdooIntegrationSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
