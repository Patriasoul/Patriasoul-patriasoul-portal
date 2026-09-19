document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu');
  const nav = document.querySelector('.main-nav');
  const menus = {
    'Priče': [['Članci i priče','/clanci-i-price.html'],['Istinite priče','/istinite-price.html'],['Reportaže','/reportaze.html'],['Intervjui','/intervjui.html'],['Ljudi','/ljudi.html'],['Vaše priče','/vase-price.html']],
    'Domovina': [['Hrvatska','/hrvatska.html'],['Gradovi','/gradovi.html'],['Krajevi i geografija','/krajevi-i-geografija.html'],['Priroda','/priroda.html'],['Dijaspora','/dijaspora.html']],
    'Povijest': [['Povijest','/povijest.html'],['Baština i kultura','/bastina.html'],['Glagoljica','/glagoljica.html'],['Tradicija i običaji','/bastina.html#tradicija'],['Mitovi i legende','/mitovi-i-legende.html']],
    'Branitelji': [['Branitelji','/branitelji.html'],['Domovinski rat','/domovinski-rat.html'],['Vukovar','/vukovar.html'],['Postrojbe','/postrojbe.html'],['Brigade','/brigade.html'],['Operacije i bojišta','/operacije.html'],['Spomenici i sjećanje','/spomenici.html']]
  };
  const path = window.location.pathname.replace(/\/$/,'') || '/index.html';
  const activeGroups = {
    'Priče':['/clanci-i-price.html','/istinite-price.html','/reportaze.html','/intervjui.html','/ljudi.html','/vase-price.html'],
    'Domovina':['/domovina.html','/hrvatska.html','/gradovi.html','/krajevi-i-geografija.html','/priroda.html','/dijaspora.html'],
    'Povijest':['/povijest.html','/bastina.html','/glagoljica.html','/mitovi-i-legende.html'],
    'Branitelji':['/branitelji.html','/domovinski-rat.html','/vukovar.html','/postrojbe.html','/brigade.html','/operacije.html','/spomenici.html']
  };
  const makeDropdown = (label, href, items) => {
    const w=document.createElement('div'); w.className='nav-dropdown';
    const a=document.createElement('a'); a.href=href; a.textContent=label;
    if(activeGroups[label] && activeGroups[label].includes(path)) a.classList.add('active');
    w.appendChild(a);
    const b=document.createElement('button'); b.className='nav-dropdown-toggle'; b.type='button'; b.setAttribute('aria-label','Otvori '+label); b.setAttribute('aria-expanded','false'); b.textContent='⌄'; w.appendChild(b);
    const s=document.createElement('div'); s.className='nav-submenu';
    items.forEach(([t,h])=>{const x=document.createElement('a');x.href=h;x.textContent=t;s.appendChild(x);});
    w.appendChild(s);
    b.addEventListener('click',e=>{e.preventDefault();const open=w.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});
    return w;
  };
  if(nav){
    nav.innerHTML='';
    const add=(label,href)=>{const a=document.createElement('a');a.href=href;a.textContent=label;if(path===href)a.classList.add('active');nav.appendChild(a);};
    add('Početna','/index.html');
    nav.appendChild(makeDropdown('Priče','/clanci-i-price.html',menus['Priče']));
    nav.appendChild(makeDropdown('Domovina','/domovina.html',menus['Domovina']));
    nav.appendChild(makeDropdown('Povijest','/povijest.html',menus['Povijest']));
    nav.appendChild(makeDropdown('Branitelji','/branitelji.html',menus['Branitelji']));
    add('Čuvari nasljeđa','/cuvari-nasljeda.html');
    add('Vjera','/vjera.html');
    add('Hrvatska stvara','/hrvatska-stvara.html');
    add('Hrvatska danas','/hrvatska-danas.html');
    add('O PatriaSoul','/o-nama.html');
    add('Pretraži','/pretrazi.html');
  }
  if(button && nav){
    button.addEventListener('click',()=>{
      const open=nav.style.display==='flex';
      nav.style.display=open?'none':'flex'; nav.style.flexDirection='column'; nav.style.alignItems='stretch'; nav.style.position='absolute'; nav.style.top='76px'; nav.style.left='0'; nav.style.right='0'; nav.style.padding='18px 16px'; nav.style.background='#fff'; nav.style.borderBottom='1px solid #ddd'; nav.style.boxShadow='0 15px 30px rgba(0,0,0,.08)';
    });
  }
  const actions=document.querySelector('.header-actions');
  if(actions){
    actions.innerHTML='<a href="/newsletter.html">Prati PatriaSoul</a><a class="red" href="/vase-price.html">Pošalji priču</a>';
  }

  const footer=document.querySelector('footer');
  if(footer){
    footer.innerHTML='<div class="wrap footer-grid"><div><a class="brand" href="/index.html"><span class="brand-patria">PATRIA</span><span class="brand-soul">SOUL</span></a><p>Čuvamo priče. Provjeravamo činjenice. Prenosimo nasljeđe.</p><a class="footer-standard" href="/urednicki-standard.html">Glavni urednički standard →</a></div><div><b>Priče</b><a href="/clanci-i-price.html">Članci i priče</a><a href="/istinite-price.html">Istinite priče</a><a href="/reportaze.html">Reportaže</a><a href="/intervjui.html">Intervjui</a></div><div><b>Domovina</b><a href="/hrvatska.html">Hrvatska</a><a href="/gradovi.html">Gradovi</a><a href="/krajevi-i-geografija.html">Krajevi i geografija</a><a href="/dijaspora.html">Dijaspora</a></div><div><b>Sjećanje i povijest</b><a href="/povijest.html">Povijest</a><a href="/branitelji.html">Branitelji i Domovinski rat</a><a href="/cuvari-nasljeda.html">Čuvari nasljeđa</a><a href="/spomenici.html">Mjesta sjećanja</a></div><div><b>Kultura i ljudi</b><a href="/bastina.html">Baština i kultura</a><a href="/vjera.html">Vjera</a><a href="/hrvatska-stvara.html">Hrvatska stvara</a><a href="/ljudi.html">Ljudi</a></div><div><b>PatriaSoul</b><a href="/o-nama.html">O PatriaSoul</a><a href="/zajednica.html">Zajednica</a><a href="/newsletter.html">Newsletter</a><a href="/kontakt.html">Kontakt</a></div></div><div class="wrap footer-bottom"><span>PatriaSoul · Čuvari nasljeđa</span><span>Čuvamo priče. Provjeravamo činjenice. Prenosimo nasljeđe.</span></div>';
  }

  const labels={'/clanci-i-price.html':'Članci i priče','/istinite-price.html':'Istinite priče','/reportaze.html':'Reportaže','/intervjui.html':'Intervjui','/ljudi.html':'Ljudi','/vase-price.html':'Vaše priče','/cuvari-nasljeda.html':'Čuvari nasljeđa','/domovina.html':'Domovina','/hrvatska.html':'Hrvatska','/gradovi.html':'Gradovi','/krajevi-i-geografija.html':'Krajevi i geografija','/priroda.html':'Priroda','/dijaspora.html':'Dijaspora','/povijest.html':'Povijest','/bastina.html':'Baština i kultura','/glagoljica.html':'Glagoljica','/mitovi-i-legende.html':'Mitovi i legende','/branitelji.html':'Branitelji','/domovinski-rat.html':'Domovinski rat','/vukovar.html':'Vukovar','/postrojbe.html':'Postrojbe','/brigade.html':'Brigade','/operacije.html':'Operacije','/spomenici.html':'Spomenici i sjećanje','/vjera.html':'Vjera','/hrvatska-stvara.html':'Hrvatska stvara','/hrvatska-danas.html':'Hrvatska danas','/galerija.html':'Galerija','/zajednica.html':'Zajednica','/pretrazi.html':'Pretraži','/newsletter.html':'Newsletter','/o-nama.html':'O PatriaSoul','/urednicki-standard.html':'Urednički standard'};
  if(labels[path]){
    const breadcrumb=document.createElement('nav'); breadcrumb.className='breadcrumb wrap'; breadcrumb.setAttribute('aria-label','Putanja stranice');
    breadcrumb.innerHTML='<a href="/index.html">Početna</a> <span>›</span> <strong>'+labels[path]+'</strong>';
    const header=document.querySelector('.site-header'); if(header && !document.querySelector('.breadcrumb')) header.insertAdjacentElement('afterend',breadcrumb);
  }
});