(() => {
  'use strict';
  self.fallback = async (e) =>
    'document' === e.destination
      ? caches.match('/_offline', { ignoreSearch: !0 })
      : Response.error();
})();
