// 自動生成：haikyu-analyzer.html から組み直したもの。直接編集しないこと。
const CSS = "#tab-analysis button,#tab-analysis select,#tab-analysis input{font:inherit; color:inherit; font-family:var(--jp)}\n#tab-analysis button{cursor:pointer}\n#tab-analysis :focus-visible{outline:2px solid var(--accent); outline-offset:2px}\n#tab-analysis .num{font-family:var(--num); font-variant-numeric:tabular-nums}\n#tab-analysis .wrap{max-width:1360px; margin:0 auto; padding:12px 16px 40px}\n#tab-analysis /* header */\n.hd{display:flex; align-items:center; gap:12px; flex-wrap:wrap; background:var(--grassDeep); color:#f2f7f3; border-radius:var(--r); padding:10px 14px; box-shadow:var(--shadow)}\n#tab-analysis .hd .ttl{font-size:18px; font-weight:900; letter-spacing:.02em}\n#tab-analysis .hd .st{font-size:12px; color:rgba(242,247,243,.75)}\n#tab-analysis .tabs{display:flex; gap:4px; margin-left:auto; background:rgba(255,255,255,.1); padding:3px; border-radius:9px}\n#tab-analysis .tab{border:0; background:none; color:#f2f7f3; padding:7px 16px; border-radius:7px; font-weight:700; font-size:14px}\n#tab-analysis .tab.on{background:#ffd479; color:#123027}\n#tab-analysis .chip{background:rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.22); color:#f2f7f3; border-radius:999px; padding:6px 12px; font-size:12px; white-space:nowrap}\n#tab-analysis .chip.warn{background:rgba(255,212,121,.18); border-color:rgba(255,212,121,.5); color:#ffe3a6}\n#tab-analysis /* filters */\n.filters{display:flex; gap:8px; flex-wrap:wrap; align-items:flex-end; background:var(--paper); border:1px solid var(--line); border-radius:var(--r); padding:10px 12px; margin-top:10px; box-shadow:var(--shadow)}\n#tab-analysis .f{display:flex; flex-direction:column; gap:3px; min-width:0}\n#tab-analysis .f label{font-size:10px; letter-spacing:.12em; color:var(--muted); font-weight:700; white-space:nowrap}\n#tab-analysis select,#tab-analysis input[type=date]{background:var(--raise); border:1px solid var(--line); border-radius:7px; padding:7px 9px; font-size:13.5px; color:var(--ink); min-width:0}\n#tab-analysis select.big{font-size:15px; font-weight:700; padding:8px 10px; min-width:230px}\n#tab-analysis .f.grow{flex:1 1 220px}\n#tab-analysis .reset{background:none; border:1px solid var(--line); border-radius:7px; padding:7px 11px; font-size:12.5px; color:var(--ink2); align-self:flex-end}\n#tab-analysis .fsum{width:100%; font-size:12px; color:var(--muted); display:flex; gap:10px; flex-wrap:wrap; padding-top:4px; border-top:1px dashed var(--line)}\n#tab-analysis .fsum b{color:var(--ink2)}\n#tab-analysis /* sections */\n.grid{display:grid; gap:12px; margin-top:12px}\n#tab-analysis .g2{grid-template-columns:repeat(2,minmax(0,1fr))}\n#tab-analysis .g3{grid-template-columns:repeat(3,minmax(0,1fr))}\n@media (max-width:980px){#tab-analysis .g2,#tab-analysis .g3{grid-template-columns:1fr}}\n#tab-analysis .card{background:var(--paper); border:1px solid var(--line); border-radius:var(--r); box-shadow:var(--shadow); padding:12px 14px; min-width:0}\n#tab-analysis .card h3{margin:0 0 8px; font-size:11px; letter-spacing:.14em; color:var(--muted); font-weight:700; display:flex; align-items:center; gap:8px; flex-wrap:wrap}\n#tab-analysis .card h3 .sub{font-weight:400; letter-spacing:0; text-transform:none; color:var(--muted); font-size:11.5px}\n#tab-analysis .card h3 select{margin-left:auto; padding:4px 8px; font-size:12.5px}\n#tab-analysis .kpis{display:grid; grid-template-columns:repeat(auto-fit,minmax(118px,1fr)); gap:8px; margin-top:12px}\n#tab-analysis .kpi{background:var(--paper); border:1px solid var(--line); border-radius:9px; padding:9px 11px; box-shadow:var(--shadow)}\n#tab-analysis .kpi .k{font-size:10.5px; letter-spacing:.1em; color:var(--muted); font-weight:700; white-space:nowrap; overflow:hidden; text-overflow:ellipsis}\n#tab-analysis .kpi .v{font-family:var(--num); font-size:27px; font-weight:700; line-height:1.15; font-variant-numeric:tabular-nums}\n#tab-analysis .kpi .d{font-size:11px; color:var(--muted); white-space:nowrap}\n#tab-analysis .kpi.hero .v{color:var(--clay)}\n#tab-analysis .kpi.wide{grid-column:span 2}\n#tab-analysis .kpi.wide .v{font-size:22px}\n@media (max-width:600px){#tab-analysis .kpi.wide{grid-column:span 1}\n#tab-analysis .kpi.wide .v{font-size:17px}}\n#tab-analysis /* zone + field svgs */\nsvg.zone{width:100%; max-width:380px; height:auto; display:block; margin:0 auto}\n#tab-analysis .z-cell{stroke:var(--paper); stroke-width:2}\n#tab-analysis .z-val{font-family:var(--num); font-size:16px; font-weight:700; text-anchor:middle; dominant-baseline:middle; pointer-events:none}\n#tab-analysis .z-n{font-family:var(--num); font-size:9.5px; text-anchor:middle; pointer-events:none; opacity:.8}\n#tab-analysis .z-side{fill:var(--muted); font-size:11px; text-anchor:middle; pointer-events:none}\n#tab-analysis .legend{display:flex; align-items:center; gap:8px; font-size:11.5px; color:var(--muted); margin-top:6px; flex-wrap:wrap}\n#tab-analysis .ramp{height:9px; width:120px; border-radius:4px; background:linear-gradient(90deg,var(--heat0),var(--heat1),var(--heat2),var(--heat3))}\n#tab-analysis svg.field{width:100%; max-width:520px; height:auto; display:block; margin:0 auto; border-radius:9px}\n#tab-analysis .f-foul{fill:var(--claySoft)}\n#tab-analysis .f-grass{fill:color-mix(in srgb,var(--grass) 28%,var(--paper))}\n#tab-analysis .f-dirt{fill:color-mix(in srgb,var(--clay) 30%,var(--paper))}\n#tab-analysis .f-line{stroke:var(--paper); stroke-width:4; fill:none}\n#tab-analysis .f-fence{stroke:var(--grassDeep); stroke-width:6; fill:none}\n#tab-analysis .f-pos{fill:var(--muted); font-family:var(--num); font-size:26px; text-anchor:middle; dominant-baseline:middle; pointer-events:none; opacity:.55}\n#tab-analysis .mk{stroke:var(--paper); stroke-width:2.5}\n#tab-analysis .mk.hit{fill:var(--hit)}\n#tab-analysis .mk.out{fill:var(--out)}\n#tab-analysis .mk.foul{fill:none; stroke:var(--out); stroke-width:3}\n#tab-analysis .hit-area{fill:transparent; pointer-events:all}\n#tab-analysis .lg{display:flex; gap:12px; flex-wrap:wrap; font-size:11.5px; color:var(--ink2); margin-top:6px; align-items:center}\n#tab-analysis .lg span{display:inline-flex; align-items:center; gap:5px}\n#tab-analysis .sw{width:12px; height:12px; border-radius:50%; display:inline-block; border:2px solid var(--paper); box-shadow:0 0 0 1px var(--line)}\n#tab-analysis .sw.sq{border-radius:2px}\n#tab-analysis .sw.dm{transform:rotate(45deg); border-radius:2px}\n#tab-analysis .sw.hit{background:var(--hit)}\n#tab-analysis .sw.out{background:var(--out)}\n#tab-analysis .sw.foul{background:none; border:2px solid var(--out)}\n#tab-analysis /* 球種ミックス（積み上げ棒）：カウント別・走者別の配球割合 */\n.mix{display:flex; gap:2px; width:100%; overflow:hidden}\n#tab-analysis .mix .sg{display:flex; align-items:center; justify-content:center; min-width:2px}\n#tab-analysis .mix .sg:first-child{border-radius:4px 0 0 4px}\n#tab-analysis .mix .sg:last-child{border-radius:0 4px 4px 0}\n#tab-analysis .mix .sg:only-child{border-radius:4px}\n#tab-analysis .mix .sg b{color:#fff; font-family:var(--num); font-size:11px; font-weight:700; text-shadow:0 0 2px rgba(0,0,0,.45)}\n#tab-analysis .mix.none{border:1px dashed var(--line); border-radius:4px; align-items:center; justify-content:center; color:var(--muted); font-size:11px}\n#tab-analysis .mixlg{display:flex; gap:11px; flex-wrap:wrap; font-size:11.5px; color:var(--ink2); margin:0 0 9px; align-items:center}\n#tab-analysis .mixlg span{display:inline-flex; align-items:center; gap:5px}\n#tab-analysis .mixlg i{width:11px; height:11px; border-radius:3px; display:inline-block}\n#tab-analysis .mixgrid{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px}\n#tab-analysis .mixcell{border:1px solid var(--line); border-radius:8px; padding:6px 8px; background:var(--raise); min-width:0}\n#tab-analysis .mixcell.few{opacity:.5; border-style:dashed}\n#tab-analysis .mixcell .mxh{display:flex; align-items:baseline; gap:6px; margin-bottom:4px; line-height:1.2}\n#tab-analysis .mixcell .mxh b{font-family:var(--num); font-size:14px}\n#tab-analysis .mixcell .mxh span{font-size:11px; color:var(--muted); font-family:var(--num)}\n#tab-analysis .mixrow{display:grid; grid-template-columns:78px minmax(0,1fr) 46px; gap:8px; align-items:center; margin:6px 0}\n#tab-analysis .mixrow .nm{font-size:12.5px}\n#tab-analysis .mixrow .n{text-align:right; font-size:11.5px; color:var(--muted); font-family:var(--num)}\n#tab-analysis .mixrow.few{opacity:.5}\n#tab-analysis .mixsec{font-size:11.5px; color:var(--muted); margin:10px 0 2px}\n#tab-analysis .rcgrid{display:grid; grid-template-columns:68px repeat(3,minmax(0,1fr)); gap:7px; align-items:center}\n#tab-analysis .rcgrid .hh{font-size:11px; color:var(--muted); text-align:center; font-weight:700}\n#tab-analysis .rcgrid .rl{font-size:12px; font-weight:700}\n@media (max-width:560px){#tab-analysis .mixgrid{grid-template-columns:repeat(2,minmax(0,1fr))}\n#tab-analysis .mixrow{grid-template-columns:66px minmax(0,1fr) 42px}}\nhtml.prt #tab-analysis .mixgrid{grid-template-columns:repeat(3,minmax(0,1fr)); gap:6px}\nhtml.prt #tab-analysis .mixcell{padding:5px 6px}\n#tab-analysis /* tables */\n/* 表：横スクロールは使わず、収まらないときは表全体の文字を小さくして必ず全列を見せる（fitTables） */\n.tbl-wrap{overflow:visible}\n#tab-analysis table.t{width:100%; border-collapse:collapse; font-size:13px}\n#tab-analysis table.t th{font-size:.77em; letter-spacing:.04em; color:var(--muted); text-align:right; padding:.4em .5em; border-bottom:1px solid var(--line); white-space:nowrap; font-weight:700}\n#tab-analysis table.t th:first-child,#tab-analysis table.t td:first-child{text-align:left}\n#tab-analysis table.t td{padding:.45em .5em; border-bottom:1px solid color-mix(in srgb,var(--line) 55%,transparent); text-align:right; font-family:var(--num); font-size:1.08em; font-variant-numeric:tabular-nums; white-space:nowrap}\n#tab-analysis table.t td:first-child{font-family:var(--jp); font-size:1em}\n#tab-analysis table.t tr.tot td{border-top:1.5px solid var(--line); font-weight:700}\n#tab-analysis table.t td .barcell{display:inline-block; height:.55em; background:var(--bar); border-radius:3px; vertical-align:middle; margin-right:.4em; opacity:.75}\n#tab-analysis .muted{color:var(--muted)}\n#tab-analysis .empty{color:var(--muted); font-size:13px; padding:18px 0; text-align:center}\n#tab-analysis /* bar chart */\nsvg.bars{width:100%; height:auto; display:block}\n#tab-analysis .ax{stroke:var(--line); stroke-width:1}\n#tab-analysis .axt{fill:var(--muted); font-family:var(--num); font-size:11px}\n#tab-analysis .bar{fill:var(--bar)}\n#tab-analysis .barlbl{fill:var(--ink2); font-family:var(--num); font-size:11.5px; text-anchor:middle}\n#tab-analysis /* tooltip */\n.tip{position:fixed; z-index:50; background:var(--ink); color:var(--paper); padding:7px 10px; border-radius:7px; font-size:12px; pointer-events:none; box-shadow:var(--shadow); max-width:260px; line-height:1.4}\n#tab-analysis .tip[hidden]{display:none}\n#tab-analysis .tip b{font-family:var(--num); font-size:15px}\n#tab-analysis /* modal */\n.ov{position:fixed; inset:0; background:rgba(12,20,18,.62); z-index:40; display:flex; align-items:center; justify-content:center; padding:12px}\n#tab-analysis .ov[hidden]{display:none}\n#tab-analysis .sheet{background:var(--paper); border:1px solid var(--line); border-radius:13px; width:100%; max-width:760px; max-height:calc(100dvh - 24px); overflow:auto; box-shadow:0 18px 50px rgba(0,0,0,.35)}\n#tab-analysis .shd{padding:10px 14px; border-bottom:1px solid var(--line); display:flex; align-items:center; gap:10px}\n#tab-analysis .sttl{font-size:15px; font-weight:700}\n#tab-analysis .sbd{padding:14px}\n#tab-analysis .sft{padding:10px 14px; border-top:1px solid var(--line); display:flex; gap:8px; justify-content:flex-end}\n#tab-analysis textarea{width:100%; min-height:200px; font-family:ui-monospace,Menlo,monospace; font-size:12px; background:var(--raise); color:var(--ink); border:1px solid var(--line); border-radius:8px; padding:9px}\n#tab-analysis .primary{background:var(--accent); color:var(--accentInk); border:1.5px solid var(--accent); border-radius:8px; padding:10px 18px; font-size:14px; font-weight:700}\n#tab-analysis .ghost{background:var(--raise); border:1.5px solid var(--line); border-radius:8px; padding:10px 14px; font-size:14px}\n#tab-analysis .mini{background:var(--raise); border:1px solid var(--line); border-radius:7px; padding:5px 9px; font-size:11.5px; color:var(--ink2)}\n#tab-analysis .hint{font-size:11.5px; color:var(--muted); line-height:1.5}\n#tab-analysis .toast{position:fixed; left:50%; bottom:20px; transform:translateX(-50%); background:var(--ink); color:var(--paper); padding:9px 17px; border-radius:999px; font-size:13px; z-index:60}\n#tab-analysis .toast[hidden]{display:none}\n#tab-analysis /* 複数選択（対戦チーム） */\n.msel{position:relative}\n#tab-analysis .msel .mbtn{background:var(--raise); border:1px solid var(--line); border-radius:7px; padding:7px 9px; font-size:13.5px; color:var(--ink); min-width:150px; text-align:left; display:flex; justify-content:space-between; gap:8px}\n#tab-analysis .msel .mbtn.on{border-color:var(--accent); color:var(--accent); font-weight:700}\n#tab-analysis .msel .mpop{position:absolute; z-index:30; top:calc(100% + 4px); left:0; min-width:230px; max-height:300px; overflow:auto; background:var(--paper); border:1px solid var(--line); border-radius:9px; box-shadow:0 10px 30px rgba(0,0,0,.18); padding:6px}\n#tab-analysis .msel .mpop[hidden]{display:none}\n#tab-analysis .msel .mpop label{display:flex; align-items:center; gap:8px; padding:6px 8px; border-radius:6px; font-size:13.5px; cursor:pointer}\n#tab-analysis .msel .mpop label:hover{background:var(--raise)}\n#tab-analysis .msel .mpop input{width:17px; height:17px}\n#tab-analysis .msel .mfoot{display:flex; gap:6px; justify-content:space-between; padding:6px 4px 2px; border-top:1px solid var(--line); margin-top:4px}\n#tab-analysis /* 印刷（PDF保存） */\n#print-head{display:none}\n#tab-analysis /* html.prt は印刷の直前に JS が付ける（用紙幅で表の縮小率を測るため）。@media print は保険 */\n@page{size:A4; margin:11mm}\nhtml.prt #tab-analysis body{background:#fff; color:#152029; font-size:12px}\nhtml.prt #tab-analysis .wrap{width:710px; max-width:none; padding:0; margin:0}\n#tab-analysis /* A4 210mm − 余白22mm ≒ 710px */\nhtml.prt .hd,html.prt #tab-analysis .filters,html.prt #tab-analysis .tip,html.prt #tab-analysis .ov,html.prt #tab-analysis .toast{display:none!important}\nhtml.prt #tab-analysis #print-head{display:block; border-bottom:2px solid #2e6b4a; padding-bottom:6px; margin-bottom:8px}\nhtml.prt #tab-analysis #print-head .t{font-size:18px; font-weight:900}\nhtml.prt #tab-analysis #print-head .s{font-size:11px; color:#555; margin-top:2px}\nhtml.prt #tab-analysis .kpis{grid-template-columns:repeat(6,1fr); gap:5px; margin-top:6px}\nhtml.prt #tab-analysis .kpi{box-shadow:none; padding:5px 7px}\nhtml.prt #tab-analysis .kpi .v{font-size:19px}\nhtml.prt #tab-analysis .grid{gap:8px; margin-top:8px}\nhtml.prt #tab-analysis .g3{grid-template-columns:repeat(3,minmax(0,1fr))}\nhtml.prt #tab-analysis .g2{grid-template-columns:repeat(2,minmax(0,1fr))}\nhtml.prt #tab-analysis .card{box-shadow:none; break-inside:avoid; page-break-inside:avoid; padding:8px 10px}\nhtml.prt #tab-analysis .card.tc{grid-column:1/-1}\n#tab-analysis /* 表のカードは用紙の幅いっぱいに（全列が読める大きさで） */\nhtml.prt .card h3 select{display:none}\nhtml.prt #tab-analysis .card.pb{break-before:page; page-break-before:always}\nhtml.prt #tab-analysis svg.zone{max-width:260px}\nhtml.prt #tab-analysis svg.field{max-width:330px}\nhtml.prt #tab-analysis table.t{font-size:12px}\nhtml.prt #tab-analysis .barcell{display:none!important}\n@media print{#tab-analysis .wrap{max-width:none; padding:0}\n#tab-analysis .hd,#tab-analysis .filters,#tab-analysis .tip,#tab-analysis .ov,#tab-analysis .toast{display:none!important}\n#tab-analysis #print-head{display:block}\n#tab-analysis .card{box-shadow:none; break-inside:avoid; page-break-inside:avoid}\n#tab-analysis .card.pb{break-before:page; page-break-before:always}\n#tab-analysis .barcell{display:none!important}}";
const HTML = "<div class=\"wrap\">\n  <div class=\"hd\">\n    <div>\n      <div class=\"ttl\">解析<span id=\"an-team\" style=\"font-size:13px; margin-left:8px; color:#ffd479\"></span> <span style=\"font-size:11px; font-weight:400; opacity:.6\">v13</span></div>\n      <div class=\"st\" id=\"src-st\">—</div>\n    </div>\n    <span class=\"chip\" id=\"c-mine\" style=\"display:none\"></span>\n    <select id=\"f-year\" class=\"chip\" style=\"display:none; padding:5px 10px\"></select>\n    <button class=\"chip\" id=\"c-refresh\" title=\"スプレッドシートを読み直します\">更新</button>\n    <button class=\"chip\" id=\"c-pdf\">PDFで保存</button>\n    <button class=\"chip\" id=\"c-user\" style=\"display:none\">—</button>\n    <button class=\"chip\" id=\"c-admin\" style=\"display:none\">ユーザー管理</button>\n    <button class=\"chip\" id=\"c-logout\" style=\"display:none\">ログアウト</button>\n    <button class=\"chip\" id=\"c-login\" style=\"display:none\">ログイン</button>\n    <div class=\"tabs\">\n      <button class=\"tab on\" data-mode=\"bat\">打者</button>\n      <button class=\"tab\" data-mode=\"pit\">投手</button>\n    </div>\n  </div>\n\n  <div class=\"filters\" id=\"filters\">\n    <div class=\"f\"><label>分析するチーム</label><select id=\"f-team\" style=\"min-width:150px\"></select></div>\n    <div class=\"f grow\"><label id=\"sel-lbl\">打者</label><select class=\"big\" id=\"f-sel\"></select></div>\n    <div class=\"f\"><label>期間 から</label><input type=\"date\" id=\"f-from\"></div>\n    <div class=\"f\"><label>まで</label><input type=\"date\" id=\"f-to\"></div>\n    <div class=\"f\"><label>大会</label><select id=\"f-tour\"></select></div>\n    <div class=\"f\"><label>試合種別</label><select id=\"f-gkind\"></select></div>\n    <div class=\"f\"><label>対戦チーム（複数可）</label>\n      <div class=\"msel\" id=\"f-opp-wrap\"><button type=\"button\" class=\"mbtn\" id=\"f-opp-btn\"><span id=\"f-opp-txt\">すべて</span><span>▾</span></button>\n        <div class=\"mpop\" id=\"f-opp-pop\" hidden><div id=\"f-opp-list\"></div><div class=\"mfoot\"><button type=\"button\" class=\"mini\" id=\"f-opp-clear\">すべてにする</button><button type=\"button\" class=\"mini\" id=\"f-opp-ok\">閉じる</button></div></div></div></div>\n    <div class=\"f\"><label>球種</label><select id=\"f-type\"></select></div>\n    <div class=\"f\"><label>球速帯</label><select id=\"f-band\"></select></div>\n    <div class=\"f\"><label>走者</label><select id=\"f-run\"></select></div>\n    <div class=\"f\"><label>カウント</label><select id=\"f-cnt\"></select></div>\n    <div class=\"f\"><label id=\"hand-lbl\">相手の左右</label><select id=\"f-hand\"></select></div>\n    <div class=\"f\"><label>タイブレーク</label><select id=\"f-tb\"><option value=\"\">含む</option><option value=\"no\">除く</option><option value=\"only\">のみ</option></select></div>\n    <button class=\"reset\" id=\"f-reset\">条件をクリア</button>\n    <div class=\"fsum\" id=\"fsum\"></div>\n  </div>\n\n  <div id=\"print-head\"><div class=\"t\" id=\"ph-t\"></div><div class=\"s\" id=\"ph-s\"></div></div>\n  <div class=\"kpis\" id=\"kpis\"></div>\n  <div id=\"body\"></div>\n</div>\n\n<div class=\"tip\" id=\"tip\" hidden></div>\n\n<!-- 接続設定 -->\n<div class=\"ov\" id=\"ov-conn\" hidden>\n  <div class=\"sheet\" style=\"max-width:560px\">\n    <div class=\"shd\"><span class=\"sttl\">接続設定</span></div>\n    <div class=\"sbd\" style=\"display:flex; flex-direction:column; gap:10px\">\n      <p class=\"hint\" style=\"margin:0\">Apps Script のウェブアプリURL（…/exec）を貼り付けてください。入力アプリと同じURLです。</p>\n      <input type=\"text\" id=\"cn-url\" placeholder=\"https://script.google.com/macros/s/……/exec\" autocapitalize=\"off\" autocorrect=\"off\" style=\"width:100%; padding:8px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\">\n      <div class=\"hint\" id=\"cn-msg\"></div>\n    </div>\n    <div class=\"sft\"><button class=\"ghost\" id=\"cn-test\">接続を確認</button><button class=\"primary\" id=\"cn-ok\">保存して進む</button></div>\n  </div>\n</div>\n<!-- ログイン -->\n<div class=\"ov\" id=\"ov-login\" hidden>\n  <div class=\"sheet\" style=\"max-width:420px\">\n    <div class=\"shd\"><span class=\"sttl\">ログイン</span><span class=\"hint\" id=\"lg-year\" style=\"margin-left:auto\"></span>\n      <button class=\"mini\" id=\"lg-close\">あとで</button></div>\n    <div class=\"sbd\" style=\"display:flex; flex-direction:column; gap:10px\">\n      <div><label class=\"hint\">ID</label><input type=\"text\" id=\"lg-id\" autocapitalize=\"off\" autocorrect=\"off\" style=\"width:100%; padding:8px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\"></div>\n      <div><label class=\"hint\">パスワード</label><input type=\"password\" id=\"lg-pw\" style=\"width:100%; padding:8px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\"></div>\n      <div class=\"hint\" id=\"lg-msg\"></div>\n    </div>\n    <div class=\"sft\"><button class=\"ghost\" id=\"lg-conn\">接続先を変更</button><button class=\"primary\" id=\"lg-ok\">ログイン</button></div>\n  </div>\n</div>\n<!-- ユーザー管理 -->\n<div class=\"ov\" id=\"ov-admin\" hidden>\n  <div class=\"sheet\" style=\"max-width:720px\">\n    <div class=\"shd\"><span class=\"sttl\">ユーザー管理</span><button class=\"mini\" style=\"margin-left:auto\" id=\"ad-close\">閉じる</button></div>\n    <div class=\"sbd\" style=\"display:flex; flex-direction:column; gap:14px\">\n      <div id=\"ad-list\"></div>\n      <div style=\"border-top:1px solid var(--line); padding-top:12px\">\n        <p class=\"hint\" style=\"margin:0 0 6px\"><b>ユーザーを追加</b>　権限は3つ：<b>記録・閲覧</b>＝入力も解析もできる（試合の削除はできない）／<b>強化</b>＝それに加えてフィジカル計測が見られる／<b>管理</b>＝すべて（ユーザー管理・試合の削除・年度切り替え）</p>\n        <div style=\"display:flex; gap:6px; flex-wrap:wrap\">\n          <input type=\"text\" id=\"ad-id\" placeholder=\"ID（半角）\" autocapitalize=\"off\" style=\"flex:1 1 110px; padding:7px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\">\n          <input type=\"text\" id=\"ad-name\" placeholder=\"表示名\" style=\"flex:1 1 110px; padding:7px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\">\n          <select id=\"ad-role\" style=\"padding:7px\"><option>記録・閲覧</option><option>強化</option><option>管理</option></select>\n          <input type=\"text\" id=\"ad-pw\" placeholder=\"初期パスワード（6文字以上）\" autocapitalize=\"off\" style=\"flex:1 1 160px; padding:7px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\">\n          <button class=\"primary\" id=\"ad-add\" style=\"padding:7px 14px\">追加</button>\n        </div>\n      </div>\n      <div style=\"border-top:1px solid var(--line); padding-top:12px\">\n        <p class=\"hint\" style=\"margin:0 0 6px\"><b>年度切り替え</b>　翌年度のファイルを作り、このファイルをアーカイブにします。4月に1回だけ実行してください。</p>\n        <button class=\"ghost\" id=\"ad-roll\">年度を切り替える</button>\n        <div class=\"hint\" id=\"ad-rollmsg\" style=\"margin-top:6px\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- パスワード変更 -->\n<div class=\"ov\" id=\"ov-pw\" hidden>\n  <div class=\"sheet\" style=\"max-width:420px\">\n    <div class=\"shd\"><span class=\"sttl\">パスワード変更</span><button class=\"mini\" style=\"margin-left:auto\" id=\"pw-close\">閉じる</button></div>\n    <div class=\"sbd\" style=\"display:flex; flex-direction:column; gap:10px\">\n      <div><label class=\"hint\">現在のパスワード</label><input type=\"password\" id=\"pw-old\" style=\"width:100%; padding:8px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\"></div>\n      <div><label class=\"hint\">新しいパスワード（6文字以上）</label><input type=\"password\" id=\"pw-new\" style=\"width:100%; padding:8px; border:1px solid var(--line); border-radius:7px; background:var(--raise); color:var(--ink)\"></div>\n      <div class=\"hint\" id=\"pw-msg\"></div>\n    </div>\n    <div class=\"sft\"><button class=\"ghost\" id=\"pw-logout\">ログアウト</button><button class=\"primary\" id=\"pw-ok\">変更する</button></div>\n  </div>\n</div>\n<div class=\"toast\" id=\"toast\" hidden></div>";
export function mount(ROOT, CORE){
  const VIS = () => !ROOT.hidden;
  const st = document.createElement('style');
  st.id = 'css-analysis'; st.textContent = CSS; document.head.appendChild(st);
  ROOT.innerHTML = HTML;

(function(){
"use strict";
const $=(s,r)=>(r||ROOT).querySelector(s);
const $$=(s,r)=>Array.from((r||ROOT).querySelectorAll(s));

/* ==========================================================================
   ★ 接続先の設定（この1か所だけ書き換えてください）★
   Apps Script のウェブアプリURL（https://script.google.com/macros/s/……/exec）を
   下の APP_URL に貼り付けると、どの端末も「接続設定」をせずに
   ID とパスワードだけで入れるようになります。
   ・URL をそのまま書きたくないときは、代わりに APP_URL_B64 に
     Base64（btoa した文字列）を入れても構いません。
   ・年度が替わって新しいファイルにしたときは、この行を書き換えて
     配り直すだけで、全端末の接続先が自動で切り替わります。
   ・両方とも空のままなら、これまで通り端末ごとに接続設定を入力します。
   ========================================================================== */
const APP_URL="";
const APP_URL_B64=CORE.cfg.APP_URL_B64;
/* ▼ チームごとの名札（入力アプリと必ず同じにしてください） */
const TEAM_ID=CORE.cfg.TEAM_ID;
const TEAM_NAME=CORE.cfg.TEAM_NAME;
const MIGRATE_LEGACY=CORE.cfg.MIGRATE_LEGACY;
function appUrl(){
  let u=String(APP_URL||"").trim();
  if(!u&&APP_URL_B64){ try{ u=atob(String(APP_URL_B64).trim()); }catch(e){ u=""; } }
  return /^https?:\/\/.+/.test(u)?u:"";
}

const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let tT; function toast(m){ const t=$("#toast"); t.textContent=m; t.hidden=false; clearTimeout(tT); tT=setTimeout(()=>t.hidden=true,2000); }

/* ================= 定数 ================= */
const HITS={"単打":1,"二塁打":2,"三塁打":3,"本塁打":4};
const NOT_AB=["犠打","犠飛","四球","死球","打撃妨害",""];
const SWING=["空振り","ファウル","インプレー"], STRIKE=["見逃し","空振り","ファウル","インプレー"];
const BANDS=["〜114","115-119","120-124","125-129","130-134","135-139","140〜"];
const RUNS=["走者なし","一塁のみ","得点圏"], CNTS=["初球","2ストライク","3ボール","その他"];
const RUNS8=["走者なし","一塁","二塁","三塁","一二塁","一三塁","二三塁","満塁"];
const CNT12=[0,1,2,3].flatMap(b=>[0,1,2].map(s=>`${b}-${s}`));
function runnerDetail(r){ r=String(r==null?"":r).replace(/\D/g,""); r=("000"+r).slice(-3); const k=r[0]+r[1]+r[2];
  return {"000":"走者なし","100":"一塁","010":"二塁","001":"三塁","110":"一二塁","101":"一三塁","011":"二三塁","111":"満塁"}[k]||"走者なし"; }
// 絞り込み条件（まとめ／個別のどちらでも一致させる）
const runMatch=(r,v)=>!v||r.走者区分===v||r.走者詳細===v||(v==="走者あり"&&r.走者区分!=="走者なし");
const cntMatch=(r,v)=>!v||r.カウント区分===v||r.カウント===v||(v==="追い込まれ"&&r.S>=2)||(v==="ボール先行"&&r.B>r.S)||(v==="ストライク先行"&&r.S>r.B&&r.S<2)||(v==="平行カウント"&&r.B===r.S&&r.B>0);
// 全パターンを必ず並べる（記録が無い行も 0 で出す）
function rowsAll(m,order){ return order.map(k=>({label:k,a:m.get(k)||acc()})); }
const DIRS=["レフト線","レフト","左中間","センター","右中間","ライト","ライト線"];
function veloBand(v){ const n=Number(v); if(!n) return "未入力"; if(n<115) return "〜114"; if(n<120) return "115-119"; if(n<125) return "120-124"; if(n<130) return "125-129"; if(n<135) return "130-134"; if(n<140) return "135-139"; return "140〜"; }
function runnerCat(r){ r=String(r==null?"":r).replace(/\D/g,""); r=("000"+r).slice(-3); if(r==="000") return "走者なし"; if(r[1]==="1"||r[2]==="1") return "得点圏"; return "一塁のみ"; }
function countCat(b,s){ b=+b||0; s=+s||0; if(!b&&!s) return "初球"; if(s>=2) return "2ストライク"; if(b>=3) return "3ボール"; return "その他"; }
function zoneAt(x,y){ if(x>=70&&x<250&&y>=70&&y<250) return String(Math.floor((y-70)/60)*3+Math.floor((x-70)/60)+1); return x<160?(y<160?"11":"13"):(y<160?"12":"14"); }
const HX=500,HY=930,RL=660,RC=790;
function classify(x,y){
  const dx=x-HX, dy=HY-y, d=Math.hypot(dx,dy);
  if(dy<=0) return {fair:false,dir:"捕手後方",depth:"—"};
  const ang=Math.atan2(dx,dy)*180/Math.PI;
  if(Math.abs(ang)>45) return {fair:false,dir:dx<0?"三塁側ファウル":"一塁側ファウル",depth:d<300?"浅い":"深い"};
  const R=RL+(RC-RL)*(1-Math.abs(ang)/45), ratio=d/R;
  const bands=[[-45,-37.5,"レフト線"],[-37.5,-22.5,"レフト"],[-22.5,-7.5,"左中間"],[-7.5,7.5,"センター"],[7.5,22.5,"右中間"],[22.5,37.5,"ライト"],[37.5,45.1,"ライト線"]];
  let dir="センター"; for(const b of bands) if(ang>=b[0]&&ang<b[1]){ dir=b[2]; break; }
  return {fair:true,dir,depth:ratio<0.32?"内野":ratio<0.55?"外野浅":ratio<0.80?"外野中":ratio<1.0?"外野深":"フェンス越え"};
}

/* ================= データ読み込み ================= */
let ROWS=[], SRC="api";
const num=v=>{ if(v===""||v==null) return null; const n=Number(v); return isNaN(n)?null:n; };
function normalize(o){
  // 派生項目は必ずここで計算し直す（CSVに無くても動く）
  const r={};
  for(const k in o) r[k]=o[k];
  r.球速=num(r.球速); r.B=num(r.B)||0; r.S=num(r.S)||0; r.回=num(r.回)||0;
  r.投球X=num(r.投球X); r.投球Y=num(r.投球Y); r.構えX=num(r.構えX); r.構えY=num(r.構えY);
  r.打球X=num(r.打球X); r.打球Y=num(r.打球Y);
  r.記録種別=r.記録種別||"投球";
  r.球種=r.球種||"未入力"; if(r.球種==="") r.球種="未入力";
  r.投球ゾーン=(r.投球ゾーン&&r.投球ゾーン!=="未入力")?String(r.投球ゾーン):"";
  r.構えゾーン=(r.構えゾーン&&r.構えゾーン!=="未入力")?String(r.構えゾーン):"";
  r.球速帯=veloBand(r.球速); r.走者区分=runnerCat(r.走者); r.走者詳細=runnerDetail(r.走者); r.カウント区分=countCat(r.B,r.S); r.カウント=`${r.B}-${r.S}`;
  r.sw=SWING.includes(r.結果)?1:0; r.miss=r.結果==="空振り"?1:0; r.con=(r.結果==="ファウル"||r.結果==="インプレー")?1:0;
  r.st=STRIKE.includes(r.結果)?1:0; r.ip=r.結果==="インプレー"?1:0;
  const z=Number(r.投球ゾーン); r.inz=(z>=1&&z<=9)?1:0; r.hasZ=r.投球ゾーン?1:0;
  r.gap=(r.構えX!=null&&r.投球X!=null)?Math.hypot(r.投球X-r.構えX,r.投球Y-r.構えY)*0.239:null;
  const pa=r.打席結果||""; r.isPA=pa?1:0; r.ab=(pa&&NOT_AB.indexOf(pa)<0)?1:0; r.h=HITS[pa]?1:0; r.tb=HITS[pa]||0;
  r.bb=(pa==="四球"||pa==="死球")?1:0; r.so=/三振/.test(pa)?1:0; r.sac=(pa==="犠打"||pa==="犠飛")?1:0;
  r.x2=pa==="二塁打"?1:0; r.x3=pa==="三塁打"?1:0; r.hr=pa==="本塁打"?1:0;
  const k=r.打球種類||""; r.go=k==="ゴロ"?1:0; r.li=k==="ライナー"?1:0; r.fl=(k==="フライ"||k==="小飛球")?1:0;
  // 引っ張り / センター / 流し
  r.spray="";
  if(r.フェア==="フェア"&&r.方向){
    const left=["レフト線","レフト","左中間"].includes(r.方向), right=["右中間","ライト","ライト線"].includes(r.方向);
    const rhb=(r.左右||"右")!=="左";
    r.spray = r.方向==="センター"?"センター":((left&&rhb)||(right&&!rhb))?"引っ張り":"流し";
  }
  r.tbf=r.タイブレーク?1:0;
  return r;
}
/* ================= サーバー接続 ================= */
const CONN_KEY="hsp-conn-"+TEAM_ID+CORE.cfg.STORE;
let conn=(function(){ try{ return JSON.parse(localStorage.getItem(CONN_KEY)||"null"); }catch(e){ return null; } })()||{url:"",token:"",user:null,exp:0,year:""};
const saveConn=()=>{ try{ localStorage.setItem(CONN_KEY,JSON.stringify(conn)); }catch(e){} };
(function migrateConn(){ try{ const o=localStorage.getItem("hsp-owner");
  if(MIGRATE_LEGACY&&(!o||o===TEAM_ID)&&!localStorage.getItem(CONN_KEY)){ const c=localStorage.getItem("hsp-conn"); if(c){ localStorage.setItem(CONN_KEY,c); conn=JSON.parse(c); } } }catch(e){} })();
/* 既定の接続先を自動採用（手動で別のURLにしている端末はそのまま） */
(function(){
    const d=appUrl(); if(!d) return;
    if(!conn.url){ conn.url=d; conn.autoUrl=d; saveConn(); return; }
    if(conn.autoUrl&&conn.autoUrl!==d&&conn.url===conn.autoUrl){
      conn.url=d; conn.autoUrl=d; conn.token=""; conn.user=null; saveConn(); }
  })();

let INDEX=null, YEAR="", CACHE={};
async function api(action,payload,opt){
  const url=(opt&&opt.url)||conn.url; if(!url) throw new Error("接続先が未設定です");
  const res=await fetch(url,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(Object.assign({action,token:conn.token},payload||{}))});
  const j=await res.json();
  if(!j.ok&&j.error==="unauthorized"){ conn.token=""; conn.user=null; saveConn(); showLogin("ログインの期限が切れました。もう一度ログインしてください"); throw new Error("再ログインが必要です"); }
  return j;
}
function showConn(msg){ $("#cn-url").value=conn.url||""; $("#cn-msg").textContent=msg||""; $("#ov-conn").hidden=false; }
function showLogin(msg){ $("#lg-msg").textContent=msg||""; $("#lg-year").textContent=conn.year?conn.year+"年度":""; $("#ov-login").hidden=false; setTimeout(()=>$("#lg-id").focus(),50); }
function showTeamName(){ const e=$("#an-team"); if(e) e.textContent=TEAM_NAME?"／ "+TEAM_NAME:""; }
function renderUser(){
  const u=$("#c-user"), ad=$("#c-admin"), lo=$("#c-logout"), li=$("#c-login");
  const inn=!!(conn.url&&conn.token&&conn.user);
  if(inn){ u.style.display=""; u.textContent=`${conn.user.name}（${conn.user.role}）`; ad.style.display=conn.user.role==="管理"?"":"none"; }
  else { u.style.display="none"; u.textContent="—"; ad.style.display="none"; }
  if(lo) lo.style.display=inn?"":"none";
  if(li) li.style.display=inn?"none":(conn.url?"":"none");
}
function doLogout(){
  api("logout").catch(()=>{});
  conn.token=""; conn.user=null; saveConn();
  INDEX=null; CACHE={}; ROWS=[]; F.sel="";
  $("#src-st").textContent="ログアウトしました";
  $("#kpis").innerHTML=""; $("#body").innerHTML="";
  renderUser(); showLogin("ログアウトしました。続けるにはログインしてください");
}
let bindNG="";
async function checkTeam(){
  if(!TEAM_ID) return true;
  try{
    const j=await api("ping"); if(!j||!j.ok) return true;
    const t=String(j.team||""); if(!t){ bindNG=""; return true; }
    if(t!==TEAM_ID){
      bindNG=`接続先が違います。このページは「${TEAM_NAME||TEAM_ID}」用ですが、つながっている先は別のチーム（${esc(t)}）のファイルです。`;
      $("#src-st").textContent=bindNG; $("#kpis").innerHTML=""; $("#body").innerHTML=`<div class="card"><div class="empty">${esc(bindNG)}<br>管理者に連絡してください。</div></div>`;
      return false;
    }
    bindNG=""; return true;
  }catch(e){ return true; }
}
async function loadIndex(){
  const j=await api("getIndex",{year:YEAR||undefined}); if(!j.ok) throw new Error(j.error);
  INDEX=j.index; CACHE={};
  const ys=$("#f-year"); ys.innerHTML=(INDEX.years||[]).map(y=>`<option value="${esc(y.year)}" ${String(y.year)===String(YEAR||INDEX.years[0].year)?"selected":""}>${esc(y.year)}年度${y.current?"（今年度）":""}</option>`).join("");
  ys.style.display=(INDEX.years||[]).length>1?"":"none";
  $("#src-st").textContent=`${INDEX.games}試合・${INDEX.rows}球${INDEX.from?"　"+INDEX.from+" 〜 "+INDEX.to:""}　（スプレッドシートから）`;
}
async function loadSel(){
  if(!F.sel){ ROWS=[]; render(); return; }
  const key=MODE+"|"+YEAR+"|"+F.sel;
  if(CACHE[key]){ ROWS=CACHE[key]; render(); return; }
  const kind=F.sel.slice(0,1), val=F.sel.slice(2);
  const q={year:YEAR||undefined};
  if(kind==="T"){ if(MODE==="bat") q.attackTeam=val; else q.defenseTeam=val; } else { if(MODE==="bat") q.batterId=val; else q.pitcherId=val; }
  $("#fsum").innerHTML=`<span class="hint">読み込み中…</span>`;
  try{ const j=await api("getLog",q); if(!j.ok) throw new Error(j.error); ROWS=j.rows.map(normalize); CACHE[key]=ROWS; render(); }
  catch(e){ $("#fsum").innerHTML=`<span style="color:var(--clay)">読み込めませんでした：${esc(e.message||e)}</span>`; }
}
$("#f-year").addEventListener("change",async e=>{ YEAR=e.target.value; try{ await loadIndex(); F.sel=""; buildPlayerOptions(); buildFilterOptions(); await loadSel(); }catch(err){ toast(String(err.message||err)); } });
$("#cn-test").addEventListener("click",async()=>{ const url=$("#cn-url").value.trim(); $("#cn-msg").textContent="確認中…"; try{ const j=await api("ping",{}, {url}); if(!j.ok) throw new Error(j.error); $("#cn-msg").textContent=`接続できました：${j.year?j.year+"年度":""}`; }catch(e){ $("#cn-msg").textContent="接続できません："+(e.message||e); } });
$("#cn-ok").addEventListener("click",async()=>{ const url=$("#cn-url").value.trim(); if(!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec$/.test(url)&&!/^https?:\/\/(localhost|127\.0\.0\.1)/.test(url)){ $("#cn-msg").textContent="URLの形式が違います（…/exec で終わるURL）"; return; }
  try{ const j=await api("ping",{}, {url}); if(!j.ok) throw new Error(j.error); conn.url=url; conn.year=j.year||""; conn.token=""; conn.user=null; saveConn(); $("#ov-conn").hidden=true; showLogin(); }catch(e){ $("#cn-msg").textContent="接続できません："+(e.message||e); } });
$("#lg-ok").addEventListener("click",async()=>{ $("#lg-msg").textContent="ログイン中…"; try{ const j=await api("login",{id:$("#lg-id").value.trim(),password:$("#lg-pw").value}); if(!j.ok) throw new Error(j.error);
    conn.token=j.token; conn.user=j.user; conn.exp=j.exp; saveConn(); $("#lg-pw").value=""; $("#ov-login").hidden=true; renderUser(); await bootApi(); }
  catch(e){ $("#lg-msg").textContent=String(e.message||e); } });
$("#lg-pw").addEventListener("keydown",e=>{ if(e.key==="Enter") $("#lg-ok").click(); });
$("#lg-conn").addEventListener("click",()=>{ $("#ov-login").hidden=true; showConn(); });
$("#lg-close").addEventListener("click",()=>{ $("#ov-login").hidden=true; renderUser(); });
$("#c-user").addEventListener("click",()=>{ $("#pw-msg").textContent=""; $("#ov-pw").hidden=false; });
$("#c-logout").addEventListener("click",()=>{ if(window.confirm("ログアウトします。よろしいですか。")) doLogout(); });
$("#c-login").addEventListener("click",()=>showLogin());
$("#pw-close").addEventListener("click",()=>$("#ov-pw").hidden=true);
$("#pw-logout").addEventListener("click",()=>{ $("#ov-pw").hidden=true; doLogout(); });
$("#pw-ok").addEventListener("click",async()=>{ try{ const j=await api("changePassword",{oldPassword:$("#pw-old").value,newPassword:$("#pw-new").value}); if(!j.ok) throw new Error(j.error); $("#pw-old").value=""; $("#pw-new").value=""; $("#ov-pw").hidden=true; toast("パスワードを変更しました"); }catch(e){ $("#pw-msg").textContent=String(e.message||e); } });
async function renderAdmin(){
  const j=await api("listUsers"); if(!j.ok) throw new Error(j.error);
  $("#ad-list").innerHTML=`<div class="tbl-wrap"><table class="t"><thead><tr><th>ID</th><th>表示名</th><th>権限</th><th>有効</th><th>最終ログイン</th><th></th></tr></thead><tbody>`+
    j.users.map(u=>`<tr><td>${esc(u.id)}</td><td>${esc(u.name)}</td>
      <td><select data-urole="${esc(u.id)}" style="padding:4px">${["記録・閲覧","強化","管理"].map(r=>`<option ${u.role===r?"selected":""}>${r}</option>`).join("")}</select></td>
      <td><input type="checkbox" data-uen="${esc(u.id)}" ${u.enabled?"checked":""} ${u.id==="admin"?"disabled":""}></td>
      <td style="font-family:var(--jp); font-size:12px">${esc(u.last||"—")}</td>
      <td><button class="mini" data-upw="${esc(u.id)}">パスワード再設定</button></td></tr>`).join("")+`</tbody></table></div>`;
}
$("#c-refresh").addEventListener("click",async()=>{
  if(!conn.url||!conn.token){ showLogin(); return; }
  const b=$("#c-refresh"); b.textContent="読み込み中…"; b.disabled=true;
  try{ const j=await api("getIndex",{year:YEAR||undefined,fresh:1}); if(!j.ok) throw new Error(j.error);
    INDEX=j.index; CACHE={}; $("#src-st").textContent=`${INDEX.games}試合・${INDEX.rows}球${INDEX.from?"　"+INDEX.from+" 〜 "+INDEX.to:""}　（スプレッドシートから）`;
    buildPlayerOptions(); buildFilterOptions(); await loadSel(); toast("最新にしました"); }
  catch(e){ toast(String(e.message||e)); }
  finally{ b.textContent="更新"; b.disabled=false; }
});
$("#c-admin").addEventListener("click",async()=>{ try{ await renderAdmin(); $("#ad-rollmsg").textContent=""; $("#ov-admin").hidden=false; }catch(e){ toast(String(e.message||e)); } });
$("#ad-close").addEventListener("click",()=>$("#ov-admin").hidden=true);
$("#ad-list").addEventListener("change",async e=>{
  const r=e.target.dataset.urole, en=e.target.dataset.uen;
  try{ if(r){ const j=await api("setUser",{id:r,role:e.target.value}); if(!j.ok) throw new Error(j.error); toast("権限を変更しました"); }
       if(en){ const j=await api("setUser",{id:en,enabled:e.target.checked}); if(!j.ok) throw new Error(j.error); toast(e.target.checked?"有効にしました":"無効にしました"); } }
  catch(err){ toast(String(err.message||err)); }
});
$("#ad-list").addEventListener("click",async e=>{ const id=e.target.dataset.upw; if(!id) return; const pw=window.prompt(`${id} の新しいパスワード（6文字以上）`); if(!pw) return;
  try{ const j=await api("setUser",{id,password:pw}); if(!j.ok) throw new Error(j.error); toast("再設定しました"); }catch(err){ toast(String(err.message||err)); } });
$("#ad-add").addEventListener("click",async()=>{ try{ const j=await api("setUser",{id:$("#ad-id").value.trim(),name:$("#ad-name").value.trim(),role:$("#ad-role").value,password:$("#ad-pw").value}); if(!j.ok) throw new Error(j.error);
  $("#ad-id").value=""; $("#ad-name").value=""; $("#ad-pw").value=""; await renderAdmin(); toast("追加しました"); }catch(err){ toast(String(err.message||err)); } });
$("#ad-roll").addEventListener("click",async()=>{ const y=Number(conn.year||new Date().getFullYear())+1;
  if(!window.confirm(`${y}年度のファイルを新しく作り、今のファイルをアーカイブ（読み取り専用）にします。元に戻せません。実行しますか？`)) return;
  $("#ad-rollmsg").textContent="作成中…（30秒ほどかかります）";
  try{ const j=await api("rollover",{newYear:y}); if(!j.ok) throw new Error(j.error); $("#ad-rollmsg").innerHTML=`作成しました：<a href="${esc(j.url)}" target="_blank" rel="noopener">${esc(y)}年度 野球記録</a><br>${esc(j.note)}`; }
  catch(err){ $("#ad-rollmsg").textContent=String(err.message||err); } });
async function bootApi(){
  try{ if(!await checkTeam()) return; await loadIndex(); SRC="api"; F.sel=""; buildPlayerOptions(); buildFilterOptions(); await loadSel(); }
  catch(e){ toast("読み込みに失敗："+(e.message||e)); }
}

/* ================= 集計 ================= */
function acc(){ return {n:0,sw:0,miss:0,con:0,st:0,ip:0,inz:0,hasZ:0,pa:0,ab:0,h:0,tb:0,bb:0,so:0,sac:0,x2:0,x3:0,hr:0,go:0,li:0,fl:0,
  chaseN:0,chaseSw:0,zN:0,zSw:0,firstN:0,firstSw:0,firstSt:0,vSum:0,vN:0,vMax:0,gSum:0,gN:0,pull:0,cen:0,oppo:0,tbf:0}; }
function add(a,r){
  a.n++; a.sw+=r.sw; a.miss+=r.miss; a.con+=r.con; a.st+=r.st; a.ip+=r.ip; a.inz+=r.inz; a.hasZ+=r.hasZ;
  a.pa+=r.isPA; a.ab+=r.ab; a.h+=r.h; a.tb+=r.tb; a.bb+=r.bb; a.so+=r.so; a.sac+=r.sac; a.x2+=r.x2; a.x3+=r.x3; a.hr+=r.hr;
  if(r.ip){ a.go+=r.go; a.li+=r.li; a.fl+=r.fl; }
  if(r.hasZ){ if(r.inz){ a.zN++; a.zSw+=r.sw; } else { a.chaseN++; a.chaseSw+=r.sw; } }
  if(r.カウント区分==="初球"){ a.firstN++; a.firstSw+=r.sw; a.firstSt+=r.st; }
  if(r.球速){ a.vSum+=r.球速; a.vN++; if(r.球速>a.vMax) a.vMax=r.球速; }
  if(r.gap!=null){ a.gSum+=r.gap; a.gN++; }
  if(r.spray==="引っ張り") a.pull++; else if(r.spray==="センター") a.cen++; else if(r.spray==="流し") a.oppo++;
  a.tbf+=r.tbf;
  return a;
}
function sum(rows){ const a=acc(); rows.forEach(r=>add(a,r)); return a; }
function groupBy(rows,keyFn){ const m=new Map(); rows.forEach(r=>{ const k=keyFn(r); if(k==null||k==="") return; if(!m.has(k)) m.set(k,acc()); add(m.get(k),r); }); return m; }
const div=(a,b)=>b?a/b:null;
const S={
  avg:a=>div(a.h,a.ab), obp:a=>div(a.h+a.bb, a.pa-a.sac), slg:a=>div(a.tb,a.ab),
  ops:a=>{ const o=S.obp(a), s=S.slg(a); return (o==null||s==null)?null:o+s; },
  swing:a=>div(a.sw,a.n), whiff:a=>div(a.miss,a.sw), contact:a=>div(a.con,a.sw), whiffP:a=>div(a.miss,a.n),
  chase:a=>div(a.chaseSw,a.chaseN), zswing:a=>div(a.zSw,a.zN), fswing:a=>div(a.firstSw,a.firstN), fstrike:a=>div(a.firstSt,a.firstN),
  strike:a=>div(a.st,a.n), inzone:a=>div(a.inz,a.hasZ), kpct:a=>div(a.so,a.pa), bbpct:a=>div(a.bb,a.pa),
  gb:a=>div(a.go,a.go+a.li+a.fl), ld:a=>div(a.li,a.go+a.li+a.fl), fb:a=>div(a.fl,a.go+a.li+a.fl),
  vavg:a=>div(a.vSum,a.vN), vmax:a=>a.vMax||null, gap:a=>div(a.gSum,a.gN),
  pull:a=>div(a.pull,a.pull+a.cen+a.oppo), cen:a=>div(a.cen,a.pull+a.cen+a.oppo), oppo:a=>div(a.oppo,a.pull+a.cen+a.oppo)
};
const fAvg=v=>v==null?"—":(v>=1?v.toFixed(3):v.toFixed(3).replace(/^0/,""));
const fPct=v=>v==null?"—":(v*100).toFixed(1)+"%";
const fPct0=v=>v==null?"—":Math.round(v*100)+"%";
const fNum=v=>v==null?"—":String(Math.round(v*10)/10);
const fInt=v=>v==null?"—":String(v);

/* ================= フィルタ ================= */
let MODE="bat";
const F={team:"",sel:"",from:"",to:"",tour:"",gkind:"",opp:[],type:"",band:"",run:"",cnt:"",hand:"",tb:""};
function fillOpp(teams){
  F.opp=(F.opp||[]).filter(t=>teams.includes(t));
  $("#f-opp-list").innerHTML=teams.map(t=>`<label><input type="checkbox" value="${esc(t)}" ${F.opp.includes(t)?"checked":""}>${esc(t)}</label>`).join("")||`<p class="hint" style="padding:6px">チームがありません</p>`;
  const btn=$("#f-opp-btn"); btn.classList.toggle("on",F.opp.length>0);
  $("#f-opp-txt").textContent=F.opp.length===0?"すべて":F.opp.length===1?F.opp[0]:`${F.opp.length}チーム（${F.opp.join("・")}）`;
}
function mineTeamName(){ if(SRC==="api"&&INDEX) return INDEX.mine||""; return uniq(ROWS.map(r=>r.自チーム))[0]||""; }
function buildTeamOptions(){
  const teams=(SRC==="api"&&INDEX)?INDEX.teams.slice():uniq(ROWS.flatMap(r=>[r.攻撃,r.守備])).sort();
  const mine=mineTeamName();
  if(mine&&teams.includes(mine)){ teams.splice(teams.indexOf(mine),1); teams.unshift(mine); }
  /* 自チームを既定に。全チームまとめて読むことはしない（そのぶん軽い） */
  if(!F.team||!teams.includes(F.team)) F.team=(mine&&teams.includes(mine))?mine:(teams[0]||"");
  const el=$("#f-team");
  el.innerHTML=teams.map(t=>`<option value="${esc(t)}">${esc(t)}${t===mine?"（自チーム）":""}</option>`).join("");
  const mc=$("#c-mine"); if(mc){ mc.textContent=mine?`自チーム：${mine}`:"自チーム未設定"; mc.style.display=mine?"":"none"; }
  el.value=F.team;
}
function uniq(arr){ return Array.from(new Set(arr.filter(x=>x!=null&&x!==""))); }
function fillSel(id,vals,allLabel,cur){
  const el=$(id); el.innerHTML=`<option value="">${esc(allLabel)}</option>`+vals.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("");
  el.value=vals.includes(cur)?cur:"";
}
function fillSelGroups(id,groups,allLabel,cur){
  const el=$(id); const all=groups.flatMap(g=>g.vals);
  el.innerHTML=`<option value="">${esc(allLabel)}</option>`+groups.map(g=>`<optgroup label="${esc(g.label)}">${g.vals.map(v=>`<option value="${esc(v)}">${esc(v)}</option>`).join("")}</optgroup>`).join("");
  el.value=all.includes(cur)?cur:"";
}
function buildPlayerOptions(){
  buildTeamOptions();
  const el=$("#f-sel");
  const isBat=MODE==="bat";
  if(SRC==="api"&&INDEX){
    const ps=INDEX.players.filter(p=>p.side===(isBat?"bat":"pit")&&p.tm===F.team);
    const teams=INDEX.teams.filter(t=>t===F.team);
    let h="";
    teams.forEach(tm=>{ const list=ps.filter(p=>p.tm===tm).sort((a,b)=>b.n-a.n); if(!list.length) return;
      h+=`<optgroup label="${esc(tm)}"><option value="T:${esc(tm)}">${esc(tm)}　チーム全体</option>`;
      list.forEach(p=>{ h+=`<option value="P:${esc(p.id)}">${esc(p.no?"#"+p.no+" ":"")}${esc(p.nm)}${p.gr?"（"+esc(p.gr)+"年）":""}　${esc(p.hand||"")}${isBat?"打":"投"}　${p.n}球</option>`; });
      h+=`</optgroup>`; });
    el.innerHTML=h;
    if(!Array.from(el.options).some(o=>o.value===F.sel)){ const sorted=ps.slice().sort((a,b)=>b.n-a.n); const mine=sorted[0]; F.sel=mine?"P:"+mine.id:(el.options[0]?el.options[0].value:""); }
    el.value=F.sel; return;
  }
  const teamsAll=uniq(ROWS.flatMap(r=>[r.攻撃,r.守備])).sort().filter(t=>t===F.team);
  const players=new Map();
  ROWS.forEach(r=>{
    if(r.記録種別==="牽制") return;
    const id=isBat?(r.打者ID||r.打者):(r.投手ID||r.投手), nm=isBat?r.打者:r.投手, tm=isBat?r.攻撃:r.守備;
    const no=isBat?r.打者背番号:r.投手背番号, gr=isBat?r.打者学年:r.投手学年, hand=isBat?r.左右:r.投手左右;
    if(!id||!nm) return; if(tm!==F.team) return;
    const cur=players.get(id)||{id,nm,tm,no,gr,hand,n:0,last:""};
    cur.n++; if(r.日付>=cur.last){ cur.last=r.日付; cur.no=no; cur.gr=gr; cur.nm=nm; cur.tm=tm; }
    players.set(id,cur);
  });
  let h="";
  teamsAll.forEach(tm=>{
    const ps=Array.from(players.values()).filter(p=>p.tm===tm).sort((a,b)=>b.n-a.n);
    if(!ps.length) return;
    h+=`<optgroup label="${esc(tm)}"><option value="T:${esc(tm)}">${esc(tm)}　チーム全体</option>`;
    ps.forEach(p=>{ h+=`<option value="P:${esc(p.id)}">${esc(p.no?"#"+p.no+" ":"")}${esc(p.nm)}${p.gr?"（"+esc(p.gr)+"年）":""}　${esc(p.hand||"")}${isBat?"打":"投"}　${p.n}球</option>`; });
    h+=`</optgroup>`;
  });
  el.innerHTML=h;
  if(!Array.from(el.options).some(o=>o.value===F.sel)){
    // 自チームの一番球数が多い選手を初期選択
    const mineTeam=uniq(ROWS.map(r=>r.自チーム))[0]||"";
    const list=Array.from(players.values()).sort((a,b)=>b.n-a.n);
    const mine=list.find(p=>mineTeam&&p.tm===mineTeam)||list[0];
    F.sel = mine? "P:"+mine.id : (el.options[0]?el.options[0].value:"");
  }
  el.value=F.sel;
}
function buildFilterOptions(){
  const src = (SRC==="api"&&INDEX) ? {tours:INDEX.tours,kinds:INDEX.kinds,teams:INDEX.teams,types:INDEX.types}
    : {tours:uniq(ROWS.map(r=>r.大会)).sort(),kinds:uniq(ROWS.map(r=>r.試合種別)).sort(),teams:uniq(ROWS.flatMap(r=>[r.攻撃,r.守備])).sort(),types:uniq(ROWS.map(r=>r.球種)).sort()};
  fillSel("#f-tour",src.tours,"すべての大会",F.tour);
  fillSel("#f-gkind",src.kinds,"すべて",F.gkind);
  fillOpp(src.teams.filter(t=>t!==F.team));
  fillSel("#f-type",src.types,"すべて",F.type);
  fillSel("#f-band",BANDS.concat(["未入力"]),"すべて",F.band);
  fillSelGroups("#f-run",[{label:"まとめ",vals:RUNS.concat(["走者あり"])},{label:"個別（全8パターン）",vals:RUNS8}],"すべて",F.run);
  fillSelGroups("#f-cnt",[{label:"まとめ",vals:CNTS.concat(["追い込まれ","ボール先行","ストライク先行","平行カウント"])},{label:"個別（全12カウント B-S）",vals:CNT12}],"すべて",F.cnt);
  fillSel("#f-hand",["右","左"],"両方",F.hand);
  $("#f-tb").value=F.tb;
  $("#f-from").value=F.from; $("#f-to").value=F.to;
  $("#sel-lbl").textContent=MODE==="bat"?"打者":"投手";
  $("#hand-lbl").textContent=MODE==="bat"?"相手投手の左右":"相手打者の左右";
}
function subject(){
  if(!F.sel) return {rows:[],label:"—"};
  const isBat=MODE==="bat";
  const [kind,val]=[F.sel.slice(0,1),F.sel.slice(2)];
  let rows=ROWS.filter(r=>r.記録種別!=="牽制");
  let label="";
  if(kind==="T"){ rows=rows.filter(r=>(isBat?r.攻撃:r.守備)===val); label=val+"　チーム全体"; }
  else { rows=rows.filter(r=>(isBat?(r.打者ID||r.打者):(r.投手ID||r.投手))===val); const s=rows[0]; label=s?(isBat?s.打者:s.投手):val; }
  const opp=r=>isBat?r.守備:r.攻撃, hand=r=>isBat?r.投手左右:r.左右;
  rows=rows.filter(r=>
    (!F.from||r.日付>=F.from)&&(!F.to||r.日付<=F.to)&&
    (!F.tour||r.大会===F.tour)&&(!F.gkind||r.試合種別===F.gkind)&&(!F.opp.length||F.opp.includes(opp(r)))&&
    (!F.type||r.球種===F.type)&&(!F.band||r.球速帯===F.band)&&runMatch(r,F.run)&&
    cntMatch(r,F.cnt)&&(!F.hand||hand(r)===F.hand)&&
    (F.tb===""||(F.tb==="no"&&!r.tbf)||(F.tb==="only"&&r.tbf)));
  return {rows,label};
}

/* ================= 描画部品 ================= */
const tip=$("#tip");
function showTip(e,html){ tip.innerHTML=html; tip.hidden=false; moveTip(e); }
function moveTip(e){ const x=e.clientX+14, y=e.clientY+14; tip.style.left=Math.min(x,window.innerWidth-tip.offsetWidth-8)+"px"; tip.style.top=Math.min(y,window.innerHeight-tip.offsetHeight-8)+"px"; }
function hideTip(){ tip.hidden=true; }
function bindTips(root){
  $$("[data-tip]",root).forEach(el=>{
    el.addEventListener("pointerenter",e=>showTip(e,el.dataset.tip));
    el.addEventListener("pointermove",moveTip);
    el.addEventListener("pointerleave",hideTip);
  });
}
function cssVar(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function hex2rgb(h){ h=h.replace("#",""); return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)]; }
function ramp(t){ // 0..1 → color (4 stops)
  const stops=[cssVar("--heat0"),cssVar("--heat1"),cssVar("--heat2"),cssVar("--heat3")].map(hex2rgb);
  t=Math.max(0,Math.min(1,t)); const p=t*3, i=Math.min(2,Math.floor(p)), f=p-i;
  const c=stops[i].map((v,k)=>Math.round(v+(stops[i+1][k]-v)*f)); return `rgb(${c[0]},${c[1]},${c[2]})`;
}
function inkOn(t){ return t>0.55? cssVar("--paper") : cssVar("--ink"); }
function isDark(){ const th=document.documentElement.getAttribute("data-theme"); if(th) return th==="dark"; return window.matchMedia("(prefers-color-scheme: dark)").matches; }

/* ゾーン図（値付き） */
function zoneSVG(vals,opt){
  // vals: {zone:{v,n,label}} ; opt:{fmt, min,max, handLabel}
  const cells=[];
  const q=[["11","M10,10 H160 V70 H70 V160 H10 Z",38,38],["12","M160,10 H310 V160 H250 V70 H160 Z",282,38],
    ["13","M10,160 H70 V250 H160 V310 H10 Z",38,282],["14","M250,160 H310 V310 H160 V250 H250 Z",282,282]];
  const vs=Object.values(vals).map(x=>x.v).filter(v=>v!=null);
  const min=opt.min!=null?opt.min:Math.min(...vs,0), max=opt.max!=null?opt.max:Math.max(...vs,0.0001);
  const col=v=>v==null?cssVar("--raise"):ramp((v-min)/((max-min)||1));
  const tcol=v=>v==null?cssVar("--muted"):inkOn((v-min)/((max-min)||1));
  const cell=(z,shape,cx,cy)=>{
    const d=vals[z]||{v:null,n:0}; const c=col(d.v);
    const tipHtml=`ゾーン ${z}<br><b>${esc(opt.fmt(d.v))}</b> <span style="opacity:.8">${esc(d.label||"")}</span>`;
    return `<g class="zc" data-tip="${esc(tipHtml)}">${shape.replace("%FILL%",c)}
      <text class="z-val" x="${cx}" y="${cy-3}" fill="${tcol(d.v)}">${esc(opt.fmt(d.v))}</text>
      <text class="z-n" x="${cx}" y="${cy+13}" fill="${tcol(d.v)}">${d.n?d.n+"球":""}</text></g>`;
  };
  let h="";
  q.forEach(([z,d,cx,cy])=>h+=cell(z,`<path class="z-cell" d="${d}" fill="%FILL%"></path>`,cx,cy));
  for(let r=0;r<3;r++)for(let c=0;c<3;c++){ const z=String(r*3+c+1), x=70+c*60, y=70+r*60;
    h+=cell(z,`<rect class="z-cell" x="${x}" y="${y}" width="60" height="60" fill="%FILL%"></rect>`,x+30,y+30); }
  h+=`<text class="z-side" x="160" y="332">低め ↓　（捕手目線）</text>`;
  h+=`<text class="z-side" x="10" y="348" style="text-anchor:start">${esc(opt.left||"三塁側")}</text><text class="z-side" x="310" y="348" style="text-anchor:end">${esc(opt.right||"一塁側")}</text>`;
  return `<svg class="zone" viewBox="0 0 320 354" role="img">${h}</svg>
    <div class="legend"><span>低</span><span class="ramp"></span><span>高</span><span class="muted" style="margin-left:6px">${esc(opt.fmt(min))} 〜 ${esc(opt.fmt(max))}　薄いグレー＝データなし</span></div>`;
}
/* グラウンド図＋打球 */
function fieldSVG(rows,opt){
  const fair="M500,930 L33,463 C180,55 820,55 967,463 Z";
  const pos=[[7,238,420],[8,500,318],[9,762,420],[3,672,762],[4,596,676],[5,328,762],[6,404,676]];
  let h=`<rect class="f-foul" x="0" y="0" width="1000" height="1010"></rect><path class="f-grass" d="${fair}"></path>
    <path class="f-dirt" d="M500,930 L288,718 A300,300 0 0 1 712,718 Z"></path>
    <path class="f-line" d="M500,930 L20,450 M500,930 L980,450"></path><path class="f-fence" d="M33,463 C180,55 820,55 967,463"></path>
    <polygon points="500,930 628,802 500,674 372,802" fill="none" stroke="var(--paper)" stroke-width="4"></polygon>`;
  pos.forEach(p=>h+=`<text class="f-pos" x="${p[1]}" y="${p[2]}">${p[0]}</text>`);
  let marks="", n=0, unk=0;
  rows.forEach(r=>{
    if(!(r.結果==="インプレー"||r.結果==="ファウル")) return;
    if(r.打球X==null){ unk++; return; }
    if(r.結果==="ファウル"&&!opt.showFoul) return;
    n++;
    const cls = r.h?"hit": r.結果==="ファウル"?"foul":"out";
    const k=r.打球種類||"";
    const x=r.打球X,y=r.打球Y, s=13;
    let shape;
    if(k==="ゴロ") shape=`<rect class="mk ${cls}" x="${x-s}" y="${y-s}" width="${2*s}" height="${2*s}" rx="3"></rect>`;
    else if(k==="ライナー") shape=`<rect class="mk ${cls}" x="${x-s}" y="${y-s}" width="${2*s}" height="${2*s}" rx="3" transform="rotate(45 ${x} ${y})"></rect>`;
    else if(k==="バント") shape=`<polygon class="mk ${cls}" points="${x},${y-s-2} ${x+s+1},${y+s-2} ${x-s-1},${y+s-2}"></polygon>`;
    else shape=`<circle class="mk ${cls}" cx="${x}" cy="${y}" r="${s}"></circle>`;
    const who = MODE==="bat" ? `投手 ${esc(r.投手)}` : `打者 ${esc(r.打者)}`;
    const t=`${esc(r.日付)}　${esc(r.回)}回${esc(r.表裏)}<br><b>${esc(r.打席結果||r.結果)}</b> ${esc(k)}／${esc(r.方向)}${r.深さ&&r.深さ!=="—"?"・"+esc(r.深さ):""}<br>${who}　${esc(r.球種)}${r.球速?" "+r.球速+"km/h":""}　ゾーン${esc(r.投球ゾーン||"—")}`;
    marks+=`<g data-tip="${esc(t)}"><circle class="hit-area" cx="${x}" cy="${y}" r="24"></circle>${shape}</g>`;
  });
  return {svg:`<svg class="field" viewBox="0 0 1000 1010" role="img">${h}${marks}</svg>`, n, unk};
}
/* 構え→投球 ズレ図 */
const ZC={};
for(let r=0;r<3;r++)for(let c=0;c<3;c++) ZC[String(r*3+c+1)]={x:70+c*60+30,y:70+r*60+30};
Object.assign(ZC,{"11":{x:60,y:55},"12":{x:260,y:55},"13":{x:60,y:265},"14":{x:260,y:265}});
const CM=0.239;
function gapStats(rows){
  const pts=rows.filter(r=>r.gap!=null&&r.構えゾーン);
  const byT=new Map();
  pts.forEach(r=>{ const k=r.構えゾーン; if(!byT.has(k)) byT.set(k,{n:0,sx:0,sy:0,same:0,g:0,st:0}); const o=byT.get(k);
    o.n++; o.sx+=r.投球X-r.構えX; o.sy+=r.投球Y-r.構えY; o.same+= r.投球ゾーン===k?1:0; o.g+=r.gap; o.st+=r.st; });
  const all={n:pts.length,sx:0,sy:0,same:0,g:0};
  pts.forEach(r=>{ all.sx+=r.投球X-r.構えX; all.sy+=r.投球Y-r.構えY; all.same+=r.投球ゾーン===r.構えゾーン?1:0; all.g+=r.gap; });
  return {pts,byT,all};
}
function dirWord(dx,dy){ // 平均ズレの言葉
  const parts=[]; const v=Math.abs(dy)*CM, h=Math.abs(dx)*CM;
  if(v>=2) parts.push((dy<0?"高め":"低め")+"に"+v.toFixed(1)+"cm");
  if(h>=2) parts.push((dx<0?"三塁側":"一塁側")+"に"+h.toFixed(1)+"cm");
  return parts.length?parts.join("・"):"ほぼ構えどおり";
}
function gapSVG(rows,target){
  const {pts,byT}=gapStats(rows);
  let h=`<rect x="10" y="10" width="300" height="300" fill="var(--raise)" stroke="var(--line)"></rect>`;
  // 13分割の枠（タップで選択）
  const q=[["11","M10,10 H160 V70 H70 V160 H10 Z"],["12","M160,10 H310 V160 H250 V70 H160 Z"],["13","M10,160 H70 V250 H160 V310 H10 Z"],["14","M250,160 H310 V310 H160 V250 H250 Z"]];
  q.forEach(([z,d])=>h+=`<path d="${d}" fill="${target===z?"color-mix(in srgb,var(--bar) 14%,var(--raise))":"transparent"}" stroke="var(--line)" data-tz="${z}" style="cursor:pointer"></path>`);
  for(let r=0;r<3;r++)for(let c=0;c<3;c++){ const z=String(r*3+c+1);
    h+=`<rect x="${70+c*60}" y="${70+r*60}" width="60" height="60" fill="${target===z?"color-mix(in srgb,var(--bar) 14%,var(--paper))":"var(--paper)"}" stroke="var(--line)" data-tz="${z}" style="cursor:pointer"></rect>`; }
  h+=`<defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--clay)"></path></marker></defs>`;
  const drawMean=(z,o,big)=>{
    const c=ZC[z]; if(!c||!o.n) return "";
    const mx=c.x+o.sx/o.n, my=c.y+o.sy/o.n, rad=(o.g/o.n)/CM;
    let g=`<circle cx="${mx}" cy="${my}" r="${Math.min(rad,90)}" fill="var(--clay)" opacity="${big?.10:.07}" pointer-events="none"></circle>`;
    if(Math.hypot(mx-c.x,my-c.y)>3) g+=`<line x1="${c.x}" y1="${c.y}" x2="${mx}" y2="${my}" stroke="var(--clay)" stroke-width="${big?3:2.2}" marker-end="url(#arr)" pointer-events="none"></line>`;
    g+=`<circle cx="${c.x}" cy="${c.y}" r="${big?7:5}" fill="none" stroke="var(--bar)" stroke-width="2.2" pointer-events="none"></circle>`;
    g+=`<circle cx="${mx}" cy="${my}" r="${big?7:5}" fill="var(--clay)" stroke="var(--paper)" stroke-width="1.5" pointer-events="none"></circle>`;
    if(!big) g+=`<text x="${c.x}" y="${c.y-9}" class="z-n" fill="var(--muted)" pointer-events="none">${o.n}球</text>`;
    return g;
  };
  if(!target){
    byT.forEach((o,z)=>{ if(o.n>=2) h+=drawMean(z,o,false); });
  } else {
    pts.filter(r=>r.構えゾーン===target).forEach(r=>{
      h+=`<circle cx="${r.投球X}" cy="${r.投球Y}" r="4.5" fill="var(--clay)" opacity=".38" stroke="var(--paper)" stroke-width="1" pointer-events="none"></circle>`; });
    const o=byT.get(target); if(o) h+=drawMean(target,o,true);
  }
  h+=`<text class="z-side" x="160" y="332">低め ↓　（捕手目線）　マスをタップで詳細</text>`;
  return `<svg class="zone" viewBox="0 0 320 340" role="img" id="gap-svg">${h}</svg>`;
}
/* 表 */
function table(cols,rows,opt){
  // cols: [{k,label,fmt,bar}] rows: [{label, a}] ; total row optional
  const th=cols.map(c=>`<th>${esc(c.label)}</th>`).join("");
  const maxBar={};
  cols.forEach(c=>{ if(c.bar) maxBar[c.k]=Math.max(...rows.map(r=>c.val(r.a)||0),0.0001); });
  const tr=rows.map(r=>`<tr>${cols.map((c,i)=>{ const v=c.val(r.a); const bar=c.bar?`<span class="barcell" style="width:${(4*(v||0)/maxBar[c.k]).toFixed(2)}em"></span>`:"";
    return `<td>${i===0?esc(r.label):bar+esc(c.fmt(v))}</td>`; }).join("")}</tr>`).join("");
  // barcell の幅は em（表の文字を縮めたとき一緒に縮む）
  const tot=opt&&opt.total?`<tr class="tot">${cols.map((c,i)=>`<td>${i===0?"合計":esc(c.fmt(c.val(opt.total)))}</td>`).join("")}</tr>`:"";
  return `<div class="tbl-wrap"><table class="t"><thead><tr>${th}</tr></thead><tbody>${tr||`<tr><td colspan="${cols.length}" class="muted">データなし</td></tr>`}${tot}</tbody></table></div>`;
}
function rowsFromGroups(m,order){
  const keys=order?order.filter(k=>m.has(k)).concat(Array.from(m.keys()).filter(k=>!order.includes(k))):Array.from(m.keys());
  return keys.map(k=>({label:k,a:m.get(k)}));
}
/* 棒グラフ（球数ごとの平均球速） */
function barsSVG(items,opt){ // items: [{label, v, n}]
  const W=560,H=190,padL=42,padB=34,padT=14,padR=10;
  const vs=items.map(i=>i.v).filter(v=>v!=null); if(!vs.length) return `<div class="empty">球速の記録がありません</div>`;
  const lo=Math.floor((Math.min(...vs)-4)/5)*5, hi=Math.ceil((Math.max(...vs)+2)/5)*5;
  const x=i=>padL+i*((W-padL-padR)/items.length), bw=(W-padL-padR)/items.length-6;
  const y=v=>padT+(H-padT-padB)*(1-(v-lo)/((hi-lo)||1));
  let h=`<line class="ax" x1="${padL}" y1="${H-padB}" x2="${W-padR}" y2="${H-padB}"></line>`;
  for(let g=lo; g<=hi; g+=5){ h+=`<line class="ax" x1="${padL}" y1="${y(g)}" x2="${W-padR}" y2="${y(g)}" opacity=".5"></line><text class="axt" x="${padL-6}" y="${y(g)+4}" text-anchor="end">${g}</text>`; }
  items.forEach((it,i)=>{
    const bx=x(i)+3;
    if(it.v!=null) h+=`<g data-tip="${esc(it.label)}<br><b>${esc(fNum(it.v))}</b> km/h　${it.n}球"><rect class="bar" x="${bx}" y="${y(it.v)}" width="${bw}" height="${H-padB-y(it.v)}" rx="3"></rect>
      <text class="barlbl" x="${bx+bw/2}" y="${y(it.v)-4}">${esc(fNum(it.v))}</text></g>`;
    h+=`<text class="axt" x="${bx+bw/2}" y="${H-padB+15}" text-anchor="middle">${esc(it.label)}</text>`;
  });
  return `<svg class="bars" viewBox="0 0 ${W} ${H}" role="img">${h}</svg>`;
}

/* ================= 画面 ================= */
let heatMetricBat="avg", heatMetricPit="dist", showFoul=false, gapTarget="";
function kpi(k,v,d,hero,wide){ return `<div class="kpi ${hero?"hero":""} ${wide?"wide":""}"><div class="k">${esc(k)}</div><div class="v">${esc(v)}</div><div class="d">${esc(d||"")}</div></div>`; }

function render(){
  const {rows,label}=subject();
  const a=sum(rows);
  const games=uniq(rows.map(r=>r.試合ID)).length;
  const dates=rows.map(r=>r.日付).sort();
  $("#fsum").innerHTML=`<span><b>${esc(label)}</b></span><span>${games}試合</span><span>${a.n}球</span><span>${dates.length?esc(dates[0])+" 〜 "+esc(dates[dates.length-1]):""}</span>`+
    (a.tbf?`<span>タイブレーク ${a.tbf}球を含む</span>`:"");
  const conds=[F.tour&&`大会:${F.tour}`,F.gkind&&`種別:${F.gkind}`,F.opp.length&&`対戦:${F.opp.join("・")}`,F.type&&`球種:${F.type}`,F.band&&`球速:${F.band}`,F.run&&`走者:${F.run}`,F.cnt&&`カウント:${F.cnt}`,F.hand&&`相手:${F.hand}`,F.tb==="no"?"TB除く":F.tb==="only"?"TBのみ":""].filter(Boolean);
  $("#ph-t").textContent=`${label}　${MODE==="bat"?"打者":"投手"}成績`;
  $("#ph-s").textContent=`${games}試合・${a.n}球　${dates.length?dates[0]+" 〜 "+dates[dates.length-1]:""}${conds.length?"　｜ 条件: "+conds.join("、"):""}　｜ 出力 ${new Date().toLocaleDateString("ja-JP")}`;
  if(!rows.length){ $("#kpis").innerHTML=""; $("#body").innerHTML=`<div class="card"><div class="empty">条件に合う記録がありません。条件をゆるめてください。</div></div>`; return; }
  if(MODE==="bat") renderBat(rows,a,label); else renderPit(rows,a,label);
  bindTips(document.body);
  fitTables();
}
/* 表を枠内に収める：はみ出す表は文字サイズを比例で縮める（横スクロールは出さない） */
function fitTables(){
  $$("#body .tbl-wrap").forEach(w=>{
    const t=$("table",w); if(!t) return;
    t.style.fontSize="";
    for(let i=0;i<3;i++){
      const avail=w.clientWidth, need=t.scrollWidth;
      if(!avail||need<=avail+0.5) break;
      const cur=parseFloat(getComputedStyle(t).fontSize);
      t.style.fontSize=Math.max(6.5,Math.floor(cur*avail/need*0.985*10)/10)+"px";
    }
  });
}
let rzT; window.addEventListener("resize",()=>{ if(!VIS()) return; clearTimeout(rzT); rzT=setTimeout(fitTables,120); });
/* 印刷：用紙幅のレイアウト（html.prt）に切り替えてから表を測り直す */
function printOn(){ document.documentElement.classList.add("prt"); fitTables(); }
function printOff(){ if(!document.documentElement.classList.contains("prt")) return; document.documentElement.classList.remove("prt"); fitTables(); setTimeout(fitTables,150); }
window.addEventListener("beforeprint",()=>{ if(VIS()) printOn(); });
window.addEventListener("afterprint",()=>{ if(VIS()) printOff(); });
try{ window.matchMedia("print").addEventListener("change",e=>{ if(e.matches) printOn(); else printOff(); }); }catch(e){}


/* ================= 配球ミックス（カウント別・走者別の球種割合） ================= */
/* 色は球種ごとに固定。並び順も固定なので、選手を変えても同じ球種は同じ色。 */
const TYPE_SLOT={"直球":1,"スライダー":2,"カーブ":3,"フォーク":4,"チェンジ":5,"シュート":6,"カット":7,"ツーシーム":8};
const MIX_OTHER="その他";
function mixKeyOf(t){ t=t||"未入力"; if(t==="未入力"||t==="不明") return t; return TYPE_SLOT[t]?t:MIX_OTHER; }
function mixColor(k){ return "var(--t"+(TYPE_SLOT[k]||0)+")"; }
function mixCount(rows){ const m=new Map(); rows.forEach(r=>{ const k=mixKeyOf(r.球種); m.set(k,(m.get(k)||0)+1); }); return m; }
function mixOrder(m){ return Array.from(m.keys()).sort((x,y)=>(TYPE_SLOT[x]||90)-(TYPE_SLOT[y]||90)||String(x).localeCompare(y)); }
function mixBar(rows,opt){
  opt=opt||{}; const h=opt.h||22, n=rows.length;
  if(!n) return `<div class="mix none" style="height:${h}px">記録なし</div>`;
  const m=mixCount(rows), ks=mixOrder(m), min=opt.minlab==null?12:opt.minlab;
  const sg=ks.map(k=>{ const v=m.get(k), pc=100*v/n;
    return `<div class="sg" style="flex:${v}; background:${mixColor(k)}" data-tip="${esc(k)}　${v}球（${Math.round(pc)}%）／ 全${n}球">${pc>=min?`<b>${Math.round(pc)}</b>`:""}</div>`; }).join("");
  return `<div class="mix" style="height:${h}px">${sg}</div>`;
}
function mixLegend(rows){
  const ks=mixOrder(mixCount(rows));
  if(!ks.length) return "";
  return `<div class="mixlg">${ks.map(k=>`<span><i style="background:${mixColor(k)}"></i>${esc(k)}</span>`).join("")}<span class="muted">棒の数字は割合（％）</span></div>`;
}
function mixTyped(rows){ return rows.some(r=>mixKeyOf(r.球種)!=="未入力"); }
/* 既定では球種が未入力の球を外して割合を出す（チェックで含められる） */
let mixBlank=false;
function mixUse(rows){ return mixBlank?rows:rows.filter(r=>mixKeyOf(r.球種)!=="未入力"); }
function mixBlankBox(all,used){
  const off=all.length-used.length;
  return `<label style="margin-left:auto; font-weight:400; letter-spacing:0; font-size:12px; display:flex; gap:5px; align-items:center">
    <input type="checkbox" id="mix-blank" ${mixBlank?"checked":""}>未入力も含める${off?`（${off}球）`:""}</label>`;
}
function cardMixNone(n){
  return `<div class="card" style="grid-column:1/-1"><h3>カウント別・走者別の球種割合</h3>
    <div class="empty" style="padding:12px 0">この条件の${n}球は球種がすべて未入力のため、配球の割合は出せません。<br>
    入力アプリで球種を記録するか、球種が入っている試合・選手に絞り込んでください。</div></div>`;
}
/* 球種が入っていない球が多いときの注意書き */
function mixWarn(rows){
  const n=rows.length; if(!n) return "";
  const miss=rows.filter(r=>mixKeyOf(r.球種)==="未入力").length;
  if(miss/n<0.2) return "";
  return `<div class="mixsec" style="color:var(--clay)">この条件の${n}球のうち${miss}球は球種が未入力です（灰色の部分）。割合は入力済みの${n-miss}球と合わせた${n}球に対するものです。</div>`;
}
const MIXCG=["初球","途中のカウント","2ストライク"];
function mixCg(r){ return (r.B===0&&r.S===0)?"初球":(r.S===2?"2ストライク":"途中のカウント"); }

function cardMixCount(all,title,sub){
  const rows=mixUse(all);
  const g=new Map(); rows.forEach(r=>{ const k=r.カウント; if(!g.has(k)) g.set(k,[]); g.get(k).push(r); });
  const cells=CNT12.map(c=>{ const rs=g.get(c)||[];
    return `<div class="mixcell${rs.length<8?" few":""}"><div class="mxh"><b>${c}</b><span>${rs.length}球</span></div>${mixBar(rs,{h:18,minlab:20})}</div>`;
  }).join("");
  return `<div class="card" style="grid-column:1/-1"><h3>${title} <span class="sub">${sub||"全12カウント（B-S、投球前）・薄いマスは8球未満"}</span>${mixBlankBox(all,rows)}</h3>${mixLegend(rows)}<div class="mixgrid">${cells}</div>${mixWarn(rows)}<div class="mixsec">球種が入っている ${rows.length}球 で計算しています${mixBlank?"（未入力も含む）":(all.length>rows.length?`（未入力の ${all.length-rows.length}球 は除外）`:"")}。</div></div>`;
}
function cardMixRun(all,title){
  const rows=mixUse(all);
  const line=(k,rs,h,min)=>`<div class="mixrow${rs.length<8?" few":""}"><div class="nm">${esc(k)}</div>${mixBar(rs,{h:h,minlab:min})}<div class="n">${rs.length}球</div></div>`;
  const a=RUNS.map(k=>line(k,rows.filter(r=>r.走者区分===k),22,12)).join("");
  const b=RUNS8.map(k=>line(k,rows.filter(r=>r.走者詳細===k),17,18)).join("");
  return `<div class="card"><h3>${title} <span class="sub">薄い行は8球未満</span></h3>${mixLegend(rows)}${a}<div class="mixsec">走者の位置ごと（全8パターン）</div>${b}</div>`;
}
function cardMixRunCount(all,title){
  const rows=mixUse(all);
  let h=`<div class="rcgrid"><div></div>${MIXCG.map(c=>`<div class="hh">${c}</div>`).join("")}`;
  RUNS.forEach(k=>{ h+=`<div class="rl">${esc(k)}</div>`;
    MIXCG.forEach(c=>{ const rs=rows.filter(r=>r.走者区分===k&&mixCg(r)===c);
      h+=`<div class="mixcell${rs.length<6?" few":""}"><div class="mxh"><span>${rs.length}球</span></div>${mixBar(rs,{h:16,minlab:24})}</div>`; }); });
  return `<div class="card"><h3>${title} <span class="sub">走者 × カウントの段階・薄いマスは6球未満</span></h3>${mixLegend(rows)}${h}</div></div>`;
}

function renderBat(rows,a,label){
  const k=$("#kpis");
  k.innerHTML=[
    kpi("打率",fAvg(S.avg(a)),`${a.h}安打 / ${a.ab}打数`,true),
    kpi("出塁率",fAvg(S.obp(a)),`${a.pa}打席`),
    kpi("長打率",fAvg(S.slg(a)),`塁打 ${a.tb}`),
    kpi("OPS",fAvg(S.ops(a)),""),
    kpi("長打",`${a.x2+a.x3+a.hr}`,`二 ${a.x2}・三 ${a.x3}・本 ${a.hr}`),
    kpi("三振率",fPct(S.kpct(a)),`${a.so}三振`),
    kpi("四死球率",fPct(S.bbpct(a)),`${a.bb}四死球`),
    kpi("スイング率",fPct(S.swing(a)),`${a.sw} / ${a.n}球`),
    kpi("空振り率",fPct(S.whiff(a)),`空振り ${a.miss} / スイング ${a.sw}`),
    kpi("ボール球スイング率",fPct(S.chase(a)),`ボールゾーン ${a.chaseN}球`),
    kpi("初球スイング率",fPct(S.fswing(a)),`初球 ${a.firstN}球`),
    kpi("ゴロ / ライナー / フライ",`${fPct0(S.gb(a))} / ${fPct0(S.ld(a))} / ${fPct0(S.fb(a))}`,`インプレー ${a.go+a.li+a.fl}`,false,true),
    kpi("引っ張り / センター / 流し",`${fPct0(S.pull(a))} / ${fPct0(S.cen(a))} / ${fPct0(S.oppo(a))}`,`フェア打球 ${a.pull+a.cen+a.oppo}`,false,true)
  ].join("");

  // ゾーン別
  const byZ=groupBy(rows,r=>r.投球ゾーン);
  const metrics={avg:["打率（そのコースで決着）",S.avg,fAvg],whiff:["空振り率",S.whiff,fPct],swing:["スイング率",S.swing,fPct],dist:["投球数の割合",a2=>a2.n/a.n,fPct],slg:["長打率",S.slg,fAvg],ip:["インプレー率（対投球）",a2=>div(a2.ip,a2.n),fPct]};
  const [mLabel,mFn,mFmt]=metrics[heatMetricBat];
  const zvals={}; byZ.forEach((za,z)=>{ zvals[z]={v:mFn(za),n:za.n,label:heatMetricBat==="avg"?`${za.h}/${za.ab}`:heatMetricBat==="whiff"?`空振り${za.miss}/スイング${za.sw}`:""}; });
  const hand = uniq(rows.map(r=>r.左右))[0]||"右";
  const zoneCard=`<div class="card"><h3>コース別 <span class="sub">13分割・捕手目線</span>
      <select id="hm-bat">${Object.entries(metrics).map(([kk,v])=>`<option value="${kk}" ${kk===heatMetricBat?"selected":""}>${esc(v[0])}</option>`).join("")}</select></h3>
    ${zoneSVG(zvals,{fmt:mFmt,left:hand==="左"?"三塁側（外角）":"三塁側（内角）",right:hand==="左"?"一塁側（内角）":"一塁側（外角）"})}</div>`;

  // スプレー
  const f=fieldSVG(rows,{showFoul});
  const sprayCard=`<div class="card"><h3>打球方向 <span class="sub">${f.n}打球${f.unk?"・位置不明 "+f.unk:""}</span>
      <label style="margin-left:auto; font-weight:400; letter-spacing:0; font-size:12px; display:flex; gap:5px; align-items:center"><input type="checkbox" id="sp-foul" ${showFoul?"checked":""}>ファウルも表示</label></h3>
    ${f.svg}
    <div class="lg"><span><i class="sw hit"></i>安打</span><span><i class="sw out"></i>アウト・出塁(失策等)</span><span><i class="sw foul"></i>ファウル</span>
      <span style="margin-left:8px; color:var(--muted)">形：</span><span><i class="sw out"></i>フライ</span><span><i class="sw out sq"></i>ゴロ</span><span><i class="sw out dm"></i>ライナー</span></div></div>`;

  const colsB=[{label:"",val:()=>null,fmt:()=>""},
    {k:"n",label:"球数",val:x=>x.n,fmt:fInt,bar:true},{k:"sw",label:"スイング率",val:S.swing,fmt:fPct},{k:"wh",label:"空振り率",val:S.whiff,fmt:fPct},
    {k:"ab",label:"打数",val:x=>x.ab,fmt:fInt},{k:"h",label:"安打",val:x=>x.h,fmt:fInt},{k:"avg",label:"打率",val:S.avg,fmt:fAvg},{k:"slg",label:"長打率",val:S.slg,fmt:fAvg},{k:"so",label:"三振",val:x=>x.so,fmt:fInt}];
  const byType=groupBy(rows,r=>r.球種), byBand=groupBy(rows,r=>r.球速帯), byRun=groupBy(rows,r=>r.走者区分), byCnt=groupBy(rows,r=>r.カウント区分);
  const byRun8=groupBy(rows,r=>r.走者詳細), byCnt12=groupBy(rows,r=>r.カウント);
  const byPit=groupBy(rows,r=>`${r.投手}（${r.守備}）`), byGame=groupBy(rows,r=>`${r.日付} vs ${r.守備}`);
  const byHand=groupBy(rows,r=>(r.投手左右||"?")+"投手");
  const tables=`
    <div class="card tc"><h3>球種別 <span class="sub">打率はその球種で打席が決着したもの</span></h3>${table(colsB,rowsFromGroups(byType).sort((x,y)=>y.a.n-x.a.n),{total:a})}</div>
    <div class="card tc"><h3>球速帯別</h3>${table(colsB,rowsFromGroups(byBand,BANDS.concat(["未入力"])),{total:a})}</div>
    <div class="card tc"><h3>対左右投手・まとめ区分</h3>${table(colsB,rowsFromGroups(byHand).concat(rowsFromGroups(byRun,RUNS)).concat(rowsFromGroups(byCnt,CNTS)),{})}</div>
    <div class="card tc"><h3>走者状況別 <span class="sub">全8パターン</span></h3>${table(colsB,rowsAll(byRun8,RUNS8),{total:a})}</div>
    <div class="card tc"><h3>カウント別 <span class="sub">全12カウント（B-S、投球前）</span></h3>${table(colsB,rowsAll(byCnt12,CNT12),{total:a})}</div>
    <div class="card tc"><h3>対戦投手別</h3>${table(colsB,rowsFromGroups(byPit).sort((x,y)=>y.a.n-x.a.n),{})}</div>
    <div class="card tc" style="grid-column:1/-1"><h3>試合別</h3>${table(colsB,rowsFromGroups(byGame).sort((x,y)=>x.label.localeCompare(y.label)),{})}</div>`;
  const mixCards=mixTyped(rows)?`
    ${cardMixCount(rows,"カウント別に来た球種","全12カウント（B-S、投球前）・薄いマスは8球未満")}
    ${cardMixRun(rows,"走者別に来た球種")}
    ${cardMixRunCount(rows,"走者 × カウント別に来た球種")}`:cardMixNone(rows.length);
  $("#body").innerHTML=`<div class="grid g2">${zoneCard}${sprayCard}</div><div class="grid g2">${mixCards}${tables}</div>`;
  $("#hm-bat").addEventListener("change",e=>{ heatMetricBat=e.target.value; render(); });
  $("#sp-foul").addEventListener("change",e=>{ showFoul=e.target.checked; render(); });
}

function renderPit(rows,a,label){
  const k=$("#kpis");
  const kbb=a.bb?a.so/a.bb:null;
  k.innerHTML=[
    kpi("被打率",fAvg(S.avg(a)),`被安打 ${a.h} / ${a.ab}打数`,true),
    kpi("投球数",`${a.n}`,`${a.pa}打者`),
    kpi("奪三振率",fPct(S.kpct(a)),`${a.so}奪三振`),
    kpi("与四死球率",fPct(S.bbpct(a)),`${a.bb}四死球　K/BB ${kbb==null?"—":kbb.toFixed(1)}`),
    kpi("ストライク率",fPct(S.strike(a)),`${a.st} / ${a.n}`),
    kpi("初球ストライク率",fPct(S.fstrike(a)),`初球 ${a.firstN}球`),
    kpi("空振り率",fPct(S.whiff(a)),`空振り ${a.miss} / スイング ${a.sw}`),
    kpi("ゾーン内率",fPct(S.inzone(a)),`コース記録 ${a.hasZ}球`),
    kpi("平均球速",fNum(S.vavg(a)),`最高 ${fNum(S.vmax(a))}　記録 ${a.vN}球`),
    kpi("構えとのズレ",S.gap(a)==null?"—":fNum(S.gap(a))+"cm",`平均・${a.gN}球`),
    kpi("ゴロ / ライナー / フライ",`${fPct0(S.gb(a))} / ${fPct0(S.ld(a))} / ${fPct0(S.fb(a))}`,`インプレー ${a.go+a.li+a.fl}`,false,true),
    kpi("被長打",`${a.x2+a.x3+a.hr}`,`二 ${a.x2}・三 ${a.x3}・本 ${a.hr}`)
  ].join("");

  const byZ=groupBy(rows,r=>r.投球ゾーン), byTZ=groupBy(rows,r=>r.構えゾーン);
  const metrics={dist:["投球数の割合",a2=>a2.n/a.n,fPct],avg:["被打率（そのコースで決着）",S.avg,fAvg],whiff:["空振り率",S.whiff,fPct],strike:["ストライク率",S.strike,fPct],target:["構えの分布",null,fPct]};
  const [mLabel,mFn,mFmt]=metrics[heatMetricPit];
  const zvals={};
  if(heatMetricPit==="target"){ byTZ.forEach((za,z)=>{ zvals[z]={v:za.n/a.n,n:za.n}; }); }
  else byZ.forEach((za,z)=>{ zvals[z]={v:mFn(za),n:za.n,label:heatMetricPit==="avg"?`${za.h}/${za.ab}`:""}; });
  const zoneCard=`<div class="card"><h3>コース別 <span class="sub">13分割・捕手目線・右打者基準で内外</span>
      <select id="hm-pit">${Object.entries(metrics).map(([kk,v])=>`<option value="${kk}" ${kk===heatMetricPit?"selected":""}>${esc(v[0])}</option>`).join("")}</select></h3>
    ${zoneSVG(zvals,{fmt:mFmt,left:"三塁側（右打者の内角）",right:"一塁側（右打者の外角）"})}</div>`;
  const gs=gapStats(rows);
  const tzOpts=Array.from(gs.byT.keys()).sort((x,y)=>+x-+y);
  const sameRate=gs.all.n?gs.all.same/gs.all.n:null;
  const tgt=gapTarget&&gs.byT.has(gapTarget)?gapTarget:"";
  const to=tgt?gs.byT.get(tgt):null;
  const gapSummary = tgt
    ? `構え <b>${esc(tgt)}</b>：${to.n}球　同じマスに <b>${fPct(to.same/to.n)}</b>　平均ズレ <b>${fNum(to.g/to.n)}cm</b>　傾向：${esc(dirWord(to.sx/to.n,to.sy/to.n))}`
    : (gs.all.n? `全体：構えと同じマスに <b>${fPct(sameRate)}</b>　平均ズレ <b>${fNum(gs.all.g/gs.all.n)}cm</b>　傾向：${esc(dirWord(gs.all.sx/gs.all.n,gs.all.sy/gs.all.n))}` : "構えの記録がありません");
  const gapCard=`<div class="card"><h3>制球 <span class="sub">構え（青○）→ 実際の平均位置（●）</span>
      <select id="gap-sel">${[`<option value="">すべての構え</option>`].concat(tzOpts.map(z=>`<option value="${z}" ${z===tgt?"selected":""}>構え ${z}（${gs.byT.get(z).n}球）</option>`)).join("")}</select></h3>
    ${gapSVG(rows,tgt)}
    <div class="legend" style="display:block; color:var(--ink2)">${gapSummary}</div>
    <div class="legend muted">薄い円の大きさ＝散らばり（平均ズレ）。1マス ≒ 14cm。${tgt?"点はその構えのときの実際の投球位置。":"矢印は構えごとの平均。"}</div></div>`;
  const f=fieldSVG(rows,{showFoul});
  const sprayCard=`<div class="card"><h3>被打球の方向 <span class="sub">${f.n}打球${f.unk?"・位置不明 "+f.unk:""}</span>
      <label style="margin-left:auto; font-weight:400; letter-spacing:0; font-size:12px; display:flex; gap:5px; align-items:center"><input type="checkbox" id="sp-foul" ${showFoul?"checked":""}>ファウルも表示</label></h3>
    ${f.svg}<div class="lg"><span><i class="sw hit"></i>被安打</span><span><i class="sw out"></i>アウト等</span><span><i class="sw foul"></i>ファウル</span>
      <span style="margin-left:8px; color:var(--muted)">形：</span><span><i class="sw out"></i>フライ</span><span><i class="sw out sq"></i>ゴロ</span><span><i class="sw out dm"></i>ライナー</span></div></div>`;

  const colsP=[{label:"",val:()=>null,fmt:()=>""},
    {k:"n",label:"球数",val:x=>x.n,fmt:fInt,bar:true},{k:"pct",label:"割合",val:x=>x.n/a.n,fmt:fPct},{k:"v",label:"平均球速",val:S.vavg,fmt:fNum},{k:"vm",label:"最高",val:S.vmax,fmt:fNum},
    {k:"st",label:"ストライク率",val:S.strike,fmt:fPct},{k:"wh",label:"空振り率",val:S.whiff,fmt:fPct},{k:"ab",label:"打数",val:x=>x.ab,fmt:fInt},{k:"h",label:"被安打",val:x=>x.h,fmt:fInt},{k:"avg",label:"被打率",val:S.avg,fmt:fAvg}];
  const byType=groupBy(rows,r=>r.球種), byHand=groupBy(rows,r=>(r.左右||"?")+"打者"), byRun=groupBy(rows,r=>r.走者区分), byCnt=groupBy(rows,r=>r.カウント区分);
  const byRun8=groupBy(rows,r=>r.走者詳細), byCnt12=groupBy(rows,r=>r.カウント);
  const byInn=groupBy(rows,r=>r.回?`${r.回}回`:""), byGame=groupBy(rows,r=>`${r.日付} vs ${r.攻撃}`);
  // 対戦打者別：チームごとに1枚（印刷では1ページ）
  const oppTeams=uniq(rows.map(r=>r.攻撃)).sort();
  const batTeamCards=oppTeams.map(tm=>{
    const trows=rows.filter(r=>r.攻撃===tm); const ta=sum(trows);
    const byBat=groupBy(trows,r=>`${r.打者背番号?"#"+r.打者背番号+" ":""}${r.打者}${r.左右?"（"+r.左右+"）":""}`);
    const colsT=colsP.map(c=>c.k==="pct"?Object.assign({},c,{val:x=>x.n/ta.n}):c);
    return `<div class="card tc pb" style="grid-column:1/-1"><h3>対戦打者別　${esc(tm)} <span class="sub">${uniq(trows.map(r=>r.試合ID)).length}試合・${ta.n}球・球数順</span></h3>${table(colsT,rowsFromGroups(byBat).sort((x,y)=>y.a.n-x.a.n),{total:ta})}</div>`;
  }).join("");
  // 球数ごとの球速（試合内の通算球数を15球ごとに）
  const perGame=new Map(); rows.forEach(r=>{ const k=r.試合ID; if(!perGame.has(k)) perGame.set(k,[]); perGame.get(k).push(r); });
  const buckets=new Map();
  perGame.forEach(list=>{ list.sort((x,y)=>(x.回-y.回)||(x.表裏>y.表裏?1:-1)||((x.打席No||0)-(y.打席No||0))||((x.球数||0)-(y.球数||0)));
    list.forEach((r,i)=>{ if(!r.球速) return; const b=Math.floor(i/15); if(!buckets.has(b)) buckets.set(b,{s:0,n:0}); const o=buckets.get(b); o.s+=r.球速; o.n++; }); });
  const items=Array.from(buckets.keys()).sort((x,y)=>x-y).map(b=>({label:`${b*15+1}-${b*15+15}球`,v:buckets.get(b).s/buckets.get(b).n,n:buckets.get(b).n}));
  const staminaCard=`<div class="card"><h3>球数と球速 <span class="sub">試合内の球数15球ごとの平均球速（全球種）</span></h3>${barsSVG(items,{})}</div>`;
  const innOrder=Array.from(byInn.keys()).sort((x,y)=>parseInt(x)-parseInt(y));
  const ctlCols=[{label:"",val:()=>null,fmt:()=>""},{k:"n",label:"球数",val:x=>x.n,fmt:fInt,bar:true},{k:"same",label:"構えどおり",val:x=>div(x.same,x.n),fmt:fPct},
    {k:"g",label:"平均ズレ",val:x=>x.n?x.g/x.n:null,fmt:v=>v==null?"—":fNum(v)+"cm"},{k:"st",label:"ストライク率",val:x=>div(x.st,x.n),fmt:fPct},{k:"dir",label:"ずれる傾向",val:x=>x,fmt:x=>x&&x.n?dirWord(x.sx/x.n,x.sy/x.n):"—"}];
  const ctlRowsZ=tzOpts.map(z=>({label:"構え "+z,a:gs.byT.get(z)}));
  const byTypeCtl=new Map();
  gs.pts.forEach(r=>{ const k=r.球種; if(!byTypeCtl.has(k)) byTypeCtl.set(k,{n:0,sx:0,sy:0,same:0,g:0,st:0}); const o=byTypeCtl.get(k); o.n++; o.sx+=r.投球X-r.構えX; o.sy+=r.投球Y-r.構えY; o.same+=r.投球ゾーン===r.構えゾーン?1:0; o.g+=r.gap; o.st+=r.st; });
  const ctlRowsT=Array.from(byTypeCtl.entries()).sort((x,y)=>y[1].n-x[1].n).map(([k,o])=>({label:k,a:o}));
  const ctlCard=`<div class="card tc"><h3>制球の内訳 <span class="sub">球種別・構えゾーン別</span></h3>${table(ctlCols,ctlRowsT.concat(ctlRowsZ),{})}</div>`;
  const mixCards=mixTyped(rows)?`
    ${cardMixCount(rows,"カウント別の球種割合")}
    ${cardMixRun(rows,"走者別の球種割合")}
    ${cardMixRunCount(rows,"走者 × カウント別の球種割合")}`:cardMixNone(rows.length);
  const tables=`
    <div class="card tc"><h3>球種別</h3>${table(colsP,rowsFromGroups(byType).sort((x,y)=>y.a.n-x.a.n),{total:a})}</div>
    ${ctlCard}
    <div class="card tc"><h3>対左右打者・まとめ区分</h3>${table(colsP,rowsFromGroups(byHand).concat(rowsFromGroups(byRun,RUNS)).concat(rowsFromGroups(byCnt,CNTS)),{})}</div>
    <div class="card tc"><h3>走者状況別 <span class="sub">全8パターン</span></h3>${table(colsP,rowsAll(byRun8,RUNS8),{total:a})}</div>
    <div class="card tc"><h3>カウント別 <span class="sub">全12カウント（B-S、投球前）</span></h3>${table(colsP,rowsAll(byCnt12,CNT12),{total:a})}</div>
    <div class="card tc"><h3>イニング別</h3>${table(colsP,rowsFromGroups(byInn,innOrder),{})}</div>
    <div class="card tc" style="grid-column:1/-1"><h3>試合別</h3>${table(colsP,rowsFromGroups(byGame).sort((x,y)=>x.label.localeCompare(y.label)),{})}</div>
    ${batTeamCards}`;
  $("#body").innerHTML=`<div class="grid g3">${zoneCard}${gapCard}${sprayCard}</div><div class="grid g2">${mixCards}<div class="card" style="grid-column:1/-1">${staminaCard.replace('<div class="card">','').replace(/<\/div>$/,'')}</div>${tables}</div>`;
  $("#hm-pit").addEventListener("change",e=>{ heatMetricPit=e.target.value; render(); });
  $("#gap-sel").addEventListener("change",e=>{ gapTarget=e.target.value; render(); });
  $("#gap-svg").addEventListener("click",e=>{ const t=e.target.closest("[data-tz]"); if(!t) return; gapTarget=gapTarget===t.dataset.tz?"":t.dataset.tz; render(); });
  $("#sp-foul").addEventListener("change",e=>{ showFoul=e.target.checked; render(); });
}

/* ================= イベント ================= */
ROOT.addEventListener("change",e=>{ if(e.target&&e.target.id==="mix-blank"){ mixBlank=e.target.checked; render(); } });
$$(".tab").forEach(b=>b.addEventListener("click",()=>{ MODE=b.dataset.mode; $$(".tab").forEach(x=>x.classList.toggle("on",x===b)); F.sel=""; buildPlayerOptions(); buildFilterOptions(); if(SRC==="api") loadSel(); else render(); }));
$("#f-sel").addEventListener("change",e=>{ F.sel=e.target.value; if(SRC==="api") loadSel(); else render(); });
$("#f-team").addEventListener("change",e=>{ F.team=e.target.value; F.sel=""; buildPlayerOptions(); if(SRC==="api") loadSel(); else render(); });
[["#f-from","from"],["#f-to","to"],["#f-tour","tour"],["#f-gkind","gkind"],["#f-type","type"],["#f-band","band"],["#f-run","run"],["#f-cnt","cnt"],["#f-hand","hand"],["#f-tb","tb"]]
  .forEach(([id,k])=>$(id).addEventListener("change",e=>{ F[k]=e.target.value; render(); }));
$("#f-reset").addEventListener("click",()=>{ Object.assign(F,{from:"",to:"",tour:"",gkind:"",opp:[],type:"",band:"",run:"",cnt:"",hand:"",tb:""}); buildFilterOptions(); render(); });
$("#f-opp-btn").addEventListener("click",()=>{ const p=$("#f-opp-pop"); p.hidden=!p.hidden; });
$("#f-opp-ok").addEventListener("click",()=>{ $("#f-opp-pop").hidden=true; });
$("#f-opp-clear").addEventListener("click",()=>{ F.opp=[]; $$("#f-opp-list input").forEach(i=>i.checked=false); fillOpp(Array.from($$("#f-opp-list input")).map(i=>i.value)); render(); });
$("#f-opp-list").addEventListener("change",()=>{ F.opp=Array.from($$("#f-opp-list input:checked")).map(i=>i.value); const all=Array.from($$("#f-opp-list input")).map(i=>i.value); fillOpp(all); render(); });
ROOT.addEventListener("click",e=>{ if(!e.target.closest("#f-opp-wrap")) $("#f-opp-pop").hidden=true; });
/* PDFで保存：ブラウザの印刷機能でPDFにする（画面と同じ図表がそのまま出る） */
$("#c-pdf").addEventListener("click",()=>{
  const isIOS=/iPad|iPhone/.test(navigator.userAgent)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
  if(isIOS) toast("印刷画面で「プリンタ」を選ばずに、プレビューを2本指で広げる → 共有 → ファイルに保存 でPDFになります");
  else toast("送信先で「PDFに保存」を選んでください");
  setTimeout(()=>{ printOn(); setTimeout(()=>{ window.print();
    // afterprint が来ないブラウザ向けの保険：画面に触れたら通常表示に戻す
    ["pointerdown","keydown","focus"].forEach(ev=>window.addEventListener(ev,printOff,{once:true}));
  },60); },400);
});
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>render());

function init(){ buildPlayerOptions(); buildFilterOptions(); render(); }
(function boot(){
  showTeamName(); renderUser();
  if(conn.url&&conn.token){ bootApi(); return; }
  if(conn.url){ showLogin();
    if(navigator.onLine) api("ping").then(j=>{ if(j&&j.ok){ conn.year=j.year||""; saveConn(); const y=$("#lg-year"); if(y) y.textContent=conn.year?conn.year+"年度の記録":""; } }).catch(()=>{});
    return; }
  showConn();
})();
})();

  // タブが表示に戻ったとき、幅や高さを測り直させる
  ROOT.addEventListener('hsp:show', () => window.dispatchEvent(new Event('resize')));
}
