const staticDevCoffee = "max-bezs"
const assets = [
  "/index.html",
  "/css/index.css",
  "/js/scripts.js",
  "/img/logo.png",
  "/serviceWorker.js",
  "/"  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })