'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "dc49be1f1f90f63a9a811fbb6b2d927c",
"/": "dc49be1f1f90f63a9a811fbb6b2d927c",
"main.dart.js": "36b8fe9fad1b0c78766cbda2d5036c3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "771cda94fb9701f723c73c071fe9f0e7",
"assets/LICENSE": "dac72842292e7e61fad8155e2139cedc",
"assets/imgs/psxme2.png": "ccd3662cc7be1e812abefc270be03974",
"assets/imgs/psxx.png": "98e46a2b4eefbd9300e5b7405286716c",
"assets/AssetManifest.json": "aac4c6ff0cd5f61857140280b1b44641",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"favicon2-min.png": "88e699401c858fe6ce12feb0702b7a3a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
