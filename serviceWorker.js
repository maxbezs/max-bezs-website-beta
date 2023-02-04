const staticDevCoffee = "max-bezs"
const assets = [
  "/index.html",
  "/css/index.css",
  "/js/scripts.js",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/prof.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/4.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/3.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/portfolio-background.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img5.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img1.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img11.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img9.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img12.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img8.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img3.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img10.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img2.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img6.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img4.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/opensea.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/img7.webp",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/instagram.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/youtube.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/tiktok.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/email.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/github.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/google-play.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/menu.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/telegram.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/linktree.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/sketchfab.svg",
  "https://raw.githubusercontent.com/maxbezs/max_bezs-website-images/main/icons/patreon.svg",
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