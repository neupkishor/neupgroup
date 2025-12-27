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
    '/works',
    '/estate',
    '/site',
  ];

  return routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));
}
