import { useTranslation } from 'react-i18next';
import { FeatureGrid } from '@/components/reactbits';

const FeaturesSection = () => {
  const { t } = useTranslation('home');

  const features = t('benefits.items', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <FeatureGrid
      title={t('benefits.title')}
      features={features}
      depth="surface"
      columns={3}
      className="border-y border-boteco-neutral/10"
    />
  );
};

export default FeaturesSection;
