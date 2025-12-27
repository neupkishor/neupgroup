
import { MetadataRoute } from 'next';
import { caseStudies } from './case/case-studies';

const URL = 'https://neupgroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about/teams',
    '/about/ventures',
    '/ads',
    '/analytics',
    '/blog',
    '/careers',
    '/design',
    '/estate',
    '/foundation',
    '/heritage',
    '/hr',
    '/ledger',
    '/legal',
    '/legis',
    '/mail',
    '/manage',
    '/marketing',
    '/neupid',
    '/news',
    '/referrals',
    '/search',
    '/site',
    '/socials',
    '/suite',
    '/tourio',
    '/works',
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${URL}/case/${study.slug}`,
    lastModified: new Date(),
  }));


  return [...staticRoutes, ...caseStudyRoutes];
}
