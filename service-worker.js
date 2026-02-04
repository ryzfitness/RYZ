self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("ryz").then(cache => {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});
