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
    Igra: [
      ['Igra', '/igra.html'],
      ['Hrvatski kviz', '/quiz.html'],
      ['Brani svoj grad', '/brani-svoj-grad.html']
    ]
  };

  if (nav) {
    // Gradovi više nije zasebna stavka glavne navigacije.
    // Ostaje dostupno kroz podizbornik Domovina.
    nav.querySelectorAll(':scope > a').forEach(link => {
      if (link.textContent.trim() === 'Gradovi' || link.getAttribute('href') === '/gradovi.html') {
        link.remove();
      }
    });

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

  /*
   * Domovina photography layer
   * All selected images come from Wikimedia Commons and are linked back to
   * their source page. Licenses are shown in the visible credit line.
   */
  const photoSets = {
    '/domovina.html': [
      {file:'DUBROVNIK.jpg',title:'Hrvatska iz zraka',note:'Dubrovnik i jadranski prostor',source:'https://commons.wikimedia.org/wiki/File:DUBROVNIK.jpg'},
      {file:'Plitvice_Lakes_National_Park_(Unsplash).jpg',title:'Prirodna raznolikost',note:'Plitvička jezera',source:'https://commons.wikimedia.org/wiki/File:Plitvice_Lakes_National_Park_(Unsplash).jpg'}
    ],
    '/hrvatska.html': [
      {file:'Plitvice_Lakes_National_Park_(Unsplash).jpg',title:'Hrvatska – prostor različitosti',note:'Panonski, gorski i jadranski prostor u jednoj zemlji',source:'https://commons.wikimedia.org/wiki/File:Plitvice_Lakes_National_Park_(Unsplash).jpg'},
      {file:'Zagreb.jpg',title:'Zagreb',note:'Glavni grad Republike Hrvatske',source:'https://commons.wikimedia.org/wiki/File:Zagreb.jpg'}
    ],
    '/krajevi-i-geografija.html': [
      {file:'Relief_map_of_Croatia.png',title:'Reljef Hrvatske',note:'Zemljopisna raznolikost prostora',source:'https://commons.wikimedia.org/wiki/File:Relief_map_of_Croatia.png'},
      {file:'Velebit_s_Paga.jpg',title:'Gorska i jadranska Hrvatska',note:'Velebit i Jadran',source:'https://commons.wikimedia.org/wiki/File:Velebit_s_Paga.jpg'}
    ],
    '/priroda.html': [
      {file:'Plitvice_Lakes_National_Park_(Unsplash).jpg',title:'Plitvička jezera',note:'Voda, šume i krški krajolik',source:'https://commons.wikimedia.org/wiki/File:Plitvice_Lakes_National_Park_(Unsplash).jpg'},
      {file:'Velebit.jpg',title:'Velebit',note:'Gorska priroda i zaštićeni prostor',source:'https://commons.wikimedia.org/wiki/File:Velebit.jpg'}
    ],
    '/zagorje-i-prigorje.html': [
      {file:'TrakoscanInALake.jpg',title:'Trakošćan',note:'Dvorac i krajolik Hrvatskog zagorja',source:'https://commons.wikimedia.org/wiki/File:TrakoscanInALake.jpg'},
      {file:'Trakoscan,_Croatia.jpg',title:'Zagorski krajolik',note:'Jezero, dvorac i brežuljci',source:'https://commons.wikimedia.org/wiki/File:Trakoscan,_Croatia.jpg'}
    ],
    '/medimurje.html': [
      {file:'Rijeka_Trnava_(Međimurje,_Croatia).jpg',title:'Međimurske vode',note:'Rijeka Trnava i krajolik Međimurja',source:'https://commons.wikimedia.org/wiki/File:Rijeka_Trnava_(Međimurje,_Croatia).jpg'},
      {file:'Banfi_(Međimurje)_-_oznaka_naselja.jpg',title:'Međimurje',note:'Lokalni prostor i naselja',source:'https://commons.wikimedia.org/wiki/File:Banfi_(Međimurje)_-_oznaka_naselja.jpg'}
    ],
    '/podravina-i-bilogora.html': [
      {file:'Jankovic_Palace_in_Suhopolje_(3).jpg',title:'Podravina',note:'Baština Virovitičko-podravinskog prostora',source:'https://commons.wikimedia.org/wiki/File:Jankovic_Palace_in_Suhopolje_(3).jpg'},
      {file:'Bilogora-karta.png',title:'Bilogora',note:'Reljef i položaj mikroregije',source:'https://commons.wikimedia.org/wiki/File:Bilogora-karta.png'}
    ],
    '/lika-i-gorski-kotar.html': [
      {file:'Velebit_(01)_-_Zavižan.jpg',title:'Velebit',note:'Planinski prostor Like i hrvatskog krša',source:'https://commons.wikimedia.org/wiki/File:Velebit_(01)_-_Zavižan.jpg'},
      {file:'Plitvice_Lakes_National_Park_(Unsplash).jpg',title:'Plitvička jezera',note:'Prirodna baština Like',source:'https://commons.wikimedia.org/wiki/File:Plitvice_Lakes_National_Park_(Unsplash).jpg'}
    ],
    '/slavonija-i-baranja.html': [
      {file:'Kopački_rit_001.jpg',title:'Kopački rit',note:'Rijeke, močvare i priroda Baranje',source:'https://commons.wikimedia.org/wiki/File:Kopački_rit_001.jpg'},
      {file:'Jankovic_Palace_in_Suhopolje_(2).jpg',title:'Kontinentalna baština',note:'Povijesna arhitektura istočne Hrvatske',source:'https://commons.wikimedia.org/wiki/File:Jankovic_Palace_in_Suhopolje_(2).jpg'}
    ],
    '/istra.html': [
      {file:'Pula_Arena,_Istria,_Croatia.JPG',title:'Pula Arena',note:'Rimska baština Istre',source:'https://commons.wikimedia.org/wiki/File:Pula_Arena,_Istria,_Croatia.JPG'},
      {file:'Rovinj_(35366293692).jpg',title:'Rovinj',note:'Istarski grad i jadranska obala',source:'https://commons.wikimedia.org/wiki/File:Rovinj_(35366293692).jpg'}
    ],
    '/kvarner-i-primorje.html': [
      {file:'Kvarner,_Croatia.JPG',title:'Kvarnerski zaljev',note:'Primorje, otoci i more',source:'https://commons.wikimedia.org/wiki/File:Kvarner,_Croatia.JPG'},
      {file:'Krk,_Croatia.jpg',title:'Krk',note:'Jedan od otoka Kvarnera',source:'https://commons.wikimedia.org/wiki/File:Krk,_Croatia.jpg'}
    ],
    '/dalmacija.html': [
      {file:'DUBROVNIK.jpg',title:'Dubrovnik',note:'Dalmatinska obala i povijesni gradovi',source:'https://commons.wikimedia.org/wiki/File:DUBROVNIK.jpg'},
      {file:'Jezero_Kuti,_Dalmacija,_neretvanska_dolina,_hrvatsks.jpg',title:'Neretvanska dolina',note:'Voda, polja i južna Dalmacija',source:'https://commons.wikimedia.org/wiki/File:Jezero_Kuti,_Dalmacija,_neretvanska_dolina,_hrvatsks.jpg'}
    ],
    '/posavina-i-pokuplje.html': [
      {file:'Sisak,_pevnost_a_řeka_Kupa.jpg',title:'Sisak i Kupa',note:'Posavina i Pokuplje',source:'https://commons.wikimedia.org/wiki/File:Sisak,_pevnost_a_řeka_Kupa.jpg'},
      {file:'Kupa,_Stari_grad_Sisak.jpg',title:'Stari grad Sisak',note:'Povijest grada uz Kupu',source:'https://commons.wikimedia.org/wiki/File:Kupa,_Stari_grad_Sisak.jpg'}
    ],
    '/gradovi.html': [
      {file:'Zagreb_001.jpg',title:'Gradovi Hrvatske',note:'Zagreb kao jedno od hrvatskih urbanih središta',source:'https://commons.wikimedia.org/wiki/File:Zagreb_001.jpg'},
      {file:'Relief_map_of_Croatia.png',title:'Gradovi kroz prostor',note:'Položaj hrvatskih gradova u raznolikom reljefu',source:'https://commons.wikimedia.org/wiki/File:Relief_map_of_Croatia.png'}
    ],
    '/dijaspora.html': [
      {file:'Zagreb.jpg',title:'Veza s domovinom',note:'Gradovi i mjesta koja povezuju hrvatske zajednice',source:'https://commons.wikimedia.org/wiki/File:Zagreb.jpg'},
      {file:'Relief_map_of_Croatia.png',title:'Hrvatska kao ishodište',note:'Prostor domovine i njezine regije',source:'https://commons.wikimedia.org/wiki/File:Relief_map_of_Croatia.png'}
    ],
    '/hrvatska-stvara.html': [
      {file:'Zagreb,_Croatia_Jan_04,_2026_03-49-14_PM.jpeg',title:'Hrvatska stvara',note:'Suvremeni grad, ljudi i stvaralaštvo',source:'https://commons.wikimedia.org/wiki/File:Zagreb,_Croatia_Jan_04,_2026_03-49-14_PM.jpeg'},
      {file:'Pula_Arena,_Croatia.jpg',title:'Znanje i baština',note:'Hrvatska koja stvara iz naslijeđa',source:'https://commons.wikimedia.org/wiki/File:Pula_Arena,_Croatia.jpg'}
    ]
  };

  const photos = photoSets[path];
  if (photos && photos.length) {
    const hero = document.querySelector('.hero');
    if (hero) {
      const heroPhoto = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(photos[0].file)}`;
      hero.style.backgroundImage = `linear-gradient(120deg,rgba(11,18,32,.96) 0%,rgba(11,18,32,.78) 52%,rgba(124,16,34,.72) 100%),url(\"${heroPhoto}\")`;
    }

    const strip = document.createElement('section');
    strip.className = 'domovina-photo-strip';
    const grid = document.createElement('div');
    grid.className = 'wrap domovina-photo-grid';

    photos.forEach((photo, index) => {
      const figure = document.createElement('figure');
      figure.className = 'domovina-photo';
      const img = document.createElement('img');
      img.loading = index === 0 ? 'eager' : 'lazy';
      img.decoding = 'async';
      img.alt = `${photo.title} — ${photo.note}`;
      img.src = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(photo.file)}`;
      const caption = document.createElement('figcaption');
      caption.innerHTML = `<span class="domovina-photo-title">${photo.title}</span>${photo.note} · <a href="${photo.source}" target="_blank" rel="noopener">izvor i licenca</a>`;
      figure.appendChild(img);
      figure.appendChild(caption);
      grid.appendChild(figure);
    });

    strip.appendChild(grid);
    const newsStrip = document.querySelector('.news-strip');
    const heroSection = document.querySelector('.hero');
    if (newsStrip) newsStrip.insertAdjacentElement('afterend', strip);
    else if (heroSection) heroSection.insertAdjacentElement('afterend', strip);
  }
});