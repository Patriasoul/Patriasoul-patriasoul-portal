// PatriaSoul Vijesti — frontend feed engine
// Ne izmišlja sadržaj: prikazuje samo zapise iz news-feed.json.
(function () {
  const DATA = '/news-feed.json';
  const CATS = {
    domovina: '🇭🇷 Domovina', branitelji: '🛡️ Branitelji', povijest: '📜 Povijest',
    vjera: '⛪ Vjera', bastina: '🏛️ Baština', gradovi: '🏙️ Gradovi',
    kultura: '🎭 Kultura', svijet: '🌍 Hrvatska i svijet', sport: '⚽ Sport'
  };
  const state = { items: [], category: 'sve', query: '', sort: 'date' };
  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v ?? '').replace(/[&<>\"]/g, (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '\"':'&quot;' }[m]));
  function formatDate(v) {
    const d = new Date(v); if (Number.isNaN(d.getTime())) return '';
    return new Intl.DateTimeFormat('hr-HR', { day:'2-digit', month:'2-digit', year:'numeric' }).format(d);
  }
  function timeAgo(v) {
    const d = new Date(v), h = Math.max(0, Math.floor((Date.now() - d.getTime()) / 3600000));
    if (Number.isNaN(d.getTime())) return '';
    if (h < 1) return 'upravo'; if (h < 24) return `prije ${h} h`;
    const days = Math.floor(h / 24); return `prije ${days} ${days === 1 ? 'dan' : 'dana'}`;
  }
  function validItem(x) { return x && x.title && x.summary && x.source && x.link && x.date && x.category; }
  function filtered() {
    const q = state.query.trim().toLocaleLowerCase('hr-HR');
    return state.items.filter((x) => {
      const text = `${x.title} ${x.summary} ${x.source} ${(x.tags||[]).join(' ')} ${(x.locations||[]).join(' ')}`.toLocaleLowerCase('hr-HR');
      return (state.category === 'sve' || x.category === state.category) && (!q || text.includes(q));
    }).sort((a,b) => state.sort === 'importance'
      ? (Number(b.importance)||0) - (Number(a.importance)||0) || new Date(b.date)-new Date(a.date)
      : new Date(b.date)-new Date(a.date));
  }
  function sourceLine(x) {
    return `<div class="news-source">Izvor: <strong>${esc(x.source)}</strong>${x.author ? ` · ${esc(x.author)}` : ''}</div>`;
  }
  function card(x) {
    const locations = (x.locations || []).slice(0, 4), tags = (x.tags || []).slice(0, 4);
    const important = Number(x.importance) >= 70;
    return `<article class="news-card"><div class="news-meta"><span>${esc(CATS[x.category] || '📰 Vijesti')}</span><time datetime="${esc(x.date)}">${formatDate(x.date)} · ${esc(timeAgo(x.date))}</time></div>${important ? '<span class="news-badge">VAŽNO</span>' : ''}<h3>${esc(x.title)}</h3><p>${esc(x.summary)}</p>${locations.length ? `<div class="news-pills">${locations.map(v => `<span>📍 ${esc(v)}</span>`).join('')}</div>` : ''}${tags.length ? `<div class="news-tags">${tags.map(v => `<span>#${esc(v)}</span>`).join('')}</div>` : ''}${sourceLine(x)}<a class="news-link" href="${esc(x.link)}" target="_blank" rel="noopener noreferrer">Pročitaj izvornu objavu →</a></article>`;
  }
  function featured(x) {
    if (!x) return `<div class="news-empty"><strong>Nema objavljenih vijesti.</strong><p>Feed je spreman, ali ne prikazuje izmišljene ili nepotvrđene objave. Kada urednički izvor bude potvrđen, vijest će se pojaviti ovdje.</p></div>`;
    return `<article class="news-featured-card"><div class="news-featured-body"><div class="news-meta"><span>${esc(CATS[x.category] || '📰 Vijesti')}</span><time datetime="${esc(x.date)}">${formatDate(x.date)} · ${esc(timeAgo(x.date))}</time></div><span class="eyebrow">GLAVNA VIJEST</span><h2>${esc(x.title)}</h2><p>${esc(x.summary)}</p>${sourceLine(x)}<a class="btn btn-red" href="${esc(x.link)}" target="_blank" rel="noopener noreferrer">Opširnije →</a></div></article>`;
  }
  function render() {
    const list = filtered();
    if ($('featured')) $('featured').innerHTML = featured(list[0]);
    if ($('count')) $('count').textContent = `${list.length} ${list.length === 1 ? 'vijest' : 'vijesti'}`;
    if ($('news-list')) $('news-list').innerHTML = list.length ? list.map(card).join('') : '<div class="news-empty"><strong>Nema vijesti za odabrani filter.</strong><p>Pokušaj s drugom kategorijom ili pretragom.</p></div>';
    document.querySelectorAll('[data-cat]').forEach(b => b.classList.toggle('active', b.dataset.cat === state.category));
  }
  async function init() {
    try {
      const r = await fetch(`${DATA}?v=${Date.now()}`, { cache:'no-store' });
      if (!r.ok) throw new Error('feed');
      const data = await r.json();
      state.items = Array.isArray(data.items) ? data.items.filter(validItem) : [];
      if ($('updated')) $('updated').textContent = data.updatedAt ? `Feed ažuriran ${formatDate(data.updatedAt)}` : '';
      render();
    } catch (e) {
      if ($('news-list')) $('news-list').innerHTML = '<div class="news-empty"><strong>Vijesti se trenutno ne mogu učitati.</strong><p>Provjeri dostupnost news-feed.json.</p></div>';
      if ($('featured')) $('featured').innerHTML = '';
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-cat]').forEach(b => b.addEventListener('click', () => { state.category = b.dataset.cat; render(); }));
    const search = $('search'); if (search) search.addEventListener('input', e => { state.query = e.target.value; render(); });
    const sort = $('sort'); if (sort) sort.addEventListener('change', e => { state.sort = e.target.value; render(); });
    init();
  });
})();
