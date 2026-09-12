document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';

  const articles = {
    '/domovina.html': {
      kicker: 'ČUVARI NASLJEĐA · DOMOVINA',
      title: 'Domovina nije samo prostor. Domovina je povjereno nasljeđe.',
      lead: 'Hrvatska se ne čuva samo riječima. Čuva se pamćenjem, vjerom, znanjem, odgovornošću prema obitelji i poštovanjem prema ljudima koji su za njezinu slobodu podnijeli najveću žrtvu.',
      text: 'Od kamenih gradova Jadrana do slavonskih ravnica, od hrvatskih otoka do šuma i planina, ista se priča prenosi iz naraštaja u naraštaj. U toj priči mjesto imaju naši gradovi, sela, crkve, groblja, običaji, jezik i obiteljska sjećanja. Domovina je i ono što smo naslijedili i ono što ćemo ostaviti iza sebe. Zato je čuvati Hrvatsku prije svega čin odgovornosti: upoznati je, poštovati njezinu povijest i graditi njezinu budućnost bez odricanja od vlastitog identiteta.',
      quote: 'Čuvaj ono što ti je povjereno. Pamti one koji su ti omogućili slobodu. Prenesi priču dalje.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/DUBROVNIK.jpg'
    },
    '/hrvatska.html': {
      kicker: 'ČUVARI NASLJEĐA · HRVATSKA',
      title: 'Mala zemlja, veliko nasljeđe',
      lead: 'Hrvatska je mala po prostoru, ali velika po slojevima povijesti, kulturi, vjeri i ljudima koji su joj dali svoj trag.',
      text: 'Od Panonije do Jadrana i od sjevernih brežuljaka do Velebita, hrvatski prostor povezuje različite krajolike u jednu domovinu. Iza svakog kraja stoje ljudi, obitelji i naraštaji koji su gradili, molili, stvarali i branili ono što su smatrali svojim. Zato se Hrvatska ne može razumjeti samo kroz kartu. Ona se upoznaje kroz gradove, sela, jezik, crkve, pjesme, rad i sjećanja. Tko upozna različitost hrvatskih krajeva, bolje razumije i snagu zajedničkog identiteta.',
      quote: 'Različiti krajevi. Jedna domovina. Jedno nasljeđe koje vrijedi čuvati.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zagreb.jpg'
    },
    '/krajevi-i-geografija.html': {
      kicker: 'ČUVARI NASLJEĐA · KRAJEVI HRVATSKE',
      title: 'Svaki kraj nosi svoj glas',
      lead: 'Hrvatski krajolici nisu samo zemljopisne cjeline. Oni su prostor života, rada, vjere, običaja i pamćenja.',
      text: 'Panonska ravnica, gorski svijet i jadranska obala oblikovali su način života hrvatskih ljudi. Rijeke su povezivale naselja, planine čuvale putove, a more otvaralo vrata prema svijetu. U svakom kraju razvijali su se posebni govori, jela, nošnje, pjesme i običaji, ali se ispod te raznolikosti prepoznaje zajednička hrvatska priča. Upoznavati krajeve znači upoznavati ljude koji su ih stoljećima čuvali i oblikovali.',
      quote: 'Kad poznaješ svoj kraj, znaš odakle dolaziš. Kad poznaješ sve hrvatske krajeve, razumiješ koliko je veliko tvoje nasljeđe.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Relief_map_of_Croatia.png'
    },
    '/priroda.html': {
      kicker: 'ČUVARI NASLJEĐA · PRIRODA',
      title: 'Čuvati zemlju znači čuvati budućnost',
      lead: 'Šume, rijeke, planine, otoci i more nisu samo prirodno bogatstvo. Oni su dio hrvatskog identiteta i odgovornost prema budućim naraštajima.',
      text: 'Od Plitvičkih jezera i Velebita do jadranskih otoka i slavonskih močvara, hrvatska priroda nosi iznimnu raznolikost. U toj ljepoti čovjek nije vlasnik nego čuvar. Vjera nas podsjeća da je stvoreni svijet dar, a odgovornost da se prema tom daru odnosimo s poštovanjem. Zato zaštita prirode nije suprotna domoljublju; ona je jedan od njegovih najkonkretnijih oblika. Ono što volimo, ne uništavamo. Ono što smo primili, čuvamo.',
      quote: 'Domovina koju volimo mora biti domovina koju znamo sačuvati.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plitvice_Lakes_National_Park_(Unsplash).jpg'
    },
    '/hrvatska-stvara.html': {
      kicker: 'ČUVARI NASLJEĐA · HRVATSKA STVARA',
      title: 'Domovina se voli i onime što svaki dan stvaramo',
      lead: 'Rad, znanje, obrt, znanost, poduzetništvo, umjetnost i sport jednako su dio priče o Hrvatskoj.',
      text: 'Domoljublje nije samo pogled prema prošlosti. Ono je i odluka da svojim radom doprinesemo zemlji koju smo naslijedili. Hrvatska je stvarana rukama obrtnika, znanjem učitelja i znanstvenika, trudom poljoprivrednika, hrabrošću poduzetnika, talentom umjetnika i upornošću sportaša. Svaki pošten posao koji podiže obitelj, zajednicu ili gospodarstvo mali je doprinos velikoj priči. Čuvati nasljeđe znači i stvarati novo nasljeđe za one koji dolaze.',
      quote: 'Ponos na ono što smo naslijedili neka bude poticaj da stvorimo nešto vrijedno za one poslije nas.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zagreb,_Croatia_Jan_04,_2026_03-49-14_PM.jpeg'
    },
    '/dijaspora.html': {
      kicker: 'ČUVARI NASLJEĐA · HRVATI IZVAN DOMOVINE',
      title: 'Kilometri ne brišu pripadnost',
      lead: 'Hrvati koji žive izvan domovine nose dio hrvatske priče sa sobom — kroz jezik, obitelj, vjeru, običaje i sjećanje.',
      text: 'Generacije su odlazile, ali veza s domovinom nije nestajala. U mnogim obiteljima hrvatska riječ, molitva, pjesma i obiteljska priča postali su most između mjesta rođenja predaka i zemlje u kojoj danas žive njihova djeca. Posebno je važno mladima omogućiti da upoznaju vlastite korijene bez zatvaranja prema svijetu. Identitet nije teret. On je temelj s kojega čovjek može slobodno upoznavati druge i ostati svoj.',
      quote: 'Domovina može biti daleko od kuće, ali ne mora biti daleko od srca.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Zagreb.jpg'
    },
    '/zagorje-i-prigorje.html': {
      kicker: 'ČUVARI NASLJEĐA · ZAGORJE I PRIGORJE',
      title: 'Pod brežuljcima gdje se priča prenosi naraštajima',
      lead: 'Zagorje i Prigorje čuvaju krajolik dvoraca, vinograda, crkava, starih puteva i obiteljskih običaja.',
      text: 'U ovom zelenom prostoru hrvatskog sjeverozapada susreću se povijest plemstva, život sela, hodočasnička tradicija i živa kultura. Trakošćan, Veliki Tabor i Marija Bistrica nisu samo točke na turističkoj karti; oni su mjesta kroz koja se može čitati hrvatska povijest. Uz njih žive govori, pjesme, hrana i običaji koji su opstali zato što ih je netko iz obitelji prenio dalje. Upravo je u tome snaga nasljeđa: ono živi kada ga čovjek svakodnevno nosi.',
      quote: 'Nasljeđe nije zaključano u dvorcu. Ono živi u ljudima koji ga pamte.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/TrakoscanInALake.jpg'
    },
    '/medimurje.html': {
      kicker: 'ČUVARI NASLJEĐA · MEĐIMURJE',
      title: 'Između Mure i Drave — kraj rada, pjesme i ustrajnosti',
      lead: 'Međimurje je prostor u kojem su priroda, rad, obitelj i kulturna baština stoljećima stvarali prepoznatljiv identitet.',
      text: 'Mura i Drava oblikovale su prostor, ali su ljudi oblikovali njegovu dušu. Čakovec, Zrinski, međimurska popevka, vinogradi, tradicijska hrana i snažna radna kultura dio su priče koja se ne može svesti na geografiju. Vjera i obiteljske tradicije dodatno su povezivale generacije. Čuvati Međimurje znači sačuvati i njegov govor, pjesmu, sjećanje i osjećaj da se dobro učinjeno djelo ostavlja kao trag drugima.',
      quote: 'Čovjek ostavlja trag ondje gdje svojim životom služi obitelji, kraju i zajednici.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rijeka_Trnava_(Međimurje,_Croatia).jpg'
    },
    '/podravina-i-bilogora.html': {
      kicker: 'ČUVARI NASLJEĐA · PODRAVINA I BILOGORA',
      title: 'Ravnica koja pamti ruke svojih ljudi',
      lead: 'Podravina i Bilogora nose snažnu priču o zemlji, radu, obitelji, umjetnosti i kontinentalnoj Hrvatskoj.',
      text: 'Uz Dravu i preko bilogorskih brežuljaka razvijao se prostor u kojem su poljoprivreda, obrt i zajedništvo bili temelj svakodnevice. Hlebine i podravska naiva pokazale su da i iz običnog seoskog života može nastati velika umjetnost. Dvorci, crkve, stari običaji i gastronomija podsjećaju da baština nije samo prošlost nego živi sustav vrijednosti. Kada znamo cijeniti rad svojih predaka, lakše ćemo cijeniti i rad ljudi koji danas stvaraju.',
      quote: 'Vrijednost zemlje vidi se i po tome koliko poštuje čovjeka koji je obrađuje.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jankovic_Palace_in_Suhopolje_(3).jpg'
    },
    '/lika-i-gorski-kotar.html': {
      kicker: 'ČUVARI NASLJEĐA · LIKA I GORSKI KOTAR',
      title: 'Kamen, šuma i tišina koja govori o ustrajnosti',
      lead: 'Lika i Gorski kotar čuvaju jedan od najprepoznatljivijih hrvatskih planinskih prostora — surov, lijep i duboko vezan uz povijest naroda.',
      text: 'Ovdje se domovina upoznaje kroz kamen, šumu, vodu i velike prostore. Velebit, Plitvice, Gorski kotar i stari putovi svjedoče o životu koji nikada nije bio lagan. Ljudi su u takvim krajevima razvili posebnu izdržljivost, povezanost s prirodom i snažan osjećaj pripadnosti. Crkve, svetišta i obiteljska groblja podsjećaju da je vjera bila dio svakodnevice, a sjećanje na pretke dio identiteta.',
      quote: 'Tamo gdje je život bio težak, čovjek je naučio koliko vrijede dom, obitelj i vjera.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Velebit_(01)_-_Zavižan.jpg'
    },
    '/slavonija-i-baranja.html': {
      kicker: 'ČUVARI NASLJEĐA · SLAVONIJA I BARANJA',
      title: 'Široka ravnica, veliko srce',
      lead: 'Slavonija i Baranja nose snagu zemlje, rijeka, obitelji, vjere i bogate kontinentalne kulture.',
      text: 'Drava, Dunav i Sava oblikuju prostor u kojem su polja, vinogradi i šume stoljećima hranili generacije. Osijek, Vukovar, Đakovo, Vinkovci, Požega i druga mjesta nose slojeve povijesti koji sežu duboko u prošlost. Katedrale, dvorci, tambura, bećarac i tradicijska kuhinja dio su živog identiteta. A sjećanje na Domovinski rat, osobito na žrtvu Vukovara i drugih mjesta, obvezuje nas da slobodu ne uzimamo zdravo za gotovo.',
      quote: 'Ravnica pamti. Rijeke nose priču. Čovjek je dužan ne zaboraviti.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kopački_rit_001.jpg'
    },
    '/istra.html': {
      kicker: 'ČUVARI NASLJEĐA · ISTRA',
      title: 'Kamen, maslina i more — hrvatska Istra',
      lead: 'Istra u sebi nosi slojeve antičke, srednjovjekovne, kršćanske i moderne baštine te snažan osjećaj pripadnosti prostoru.',
      text: 'Pula, Rovinj, Poreč, Pazin, Labin i brojni istarski gradići pokazuju koliko se različitih vremena može sačuvati na malom prostoru. Rimska Arena, Eufrazijeva bazilika, srednjovjekovni gradići, glagoljska tradicija, masline, vinogradi i more tvore jedinstvenu kulturnu sliku. Istra je primjer da identitet može biti slojevit, otvoren i snažan istodobno. Čuvati ga znači poznavati povijest, poštovati različitosti i ne izgubiti vezu s vlastitim korijenima.',
      quote: 'Kamen pamti stoljeća. Čovjek čuva priču.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pula_Arena,_Istria,_Croatia.JPG'
    },
    '/kvarner-i-primorje.html': {
      kicker: 'ČUVARI NASLJEĐA · KVARNER I PRIMORJE',
      title: 'More koje povezuje otoke, gradove i naraštaje',
      lead: 'Kvarner je prostor pomorske povijesti, otoka, gradova, hodočasničkih mjesta i života usmjerenog prema moru.',
      text: 'Rijeka, Opatija, Crikvenica i Novi Vinodolski povezuju primorsku svakodnevicu s velikim povijesnim promjenama. Krk, Cres, Lošinj i Rab čuvaju stare gradove, crkve, samostane i pomorske priče. Trsat i druga svetišta podsjećaju da je vjera bila važan dio života ljudi uz more. Kvarner pokazuje kako se otvorenost prema svijetu može spojiti s čvrstim osjećajem pripadnosti vlastitom kraju.',
      quote: 'More otvara vrata svijetu, ali dom ostaje mjesto kojem se čovjek vraća.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kvarner,_Croatia.JPG'
    },
    '/dalmacija.html': {
      kicker: 'ČUVARI NASLJEĐA · DALMACIJA',
      title: 'Kamen i more pamte više nego što možemo ispričati',
      lead: 'Dalmacija je prostor drevnih gradova, otoka, svetišta, pomorske tradicije i snažne hrvatske povijesne memorije.',
      text: 'Od Zadra i Šibenika do Splita i Dubrovnika, hrvatska obala čuva tragove civilizacija koje su se mijenjale, ali i vlastitu kršćansku i hrvatsku priču. Dioklecijanova palača, šibenska katedrala, dubrovačke zidine, stari gradovi otoka i brojna svetišta govore o ljudima koji su stvarali na kamenu i uz more. Dalmacija je također prostor snažnog sjećanja na Domovinski rat i obranu hrvatske slobode. Zato se njezina ljepota ne odvaja od poštovanja prema onima koji su je čuvali.',
      quote: 'Pod istim nebom pod kojim su naši stari molili i radili, danas imamo odgovornost čuvati ono što su nam ostavili.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/DUBROVNIK.jpg'
    },
    '/posavina-i-pokuplje.html': {
      kicker: 'ČUVARI NASLJEĐA · POSAVINA I POKUPLJE',
      title: 'Rijeke, drvene kuće i sjećanje na ljude uz Savu i Kupu',
      lead: 'Posavina i Pokuplje čuvaju posebnu tradiciju kontinentalne Hrvatske — od drvene arhitekture do snažnih priča o radu, vjeri i obrani domovine.',
      text: 'Sisak, Petrinja, Karlovac i okolna mjesta oblikovani su rijekama i životom uz njih. Lonjsko polje, stare kuće, crkve i tradicijski običaji svjedoče o načinu života koji je bio usko vezan uz prirodu. Ovaj je prostor ujedno duboko obilježen ratnim iskustvima i sjećanjem na obranu Hrvatske. Zato njegovo nasljeđe treba promatrati cjelovito: kao kulturu života, ali i kao svjedočanstvo ustrajnosti ljudi koji su ostali uz svoj dom.',
      quote: 'Rijeka mijenja tok, ali sjećanje naroda ne smije nestati.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sisak,_pevnost_a_řeka_Kupa.jpg'
    }
  };

  const article = articles[path];
  if (!article || document.querySelector('.cuvari-clanak')) return;

  const footer = document.querySelector('footer');
  if (!footer) return;

  const section = document.createElement('section');
  section.className = 'cuvari-clanak';
  section.innerHTML = `
    <div class="wrap">
      <div class="cuvari-clanak-grid">
        <div class="cuvari-clanak-copy">
          <p class="eyebrow">${article.kicker}</p>
          <h2>${article.title}</h2>
          <p class="cuvari-lead">${article.lead}</p>
          <p>${article.text}</p>
          <blockquote>${article.quote}</blockquote>
          <p class="cuvari-autor">Autor: <strong>Čuvari nasljeđa</strong></p>
        </div>
        <figure class="cuvari-clanak-media">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
          <figcaption>Čuvari nasljeđa · fotografija Wikimedia Commons</figcaption>
        </figure>
      </div>
    </div>`;

  footer.parentNode.insertBefore(section, footer);
});
