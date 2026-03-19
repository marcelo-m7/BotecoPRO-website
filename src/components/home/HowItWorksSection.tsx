import { useTranslation } from 'react-i18next';
import { Stepper } from '@/components/reactbits';

const HowItWorksSection = () => {
  const { t } = useTranslation('home');

  const howItWorksSteps = t('workflow.steps', { returnObjects: true }) as { title: string; description: string }[];

  return <Stepper title={t('workflow.title')} steps={howItWorksSteps} depth="overlay" />;
};

export default HowItWorksSection;
