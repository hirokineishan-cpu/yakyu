// 配球スコアパッド service worker — アプリ本体を端末に保存し、圏外でも起動できるようにする
const CACHE = "hsp-v1";
const SHELL = ["./", "./index.html", "./analysis.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;                       // API送信はそのまま
  if (url.hostname.includes("script.google.com") || url.hostname.includes("googleusercontent.com")) return;
  if (url.origin === location.origin) {
    // アプリ本体：ネットワーク優先、失敗したらキャッシュ（更新を取り込みつつ圏外でも開ける）
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match("./index.html"))));
    return;
  }
  // フォントなど外部：キャッシュ優先
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; }).catch(() => new Response("", {status: 503}))));
});
