const staticDevCoffee = "max-bezs"
const assets = [
  "/index.html",
  "/css/index.css",
  "/js/scripts.js",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/prof.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/4.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/3.webp",  
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