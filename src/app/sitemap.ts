
import { MetadataRoute } from 'next';

const URL = 'https://neupgroup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about/teams',
    '/about/ventures',
    '/design',
    '/jobs',
    '/legal',
    '/legis',
    '/mail',
    '/marketing',
    '/neupid',
    '/socials',
    '/tourio',
    '/site',
    '/foundation',
    '/estate',
    '/works',
    '/ledger',
    '/heritage',
    '/hr',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
