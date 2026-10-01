/* Trackman（投手のみ・強化と管理だけ）
   取り込み：投手を選んでCSVを上げる。中身の確認、回転数の取りこぼし検出
   数字は Trackman が計測したものだけを使う（空欄を計算で埋めることはしない）
   個人　　：1投手の球種別の表とグラフ（変化量・リリース点・球速・コース・推移）
   チーム　：全投手を並べて比べる
   比較　　：数人を同じ図に重ねる                                        */

const CSS = `
#tab-trackman .pw{ max-width:1180px; margin:0 auto; padding:12px 14px 60px }
#tab-trackman .hd{ display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; margin:6px 2px 12px }
#tab-trackman .hd h2{ margin:0; font-size:17px; letter-spacing:.05em }
#tab-trackman .hd .sub{ color:var(--muted); font-size:12px }
#tab-trackman .hd .sp{ margin-left:auto; display:flex; gap:6px; flex-wrap:wrap }
#tab-trackman .seg{ display:inline-flex; background:var(--raise); border:1px solid var(--line);
  border-radius:9px; padding:2px; gap:2px }
#tab-trackman .seg button{ appearance:none; border:0; background:transparent; color:var(--ink2);
  font:inherit; font-size:13px; font-weight:600; padding:6px 14px; border-radius:7px; cursor:pointer }
#tab-trackman .seg button[aria-pressed="true"]{ background:var(--accent); color:var(--accentInk) }
#tab-trackman button.b{ appearance:none; font:inherit; font-size:13px; cursor:pointer;
  border:1px solid var(--line); background:var(--paper); color:var(--ink); border-radius:8px; padding:6px 12px }
#tab-trackman button.b:hover{ border-color:var(--accent) }
#tab-trackman button.b.primary{ background:var(--accent); color:var(--accentInk); border-color:var(--accent); font-weight:700 }
#tab-trackman button.b.danger{ color:var(--clay); border-color:var(--clay) }
#tab-trackman button.b[disabled]{ opacity:.45; cursor:default }
#tab-trackman select, #tab-trackman input{ font:inherit; font-size:13px; color:var(--ink);
  background:var(--paper); border:1px solid var(--line); border-radius:8px; padding:6px 8px }
#tab-trackman input[type=number]{ width:5.5em; font-family:var(--num) }
#tab-trackman label.f{ display:flex; flex-direction:column; gap:3px; font-size:11px; color:var(--muted) }
#tab-trackman label.c{ display:inline-flex; align-items:center; gap:5px; font-size:12.5px; color:var(--ink2); cursor:pointer }
#tab-trackman .bar{ display:flex; gap:10px; align-items:flex-end; flex-wrap:wrap;
  background:var(--paper); border:1px solid var(--line); border-radius:var(--r); padding:10px 12px; margin-bottom:12px }
#tab-trackman .note{ font-size:11.5px; color:var(--muted); line-height:1.6; margin:2px 0 10px }
#tab-trackman .warn{ font-size:12.5px; color:var(--clay); background:color-mix(in srgb, var(--clay) 9%, transparent);
  border:1px solid color-mix(in srgb, var(--clay) 40%, transparent); border-radius:var(--r); padding:9px 12px; margin:8px 0; line-height:1.6 }
#tab-trackman .ok{ font-size:12.5px; color:var(--hit,#1e8a4c); background:color-mix(in srgb, var(--hit,#1e8a4c) 9%, transparent);
  border:1px solid color-mix(in srgb, var(--hit,#1e8a4c) 35%, transparent); border-radius:var(--r); padding:9px 12px; margin:8px 0; line-height:1.6 }
#tab-trackman .card{ background:var(--paper); border:1px solid var(--line); border-radius:var(--r); padding:12px 14px; margin-bottom:12px; min-width:0 }
#tab-trackman .card h3{ margin:0 0 9px; font-size:13px; letter-spacing:.05em; color:var(--ink2); display:flex; align-items:baseline; gap:8px; flex-wrap:wrap }
#tab-trackman .card h3 .u{ margin-left:auto; font-weight:400; font-size:11.5px; color:var(--muted) }
#tab-trackman .tw{ overflow-x:auto; -webkit-overflow-scrolling:touch }
#tab-trackman table{ width:100%; border-collapse:collapse; font-size:13px }
#tab-trackman th, #tab-trackman td{ padding:5px 8px; border-bottom:1px solid var(--line); text-align:left; white-space:nowrap }
#tab-trackman th{ font-size:11px; color:var(--muted); font-weight:600; letter-spacing:.04em }
#tab-trackman th.s{ cursor:pointer } #tab-trackman th.s:hover{ color:var(--ink) }
#tab-trackman td.n, #tab-trackman th.n{ text-align:right; font-family:var(--num); font-size:14px }
#tab-trackman td.n small{ font-family:var(--jp); font-size:10px; color:var(--muted); margin-left:3px }
#tab-trackman td.est{ color:var(--muted) }
#tab-trackman tr.me td{ background:color-mix(in srgb, var(--accent) 7%, transparent) }
#tab-trackman .muted{ color:var(--muted) }
#tab-trackman .sw{ display:inline-block; width:10px; height:10px; border-radius:50%; margin-right:5px; vertical-align:-1px }
#tab-trackman .pill{ display:inline-block; font-size:10.5px; font-weight:700; padding:1px 7px; border-radius:99px }
#tab-trackman .pill.bad{ background:color-mix(in srgb, var(--clay) 16%, transparent); color:var(--clay) }
#tab-trackman .pill.est{ background:var(--ground); color:var(--muted); font-weight:600 }
#tab-trackman .pill.live{ background:color-mix(in srgb, var(--accent) 14%, transparent); color:var(--accent) }
#tab-trackman .grid2{ display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:12px }
#tab-trackman .grid3{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:12px }
#tab-trackman svg.ch{ display:block; width:100%; height:auto; font-family:var(--jp) }
#tab-trackman svg.ch text{ font-size:10px; fill:var(--muted) }
#tab-trackman svg.ch .ax{ stroke:color-mix(in srgb, var(--line) 45%, transparent); stroke-width:.8 }
#tab-trackman svg.ch .ax0{ stroke:var(--ink2); stroke-width:1; opacity:.5 }
#tab-trackman svg.ch .zone{ fill:none; stroke:var(--ink2); stroke-width:1.2 }
#tab-trackman svg.ch .lab{ font-size:11px; fill:var(--ink2); font-weight:600 }
#tab-trackman .legend{ display:flex; gap:10px; flex-wrap:wrap; font-size:11.5px; color:var(--ink2); margin:4px 0 6px }
#tab-trackman .legend .cnt{ color:var(--muted); font-family:var(--num) }
#tab-trackman .empty{ padding:26px; text-align:center; color:var(--muted); font-size:13px; border:1px dashed var(--line); border-radius:var(--r) }
#tab-trackman .drop{ border:2px dashed var(--line); border-radius:var(--r); padding:26px; text-align:center; color:var(--muted);
  font-size:13px; cursor:pointer; background:var(--paper) }
#tab-trackman .drop.over{ border-color:var(--accent); background:color-mix(in srgb, var(--accent) 6%, transparent) }
#tab-trackman .kv{ display:grid; grid-template-columns:auto 1fr; gap:4px 14px; font-size:13px; margin:8px 0 }
#tab-trackman .kv b{ color:var(--muted); font-weight:600; font-size:11.5px }
#tab-trackman .kpis{ display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px }
#tab-trackman .kpi{ background:var(--paper); border:1px solid var(--line); border-radius:var(--r); padding:8px 14px; min-width:120px }
#tab-trackman .kpi b{ display:block; font-size:10.5px; color:var(--muted); font-weight:600; letter-spacing:.05em }
#tab-trackman .kpi span{ font-family:var(--num); font-size:20px }
#tab-trackman .kpi small{ font-family:var(--jp); font-size:10.5px; color:var(--muted); margin-left:3px }
#tab-trackman .chips{ display:flex; gap:6px; flex-wrap:wrap }
#tab-trackman .chip{ font-size:12px; padding:4px 10px; border:1px solid var(--line); border-radius:99px; background:var(--paper); cursor:pointer; color:var(--ink2) }
#tab-trackman .chip[aria-pressed="true"]{ background:var(--accent); color:var(--accentInk); border-color:var(--accent) }
@media (max-width:620px){
  #tab-trackman .pw{ padding:10px 10px 50px }
  #tab-trackman .seg button{ padding:6px 9px; font-size:12px }
}
html.prt #tab-trackman .hd .sp, html.prt #tab-trackman .seg, html.prt #tab-trackman .bar, html.prt #tab-trackman .noprint{ display:none !important }
html.prt #tab-trackman .pw{ max-width:none; padding:0 }
html.prt #tab-trackman .card{ break-inside:avoid; box-shadow:none }
/* 印刷では表を横スクロールにせず、文字を小さくして用紙の幅に全部の列を収める */
html.prt #tab-trackman .tw{ overflow:visible }
html.prt #tab-trackman table{ font-size:9.5px }
html.prt #tab-trackman th, html.prt #tab-trackman td{ padding:3px 3px }
html.prt #tab-trackman th{ font-size:8.5px; letter-spacing:0; white-space:normal; vertical-align:bottom; line-height:1.25 }
html.prt #tab-trackman td.n, html.prt #tab-trackman th.n{ font-size:10px }
html.prt #tab-trackman td.n small{ font-size:7.5px; margin-left:1px }
`;

/* ================= 小道具 ================= */
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const today = () => { const d = new Date(); return d.getFullYear() + '-' +
  String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const isNum = v => v !== '' && v != null && !isNaN(v);
const num = (v, dec) => isNum(v) ? Number(v).toFixed(dec) : '—';
const uid = p => (p || 'tm-') + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const r1 = v => isNum(v) ? Math.round(v * 10) / 10 : '';
const r2 = v => isNum(v) ? Math.round(v * 100) / 100 : '';
const r3 = v => isNum(v) ? Math.round(v * 1000) / 1000 : '';
const mean = a => a.length ? a.reduce((s, v) => s + v, 0) / a.length : null;
const sd = a => { if (a.length < 2) return null; const m = mean(a); return Math.sqrt(a.reduce((s, v) => s + (v - m) * (v - m), 0) / (a.length - 1)); };
const median = a => { if (!a.length) return null; const s = a.slice().sort((x, y) => x - y); const h = s.length >> 1; return s.length % 2 ? s[h] : (s[h - 1] + s[h]) / 2; };
const nums = (rows, k) => rows.map(r => r[k]).filter(isNum).map(Number);
/* 年度は4月始まり */
const fiscalStart = () => { const d = new Date(); const y = d.getMonth() >= 3 ? d.getFullYear() : d.getFullYear() - 1; return y + '-04-01'; };

/* 球種の色。設定シートに日本語名があればそれを使う */
const TYPE_COLOR = { Fastball: 'var(--t8)', TwoSeamFastBall: 'var(--t2)', Sinker: 'var(--t2)', Cutter: 'var(--t7)',
  Slider: 'var(--t4)', Curveball: 'var(--t1)', ChangeUp: 'var(--t3)', Splitter: 'var(--t5)', Knuckleball: 'var(--t6)', Other: 'var(--t0)', '': 'var(--t0)' };
const TYPE_ORDER = ['Fastball', 'TwoSeamFastBall', 'Sinker', 'Cutter', 'Slider', 'Curveball', 'ChangeUp', 'Splitter', 'Knuckleball', 'Other', ''];
const typeColor = t => TYPE_COLOR[t] || 'var(--t0)';
/* 球速比（その投手のストレート平均 = 100%）で色の濃さを変える。70%で薄く、100%以上で最も濃い */
const shade = (color, ratio) => { if (!isNum(ratio)) return color;
  const pct = Math.round(Math.max(28, Math.min(100, 28 + (Number(ratio) - 0.70) / 0.30 * 72)));
  return `color-mix(in srgb, ${color} ${pct}%, var(--paper))`; };
const veloRef = rows => { const fb = rows.filter(r => r['球種'] === 'Fastball' && isNum(r['球速'])).map(r => Number(r['球速']));
  if (fb.length) return mean(fb); const all = rows.filter(r => isNum(r['球速'])).map(r => Number(r['球速'])); return all.length ? Math.max(...all) : null; };
const HAND_COLOR = { '右': 'var(--accent)', '左': 'var(--clay)' };

/* ================= CSV ================= */
function parseCSV(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; }
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (c === '\r') { /* skip */ }
    else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  if (!rows.length) return [];
  const hdr = rows[0].map(h => h.replace(/^﻿/, '').trim());
  return rows.slice(1).filter(r => r.some(x => x.trim() !== '')).map(r => {
    const o = {}; hdr.forEach((h, i) => o[h] = (r[i] == null ? '' : r[i]).trim()); return o;
  });
}
const normDate = s => {
  const m = String(s || '').match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})/);
  return m ? m[1] + '-' + m[2].padStart(2, '0') + '-' + m[3].padStart(2, '0') : '';
};
const f = v => (v === '' || v == null || isNaN(v)) ? '' : Number(v);

/* ================= 軌道からの計算 =================
   CSVの x0..az0（y0=15.24m から先の2次式）で、Trackmanが出していない値を計算する。
   横方向は、軌道の x 軸と報告値の符号が逆なので反転して使う（実測で確認済み）。 */
const G = 9.80665, Y_PLATE = 0.4318, Y_MOUND = 18.44;
function solveT(y0, vy, ay, yt) {
  const A = 0.5 * ay, B = vy, C = y0 - yt;
  if (Math.abs(A) < 1e-9) return -C / B;
  const disc = B * B - 4 * A * C; if (disc < 0) return null;
  const s = Math.sqrt(disc), t1 = (-B - s) / (2 * A), t2 = (-B + s) / (2 * A);
  return Math.abs(t1) < Math.abs(t2) ? t1 : t2;
}
function trajectory(rec, ext) {
  const P = ['x0', 'z0', 'vx0', 'vy0', 'vz0', 'ax0', 'ay0', 'az0'];
  if (!P.every(k => isNum(rec[k]))) return null;
  // 投球としてありえない軌道（打球を追ってしまった等）は使わない
  if (Math.abs(rec.x0) > 2 || rec.z0 < 0.3 || rec.z0 > 3 || rec.vy0 > -15 || rec.vy0 < -55 || rec.ay0 < 0) return null;
  const y0 = isNum(rec.y0) ? Number(rec.y0) : 15.24;
  const x0 = -Number(rec.x0), z0 = Number(rec.z0), vx = -Number(rec.vx0), vy = Number(rec.vy0), vz = Number(rec.vz0);
  const ax = -Number(rec.ax0), ay = Number(rec.ay0), az = Number(rec.az0);
  const pos = (p, v, a, t) => p + v * t + 0.5 * a * t * t, vel = (v, a, t) => v + a * t;
  const tp = solveT(y0, vy, ay, Y_PLATE); if (tp == null) return null;
  const out = {};
  out.plateX = pos(x0, vx, ax, tp); out.plateZ = pos(z0, vz, az, tp);
  // ベース手前で地面に着く・大きく外れる軌道（ワンバウンドや追跡ミス）は使わない
  if (out.plateZ < 0 || out.plateZ > 3 || Math.abs(out.plateX) > 1.5) return null;
  const vxp = vel(vx, ax, tp), vyp = vel(vy, ay, tp), vzp = vel(vz, az, tp);
  out.vaa = Math.atan2(vzp, -vyp) * 180 / Math.PI;
  out.haa = Math.atan2(vxp, -vyp) * 180 / Math.PI;
  // マグヌス加速度から有効回転数（推定）
  const v = Math.sqrt(vx * vx + vy * vy + vz * vz);
  const a = [ax, ay, az + G], vh = [vx / v, vy / v, vz / v];
  const dot = a[0] * vh[0] + a[1] * vh[1] + a[2] * vh[2];
  const aM = Math.hypot(a[0] - dot * vh[0], a[1] - dot * vh[1], a[2] - dot * vh[2]);
  const m = 0.145, r = 0.229 / (2 * Math.PI), A = Math.PI * r * r, rho = 1.194;
  const CL = 2 * m * aM / (rho * A * v * v);
  if (CL < 0.33) { const S = 0.166 * Math.log(0.336 / Math.max(0.336 - CL, 1e-6)); out.activeSpin = S * v / r * 60 / (2 * Math.PI); }
  if (isNum(ext)) {
    const tr = solveT(y0, vy, ay, Y_MOUND - Number(ext));
    if (tr != null) {
      out.relX = pos(x0, vx, ax, tr); out.relZ = pos(z0, vz, az, tr);
      const vxr = vel(vx, ax, tr), vyr = vel(vy, ay, tr), vzr = vel(vz, az, tr);
      out.vra = Math.atan2(vzr, -vyr) * 180 / Math.PI;
      out.hra = Math.atan2(vxr, -vyr) * 180 / Math.PI;
      const tf = tp - tr;
      out.ivb = (out.plateZ - (out.relZ + vzr * tf - 0.5 * G * tf * tf)) * 100;
      out.hb = (out.plateX - (out.relX + vxr * tf)) * 100;
      out.vb = (out.plateZ - (out.relZ + vzr * tf)) * 100;
    }
  }
  return out;
}

/* 保存した行（x0..az0 と エクステンション）から、本塁までの距離 y → [横, 高さ] を返す。
   横は保存時の符号（報告値と同じ向き）に揃える。投球としてありえない軌道は null */
function trajFn(r) {
  const P = ['x0', 'z0', 'vx0', 'vy0', 'vz0', 'ax0', 'ay0', 'az0'];
  if (!P.every(k => isNum(r[k]))) return null;
  if (Math.abs(r.x0) > 2 || r.z0 < 0.3 || r.z0 > 3 || r.vy0 > -15 || r.vy0 < -55 || r.ay0 < 0) return null;
  const y0 = 15.24, x0 = -Number(r.x0), z0 = Number(r.z0), vx = -Number(r.vx0), vy = Number(r.vy0), vz = Number(r.vz0);
  const ax = -Number(r.ax0), ay = Number(r.ay0), az = Number(r.az0);
  const at = yt => { const t = solveT(y0, vy, ay, yt); if (t == null) return null; return [x0 + vx * t + 0.5 * ax * t * t, z0 + vz * t + 0.5 * az * t * t]; };
  // 計測できていない球は描かない（エクステンション・リリース高さ・コース高さがそろった球だけ）
  if (!isNum(r['エクステンション']) || !isNum(r['リリース高さ']) || !isNum(r['コース高さ'])) return null;
  const ext = Number(r['エクステンション']);
  const yRel = Y_MOUND - ext, rel = at(yRel), pl = at(Y_PLATE);
  if (!rel || !pl || pl[1] < 0 || pl[1] > 3 || Math.abs(pl[0]) > 1.5) return null;
  return { at, yRel, rel, plate: pl };
}

/* 横から見た軌道（ピッチトンネル）。rows は同じ投手の球。types は描く球種の順 */
function sideView(rows, types, o) {
  const w = 920, h = 340, L = 34, R = 190, T = 14, B = 26, YL = 18.9, YR = -0.6;
  const X = y => L + (YL - y) / (YL - YR) * (w - L - R);
  const Y = z => T + (2.3 - z) / 2.3 * (h - T - B);
  const grid = []; for (let y = 17.4; y >= Y_PLATE - 1e-9; y -= 0.45) grid.push(y); grid.push(Y_PLATE);
  const by = {};
  rows.forEach(r => { const f = trajFn(r); if (!f) return; (by[String(r['球種'])] = by[String(r['球種'])] || []).push({ r, f }); });
  let s = `<svg class="ch" viewBox="0 0 ${w} ${h}">`;
  for (let y = 18; y >= 0; y -= 3) s += `<line class="ax" x1="${X(y)}" y1="${T}" x2="${X(y)}" y2="${h - B}"/><text x="${X(y)}" y="${h - B + 12}" text-anchor="middle">${y}</text>`;
  for (let z = 0; z <= 2; z += 0.5) s += `<line class="ax" x1="${L}" y1="${Y(z)}" x2="${X(YR)}" y2="${Y(z)}"/><text x="${L - 3}" y="${Y(z) + 3}" text-anchor="end">${z.toFixed(1)}</text>`;
  s += `<text x="${(L + X(YR)) / 2}" y="${h - 2}" text-anchor="middle" class="lab">本塁までの距離 m</text>`;
  // マウンドのプレート、本塁、ゾーン
  s += `<rect x="${X(Y_MOUND) - 2}" y="${Y(0.25)}" width="4" height="${Y(0) - Y(0.25)}" fill="var(--muted)"/>`;
  s += `<rect x="${X(0.43)}" y="${Y(0.04)}" width="${X(0) - X(0.43)}" height="${Y(0) - Y(0.04)}" fill="var(--muted)"/>`;
  s += `<rect x="${X(0.43)}" y="${Y(o.zone.top)}" width="${X(-0.3) - X(0.43)}" height="${Y(o.zone.bot) - Y(o.zone.top)}" fill="var(--accent)" opacity=".13"/>`;
  s += `<line x1="${X(0)}" y1="${Y(o.zone.top)}" x2="${X(0)}" y2="${Y(o.zone.bot)}" stroke="var(--accent)" stroke-width="2"/>`;
  // トンネル点
  s += `<line x1="${X(o.tun)}" y1="${T}" x2="${X(o.tun)}" y2="${h - B}" stroke="var(--accent)" stroke-width="1.2" stroke-dasharray="5 4"/>`;
  s += `<text x="${X(o.tun) - 4}" y="${T + 10}" text-anchor="end" style="fill:var(--accent);font-weight:600">トンネル点 ${o.tun} m</text>`;
  // 1球ずつ（細く）
  types.forEach(t => (by[t] || []).forEach(({ f }) => {
    const pts = grid.filter(y => y <= f.yRel).map(y => f.at(y)).filter(Boolean);
    const d = [[f.yRel, f.rel]].concat(grid.filter(y => y <= f.yRel).map(y => [y, f.at(y)]).filter(p => p[1]));
    s += `<polyline fill="none" stroke="${o.color(t)}" stroke-width="1" opacity=".22" points="${d.map(([y, p]) => X(y).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join(' ')}"/>`;
  }));
  // 球種ごとの平均軌道
  const M = {};
  types.forEach(t => { const L2 = by[t]; if (!L2 || !L2.length) return;
    const yRel = mean(L2.map(x => x.f.yRel));
    const pts = [[yRel, [mean(L2.map(x => x.f.rel[0])), mean(L2.map(x => x.f.rel[1]))]]]
      .concat(grid.filter(y => y < yRel).map(y => { const ps = L2.map(x => x.f.at(y)).filter(Boolean); return [y, [mean(ps.map(p => p[0])), mean(ps.map(p => p[1]))]]; }));
    const atT = L2.map(x => x.f.at(o.tun)).filter(Boolean), atP = L2.map(x => x.f.plate);
    M[t] = { n: L2.length, pts, tun: [mean(atT.map(p => p[0])), mean(atT.map(p => p[1]))], plate: [mean(atP.map(p => p[0])), mean(atP.map(p => p[1]))],
             vaa: mean(nums(L2.map(x => x.r), '入射角縦')), vra: mean(nums(L2.map(x => x.r), 'リリース角縦')),
             relH: mean(nums(L2.map(x => x.r), 'リリース高さ')), ext: mean(nums(L2.map(x => x.r), 'エクステンション')) };
    s += `<polyline fill="none" stroke="${o.color(t)}" stroke-width="3" stroke-linecap="round" points="${pts.map(([y, p]) => X(y).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join(' ')}"/>`;
    // 平均のリリース点に印
    s += `<circle cx="${X(pts[0][0]).toFixed(1)}" cy="${Y(pts[0][1][1]).toFixed(1)}" r="4" fill="${o.color(t)}" stroke="#fff" stroke-width="1.2"/>`;
  });
  const fb = M['Fastball'] || M[types[0]];
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]) * 100;
  // トンネル点での離れ（縦線）
  if (fb) Object.keys(M).forEach(t => { if (M[t] === fb) return;
    s += `<line x1="${X(o.tun) - 3}" y1="${Y(fb.tun[1])}" x2="${X(o.tun) - 3}" y2="${Y(M[t].tun[1])}" stroke="${o.color(t)}" stroke-width="2.5" opacity=".8"/>`; });
  // 右側のラベル（重ならないように並べる）
  const labs = Object.keys(M).map(t => ({ t, z: M[t].plate[1] })).sort((a, b) => a.z - b.z);
  let prev = -1; const rowH = 24;
  labs.forEach(l => { let yy = Y(l.z); if (prev >= 0 && prev - yy < rowH) yy = prev - rowH; prev = yy; l.y = yy; });
  labs.forEach(({ t, z, y }) => { const m = M[t], c = o.color(t);
    const sep = fb && m !== fb ? `トンネル ${dist(fb.tun, m.tun).toFixed(0)}cm → 本塁 ${dist(fb.plate, m.plate).toFixed(0)}cm` : `${m.n}球・基準`;
    s += `<line x1="${X(0)}" y1="${Y(z)}" x2="${X(YR) + 4}" y2="${y + 6}" stroke="${c}" stroke-width=".8" opacity=".6"/>`
       + `<text x="${X(YR) + 6}" y="${y + 3}" class="lab" style="fill:${c}">${esc(o.jtype(t))} 入射 ${isNum(m.vaa) ? m.vaa.toFixed(1) + '°' : '—'}</text>`
       + `<text x="${X(YR) + 6}" y="${y + 14}" style="fill:${c};font-size:9.5px">${esc(sep)}</text>`; });
  // 左下のラベル：球種ごとのリリース角・高さ・エクステンション（軌道が通らない空いたところに、色で対応づけて並べる）
  const f1 = (v, u) => isNum(v) ? v.toFixed(1) + u : '—';
  const f2 = (v, u) => isNum(v) ? v.toFixed(2) + u : '—';
  const rl = Object.keys(M).map(t => ({ t, m: M[t] })).sort((a, b) => (isNum(b.m.vra) ? b.m.vra : -99) - (isNum(a.m.vra) ? a.m.vra : -99));
  if (rl.length) {
    const lx = X(17.7); let yy = h - B - 8 - 13 * (rl.length - 1);
    s += `<text x="${lx}" y="${yy - 13}" class="lab" style="fill:var(--muted)">リリース（角度は上向きが＋）：角度 ／ 高さ ／ エクステンション</text>`;
    rl.forEach(({ t, m }) => { const c = o.color(t);
      s += `<circle cx="${lx + 4}" cy="${yy - 3.5}" r="3.5" fill="${c}"/>`
         + `<text x="${lx + 12}" y="${yy}" class="lab" style="fill:${c}">${esc(o.jtype(t))} ${f1(m.vra, '°')} ／ ${f2(m.relH, ' m')} ／ ${f2(m.ext, ' m')}</text>`;
      yy += 13; });
  }
  return s + '</svg>';
}

/* CSVの1行 → 保存する1行。flip=true で横方向をすべて反転 */
const KIND_OF = pt => /LiveBp|Game/i.test(pt || '') ? '対戦' : 'ブルペン';
function toRow(rec, ctx) {
  const sx = ctx.flip ? -1 : 1;
  const h = v => (isNum(v) ? Number(v) * sx : '');
  /* Trackman が計測した値だけを使う。空欄は空欄のまま（計算で埋めない） */
  const pick = (measured, _calc, _name, round) => isNum(measured) ? round(measured) : '';
  const tj = null;
  const row = {
    '計測ID': uid('tm-'), '投手ID': ctx.pid, 'セッションID': ctx.sid,
    '測定日': ctx.date, '時刻': String(rec.Time || ''), '球番号': f(rec.PitchNo),
    '種別': ctx.kind, '区分': String(rec.PitchSession || ''), '球種': String(rec.TaggedPitchType || ''),
    '球速': r1(f(rec.RelSpeed)), '回転数': isNum(rec.SpinRate) ? Math.round(rec.SpinRate) : '', '回転数疑い': '',
    '回転効率': r1(f(rec.SpinAxis3dSpinEfficiency)),
    '有効回転数': isNum(rec.SpinAxis3dActiveSpinRate) ? Math.round(rec.SpinAxis3dActiveSpinRate) : '',
    '回転軸': r1(f(rec.SpinAxis)), '傾き': String(rec.Tilt || ''),
    'リリース高さ': pick(f(rec.RelHeight), tj && tj.relZ, 'リリース高さ', r3),
    'リリース横幅': pick(h(rec.RelSide), tj && isNum(tj.relX) ? tj.relX * sx : '', 'リリース横幅', r3),
    'エクステンション': isNum(rec.Extension) ? r3(rec.Extension) : '',
    '縦変化量': pick(f(rec.InducedVertBreak), tj && tj.ivb, '縦変化量', r1),
    '横変化量': pick(h(rec.HorzBreak), tj && isNum(tj.hb) ? tj.hb * sx : '', '横変化量', r1),
    '総縦変化': pick(f(rec.VertBreak), tj && tj.vb, '総縦変化', r1),
    'リリース角縦': pick(f(rec.VertRelAngle), tj && tj.vra, 'リリース角縦', r2),
    'リリース角横': pick(h(rec.HorzRelAngle), tj && isNum(tj.hra) ? tj.hra * sx : '', 'リリース角横', r2),
    '入射角縦': pick(f(rec.VertApprAngle), tj && tj.vaa, '入射角縦', r2),
    '入射角横': pick(h(rec.HorzApprAngle), tj && isNum(tj.haa) ? tj.haa * sx : '', '入射角横', r2),
    '補完': '',
    'コース高さ': pick(f(rec.PlateLocHeight), tj && tj.plateZ, 'コース高さ', r3),
    'コース横': pick(h(rec.PlateLocSide), tj && isNum(tj.plateX) ? tj.plateX * sx : '', 'コース横', r3),
    'ベース速度': r1(f(rec.ZoneSpeed)), '到達時間': r3(f(rec.ZoneTime)), '体感球速': r1(f(rec.EffVelocity)),
    '打者左右': String(rec.BatterSide || ''), '打球速度': r1(f(rec.ExitSpeed)), '打球角度': r1(f(rec.Angle)),
    '打球種': String(rec.HitType || ''), '飛距離': r1(f(rec.Distance)),
    'PlayID': String(rec.PlayID || ''), 'CalibrationId': String(rec.CalibrationId || ''),
    'x0': r3(f(rec.x0)), 'z0': r3(f(rec.z0)), 'vx0': r3(f(rec.vx0)), 'vy0': r3(f(rec.vy0)), 'vz0': r3(f(rec.vz0)),
    'ax0': r3(f(rec.ax0)), 'ay0': r3(f(rec.ay0)), 'az0': r3(f(rec.az0))
  };
  return row;
}

/* 同じ球種の中で、回転数が上位側の値の半分あたりに落ちている球に印を付ける
   （ドップラー計測で半分の値で記録される取りこぼし）。中央値だと半分の球が多いとき
   に釣られるので、上から4分の1の値を基準にする。 */
function flagSpin(rows) {
  const by = {};
  rows.forEach(r => { if (isNum(r['回転数'])) (by[r['球種']] = by[r['球種']] || []).push(Number(r['回転数'])); });
  const ref = {};
  Object.keys(by).forEach(t => { const a = by[t].slice().sort((x, y) => x - y); if (a.length >= 3) ref[t] = a[Math.floor((a.length - 1) * 0.75)]; });
  let n = 0;
  rows.forEach(r => {
    r['回転数疑い'] = '';
    if (!isNum(r['回転数']) || ref[r['球種']] == null) return;
    const v = Number(r['回転数']), hi = ref[r['球種']];
    if (v >= hi * 0.38 && v <= hi * 0.62) { r['回転数疑い'] = 1; n++; }
  });
  return n;
}

/* ================= グラフ（SVG手描き） =================
   どれも「見る人が一目で分かる」ことを優先して、装飾は最小限。 */
function scatter(opts) {
  // opts: {w,h, xr:[lo,hi], yr:[lo,hi], xl, yl, pts:[{x,y,c,cls?}], zero:true, extra:svg, xticks, yticks, xlabels:{lo,hi}}
  const w = opts.w || 360, h = opts.h || 300, L = 38, R = 10, T = 12, B = 30;
  const [xa, xb] = opts.xr, [ya, yb] = opts.yr;
  const tf = (v, a, b) => (b - a) >= 20 ? String(Math.round(v)) : (b - a) >= 4 ? v.toFixed(1) : v.toFixed(2);
  const X = v => L + (v - xa) / (xb - xa) * (w - L - R);
  const Y = v => T + (yb - v) / (yb - ya) * (h - T - B);
  let s = `<svg class="ch" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">`;
  const xt = opts.xticks || 5, yt = opts.yticks || 5;
  for (let i = 0; i <= xt; i++) { const v = xa + (xb - xa) * i / xt; s += `<line class="ax" x1="${X(v)}" y1="${T}" x2="${X(v)}" y2="${h - B}"/><text x="${X(v)}" y="${h - B + 13}" text-anchor="middle">${tf(v, xa, xb)}</text>`; }
  for (let i = 0; i <= yt; i++) { const v = ya + (yb - ya) * i / yt; s += `<line class="ax" x1="${L}" y1="${Y(v)}" x2="${w - R}" y2="${Y(v)}"/><text x="${L - 4}" y="${Y(v) + 3}" text-anchor="end">${tf(v, ya, yb)}</text>`; }
  if (opts.zero !== false) {
    if (xa < 0 && xb > 0) s += `<line class="ax0" x1="${X(0)}" y1="${T}" x2="${X(0)}" y2="${h - B}"/>`;
    if (ya < 0 && yb > 0) s += `<line class="ax0" x1="${L}" y1="${Y(0)}" x2="${w - R}" y2="${Y(0)}"/>`;
  }
  if (opts.extra) s += opts.extra(X, Y);
  opts.pts.forEach(p => {
    if (!isNum(p.x) || !isNum(p.y)) return;
    const x = X(Math.max(xa, Math.min(xb, p.x))), y = Y(Math.max(ya, Math.min(yb, p.y)));
    const r = p.r || 3.2;
    if (p.hollow) s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="var(--paper)" stroke="${p.c}" stroke-width="1.4" opacity="${p.o != null ? p.o : .9}"><title>${esc(p.t || '')}</title></circle>`;
    else s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${p.c}" opacity="${p.o != null ? p.o : .85}" ${p.stroke ? `stroke="${p.stroke}" stroke-width="1.5"` : ''}><title>${esc(p.t || '')}</title></circle>`;
    if (p.label) s += x > w * 0.78
      ? `<text class="lab" x="${(x - r - 2).toFixed(1)}" y="${(y + 3).toFixed(1)}" text-anchor="end">${esc(p.label)}</text>`
      : `<text class="lab" x="${(x + r + 2).toFixed(1)}" y="${(y + 3).toFixed(1)}">${esc(p.label)}</text>`;
  });
  (opts.means || []).forEach(m => {
    if (!isNum(m.x) || !isNum(m.y)) return;
    const x = X(Math.max(xa, Math.min(xb, m.x))), y = Y(Math.max(ya, Math.min(yb, m.y)));
    s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="${m.c}" stroke="var(--paper)" stroke-width="2.5"><title>${esc(m.t || '')}</title></circle>`
       + `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8.5" fill="none" stroke="${m.c}" stroke-width="1.2"/>`;
    if (m.label) s += `<text class="lab" x="${(x + 11).toFixed(1)}" y="${(y + 3.5).toFixed(1)}" style="font-size:10.5px;paint-order:stroke;stroke:var(--paper);stroke-width:3px">${esc(m.label)}</text>`;
  });
  if (opts.xl) s += `<text x="${(L + w - R) / 2}" y="${h - 3}" text-anchor="middle" class="lab">${esc(opts.xl)}</text>`;
  if (opts.yl) s += `<text transform="translate(9,${(T + h - B) / 2}) rotate(-90)" text-anchor="middle" class="lab">${esc(opts.yl)}</text>`;
  if (opts.xlabels) s += `<text x="${L + 2}" y="${T + 10}">${esc(opts.xlabels[0])}</text><text x="${w - R - 2}" y="${T + 10}" text-anchor="end">${esc(opts.xlabels[1])}</text>`;
  return s + '</svg>';
}

/* 球種ごとの分布：最小〜最大の線、平均±1σの太線、平均の点 */
function rangeChart(groups, opts) {
  // groups: [{name,c,vals:[]}]  opts:{unit,dec,w}
  const w = opts.w || 360, rowH = 26, L = 92, R = 44, T = 8;
  const all = groups.flatMap(g => g.vals); if (!all.length) return '<div class="empty">データがありません</div>';
  let lo = Math.min(...all), hi = Math.max(...all); if (hi - lo < 1e-6) { lo -= 1; hi += 1; }
  const pad = (hi - lo) * 0.06; lo -= pad; hi += pad;
  const h = T + groups.length * rowH + 22;
  const X = v => L + (v - lo) / (hi - lo) * (w - L - R);
  let s = `<svg class="ch" viewBox="0 0 ${w} ${h}">`;
  for (let i = 0; i <= 4; i++) { const v = lo + (hi - lo) * i / 4; s += `<line class="ax" x1="${X(v)}" y1="${T}" x2="${X(v)}" y2="${h - 20}"/><text x="${X(v)}" y="${h - 7}" text-anchor="middle">${v.toFixed(opts.dec || 0)}</text>`; }
  groups.forEach((g, i) => {
    const y = T + i * rowH + rowH / 2;
    s += `<text x="${L - 6}" y="${y + 4}" text-anchor="end" class="lab">${esc(g.name)}</text><text x="${L - 6}" y="${y + 14}" text-anchor="end" style="font-size:9px">${g.vals.length}球</text>`;
    if (!g.vals.length) return;
    const m = mean(g.vals), d = sd(g.vals), mn = Math.min(...g.vals), mx = Math.max(...g.vals);
    s += `<line x1="${X(mn)}" y1="${y}" x2="${X(mx)}" y2="${y}" stroke="${g.c}" stroke-width="1.5" opacity=".5"/>`;
    if (d != null) s += `<line x1="${X(Math.max(mn, m - d))}" y1="${y}" x2="${X(Math.min(mx, m + d))}" y2="${y}" stroke="${g.c}" stroke-width="7" opacity=".55"/>`;
    s += `<circle cx="${X(m)}" cy="${y}" r="4.5" fill="${g.c}" stroke="var(--paper)" stroke-width="1.5"/>`;
    s += `<text x="${X(mx) + 5}" y="${y + 4}" style="font-family:var(--num);font-size:11px;fill:var(--ink)">${m.toFixed(opts.dec || 0)}</text>`;
  });
  return s + '</svg>';
}

/* 日付ごとの推移：球種ごとに線 */
function trendChart(series, opts) {
  // series: [{name,c,pts:[{d,v,n}]}] sorted by d
  const w = opts.w || 360, h = opts.h || 190, L = 40, R = 10, T = 10, B = 28;
  const dates = [...new Set(series.flatMap(s => s.pts.map(p => p.d)))].sort();
  const vals = series.flatMap(s => s.pts.map(p => p.v));
  if (!dates.length || !vals.length) return '<div class="empty">データがありません</div>';
  let lo = Math.min(...vals), hi = Math.max(...vals); if (hi - lo < 1e-6) { lo -= 1; hi += 1; }
  const pad = (hi - lo) * .12; lo -= pad; hi += pad;
  const X = d => dates.length === 1 ? (L + w - R) / 2 : L + dates.indexOf(d) / (dates.length - 1) * (w - L - R);
  const Y = v => T + (hi - v) / (hi - lo) * (h - T - B);
  let s = `<svg class="ch" viewBox="0 0 ${w} ${h}">`;
  for (let i = 0; i <= 4; i++) { const v = lo + (hi - lo) * i / 4; s += `<line class="ax" x1="${L}" y1="${Y(v)}" x2="${w - R}" y2="${Y(v)}"/><text x="${L - 4}" y="${Y(v) + 3}" text-anchor="end">${v.toFixed(opts.dec || 0)}</text>`; }
  const step = Math.max(1, Math.ceil(dates.length / 6));
  dates.forEach((d, i) => { if (i % step === 0 || i === dates.length - 1) s += `<text x="${X(d)}" y="${h - B + 13}" text-anchor="middle">${d.slice(5)}</text>`; });
  series.forEach(sr => {
    const pts = sr.pts.filter(p => isNum(p.v));
    if (pts.length > 1) s += `<polyline fill="none" stroke="${sr.c}" stroke-width="2" opacity=".8" points="${pts.map(p => X(p.d).toFixed(1) + ',' + Y(p.v).toFixed(1)).join(' ')}"/>`;
    pts.forEach(p => s += `<circle cx="${X(p.d)}" cy="${Y(p.v)}" r="3.5" fill="${sr.c}"><title>${esc(sr.name)} ${p.d} ${p.v.toFixed(opts.dec || 1)}（${p.n}球）</title></circle>`);
  });
  if (opts.yl) s += `<text transform="translate(9,${(T + h - B) / 2}) rotate(-90)" text-anchor="middle" class="lab">${esc(opts.yl)}</text>`;
  return s + '</svg>';
}

/* コース図：捕手側から見た向き。ゾーンは設定の固定値 */
function zoneChart(pts, zone, opts) {
  const w = opts.w || 300, h = opts.h || 300;
  return scatter({ w, h, xr: [-0.7, 0.7], yr: [0, 1.6], xticks: 7, yticks: 4,
    xl: opts.xl || 'コース横 m（捕手から見て）', yl: '高さ m', zero: false,
    xlabels: opts.xlabels,
    extra: (X, Y) => `<rect class="zone" x="${X(-zone.side)}" y="${Y(zone.top)}" width="${X(zone.side) - X(-zone.side)}" height="${Y(zone.bot) - Y(zone.top)}"/>`
      + `<line class="ax0" x1="${X(-0.216)}" y1="${Y(0.02)}" x2="${X(0.216)}" y2="${Y(0.02)}"/>`,
    pts });
}

/* ================= 本体 ================= */
export function mount(ROOT, CORE) {
  const st = document.createElement('style');
  st.id = 'css-trackman'; st.textContent = CSS; document.head.appendChild(st);
  const $ = (s, r) => (r || ROOT).querySelector(s);

  const CFG = CORE.cfg;
  const CONN_KEY = 'hsp-conn-' + CFG.TEAM_ID + CFG.STORE;
  const DBKEY = 'hsp-v3-' + CFG.TEAM_ID + CFG.STORE;
  const conn = (() => { try { return JSON.parse(localStorage.getItem(CONN_KEY) || 'null'); } catch (e) { return null; } })() || {};
  const role = String(conn.user && conn.user.role || '');
  /* 選手がログインしているとき：自分の分だけをサーバーから受け取り、自分のページだけを出す。
     この端末にスタッフの名簿やデータが残っていても使わない（控えも別の場所に置く） */
  const SELF = role.indexOf('選手') === 0;
  const TMKEY = (SELF ? 'hsp-tm-me-' : 'hsp-tm-') + CFG.TEAM_ID + CFG.STORE;
  const isAdmin = () => role.indexOf('管理') === 0;
  const appUrl = () => { let u = ''; if (CFG.APP_URL_B64) { try { u = atob(String(CFG.APP_URL_B64).trim()); } catch (e) {} }
    return conn.url || (/^https?:\/\/.+/.test(u) ? u : ''); };
  async function api(action, payload) {
    const url = appUrl(); if (!url) throw new Error('接続先が設定されていません');
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(Object.assign({ action, token: conn.token }, payload || {})) });
    const j = await res.json();
    if (!j.ok && j.error === 'unauthorized') throw new Error(SELF ? 'ログインが切れています。マイページからログインし直してください' : 'ログインが切れています。「記録」タブでログインし直してください');
    return j;
  }

  /* ---- 状態 ---- */
  let view = 'player';   // データが無いときは取り込み画面から
  let MASTER = null, PITCHERS = [], SESSIONS = [], ROWS = [], SETTINGS = {};
  let loaded = false, busy = false, msg = '', masterFresh = false, fetchedFrom = fiscalStart();
  const F = { from: fiscalStart(), to: '', kind: '', warm: false, type: '', hand: '', player: '', hideTypes: {},
              teamType: 'Fastball', tx: '横変化量', ty: '縦変化量', cmp: {}, cmpMin: '', cmpMax: '', sortKey: '球速', sortDir: -1, showPanel: false };
  const QUEUE = [];    // 取り込み待ちのファイル
  let IMPMSG = '';

  const pname = pid => { const p = (MASTER && MASTER.players || []).find(x => String(x['選手ID']) === String(pid)); return p ? String(p['氏名']) : String(pid); };
  const phand = pid => { const p = (MASTER && MASTER.players || []).find(x => String(x['選手ID']) === String(pid)); return p ? (String(p['投'] || '右')) : '右'; };
  const jtype = t => { const v = SETTINGS['球種:' + (t || '')]; return v ? String(v) : (t || '未分類'); };
  const zone = () => ({ top: Number(SETTINGS['ゾーン上限']) || 0.98, bot: Number(SETTINGS['ゾーン下限']) || 0.47, side: Number(SETTINGS['ゾーン横']) || 0.25 });
  const inZone = r => isNum(r['コース高さ']) && isNum(r['コース横']) && r['コース高さ'] >= zone().bot && r['コース高さ'] <= zone().top && Math.abs(r['コース横']) <= zone().side;
  const tunnelDist = () => Number(SETTINGS['トンネル距離']) || 7.25;
  const rhSign = () => (String(SETTINGS['右投げの符号'] || '+') === '-' ? -1 : 1);
  const sideLabels = () => String(SETTINGS['コース+側'] || '三塁側') === '一塁側' ? ['三塁側', '一塁側'] : ['一塁側', '三塁側'];
  const isEst = () => false;   // 計算で埋めた値はもう無い
  const eff = r => isNum(r['回転効率']) ? { v: Number(r['回転効率']), est: false } : null;   // 回転効率：Trackmanの実測だけを使う（推定はしない）

  /* ---- 端末に残っているもので先に出す ---- */
  function masterFromLocal() {
    let db = null; try { db = JSON.parse(localStorage.getItem(DBKEY) || 'null'); } catch (e) {}
    if (!db || !db.teams) return null;
    const teams = [], players = [];
    Object.keys(db.teams).forEach(k => { const t = db.teams[k]; if (!t) return;
      teams.push({ 'チームID': t.tid, 'チーム名': t.name, '自チーム': t.mine ? 1 : '' });
      (t.players || []).forEach((p, i) => players.push({ '選手ID': p.pid, '氏名': p.name, 'チームID': t.tid, '投': p.throws || '', '投手': p.isP ? 1 : '',
        '状態': p.state || '', '備考': p.mergedTo ? '統合先:' + p.mergedTo : '', '順': (p.ord != null ? p.ord : i) })); });
    return teams.length ? { teams, players } : null;
  }
  function applyMaster(m) {
    MASTER = m;
    // 自チームが2つ以上あるとき（端末のお試しデータが残っている等）は、設定のチーム名と同じものを優先する
    const cands = (m.teams || []).filter(t => String(t['自チーム']) === '1');
    const mineTeam = cands.length <= 1 ? cands[0] : (cands.find(t => String(t['チーム名']) === CFG.TEAM_NAME) || cands.find(t => String(t['チームID']) === 't-' + CFG.TEAM_ID) || cands[0]);
    const tid = mineTeam ? String(mineTeam['チームID']) : '';
    PITCHERS = (m.players || []).filter(x => String(x['チームID']) === tid && String(x['投手']) === '1'
      && String(x['状態'] || '') !== '退部' && !String(x['備考'] || '').startsWith('統合先:'))
      .sort((a, b) => Number(a['順'] || 0) - Number(b['順'] || 0));
    if (PITCHERS.length && !PITCHERS.some(p => String(p['選手ID']) === F.player)) F.player = String(PITCHERS[0]['選手ID']);
  }
  /* 以前の版で、空欄を軌道から計算して埋めた値（「補完」の列に名前が入っている）は使わない。データなしにする */
  function dropFilled(rows) {
    (rows || []).forEach(r => { const ks = String(r['補完'] || '').split(',').filter(Boolean); ks.forEach(k => { r[k] = ''; }); if (ks.length) r['補完'] = ''; });
    return rows || [];
  }
  function applyTm(p) { SESSIONS = p.sessions || []; ROWS = dropFilled(p.rows); SETTINGS = p.settings || {}; }
  /* 選手本人だけの名簿を作る */
  function applySelf(me) {
    if (!me || !me.pid) return;
    applyMaster({ teams: [{ 'チームID': 'me', 'チーム名': CFG.TEAM_NAME, '自チーム': 1 }],
                  players: [{ '選手ID': me.pid, '氏名': me.name, 'チームID': 'me', '投手': 1, '投': me.hand || '右', '順': 0 }] });
    F.player = String(me.pid);
  }
  function warmStart() {
    let c = null; try { c = JSON.parse(localStorage.getItem(TMKEY) || 'null'); } catch (e) {}
    if (SELF) { if (c && c.rows && c.me) { applySelf(c.me); applyTm(c); fetchedFrom = c.from || fetchedFrom; loaded = true; } return; }
    const lm = masterFromLocal(); if (lm) applyMaster(lm);
    if (c && c.rows) { applyTm(c); fetchedFrom = c.from || fetchedFrom; if (MASTER) loaded = true; }
  }
  async function load(from) {
    if (from) fetchedFrom = from;
    busy = true; if (!loaded) render();
    const sig = () => JSON.stringify([ROWS.length, SESSIONS.length, PITCHERS.map(p => [p['選手ID'], p['氏名'], p['投']]), SETTINGS]);
    const before = loaded ? sig() : '';
    try {
      let me = null;
      if (SELF) {
        const p = await api('getMyTrackman', { from: fetchedFrom });
        if (!p.ok) throw new Error(p.error || 'Trackmanのデータを取れませんでした');
        me = p.me; applySelf(me); applyTm(p);
      } else {
        const [m, p] = await Promise.all([masterFresh ? null : api('getMaster'), api('getTrackman', { from: fetchedFrom })]);
        if (m) { if (!m.ok) throw new Error(m.error || 'マスタを取れませんでした'); applyMaster(m.master); masterFresh = true; }
        if (!p.ok) throw new Error(p.error || 'Trackmanのデータを取れませんでした');
        applyTm(p);
      }
      try { const s = JSON.stringify({ sessions: SESSIONS, rows: ROWS, settings: SETTINGS, from: fetchedFrom, me }); if (s.length < 2500000) localStorage.setItem(TMKEY, s); else localStorage.removeItem(TMKEY); } catch (e) {}
      loaded = true; msg = ''; busy = false;
      if (before !== sig()) render();
      return;
    } catch (e) { msg = String(e.message || e); }
    busy = false; render();
  }

  /* ---- 絞り込み ---- */
  function filt(rows, o) {
    o = o || {};
    const from = o.from != null ? o.from : F.from, to = o.to != null ? o.to : F.to, kind = o.kind != null ? o.kind : F.kind;
    const warm = o.warm != null ? o.warm : F.warm;
    return rows.filter(r => (!from || r['測定日'] >= from) && (!to || r['測定日'] <= to) && (!kind || r['種別'] === kind)
      && (warm || String(r['区分']) !== 'Warmup') && (!o.pid || String(r['投手ID']) === String(o.pid))
      && (!o.type || String(r['球種']) === o.type) && (!o.hand || phand(r['投手ID']) === o.hand));
  }
  const typesIn = rows => TYPE_ORDER.filter(t => rows.some(r => String(r['球種']) === t)).concat([...new Set(rows.map(r => String(r['球種'])))].filter(t => TYPE_ORDER.indexOf(t) < 0));
  const spinOK = rows => rows.filter(r => isNum(r['回転数']) && !r['回転数疑い']);
  function stats(rows) {   // 1つの球種のまとまりの数字
    const v = nums(rows, '球速'), sp = nums(spinOK(rows), '回転数');
    const loc = rows.filter(r => isNum(r['コース高さ']) && isNum(r['コース横']));
    const effs = rows.map(eff).filter(Boolean);
    return { n: rows.length, velo: mean(v), vmax: v.length ? Math.max(...v) : null, vsd: sd(v), spin: mean(sp), nspin: sp.length,
      eff: effs.length ? mean(effs.map(e => e.v)) : null, effEst: effs.length && effs.every(e => e.est), neff: effs.length,
      ivb: mean(nums(rows, '縦変化量')), hb: mean(nums(rows, '横変化量')), nbrk: nums(rows, '縦変化量').length,
      relH: mean(nums(rows, 'リリース高さ')), relS: mean(nums(rows, 'リリース横幅')), ext: mean(nums(rows, 'エクステンション')),
      vaa: mean(nums(rows, '入射角縦')), haa: mean(nums(rows, '入射角横')), vra: mean(nums(rows, 'リリース角縦')), hra: mean(nums(rows, 'リリース角横')),
      zone: loc.length ? loc.filter(inZone).length / loc.length * 100 : null, nloc: loc.length,
      locSdH: sd(nums(loc, 'コース高さ')), locSdS: sd(nums(loc, 'コース横')),
      bauer: (v.length && sp.length) ? mean(sp) / (mean(v) / 1.609344) : null, effv: mean(nums(rows, '体感球速')) };   // Bauer Unit = rpm ÷ mph
  }
  const fmtEst = (s, key, dec, est) => est ? `<td class="n est" title="推定">${num(s, dec)}<small>推</small></td>` : `<td class="n">${num(s, dec)}</td>`;

  /* ================= 画面：取り込み =================
     投手が一覧で並び、それぞれの行でCSVを選ぶ（複数可）。最後に「まとめて取り込む」を1回。 */
  const summarize = q => {
    const hand = phand(q.pid), sides = nums(q.rows, 'リリース横幅'), ms = mean(sides);
    const expect = (hand === '左' ? -1 : 1) * rhSign();
    q.ms = ms; q.handWarn = (ms != null && sides.length >= 3 && Math.sign(ms) !== expect);
    q.dup = q.rows.filter(r => r['PlayID'] && ROWS.some(x => x['PlayID'] === r['PlayID'])).length;
    q.missBrk = q.rows.filter(r => !isNum(r['縦変化量'])).length; q.spinBad = q.rows.filter(r => r['回転数疑い']).length;
    q.dates = [...new Set(q.rows.map(r => r['測定日']))].sort();
  };
  function buildQ(q) {
    const first = q.recs.map(r => normDate(r.Date)).filter(Boolean).sort()[0] || today();
    q.sid = q.sid || uid('ts-'); q.date = first;
    q.rows = q.recs.map(r => toRow(r, { pid: q.pid, sid: q.sid, kind: q.kind, flip: q.flip, date: normDate(r.Date) || first }));
    flagSpin(q.rows); summarize(q);
  }
  async function addFiles(pid, files) {
    for (const file of files) {
      let text = ''; try { text = await file.text(); } catch (e) { continue; }
      const recs = parseCSV(text);
      if (!recs.length || !('PitchNo' in recs[0]) || !('RelSpeed' in recs[0])) { msg = `${file.name}：TrackmanのCSVではないようです（PitchNo や RelSpeed の列がありません）`; continue; }
      const pt = recs.map(r => r.PracticeType).filter(Boolean);
      const ptype = pt.sort((a, b) => pt.filter(x => x === b).length - pt.filter(x => x === a).length)[0] || '';
      const q = { id: uid('q-'), pid, name: file.name, recs, ptype, kind: KIND_OF(ptype), flip: false, force: false, status: '' };
      buildQ(q); QUEUE.push(q);
    }
    render();
  }
  function viewImport() {
    const pending = QUEUE.filter(q => !q.done);
    const ready = pending.filter(q => !q.handWarn || q.force);
    const rowsFor = pid => QUEUE.filter(q => q.pid === pid);
    const qHtml = q => {
      const hand = phand(q.pid);
      return `<div style="margin:8px 0 0 12px; padding:8px 10px; background:var(--raise); border-radius:8px; ${q.done ? 'opacity:.6' : ''}">
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap">
          <b style="font-size:13px">${esc(q.name)}</b>
          <span class="muted">${q.rows.length}球</span>
          <span class="muted">${q.dates.join('、')}${q.dates.length > 1 ? ' <span class="pill bad">日付が複数</span>' : ''}</span>
          ${q.done ? `<span class="pill live">${esc(q.status)}</span>` : `<select data-qkind="${q.id}"><option ${q.kind === '対戦' ? 'selected' : ''}>対戦</option><option ${q.kind === 'ブルペン' ? 'selected' : ''}>ブルペン</option></select>
          <button class="b" data-qdel="${q.id}" style="padding:3px 9px;font-size:12px">外す</button>`}
        </div>
        <div class="muted" style="font-size:11.5px; margin-top:4px">
          ${q.ms != null ? (q.handWarn ? `<span class="pill bad">${esc(hand)}投げの選手に${hand === '右' ? '左' : '右'}投げの形のデータ（リリース横幅 ${num(q.ms, 2)} m）</span> 選手が違う可能性が高いです。`
                                       : `投げ手 一致（${esc(hand)}投・${num(q.ms, 2)} m）`) : '投げ手 判定できず'}
          ${q.missBrk ? `　変化量が計測されていない ${q.missBrk}球（データなしとして扱います）` : ''}　回転数の疑い ${q.spinBad}球${q.dup ? `　<b>すでに入っている ${q.dup}球</b>（飛ばします）` : ''}
          ${q.status && !q.done ? `　<b style="color:var(--accent)">${esc(q.status)}</b>` : ''}
        </div>
        ${q.handWarn && !q.done ? `<div class="noprint" style="margin-top:4px"><label class="c"><input type="checkbox" data-qforce="${q.id}" ${q.force ? 'checked' : ''}> それでも取り込む</label>　<label class="c"><input type="checkbox" data-qflip="${q.id}" ${q.flip ? 'checked' : ''}> 左右を反転して取り込む（機器の向きが逆だと分かっているときだけ）</label></div>` : ''}
      </div>`;
    };
    const table = `<div class="card"><h3>投手ごとにCSVを選ぶ<span class="u">1つのCSVは1人分。複数のファイルをまとめて選べます</span></h3>
      ${PITCHERS.map(p => { const pid = String(p['選手ID']); const qs = rowsFor(pid);
          return `<div style="border-top:1px solid var(--line); padding:9px 0">
            <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap">
              <b style="font-size:14px">${esc(p['氏名'])}</b><span class="muted">${esc(phand(pid))}投</span>
              <span class="muted" style="font-size:12px">${qs.length ? `${qs.length}ファイル・${qs.reduce((n, q) => n + q.rows.length, 0)}球` : 'まだ選んでいません'}</span>
              <button class="b" data-pick="${esc(pid)}" style="margin-left:auto">CSVを選ぶ</button><input type="file" accept=".csv,text/csv" multiple hidden data-pidfile="${esc(pid)}">
            </div>
            ${qs.map(qHtml).join('')}
          </div>`; }).join('')}
      <div class="note">対戦（LiveBpPitching）もブルペン（Pitching）も同じ列なので、どちらも同じ手順です。ここで選んだだけでは保存されません。下の「まとめて取り込む」を押すと、上から順に保存します。</div>
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-top:8px">
        <button class="b primary" id="tm-goall" ${(!ready.length || busy) ? 'disabled' : ''}>${ready.length ? `${ready.length}ファイル・${ready.reduce((s, q) => s + q.rows.length, 0)}球をまとめて取り込む` : 'まとめて取り込む'}</button>
        ${pending.length - ready.length ? `<span class="muted" style="font-size:12px">警告のある${pending.length - ready.length}ファイルは、「それでも取り込む」に印を付けない限り飛ばします</span>` : ''}
        ${QUEUE.some(q => q.done) ? `<button class="b" id="tm-clear">済んだ分を消す</button>` : ''}
      </div>
      ${IMPMSG ? `<div class="ok" style="margin-top:10px">${esc(IMPMSG)}</div>` : ''}
    </div>`;
    const sess = SESSIONS.slice().sort((a, b) => String(b['取り込み日時']).localeCompare(String(a['取り込み日時']))).slice(0, 30);
    return table + `<div class="card"><h3>取り込み済み<span class="u">新しい順・最近30件</span></h3>
        ${sess.length ? `<div class="tw"><table><tr><th>測定日</th><th>投手</th><th>種別</th><th class="n">球数</th><th>取り込み</th><th>ファイル</th><th></th></tr>
        ${sess.map(s => `<tr><td>${esc(s['測定日'])}</td><td>${esc(pname(s['投手ID']))}</td><td>${esc(s['種別'])}</td><td class="n">${esc(s['球数'])}</td>
          <td class="muted">${esc(String(s['取り込み日時']).slice(0, 16))} ${esc(s['記録者'])}</td><td class="muted">${esc(s['ファイル名'])}</td>
          <td>${isAdmin() ? `<button class="b danger" data-delsess="${esc(s['セッションID'])}" style="padding:3px 9px;font-size:12px">削除</button>` : ''}</td></tr>`).join('')}</table></div>`
        : '<div class="empty">まだ取り込んでいません</div>'}</div>`;
  }
  async function importAll() {
    const todo = QUEUE.filter(q => !q.done && (!q.handWarn || q.force));
    if (!todo.length) return;
    busy = true; IMPMSG = ''; render();
    let okN = 0, ballN = 0, skipN = 0, earliest = null; const errs = [];
    for (const q of todo) {
      try {
        const rows = q.rows.filter(r => !(r['PlayID'] && ROWS.some(x => x['PlayID'] === r['PlayID'])));
        if (!rows.length) { q.done = true; q.status = 'すべて入っていました'; okN++; skipN += q.rows.length; render(); continue; }
        q.status = '保存中…'; render();
        const s = await api('upsertTmSession', { row: { 'セッションID': q.sid, '投手ID': q.pid, '測定日': q.date, '種別': q.kind, '球数': rows.length,
          'ファイル名': q.name, '備考': q.flip ? '左右反転' : '' } });
        if (!s.ok) throw new Error(s.error || 'セッションを保存できませんでした');
        let added = 0, skipped = 0;
        for (let i = 0; i < rows.length; i += 200) {
          const j = await api('upsertTmPitches', { rows: rows.slice(i, i + 200) });
          if (!j.ok) throw new Error(j.error || '投球を保存できませんでした');
          added += j.added || 0; skipped += j.skipped || 0;
          q.status = `保存中… ${Math.min(i + 200, rows.length)} / ${rows.length}`; render();
        }
        // 次のファイルの重複判定のために、いま入れた球を手元にも足しておく
        rows.forEach(r => ROWS.push(r));
        q.done = true; q.status = `${added}球 取り込み済み${skipped ? `（${skipped}球は入っていた）` : ''}`;
        okN++; ballN += added; skipN += skipped;
        if (!earliest || q.date < earliest) earliest = q.date;
      } catch (e) { q.status = ''; errs.push(`${q.name}：${String(e.message || e)}`); }
      render();
    }
    busy = false;
    IMPMSG = `${okN}ファイル・${ballN}球を取り込みました${skipN ? `（${skipN}球はすでに入っていたので飛ばしました）` : ''}`;
    msg = errs.length ? errs.join(' / ') : '';
    await load(earliest && earliest < fetchedFrom ? earliest : undefined);
    render();
  }

  /* ================= 画面：個人 ================= */
  /* ---- 表示項目（レポートに出す列・グラフ）。端末ごとに覚える ---- */
  const METRICS = [['球速', 'velo', 1], ['最速', 'vmax', 1], ['回転数', 'spin', 0], ['回転効率', 'eff', 0], ['縦変化量', 'ivb', 1], ['横変化量', 'hb', 1],
    ['リリース高さ', 'relH', 2], ['リリース横幅', 'relS', 2], ['エクステンション', 'ext', 2], ['入射角縦', 'vaa', 1], ['入射角横', 'haa', 1], ['リリース角縦', 'vra', 1], ['リリース角横', 'hra', 1],
    ['ゾーン率', 'zone', 0], ['ばらつき', 'locsd', 0], ['Bauer', 'bauer', 1], ['体感球速', 'effv', 1]];
  const SHOWKEY = 'hsp-tmshow-' + CFG.TEAM_ID + CFG.STORE;
  let SHOW = (() => { try { return JSON.parse(localStorage.getItem(SHOWKEY) || '{}'); } catch (e) { return {}; } })();
  const DEF_HIDE = { 'p:col:入射角横': 1, 'p:col:リリース角縦': 1, 'p:col:リリース角横': 1, 'p:col:体感球速': 1,
                     'c:col:入射角横': 1, 'c:col:リリース角縦': 1, 'c:col:リリース角横': 1, 'c:col:体感球速': 1 };
  const on = k => (k in SHOW) ? !!SHOW[k] : !DEF_HIDE[k];
  const saveShow = () => { try { localStorage.setItem(SHOWKEY, JSON.stringify(SHOW)); } catch (e) {} };
  const ITEMS = {
    player: [['その他', [['p:kpi', '上の数字（球数・平均球速など）'], ['p:table', '球種別の表'], ['p:sess', '取り込みの一覧']]],
             ['表の列', METRICS.map(m => ['p:col:' + m[0], m[0]])],
             ['グラフ', ['変化量', '軌道（横から・トンネル）', 'リリース点', 'リリース高さ×エクステンション', '球速の分布', 'コース', '球速の推移', '縦変化量の推移', '横変化量の推移', '回転数の推移', '回転効率'].map(n => ['p:chart:' + n, n])]],
    team:   [['表の列', METRICS.map(m => ['t:col:' + m[0], m[0]])],
             ['その他', [['t:scatter', '散布図'], ['t:alltypes', '球種ごとの球速と回転数']]]],
    compare:[['表の列', METRICS.map(m => ['c:col:' + m[0], m[0]])],
             ['グラフ', ['変化量', 'リリース点', 'リリース高さ×エクステンション', '球速', '回転数', 'コース'].map(n => ['c:chart:' + n, n])]]
  };
  function showPanel(view) {
    if (!F.showPanel) return '';
    const groups = ITEMS[view] || [];
    return `<div class="card noprint"><h3>表示項目<span class="u">消した項目はPDFにも出ません。この端末にだけ覚えます</span></h3>
      ${groups.map(([g, items]) => `<div class="note" style="margin:6px 0 4px"><b>${esc(g)}</b></div><div class="chips">${items.map(([k, n]) => `<button class="chip" data-show="${esc(k)}" aria-pressed="${on(k)}">${esc(n)}</button>`).join('')}</div>`).join('')}
      <div style="margin-top:10px"><button class="b" id="tm-showall" data-view="${view}">この画面をすべて表示に戻す</button></div></div>`;
  }
  const showBtn = () => `<button class="b" id="tm-showbtn" aria-pressed="${!!F.showPanel}">表示項目</button>`;
  function cell(s, m) {
    if (m[1] === 'eff') return fmtEst(s.eff, '', 0, s.effEst);
    if (m[1] === 'locsd') return `<td class="n">${num(s.locSdH != null ? s.locSdH * 100 : null, 0)} / ${num(s.locSdS != null ? s.locSdS * 100 : null, 0)}<small>cm</small></td>`;
    const extra = m[1] === 'spin' ? `<small>${s.nspin}</small>` : m[1] === 'zone' ? `<small>${s.nloc}</small>` : m[1] === 'ivb' ? `<small>${s.nbrk}</small>` : '';
    return `<td class="n">${num(s[m[1]], m[2])}${extra}</td>`;
  }
  const colsOf = pre => METRICS.filter(m => on(pre + m[0]));

  function filterBar(extra) {
    return `<div class="bar noprint">
      ${SELF ? '' : `<label class="f">投手<select id="tm-player">${PITCHERS.map(p => `<option value="${esc(p['選手ID'])}" ${String(p['選手ID']) === F.player ? 'selected' : ''}>${esc(p['氏名'])}</option>`).join('')}</select></label>`}
      <label class="f">期間 から<input type="date" id="tm-from" value="${F.from}"></label>
      <label class="f">まで<input type="date" id="tm-to" value="${F.to}"></label>
      <label class="f">種別<select id="tm-kindf"><option value="">対戦もブルペンも</option><option value="対戦" ${F.kind === '対戦' ? 'selected' : ''}>対戦だけ</option><option value="ブルペン" ${F.kind === 'ブルペン' ? 'selected' : ''}>ブルペンだけ</option></select></label>
      <label class="c" style="padding-bottom:7px"><input type="checkbox" id="tm-warm" ${F.warm ? 'checked' : ''}> Warmupも含める</label>
      ${extra || ''}
      <div style="margin-left:auto; display:flex; gap:6px">${showBtn()}<button class="b" id="tm-print">PDFで保存</button></div>
    </div>`;
  }
  function typeChips(types, rows) {
    return `<div class="chips noprint" style="margin-bottom:10px">${types.map(t => `<button class="chip" data-tt="${esc(t)}" aria-pressed="${!F.hideTypes[t]}"><span class="sw" style="background:${typeColor(t)}"></span>${esc(jtype(t))} <span class="muted">${rows.filter(r => String(r['球種']) === t).length}</span></button>`).join('')}</div>`;
  }
  function viewPlayer() {
    if (!F.player) return '<div class="empty">投手が登録されていません。「記録」タブの名簿で投手に印を付けてください。</div>';
    const all = filt(ROWS, { pid: F.player });
    const types = typesIn(all);
    const vis = all.filter(r => !F.hideTypes[String(r['球種'])]);
    const fb = all.filter(r => r['球種'] === 'Fastball'); const sfb = stats(fb), sall = stats(all);
    const kpis = `<div class="kpis">
      <div class="kpi"><b>球数</b><span>${all.length}</span><small>${all.filter(r => r['種別'] === '対戦').length}対戦 / ${all.filter(r => r['種別'] === 'ブルペン').length}ブルペン</small></div>
      <div class="kpi"><b>ストレート 平均球速</b><span>${num(sfb.velo, 1)}</span><small>km/h　最速 ${num(sfb.vmax, 1)}</small></div>
      <div class="kpi"><b>ストレート 回転数</b><span>${num(sfb.spin, 0)}</span><small>rpm　${sfb.nspin}球</small></div>
      <div class="kpi"><b>ストレート 変化量</b><span>${num(sfb.ivb, 0)} / ${num(sfb.hb, 0)}</span><small>cm 縦/横</small></div>
      <div class="kpi"><b>ゾーン率</b><span>${num(sall.zone, 0)}</span><small>%　${sall.nloc}球</small></div>
    </div>`;
    const pc = colsOf('p:col:');
    const table = `<div class="card"><h3>球種別<span class="u">平均。括弧内は有効球数。回転効率はTrackmanの実測がある球だけ</span></h3><div class="tw"><table>
      <tr><th>球種</th><th class="n">球数</th>${pc.map(m => `<th class="n">${esc(m[0])}</th>`).join('')}</tr>
      ${types.map(t => { const s = stats(all.filter(r => String(r['球種']) === t)); return `<tr><td><span class="sw" style="background:${typeColor(t)}"></span>${esc(jtype(t))}</td><td class="n">${s.n}</td>${pc.map(m => cell(s, m)).join('')}</tr>`; }).join('')}
      </table></div>
      <div class="note">単位：球速 km/h、回転数 rpm、回転効率 %、変化量 cm、リリース m、入射角 度、ばらつき cm（縦/横）、Bauer＝回転数÷球速(mph)。ゾーンは175cm想定（高さ ${zone().bot}〜${zone().top} m、横 ±${zone().side} m）。Warmupは${F.warm ? '含みます' : '除いています'}。</div></div>`;
    const ref = veloRef(all);
    const col = r => shade(typeColor(r['球種']), ref ? Number(r['球速']) / ref : null);
    const vt = r => `${jtype(r['球種'])} ${r['測定日']} ${num(r['球速'], 1)}km/h${ref && isNum(r['球速']) ? `（${Math.round(r['球速'] / ref * 100)}%）` : ''}`;
    const ptsMv = vis.map(r => ({ x: r['横変化量'], y: r['縦変化量'], c: col(r), hollow: isEst(r, '縦変化量'), t: `${vt(r)} 縦${num(r['縦変化量'], 0)} 横${num(r['横変化量'], 0)}` }));
    const meansMv = types.filter(t => !F.hideTypes[t]).map(t => { const rs = all.filter(r => String(r['球種']) === t); const x = mean(nums(rs, '横変化量')), y = mean(nums(rs, '縦変化量'));
      return { x, y, c: typeColor(t), label: jtype(t), t: `${jtype(t)} 平均 縦${num(y, 0)} 横${num(x, 0)}（${nums(rs, '縦変化量').length}球）` }; });
    const ptsRel = vis.map(r => ({ x: r['リリース横幅'], y: r['リリース高さ'], c: col(r), hollow: isEst(r, 'リリース高さ'), t: `${vt(r)} 横${num(r['リリース横幅'], 2)} 高${num(r['リリース高さ'], 2)}` }));
    const ptsLoc = vis.map(r => ({ x: r['コース横'], y: r['コース高さ'], c: col(r), hollow: isEst(r, 'コース高さ'), t: vt(r) }));
    const ptsExt = vis.map(r => ({ x: r['エクステンション'], y: r['リリース高さ'], c: col(r), hollow: isEst(r, 'エクステンション') || isEst(r, 'リリース高さ'), t: `${vt(r)} エクステ${num(r['エクステンション'], 2)} 高${num(r['リリース高さ'], 2)}` }));
    const shadeNote = ref ? `色の濃さ＝球速（ストレート平均 ${num(ref, 1)} km/h を100%として）。Trackman が計測できなかった球は出していません` : 'Trackman が計測できなかった球は出していません';
    const veloG = types.filter(t => !F.hideTypes[t]).map(t => ({ name: jtype(t), c: typeColor(t), vals: nums(all.filter(r => String(r['球種']) === t), '球速') }));
    const byDate = k => types.filter(t => !F.hideTypes[t]).map(t => { const rs = all.filter(r => String(r['球種']) === t && isNum(r[k]) && (k !== '回転数' || !r['回転数疑い']));
      const dates = [...new Set(rs.map(r => r['測定日']))].sort();
      return { name: jtype(t), c: typeColor(t), pts: dates.map(d => { const v = nums(rs.filter(r => r['測定日'] === d), k); return { d, v: mean(v), n: v.length }; }) }; });
    const CH = {
      '変化量': () => `<div class="card"><h3>変化量<span class="u">横 × 縦 cm。大きい点は球種ごとの平均</span></h3>${scatter({ xr: [-70, 70], yr: [-70, 70], xl: '横変化量 cm', yl: '縦変化量 cm', xticks: 7, yticks: 7, pts: ptsMv, means: meansMv, xlabels: sideLabels() })}<div class="note" style="margin:6px 0 0">${shadeNote}</div></div>`,
      'リリース点': () => `<div class="card"><h3>リリース点<span class="u">横 × 高さ m</span></h3>${scatter({ xr: [-1.2, 1.2], yr: [1.0, 2.2], xl: 'リリース横幅 m', yl: 'リリース高さ m', xticks: 6, yticks: 6, pts: ptsRel, xlabels: sideLabels() })}</div>`,
      '軌道（横から・トンネル）': () => `<div class="card" style="grid-column:1 / -1"><h3>軌道（横から）とピッチトンネル<span class="u">細い線＝1球、太い線＝球種の平均。トンネル点の縦線はストレートとの離れ</span></h3>${sideView(vis, types.filter(t => !F.hideTypes[t]), { tun: tunnelDist(), zone: zone(), color: typeColor, jtype })}<div class="note" style="margin:6px 0 0">トンネル点＝打者が振るか決めるとされる地点（本塁まで ${tunnelDist()} m、到達の約0.2秒前）。ストレートとの離れが、トンネル点で小さく本塁で大きいほど見分けにくい球です。離れは球種の平均軌道どうしで測っています。</div></div>`,
      'リリース高さ×エクステンション': () => `<div class="card"><h3>リリース高さ × エクステンション<span class="u">前に出るほど右、高いほど上 m</span></h3>${scatter({ xr: [1.2, 2.4], yr: [1.0, 2.2], xl: 'エクステンション m', yl: 'リリース高さ m', xticks: 6, yticks: 6, pts: ptsExt, zero: false })}</div>`,
      '球速の分布': () => `<div class="card"><h3>球速の分布<span class="u">最小〜最大、太線は平均±1σ</span></h3>${rangeChart(veloG, { unit: 'km/h', dec: 1 })}</div>`,
      'コース': () => `<div class="card"><h3>コース<span class="u">捕手から見て。枠がゾーン</span></h3>${zoneChart(ptsLoc, zone(), { xlabels: sideLabels() })}</div>`,
      '球速の推移': () => `<div class="card"><h3>球速の推移<span class="u">日ごとの平均</span></h3>${trendChart(byDate('球速'), { dec: 1, yl: 'km/h' })}</div>`,
      '縦変化量の推移': () => `<div class="card"><h3>縦変化量の推移<span class="u">日ごとの平均 cm</span></h3>${trendChart(byDate('縦変化量'), { dec: 0, yl: 'cm' })}</div>`,
      '横変化量の推移': () => `<div class="card"><h3>横変化量の推移<span class="u">日ごとの平均 cm</span></h3>${trendChart(byDate('横変化量'), { dec: 0, yl: 'cm' })}</div>`,
      '回転数の推移': () => `<div class="card"><h3>回転数の推移<span class="u">日ごとの平均 rpm（疑いのある球は除く）</span></h3>${trendChart(byDate('回転数'), { dec: 0, yl: 'rpm' })}</div>`,
      '回転効率': () => `<div class="card"><h3>回転効率<span class="u">Trackmanの実測 %</span></h3>${all.some(r => isNum(r['回転効率'])) ? rangeChart(types.filter(t => !F.hideTypes[t]).map(t => ({ name: jtype(t), c: typeColor(t), vals: all.filter(r => String(r['球種']) === t).map(eff).filter(Boolean).map(e => e.v) })), { dec: 0 }) : '<div class="empty">この期間の球には回転効率の実測が入っていません</div>'}</div>`
    };
    const charts = `<div class="grid2">${Object.keys(CH).filter(k => on('p:chart:' + k)).map(k => CH[k]()).join('')}</div>`;
    const sess = SESSIONS.filter(s => String(s['投手ID']) === F.player).sort((a, b) => String(b['測定日']).localeCompare(String(a['測定日'])));
    const head = `<div class="note" id="print-head"><b style="font-size:14px">${esc(pname(F.player))}</b>　${esc(phand(F.player))}投　${F.from || ''}〜${F.to || '現在'}　${F.kind || '対戦・ブルペン'}　<span class="muted">作成 ${today()}　取扱注意</span></div>`;
    return filterBar() + showPanel('player') + head + (all.length ? (on('p:kpi') ? kpis : '') + typeChips(types, all) + (on('p:table') ? table : '') + charts : '<div class="empty">この期間の記録がありません</div>')
      + (sess.length && on('p:sess') ? `<div class="card noprint"><h3>この投手の取り込み</h3><div class="tw"><table><tr><th>測定日</th><th>種別</th><th class="n">球数</th><th>取り込み</th></tr>${sess.map(s => `<tr><td>${esc(s['測定日'])}</td><td>${esc(s['種別'])}</td><td class="n">${esc(s['球数'])}</td><td class="muted">${esc(String(s['取り込み日時']).slice(0, 16))}</td></tr>`).join('')}</table></div></div>` : '');
  }

  /* ================= 画面：チーム ================= */
  function viewTeam() {
    const base = filt(ROWS, { hand: F.hand });
    const types = typesIn(base);
    if (types.length && types.indexOf(F.teamType) < 0) F.teamType = types[0];
    const rows = PITCHERS.map(p => { const rs = base.filter(r => String(r['投手ID']) === String(p['選手ID']) && String(r['球種']) === F.teamType);
      return { pid: String(p['選手ID']), name: String(p['氏名']), hand: phand(p['選手ID']), s: stats(rs) }; }).filter(x => x.s.n > 0);
    const key = METRICS.find(m => m[0] === F.sortKey) || METRICS[0];
    rows.sort((a, b) => ((b.s[key[1]] == null ? -1e9 : b.s[key[1]]) - (a.s[key[1]] == null ? -1e9 : a.s[key[1]])) * F.sortDir);
    const bar = `<div class="bar noprint">
      <label class="f">期間 から<input type="date" id="tm-from" value="${F.from}"></label>
      <label class="f">まで<input type="date" id="tm-to" value="${F.to}"></label>
      <label class="f">種別<select id="tm-kindf"><option value="">対戦もブルペンも</option><option value="対戦" ${F.kind === '対戦' ? 'selected' : ''}>対戦だけ</option><option value="ブルペン" ${F.kind === 'ブルペン' ? 'selected' : ''}>ブルペンだけ</option></select></label>
      <label class="f">投げ手<select id="tm-hand"><option value="">右も左も</option><option value="右" ${F.hand === '右' ? 'selected' : ''}>右投げ</option><option value="左" ${F.hand === '左' ? 'selected' : ''}>左投げ</option></select></label>
      <label class="f">球種<select id="tm-ttype">${types.map(t => `<option value="${esc(t)}" ${t === F.teamType ? 'selected' : ''}>${esc(jtype(t))}</option>`).join('')}</select></label>
      <label class="c" style="padding-bottom:7px"><input type="checkbox" id="tm-warm" ${F.warm ? 'checked' : ''}> Warmupも含める</label>
      <div style="margin-left:auto; display:flex; gap:6px">${showBtn()}<button class="b" id="tm-print">PDFで保存</button></div></div>` + showPanel('team');
    if (!rows.length) return bar + '<div class="empty">この条件の記録がありません</div>';
    const tc = colsOf('t:col:');
    const th = m => `<th class="n s" data-sort="${esc(m[0])}">${esc(m[0])}${F.sortKey === m[0] ? (F.sortDir < 0 ? ' ▼' : ' ▲') : ''}</th>`;
    const table = `<div class="card"><h3>${esc(jtype(F.teamType))}の比較<span class="u">見出しを押すと並べ替え。括弧内は有効球数</span></h3><div class="tw"><table>
      <tr><th>投手</th><th class="n">球数</th>${tc.map(th).join('')}</tr>
      ${rows.map(x => `<tr class="${x.pid === F.player ? 'me' : ''}"><td><span class="sw" style="background:${HAND_COLOR[x.hand] || 'var(--t0)'}"></span><a href="#" data-goto="${esc(x.pid)}" style="color:inherit">${esc(x.name)}</a> <span class="muted">${esc(x.hand)}</span></td><td class="n">${x.s.n}</td>
        ${tc.map(m => cell(x.s, m)).join('')}</tr>`).join('')}
      </table></div><div class="note">平均が0球の項目は「—」。回転数は取りこぼしの疑いがある球を除いた平均。Bauer＝回転数÷球速(mph)。</div></div>`;
    const mx = METRICS.find(m => m[0] === F.tx) || METRICS[5], my = METRICS.find(m => m[0] === F.ty) || METRICS[4];
    const xs = rows.map(r => r.s[mx[1]]).filter(isNum), ys = rows.map(r => r.s[my[1]]).filter(isNum);
    const rng = (a, sym) => { if (!a.length) return [-1, 1]; let lo = Math.min(...a), hi = Math.max(...a); if (sym) { const m = Math.max(Math.abs(lo), Math.abs(hi), 5); return [-m * 1.15, m * 1.15]; } const p = Math.max((hi - lo) * .15, 0.5); return [lo - p, hi + p]; };
    const sym = k => /変化量|横幅|角横|入射角横/.test(k);
    const sc = scatter({ xr: rng(xs, sym(mx[0])), yr: rng(ys, sym(my[0])), xl: mx[0], yl: my[0], w: 520, h: 380,
      pts: rows.map(r => ({ x: r.s[mx[1]], y: r.s[my[1]], c: HAND_COLOR[r.hand] || 'var(--t0)', r: 5, label: r.name, t: `${r.name} ${mx[0]} ${num(r.s[mx[1]], mx[2])} / ${my[0]} ${num(r.s[my[1]], my[2])}` })) });
    const sel = (id, cur) => `<select id="${id}">${METRICS.filter(m => m[1] !== 'locsd').map(m => `<option ${m[0] === cur ? 'selected' : ''}>${esc(m[0])}</option>`).join('')}</select>`;
    const chart = `<div class="card"><h3>散布図<span class="u"><span class="sw" style="background:${HAND_COLOR['右']}"></span>右投げ <span class="sw" style="background:${HAND_COLOR['左']}"></span>左投げ</span></h3>
      <div class="noprint" style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:8px"><label class="f">横軸${sel('tm-tx', mx[0])}</label><label class="f">縦軸${sel('tm-ty', my[0])}</label></div><div style="max-width:640px">${sc}</div></div>`;
    const allT = `<div class="card"><h3>球種ごとの球速と回転数<span class="u">全投手</span></h3><div class="tw"><table><tr><th>球種</th><th class="n">球数</th><th class="n">投手数</th><th class="n">球速</th><th class="n">最速</th><th class="n">回転数</th><th class="n">縦変化量</th><th class="n">横変化量</th><th class="n">ゾーン率</th></tr>
      ${types.map(t => { const rs = base.filter(r => String(r['球種']) === t); const s = stats(rs); return `<tr><td><span class="sw" style="background:${typeColor(t)}"></span>${esc(jtype(t))}</td><td class="n">${s.n}</td><td class="n">${new Set(rs.map(r => r['投手ID'])).size}</td><td class="n">${num(s.velo, 1)}</td><td class="n">${num(s.vmax, 1)}</td><td class="n">${num(s.spin, 0)}</td><td class="n">${num(s.ivb, 1)}</td><td class="n">${num(s.hb, 1)}</td><td class="n">${num(s.zone, 0)}</td></tr>`; }).join('')}</table></div></div>`;
    return bar + `<div class="note" id="print-head"><b style="font-size:14px">チーム</b>　${F.from || ''}〜${F.to || '現在'}　${F.kind || '対戦・ブルペン'}　<span class="muted">作成 ${today()}　取扱注意</span></div>` + table + (on('t:scatter') ? chart : '') + (on('t:alltypes') ? allT : '');
  }

  /* ================= 画面：比較 ================= */
  const CMP_COLORS = ['var(--t1)', 'var(--t2)', 'var(--t3)', 'var(--t7)', 'var(--t8)', 'var(--t5)'];
  function viewCompare() {
    const picked = PITCHERS.filter(p => F.cmp[String(p['選手ID'])]).slice(0, 6);
    const base = filt(ROWS).filter(r => (!F.cmpMin || r['球速'] >= Number(F.cmpMin)) && (!F.cmpMax || r['球速'] <= Number(F.cmpMax)));
    const types = typesIn(base);
    const bar = `<div class="bar noprint">
      <label class="f">期間 から<input type="date" id="tm-from" value="${F.from}"></label>
      <label class="f">まで<input type="date" id="tm-to" value="${F.to}"></label>
      <label class="f">種別<select id="tm-kindf"><option value="">対戦もブルペンも</option><option value="対戦" ${F.kind === '対戦' ? 'selected' : ''}>対戦だけ</option><option value="ブルペン" ${F.kind === 'ブルペン' ? 'selected' : ''}>ブルペンだけ</option></select></label>
      <label class="f">球速 km/h<span><input type="number" id="tm-cmin" value="${F.cmpMin}" placeholder="以上"> 〜 <input type="number" id="tm-cmax" value="${F.cmpMax}" placeholder="以下"></span></label>
      <label class="c" style="padding-bottom:7px"><input type="checkbox" id="tm-warm" ${F.warm ? 'checked' : ''}> Warmupも含める</label>
      <div style="margin-left:auto; display:flex; gap:6px">${showBtn()}<button class="b" id="tm-print">PDFで保存</button></div></div>` + showPanel('compare') + `
      <div class="card noprint"><h3>比べる投手<span class="u">6人まで</span></h3><div class="chips">${PITCHERS.map(p => `<button class="chip" data-cmp="${esc(p['選手ID'])}" aria-pressed="${!!F.cmp[String(p['選手ID'])]}">${esc(p['氏名'])} <span class="muted">${esc(phand(p['選手ID']))}</span></button>`).join('')}</div>
      <div class="chips" style="margin-top:8px">${types.map(t => `<button class="chip" data-tt="${esc(t)}" aria-pressed="${!F.hideTypes[t]}"><span class="sw" style="background:${typeColor(t)}"></span>${esc(jtype(t))}</button>`).join('')}</div></div>`;
    if (picked.length < 1) return bar + '<div class="empty">上で投手を選んでください</div>';
    const sets = picked.map((p, i) => ({ pid: String(p['選手ID']), name: String(p['氏名']), hand: phand(p['選手ID']), c: CMP_COLORS[i % CMP_COLORS.length],
      rows: base.filter(r => String(r['投手ID']) === String(p['選手ID']) && !F.hideTypes[String(r['球種'])]) }));
    const legend = `<div class="legend">${sets.map(s => `<span><span class="sw" style="background:${s.c}"></span>${esc(s.name)} <span class="cnt">${s.rows.length}球</span></span>`).join('')}</div>`;
    sets.forEach(s => { s.ref = veloRef(base.filter(r => String(r['投手ID']) === s.pid)); });
    const scol = (s, r) => shade(s.c, s.ref ? Number(r['球速']) / s.ref : null);
    const meansC = sets.flatMap(s => typesIn(s.rows).map(t => { const rs = s.rows.filter(r => String(r['球種']) === t); const x = mean(nums(rs, '横変化量')), y = mean(nums(rs, '縦変化量'));
      return { x, y, c: s.c, t: `${s.name} ${jtype(t)} 平均 縦${num(y, 0)} 横${num(x, 0)}` }; }));
    const mv = scatter({ xr: [-70, 70], yr: [-70, 70], xl: '横変化量 cm', yl: '縦変化量 cm', xticks: 7, yticks: 7, w: 380, h: 340, xlabels: sideLabels(), means: meansC,
      pts: sets.flatMap(s => s.rows.map(r => ({ x: r['横変化量'], y: r['縦変化量'], c: scol(s, r), hollow: isEst(r, '縦変化量'), t: `${s.name} ${jtype(r['球種'])} ${num(r['球速'], 1)}km/h` }))) });
    const rel = scatter({ xr: [-1.2, 1.2], yr: [1.0, 2.2], xl: 'リリース横幅 m', yl: 'リリース高さ m', xticks: 6, yticks: 6, xlabels: sideLabels(),
      pts: sets.flatMap(s => s.rows.map(r => ({ x: r['リリース横幅'], y: r['リリース高さ'], c: scol(s, r), hollow: isEst(r, 'リリース高さ'), t: `${s.name} ${jtype(r['球種'])} ${num(r['球速'], 1)}km/h` }))) });
    const loc = zoneChart(sets.flatMap(s => s.rows.map(r => ({ x: r['コース横'], y: r['コース高さ'], c: scol(s, r), hollow: isEst(r, 'コース高さ'), t: `${s.name} ${jtype(r['球種'])} ${num(r['球速'], 1)}km/h` }))), zone(), { xlabels: sideLabels() });
    const ext = scatter({ xr: [1.2, 2.4], yr: [1.0, 2.2], xl: 'エクステンション m', yl: 'リリース高さ m', xticks: 6, yticks: 6, zero: false,
      pts: sets.flatMap(s => s.rows.map(r => ({ x: r['エクステンション'], y: r['リリース高さ'], c: scol(s, r), hollow: isEst(r, 'エクステンション') || isEst(r, 'リリース高さ'), t: `${s.name} ${jtype(r['球種'])} ${num(r['球速'], 1)}km/h` }))) });
    const velo = rangeChart(sets.map(s => ({ name: s.name, c: s.c, vals: nums(s.rows, '球速') })), { dec: 1 });
    const spin = rangeChart(sets.map(s => ({ name: s.name, c: s.c, vals: nums(spinOK(s.rows), '回転数') })), { dec: 0 });
    const table = `<div class="card"><h3>数字で比べる<span class="u">選んだ球種をまとめた平均</span></h3><div class="tw"><table>
      <tr><th>投手</th><th class="n">球数</th>${colsOf('c:col:').map(m => `<th class="n">${esc(m[0])}</th>`).join('')}</tr>
      ${sets.map(s => { const x = stats(s.rows); return `<tr><td><span class="sw" style="background:${s.c}"></span>${esc(s.name)} <span class="muted">${esc(s.hand)}</span></td><td class="n">${x.n}</td>${colsOf('c:col:').map(m => cell(x, m)).join('')}</tr>`; }).join('')}
      </table></div></div>`;
    return bar + `<div class="note" id="print-head"><b style="font-size:14px">比較</b>　${sets.map(s => esc(s.name)).join('・')}　${F.from || ''}〜${F.to || '現在'}　<span class="muted">作成 ${today()}　取扱注意</span></div>` + legend + table
      + `<div class="grid2">${on('c:chart:変化量') ? `<div class="card"><h3>変化量<span class="u">大きい点は投手×球種の平均</span></h3>${mv}<div class="note" style="margin:6px 0 0">色の濃さ＝球速（各投手のストレート平均を100%として）。計測できなかった球は出していません</div></div>` : ''}${on('c:chart:リリース点') ? `<div class="card"><h3>リリース点</h3>${rel}</div>` : ''}${on('c:chart:リリース高さ×エクステンション') ? `<div class="card"><h3>リリース高さ × エクステンション</h3>${ext}</div>` : ''}${on('c:chart:球速') ? `<div class="card"><h3>球速</h3>${velo}</div>` : ''}${on('c:chart:回転数') ? `<div class="card"><h3>回転数<span class="u">疑いのある球は除く</span></h3>${spin}</div>` : ''}${on('c:chart:コース') ? `<div class="card"><h3>コース</h3>${loc}</div>` : ''}</div>`;
  }

  /* ================= 描画 ================= */
  function render() {
    const sy = window.scrollY;
    if (SELF) view = 'player';
    const tabs = SELF ? [] : [['player', '個人'], ['team', 'チーム'], ['compare', '比較'], ['in', '取り込み']];
    const body = !loaded
      ? (busy ? '<div class="empty">読み込んでいます…</div>'
              : `<div class="empty">${esc(msg || 'まだ読み込んでいません')}<br><br><button class="b" id="tm-reload">読み込む</button></div>`)
      : (view === 'in' ? viewImport() : view === 'team' ? viewTeam() : view === 'compare' ? viewCompare() : viewPlayer());
    ROOT.innerHTML = `<div class="pw">
      <div class="hd"><h2>Trackman</h2><span class="sub">${SELF ? `${ROWS.length}球` : `投手 ${PITCHERS.length}人・${ROWS.length}球`}</span>
        <div class="sp">${tabs.length ? `<div class="seg">${tabs.map(([k, n]) => `<button data-v="${k}" aria-pressed="${view === k}">${n}</button>`).join('')}</div>` : ''}
          <button class="b" id="tm-refresh" ${busy ? 'disabled' : ''}>${busy ? '更新中…' : '更新'}</button></div></div>
      ${msg && loaded ? `<div class="note" style="color:var(--clay)">${esc(msg)}</div>` : ''}
      ${body}</div>`;
    if (sy) window.scrollTo(0, sy);
  }

  /* ================= 操作 ================= */
  ROOT.addEventListener('click', async e => {
    const v = e.target.closest('[data-v]'); if (v) { if (!SELF) view = v.dataset.v; render(); return; }
    const g = e.target.closest('[data-goto]'); if (g) { e.preventDefault(); F.player = g.dataset.goto; view = 'player'; render(); return; }
    const tt = e.target.closest('[data-tt]'); if (tt) { F.hideTypes[tt.dataset.tt] = !F.hideTypes[tt.dataset.tt]; render(); return; }
    const cp = e.target.closest('[data-cmp]'); if (cp) { F.cmp[cp.dataset.cmp] = !F.cmp[cp.dataset.cmp]; render(); return; }
    const sh = e.target.closest('[data-show]'); if (sh) { SHOW[sh.dataset.show] = !on(sh.dataset.show); saveShow(); render(); return; }
    if (e.target.id === 'tm-showbtn') { F.showPanel = !F.showPanel; render(); return; }
    if (e.target.id === 'tm-showall') { const pre = { player: 'p:', team: 't:', compare: 'c:' }[e.target.dataset.view]; Object.keys(SHOW).forEach(k => { if (k.startsWith(pre)) delete SHOW[k]; }); Object.keys(DEF_HIDE).forEach(k => { if (k.startsWith(pre)) SHOW[k] = true; }); saveShow(); render(); return; }
    const so = e.target.closest('[data-sort]'); if (so) { if (F.sortKey === so.dataset.sort) F.sortDir = -F.sortDir; else { F.sortKey = so.dataset.sort; F.sortDir = -1; } render(); return; }
    const ds = e.target.closest('[data-delsess]');
    if (ds) { const s = SESSIONS.find(x => String(x['セッションID']) === ds.dataset.delsess); if (!s) return;
      if (!window.confirm(`${pname(s['投手ID'])} ${s['測定日']} ${s['種別']} ${s['球数']}球を削除します。元に戻せません。よろしいですか。`)) return;
      busy = true; render();
      try { const j = await api('deleteTmSession', { id: ds.dataset.delsess }); if (!j.ok) throw new Error(j.error || '削除できませんでした'); msg = `削除しました（${j.pitches}球）`; busy = false; await load(); render(); setTimeout(() => { msg = ''; render(); }, 5000); }
      catch (err) { busy = false; msg = String(err.message || err); render(); } return; }
    if (e.target.id === 'tm-reload' || e.target.id === 'tm-refresh') { masterFresh = false; load(); return; }
    const pk = e.target.closest('[data-pick]'); if (pk) { const i = ROOT.querySelector(`input[data-pidfile="${pk.dataset.pick}"]`); if (i) i.click(); return; }
    const qd = e.target.closest('[data-qdel]'); if (qd) { const k = QUEUE.findIndex(q => q.id === qd.dataset.qdel); if (k >= 0) QUEUE.splice(k, 1); render(); return; }
    if (e.target.id === 'tm-clear') { for (let k = QUEUE.length - 1; k >= 0; k--) if (QUEUE[k].done) QUEUE.splice(k, 1); IMPMSG = ''; render(); return; }
    if (e.target.id === 'tm-goall') { await importAll(); return; }
    if (e.target.id === 'tm-print') { document.documentElement.classList.add('prt'); setTimeout(() => { window.print(); setTimeout(() => document.documentElement.classList.remove('prt'), 400); }, 60); return; }
  });
  ROOT.addEventListener('change', e => {
    const id = e.target.id, val = e.target.value;
    const pf = e.target.dataset && e.target.dataset.pidfile;
    if (pf && e.target.files && e.target.files.length) { const files = [...e.target.files]; e.target.value = ''; addFiles(pf, files); return; }
    const qk = e.target.dataset && e.target.dataset.qkind; if (qk) { const q = QUEUE.find(x => x.id === qk); if (q) { q.kind = val; buildQ(q); } render(); return; }
    const qf = e.target.dataset && e.target.dataset.qforce; if (qf) { const q = QUEUE.find(x => x.id === qf); if (q) q.force = e.target.checked; render(); return; }
    const ql = e.target.dataset && e.target.dataset.qflip; if (ql) { const q = QUEUE.find(x => x.id === ql); if (q) { q.flip = e.target.checked; buildQ(q); } render(); return; }
    if (id === 'tm-player') { F.player = val; render(); return; }
    if (id === 'tm-from') { F.from = val; if (val && val < fetchedFrom) load(val); else render(); return; }
    if (id === 'tm-to') { F.to = val; render(); return; }
    if (id === 'tm-kindf') { F.kind = val; render(); return; }
    if (id === 'tm-warm') { F.warm = e.target.checked; render(); return; }
    if (id === 'tm-hand') { F.hand = val; render(); return; }
    if (id === 'tm-ttype') { F.teamType = val; render(); return; }
    if (id === 'tm-tx') { F.tx = val; render(); return; }
    if (id === 'tm-ty') { F.ty = val; render(); return; }
    if (id === 'tm-cmin') { F.cmpMin = val; render(); return; }
    if (id === 'tm-cmax') { F.cmpMax = val; render(); return; }
  });

  /* タブを開くたびに、記録タブが端末に持っている名簿（追加した選手・投げ手の変更）を取り直す */
  ROOT.addEventListener('hsp:show', () => {
    if (!loaded && !busy) { load(); return; }
    if (SELF) return;
    const lm = masterFromLocal(); if (lm) { const b = JSON.stringify(PITCHERS.map(p => [p['選手ID'], p['氏名'], p['投']])); applyMaster(lm);
      if (b !== JSON.stringify(PITCHERS.map(p => [p['選手ID'], p['氏名'], p['投']]))) render(); }
  });
  warmStart();
  if (!ROWS.length && !SELF) view = 'in';
  render();
  load();
}
