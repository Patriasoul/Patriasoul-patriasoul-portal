document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu');
  const nav = document.querySelector('.main-nav');

  if (button && nav) {
    button.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '62px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '18px 16px';
      nav.style.background = '#fff';
      nav.style.borderBottom = '1px solid #ddd';
    });
  }

  const menus = {
    Domovina: [
      ['Hrvatska', '/domovina.html'],
      ['Gradovi', '/gradovi.html'],
      ['Krajevi i geografija', '/krajevi-i-geografija.html'],
      ['Priroda', '/priroda.html'],
      ['Hrvatska stvara', '/hrvatska-stvara.html'],
      ['Dijaspora', '/dijaspora.html'],
      ['Sve regije', '/krajevi-i-geografija.html'],
      ['Istra', '/istra.html'],
      ['Kvarner i Primorje', '/kvarner-i-primorje.html'],
      ['Dalmacija', '/dalmacija.html'],
      ['Slavonija i Baranja', '/slavonija-i-baranja.html'],
      ['Lika i Gorski kotar', '/lika-i-gorski-kotar.html']
    ],
    Branitelji: [
      ['Branitelji', '/branitelji.html'],
      ['Domovinski rat', '/branitelji.html#domovinski-rat'],
      ['Vukovar', '/branitelji.html#vukovar'],
      ['Postrojbe i brigade', '/branitelji.html#postrojbe'],
      ['Operacije i bojišta', '/branitelji.html#operacije'],
      ['HOS', '/branitelji.html#hos'],
      ['Spomenici i sjećanje', '/branitelji.html#spomenici']
    ],
    Povijest: [
      ['Povijest', '/povijest.html'],
      ['Kronologija', '/povijest.html#kronologija'],
      ['Ključni događaji', '/povijest.html#dogadjaji'],
      ['Važne osobe', '/povijest.html#osobe'],
      ['Izvori i dokumenti', '/povijest.html#izvori']
    ],
    Baština: [
      ['Baština', '/bastina.html'],
      ['Sakralna baština', '/bastina.html#sakralna'],
      ['Glagoljica', '/bastina.html#glagoljica'],
      ['Tradicija i običaji', '/bastina.html#tradicija'],
      ['Gastronomija', '/bastina.html#gastronomija'],
      ['Glazba i govori', '/bastina.html#glazba']
    ],
    Vjera: [
      ['Vjera', '/vjera.html'],
      ['Evanđelje danas', '/vjera.html#evandelje'],
      ['Liturgijski kalendar', '/vjera.html#kalendar'],
      ['Molitve i krunica', '/vjera.html#molitve'],
      ['Svetci i blaženici', '/vjera.html#svetci'],
      ['Svetišta i hodočašća', '/vjera.html#svetista'],
      ['Obitelj i vjera', '/vjera.html#obitelj']
    ],
    Gradovi: [
      ['Gradovi Hrvatske', '/gradovi.html'],
      ['Istraži gradove', '/gradovi.html#gradovi'],
      ['Po regijama', '/krajevi-i-geografija.html']
    ],
    Igra: [
      ['Igra', '/igra.html'],
      ['Hrvatski kviz', '/quiz.html'],
      ['Brani svoj grad', '/brani-svoj-grad.html']
    ]
  };

  if (nav) {
    nav.querySelectorAll(':scope > a').forEach(link => {
      const label = link.textContent.trim();
      const items = menus[label];
      if (!items || link.parentElement.classList.contains('nav-dropdown')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'nav-dropdown';
      wrapper.dataset.menu = label;
      link.parentNode.insertBefore(wrapper, link);
      wrapper.appendChild(link);

      const toggle = document.createElement('button');
      toggle.className = 'nav-dropdown-toggle';
      toggle.type = 'button';
      toggle.setAttribute('aria-label', `Otvori ${label}`);
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '⌄';
      wrapper.appendChild(toggle);

      const submenu = document.createElement('div');
      submenu.className = 'nav-submenu';
      items.forEach(([text, href]) => {
        const item = document.createElement('a');
        item.href = href;
        item.textContent = text;
        submenu.appendChild(item);
      });
      wrapper.appendChild(submenu);

      toggle.addEventListener('click', event => {
        event.preventDefault();
        const open = wrapper.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
    });
  }

  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  const labels = {
    '/domovina.html': 'Domovina',
    '/branitelji.html': 'Branitelji',
    '/povijest.html': 'Povijest',
    '/bastina.html': 'Baština',
    '/vjera.html': 'Vjera',
    '/gradovi.html': 'Gradovi',
    '/vijesti.html': 'Vijesti',
    '/igra.html': 'Igra',
    '/krajevi-i-geografija.html': 'Krajevi i geografija',
    '/priroda.html': 'Priroda',
    '/dijaspora.html': 'Dijaspora',
    '/hrvatska-stvara.html': 'Hrvatska stvara',
    '/istra.html': 'Istra',
    '/kvarner-i-primorje.html': 'Kvarner i Primorje',
    '/dalmacija.html': 'Dalmacija',
    '/slavonija-i-baranja.html': 'Slavonija i Baranja',
    '/lika-i-gorski-kotar.html': 'Lika i Gorski kotar',
    '/zagorje-i-prigorje.html': 'Zagorje i Prigorje',
    '/medimurje.html': 'Međimurje',
    '/podravina-i-bilogora.html': 'Podravina i Bilogora',
    '/posavina-i-pokuplje.html': 'Posavina i Pokuplje'
  };

  const regionPaths = ['/istra.html','/kvarner-i-primorje.html','/dalmacija.html','/slavonija-i-baranja.html','/lika-i-gorski-kotar.html','/zagorje-i-prigorje.html','/medimurje.html','/podravina-i-bilogora.html','/posavina-i-pokuplje.html'];
  if (labels[path]) {
    const breadcrumb = document.createElement('nav');
    breadcrumb.className = 'breadcrumb wrap';
    breadcrumb.setAttribute('aria-label', 'Putanja stranice');
    const home = '<a href="/index.html">Početna</a>';
    let html = home;
    if (regionPaths.includes(path)) html += ' <span>›</span> <a href="/domovina.html">Domovina</a> <span>›</span> <a href="/krajevi-i-geografija.html">Regije</a>';
    else if (path !== '/domovina.html' && ['/krajevi-i-geografija.html','/priroda.html','/dijaspora.html','/hrvatska-stvara.html'].includes(path)) html += ' <span>›</span> <a href="/domovina.html">Domovina</a>';
    html += ` <span>›</span> <strong>${labels[path]}</strong>`;
    breadcrumb.innerHTML = html;
    const header = document.querySelector('.site-header');
    if (header) header.insertAdjacentElement('afterend', breadcrumb);
  }
});