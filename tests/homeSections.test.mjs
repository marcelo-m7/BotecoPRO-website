import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const loadJson = (relativePath) => {
  const filePath = path.join(repoRoot, relativePath);
  return JSON.parse(readFileSync(filePath, 'utf-8'));
};

const readSource = (relativePath) => {
  const filePath = path.join(repoRoot, relativePath);
  return readFileSync(filePath, 'utf-8');
};

const ptHome = loadJson('src/content/pt/home.json');
const enHome = loadJson('src/content/en/home.json');

const sectionsDepthExpectations = [
  ['src/components/home/HeroSection.tsx', 'Hero', 'depth="overlay"'],
  ['src/components/home/FeaturesSection.tsx', 'FeatureGrid', 'depth="surface"'],
  ['src/components/home/HowItWorksSection.tsx', 'Stepper', 'depth="overlay"'],
  ['src/components/home/OdooIntegrationSection.tsx', 'AnimatedSection', 'depth="overlay"'],
  ['src/components/home/TestimonialsSection.tsx', 'TestimonialCarousel', 'depth="surface"'],
  ['src/components/home/FaqSection.tsx', 'Faq', 'depth="overlay"'],
  ['src/components/home/FinalCtaSection.tsx', 'AnimatedSection', 'depth="overlay"'],
];

test('home content has localized hero, SEO, and CTA content for pt and en', () => {
  assert.ok(ptHome.hero?.title?.length > 0, 'PT hero title should exist');
  assert.ok(enHome.hero?.title?.length > 0, 'EN hero title should exist');
  assert.notStrictEqual(ptHome.hero.title, enHome.hero.title, 'Hero titles should be localized');
  assert.ok(ptHome.seo?.title, 'PT SEO title exists');
  assert.ok(enHome.seo?.title, 'EN SEO title exists');
  assert.ok(ptHome.finalCta?.primaryButton, 'PT CTA exists');
  assert.ok(enHome.finalCta?.primaryButton, 'EN CTA exists');
});

test('benefits, solutions, and Odoo content stay in sync across locales', () => {
  assert.strictEqual(ptHome.benefits?.items?.length, enHome.benefits?.items?.length, 'Benefits arrays should match length');
  assert.strictEqual(ptHome.solutions?.items?.length, enHome.solutions?.items?.length, 'Solution arrays should match length');
  assert.strictEqual(ptHome.odoo?.items?.length, enHome.odoo?.items?.length, 'Odoo arrays should match length');
});

test('Reactbits and animated sections apply expected depth variants', () => {
  sectionsDepthExpectations.forEach(([relativePath, componentName, expectedDepth]) => {
    const source = readSource(relativePath);
    assert.match(
      source,
      new RegExp(expectedDepth.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')),
      `${componentName} should include ${expectedDepth}`,
    );
  });
});

test('home page composition includes the Odoo integration section', () => {
  const source = readSource('src/pages/Home.tsx');
  assert.match(source, /OdooIntegrationSection/, 'Home should render the Odoo integration section');
  assert.match(source, /TestimonialsSection/, 'Home should render testimonials');
  assert.doesNotMatch(source, /PlansSection/, 'Home should no longer render the plans section');
});
