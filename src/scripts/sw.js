/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap', 'https://fonts.googleapis.com/css2?family=Caveat&display=swap', 'https://fonts.googleapis.com/css2?family=Courgette&display=swap']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
