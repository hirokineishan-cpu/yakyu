// 野球記録 service worker — アプリ本体を端末に保存し、圏外でも起動できるようにする
const CACHE = "hsp-s2-aomoriyamada-t-v1";
const SHELL = ["./", "./index.html", "./mod-record.js", "./mod-analysis.js", "./mod-physical.js",
               "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  // 1つ落とせなくても残りは入れる（部品が増えたときに全滅させない）
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;                        // API送信はそのまま
  if (url.hostname.includes("script.google.com") || url.hostname.includes("googleusercontent.com")) return;

  if (url.origin === location.origin) {
    // アプリ本体：ネットワーク優先、落ちたらキャッシュ。
    // 画面の読み込みだけ index.html に逃がす（部品にHTMLを返すと壊れるため）。
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => {
        if (r) return r;
        if (e.request.mode === "navigate") return caches.match("./index.html");
        return new Response("", { status: 504 });
      }))
    );
    return;
  }
  // フォントなど外部：キャッシュ優先
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(e.request, copy));
    return res;
  }).catch(() => new Response("", { status: 503 }))));
});
