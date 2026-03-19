import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { appConfig } from '@/config/app';

const Footer: React.FC = () => {
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = locale || 'pt';
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);
  const getLocalizedPath = React.useCallback((path: string) => `/${currentLocale}${path}`, [currentLocale]);

  return (
    <footer className="mt-8 border-t border-border/60 bg-muted/30" role="contentinfo">
      <div className="container mx-auto grid gap-6 px-4 py-10 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div>
          <p className="text-lg font-bold text-boteco-primary">{appConfig.brand.productName}</p>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">Software comercial para bares e restaurantes com foco em operação integrada, Odoo, acessibilidade e evolução contínua.</p>
          <p className="mt-2 text-sm text-muted-foreground">Assinado por {appConfig.brand.founderName} · {appConfig.brand.studioName}.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link to={getLocalizedPath('/legal/privacidade')} className="hover:text-boteco-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary">Privacidade</Link>
          <Link to={getLocalizedPath('/legal/termos')} className="hover:text-boteco-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary">Termos</Link>
          <Link to={getLocalizedPath('/contato')} className="hover:text-boteco-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary">Contato</Link>
        </div>
        <div className="text-sm text-muted-foreground md:text-right">
          <p>&copy; {currentYear} {appConfig.brand.productName}.</p>
          <a href={appConfig.brand.studioUrl} target="_blank" rel="noreferrer" className="font-medium text-boteco-primary underline-offset-4 hover:underline">{appConfig.brand.studioName}</a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
