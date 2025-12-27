
import { MetadataRoute } from 'next';

const URL = 'https://neupgroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about/teams',
    '/about/ventures',
    '/ads',
    '/analytics',
    '/design',
    '/estate',
    '/foundation',
    '/heritage',
    '/hr',
    '/jobs',
    '/ledger',
    '/legal',
    '/legis',
    '/mail',
    '/manage',
    '/marketing',
    '/neupid',
    '/news',
    '/search',
    '/site',
    '/socials',
    '/suite',
    '/tourio',
    '/works',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
