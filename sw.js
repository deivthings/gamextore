self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(res => {
        console.log(res)
        return res
      })
  )
})

/* self.addEventListener('install', event => {
  console.log('isntalling', event)

  const shellCache = caches.open('caché-shell-1')
    .then( cache => {
      return cache.addAll([
        '/',
        '/manifest.json',
        '/img/favicon.ico',
        '/index.html',
        '/css/app.css',
        '/img/ico1.png',
        '/img/ico2.png',
        '/img/ico3.png',
        '/img/ico4.png',
        '/img/img1.png',
        '/img/img2.webp',
        '/img/img3.webp',
        '/js/app.js'
      ])
    })
  event.waitUntil(shellCache)
})

self.addEventListener('activate', event => {
  console.log('activated', event)
})

self.addEventListener('fetch', event => {
  // caché only strategy
  // event.respondWith(caches.match(event.request))

  // cache with network fallback
  const resp = caches.match( event.request)
    .then(res => res ? res : fetch(event.request))

  event.respondWith( resp )
}) */