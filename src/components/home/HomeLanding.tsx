import { BarChart3, Boxes, ChefHat, CreditCard, ExternalLink, MessageCircleMore, Package, ReceiptText, ShoppingCart, Star, Workflow } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { homeContent } from '@/data/home-content';
import type { Locale } from '@/types/home';
import { useOdooModules } from '@/hooks/use-odoo-modules';
import { appConfig } from '@/config/app';

const icons = [Workflow, Package, CreditCard, ShoppingCart, ChefHat, Boxes, Star, ReceiptText, BarChart3];
const statusLabel: Record<string, string> = { ready: 'Pronto para ativação', pilot: 'Em piloto', planned: 'Planeado' };

const HomeLanding = () => {
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = (locale as Locale) || 'pt';
  const content = homeContent[currentLocale] ?? homeContent.pt;
  const { data: modules = [] } = useOdooModules();
  const localizePath = (path: string) => `/${currentLocale}${path}`;

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-boteco-primary via-boteco-primary to-boteco-neutral text-boteco-primary-foreground">
        <div className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit bg-white/10 text-white hover:bg-white/10">{content.hero.eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">{content.hero.title}</h1>
              <p className="max-w-3xl text-lg text-white/85 md:text-xl">{content.hero.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="min-w-[220px] bg-boteco-secondary text-white hover:bg-boteco-secondary/90"><Link to={localizePath('/contato')}>{content.hero.primaryCta}</Link></Button>
              <Button asChild size="lg" variant="outline" className="min-w-[220px] border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white"><a href="https://wa.me/244938793152?text=Quero%20ver%20uma%20demonstra%C3%A7%C3%A3o%20do%20BotecoPro" target="_blank" rel="noreferrer">{content.hero.secondaryCta}</a></Button>
              <Button asChild size="lg" variant="ghost" className="min-w-[220px] text-white hover:bg-white/10 hover:text-white"><a href="mailto:comercial@monynha.com?subject=BotecoPro%20-%20trial">{content.hero.tertiaryCta}</a></Button>
            </div>
            <dl className="grid gap-4 pt-2 sm:grid-cols-3">
              {content.hero.metrics.map((metric) => (
                <Card key={metric.label} className="border-white/10 bg-white/10 text-white backdrop-blur-sm"><CardContent className="p-5"><dt className="text-2xl font-black">{metric.value}</dt><dd className="mt-2 text-sm text-white/80">{metric.label}</dd></CardContent></Card>
              ))}
            </dl>
          </div>
          <Card className="border-white/10 bg-white/95 text-boteco-neutral shadow-2xl">
            <CardHeader>
              <Badge variant="outline" className="w-fit border-boteco-primary/20 text-boteco-primary">Arquitetura pronta para escalar</Badge>
              <CardTitle className="text-2xl">BotecoPro + Odoo + Monynha</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {['Landing e captação comercial alinhadas com operação real.', 'Camada de serviços preparada para Odoo e persistência remota.', 'Fallback seguro para desenvolvimento sem bloquear evolução do produto.'].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-boteco-neutral/80"><MessageCircleMore className="mt-0.5 h-4 w-4 text-boteco-primary" aria-hidden="true" /><p>{item}</p></div>
              ))}
              <div className="rounded-xl bg-boteco-tertiary/60 p-4 text-sm">
                <p className="font-semibold text-boteco-primary">Assinatura institucional</p>
                <p className="mt-1 text-boteco-neutral/80">Projeto mantido por Marcelo Santos e Monynha Softwares, com foco em hospitalidade, acessibilidade e evolução contínua.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 max-w-2xl"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{content.benefits.title}</h2></div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.benefits.items.map((item, index) => {
            const Icon = icons[index] ?? Workflow;
            return <Card key={item.title} className="h-full border-border/60 bg-card/80"><CardHeader><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-boteco-primary/10 text-boteco-primary"><Icon className="h-6 w-6" aria-hidden="true" /></div><CardTitle className="text-xl">{item.title}</CardTitle></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{item.description}</p></CardContent></Card>;
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-2xl"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{content.modules.title}</h2></div>
          <div className="grid gap-6 lg:grid-cols-3">
            {content.modules.items.map((item, index) => {
              const Icon = icons[index + 3] ?? Boxes;
              return <Card key={item.title} className="h-full border-border/60"><CardHeader><Badge variant="outline" className="w-fit">{item.eyebrow}</Badge><div className="mt-4 flex items-center gap-3"><Icon className="h-5 w-5 text-boteco-primary" aria-hidden="true" /><CardTitle className="text-xl">{item.title}</CardTitle></div></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{item.description}</p></CardContent></Card>;
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-16 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4"><Badge variant="secondary">Integração com Odoo</Badge><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{content.odoo.title}</h2><p className="text-base leading-7 text-muted-foreground">{content.odoo.description}</p><div className="rounded-2xl border border-dashed border-boteco-primary/30 bg-boteco-primary/5 p-4 text-sm text-muted-foreground"><p><span className="font-semibold text-boteco-primary">Configuração atual:</span> {appConfig.integrations.odoo.enabled ? 'integração remota habilitada' : 'modo seguro com fallback mock'}.</p><p className="mt-2">Base URL configurada: {appConfig.integrations.odoo.baseUrl || 'não definida'}</p></div></div>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.odoo.capabilities.map((capability) => <Card key={capability.title} className="border-border/60"><CardHeader><Badge variant="outline" className="w-fit text-boteco-primary">{capability.value}</Badge><CardTitle className="text-lg">{capability.title}</CardTitle></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{capability.description}</p></CardContent></Card>)}
        </div>
        <div className="lg:col-span-2"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{modules.map((module) => <Card key={module.key} className="border-border/60"><CardHeader><Badge variant="secondary" className="w-fit">{statusLabel[module.status]}</Badge><CardTitle className="text-lg">{module.name}</CardTitle></CardHeader><CardContent><p className="text-sm leading-6 text-muted-foreground">{module.summary}</p></CardContent></Card>)}</div></div>
      </section>

      <section className="bg-boteco-neutral text-boteco-neutral-foreground py-16">
        <div className="container mx-auto px-4"><div className="mb-8 max-w-2xl"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{content.proof.title}</h2></div><div className="grid gap-6 lg:grid-cols-2">{content.proof.items.map((item) => <Card key={item.author} className="border-white/10 bg-white/5 text-white"><CardContent className="p-6"><p className="text-lg leading-8 text-white/90">“{item.quote}”</p><p className="mt-6 font-semibold">{item.author}</p><p className="text-sm text-white/65">{item.role}</p></CardContent></Card>)}</div></div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="overflow-hidden border-boteco-primary/20 bg-gradient-to-r from-boteco-primary to-boteco-secondary text-white"><CardContent className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10"><div><h2 className="text-3xl font-black tracking-tight md:text-4xl">{content.finalCta.title}</h2><p className="mt-3 max-w-2xl text-white/85">{content.finalCta.description}</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Button asChild size="lg" variant="secondary" className="min-w-[220px] bg-white text-boteco-primary hover:bg-white/90"><Link to={localizePath('/contato')}>{content.finalCta.primary}</Link></Button><Button asChild size="lg" variant="outline" className="min-w-[220px] border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link to={localizePath('/integracoes')}>{content.finalCta.secondary}<ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" /></Link></Button></div></CardContent></Card>
      </section>
    </div>
  );
};

export default HomeLanding;
