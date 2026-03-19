import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = locale || 'pt';

  const getLocalizedPath = React.useCallback((path: string) => `/${currentLocale}${path}`, [currentLocale]);
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="mt-8 border-t border-boteco-neutral/10 bg-boteco-primary px-4 py-10 text-boteco-primary-foreground shadow-inner transition-colors duration-300" role="contentinfo">
      <div className="container grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-boteco-tertiary">Monynha Softwares</p>
            <h2 className="mt-2 text-2xl font-bold">BotecoPro para operações de bar e restaurante.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-boteco-primary-foreground/80">
            {t('footer.description')}
          </p>
        </div>

        <div className="grid gap-5 text-sm sm:grid-cols-2">
          <div className="space-y-3">
            <p className="font-semibold">Links rápidos</p>
            <div className="flex flex-col gap-2">
              <Link to={getLocalizedPath('/contato')} className="transition-colors hover:text-boteco-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-boteco-primary">{t('footer.contact')}</Link>
              <Link to={getLocalizedPath('/integracoes')} className="transition-colors hover:text-boteco-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-boteco-primary">{t('footer.integrations')}</Link>
              <Link to={getLocalizedPath('/sobre')} className="transition-colors hover:text-boteco-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-boteco-primary">{t('footer.about')}</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-semibold">Compliance</p>
            <div className="flex flex-col gap-2">
              <Link to={getLocalizedPath('/legal/privacidade')} className="transition-colors hover:text-boteco-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-boteco-primary">{t('footer.privacy')}</Link>
              <Link to={getLocalizedPath('/legal/termos')} className="transition-colors hover:text-boteco-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-boteco-primary">{t('footer.terms')}</Link>
              <a href="https://monynha.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-boteco-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-boteco-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-boteco-primary" aria-label={t('footer.monynhaAriaLabel')}>
                {t('footer.poweredBy')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-boteco-primary-foreground/70 md:flex-row md:items-center md:justify-between">
        <p>&copy; {currentYear} BotecoPro · Marcelo Santos / Monynha Softwares.</p>
        <p>{t('footer.developedWith')}</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
