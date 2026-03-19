import { useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import HomeLanding from '@/components/home/HomeLanding';
import { homeContent } from '@/data/home-content';
import type { Locale } from '@/types/home';

const Home = () => {
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = (locale as Locale) || 'pt';
  const content = homeContent[currentLocale] ?? homeContent.pt;

  return (
    <>
      <Seo
        title={content.seo.title}
        description={content.seo.description}
        ogTitle={content.seo.title}
        ogDescription={content.seo.description}
        locale={currentLocale}
        keywords={[
          'BotecoPro',
          'Monynha Softwares',
          'Odoo para restaurantes',
          'POS para bares',
          'gestão de stock',
          'ERP food service',
        ]}
      />
      <HomeLanding />
    </>
  );
};

export default Home;
