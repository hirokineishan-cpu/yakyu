/* マイページ（選手用）
   ・選手用のリンク（…/#me）で開くと、まずここでログインする
   ・ログインすると、自分の Trackman・フィジカル・セッション記録のタブが出る（ほかの選手のものは届かない）
   ・パスワード変更とログアウトもここ */

const CSS = `
#tab-me .pw{ max-width:560px; margin:0 auto; padding:18px 14px 60px }
#tab-me .card{ background:var(--paper); border:1px solid var(--line); border-radius:var(--r); padding:16px 16px; margin-bottom:14px }
#tab-me h2{ margin:4px 2px 14px; font-size:18px; letter-spacing:.04em }
#tab-me h3{ margin:0 0 10px; font-size:14px; color:var(--ink2) }
#tab-me label.f{ display:flex; flex-direction:column; gap:4px; font-size:12px; color:var(--muted); margin-bottom:10px }
#tab-me input{ font:inherit; font-size:16px; color:var(--ink); background:var(--paper); border:1px solid var(--line); border-radius:9px; padding:10px 11px; width:100% }
#tab-me button.b{ appearance:none; font:inherit; font-size:15px; cursor:pointer; border:1px solid var(--line); background:var(--paper);
  color:var(--ink); border-radius:9px; padding:10px 16px }
#tab-me button.b.primary{ background:var(--accent); color:var(--accentInk); border-color:var(--accent); font-weight:700; width:100% }
#tab-me button.b[disabled]{ opacity:.5 }
#tab-me .msg{ font-size:13px; color:var(--clay); margin:8px 0 0; min-height:1.2em }
#tab-me .ok{ color:var(--hit,#1e8a4c) }
#tab-me .note{ font-size:12px; color:var(--muted); line-height:1.7 }
#tab-me .who{ font-size:20px; font-weight:800 }
#tab-me .links{ display:flex; flex-direction:column; gap:8px; margin-top:12px }
#tab-me .links button{ text-align:left }
#tab-me a.staff{ font-size:12px; color:var(--muted) }
`;
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function mount(ROOT, CORE) {
  const st = document.createElement('style');
  st.id = 'css-me'; st.textContent = CSS; document.head.appendChild(st);
  const CFG = CORE.cfg;
  const CONN_KEY = 'hsp-conn-' + CFG.TEAM_ID + CFG.STORE;
  const PLINK_KEY = 'hsp-plink-' + CFG.TEAM_ID + CFG.STORE;
  const conn = () => { try { return JSON.parse(localStorage.getItem(CONN_KEY) || 'null') || {}; } catch (e) { return {}; } };
  const appUrl = () => { let u = ''; if (CFG.APP_URL_B64) { try { u = atob(String(CFG.APP_URL_B64).trim()); } catch (e) {} }
    return conn().url || (/^https?:\/\/.+/.test(u) ? u : ''); };
  async function post(payload) {
    const url = appUrl(); if (!url) throw new Error('接続先が設定されていません。スタッフに確認してください');
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
    return res.json();
  }
  let busy = false, msg = '', okMsg = '', prof = null;

  function render() {
    const c = conn(), role = String(c.user && c.user.role || '');
    if (!c.token || role.indexOf('選手') !== 0) {
      ROOT.innerHTML = `<div class="pw"><h2>マイページ</h2><div class="card"><h3>ログイン</h3>
        <label class="f">ID<input id="me-id" autocomplete="username" autocapitalize="off" spellcheck="false"></label>
        <label class="f">パスワード<input id="me-pw" type="password" autocomplete="current-password"></label>
        <button class="b primary" id="me-login" ${busy ? 'disabled' : ''}>${busy ? 'ログイン中…' : 'ログイン'}</button>
        <div class="msg">${esc(msg)}</div>
        <p class="note" style="margin-top:12px">ログインすると、自分の Trackman・フィジカル・セッション記録が見られます。<br>IDとパスワードはスタッフから受け取ってください。</p></div>
        <a href="#" class="staff" id="me-staff">スタッフの方はこちら（記録・解析の画面へ）</a></div>`;
      return;
    }
    ROOT.innerHTML = `<div class="pw"><h2>マイページ</h2>
      <div class="card"><div class="note">ログイン中</div><div class="who">${esc(prof ? prof.name : (c.user.name || ''))}</div>
        <div class="links"><button class="b" data-go="trackman">Trackman を見る</button><button class="b" data-go="physical">フィジカルを見る</button><button class="b" data-go="session">セッション記録を見る</button></div></div>
      <div class="card"><h3>パスワードを変える</h3>
        <label class="f">いまのパスワード<input id="me-old" type="password" autocomplete="current-password"></label>
        <label class="f">新しいパスワード（6文字以上）<input id="me-new" type="password" autocomplete="new-password"></label>
        <button class="b" id="me-chpw" ${busy ? 'disabled' : ''}>変更する</button>
        <div class="msg ${okMsg ? 'ok' : ''}">${esc(okMsg || msg)}</div></div>
      <div class="card"><button class="b" id="me-logout">ログアウト</button>
        <p class="note" style="margin:10px 0 0">みんなで使う iPad などでは、見終わったら必ずログアウトしてください。</p></div></div>`;
  }

  ROOT.addEventListener('click', async e => {
    const t = e.target;
    if (t.id === 'me-staff') { e.preventDefault(); try { localStorage.removeItem(PLINK_KEY); } catch (er) {} location.hash = ''; location.reload(); return; }
    const go = t.closest('[data-go]'); if (go) { document.querySelector(`#bar button[data-tab="${go.dataset.go}"]`)?.click(); return; }
    if (t.id === 'me-login') {
      const id = (ROOT.querySelector('#me-id').value || '').trim(), pw = ROOT.querySelector('#me-pw').value || '';
      if (!id || !pw) { msg = 'IDとパスワードを入れてください'; render(); return; }
      busy = true; msg = ''; render();
      try {
        const p = await post({ action: 'ping' }).catch(() => ({}));
        const j = await post({ action: 'login', id, password: pw });
        if (!j.ok) throw new Error(j.error || 'ログインできませんでした');
        localStorage.setItem(CONN_KEY, JSON.stringify({ url: appUrl(), token: j.token, user: j.user, exp: j.exp, year: (p && p.year) || '' }));
        if (String(j.user && j.user.role || '').indexOf('選手') !== 0) { try { localStorage.removeItem(PLINK_KEY); } catch (er) {} }
        else { try { localStorage.setItem('hsp-tab-' + CFG.TEAM_ID + CFG.STORE, 'trackman'); } catch (er) {} }   // ログインしたらまず Trackman
        location.hash = ''; location.reload(); return;
      } catch (er) { msg = String(er.message || er); }
      busy = false; render(); return;
    }
    if (t.id === 'me-chpw') {
      const o = ROOT.querySelector('#me-old').value || '', n = ROOT.querySelector('#me-new').value || '';
      if (n.length < 6) { msg = '新しいパスワードは6文字以上にしてください'; okMsg = ''; render(); return; }
      busy = true; msg = okMsg = ''; render();
      try { const j = await post({ action: 'changePassword', token: conn().token, oldPassword: o, newPassword: n });
        if (!j.ok) throw new Error(j.error || '変更できませんでした'); okMsg = 'パスワードを変更しました'; }
      catch (er) { msg = String(er.message || er); }
      busy = false; render(); return;
    }
    if (t.id === 'me-logout') {
      const c = conn();
      try { await post({ action: 'logout', token: c.token }); } catch (er) {}
      /* 自分のデータの控え（この端末に残している分）も消す */
      try { Object.keys(localStorage).filter(k => /^hsp-(conn|tm-me|ph-me|sess-me)-/.test(k) && k.indexOf(CFG.TEAM_ID + CFG.STORE) >= 0).forEach(k => localStorage.removeItem(k)); localStorage.setItem(PLINK_KEY, '1'); } catch (er) {}
      location.reload(); return;
    }
  });
  ROOT.addEventListener('keydown', e => { if (e.key === 'Enter' && (e.target.id === 'me-pw' || e.target.id === 'me-id')) ROOT.querySelector('#me-login')?.click(); });

  render();
  /* 名前を最新にしておく（ログイン中だけ） */
  const c = conn();
  if (c.token && String(c.user && c.user.role || '').indexOf('選手') === 0) {
    post({ action: 'me', token: c.token }).then(j => {
      if (j && j.ok && j.me) { prof = j.me; render(); }
      else if (j && j.error) { msg = j.error === 'unauthorized' ? 'ログインが切れています。もう一度ログインしてください' : j.error;
        if (j.error === 'unauthorized') { try { localStorage.removeItem(CONN_KEY); } catch (er) {} } render(); }
    }).catch(() => {});
  }
}
