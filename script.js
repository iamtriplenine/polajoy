// ---------- DATA ----------
const WA = "https://wa.me/2250700000000";

const ads = [
  { tag:"Promo", text:"–20% sur tous les Polaroids Spotify jusqu'à dimanche !" },
  { tag:"Nouveau", text:"Découvrez nos cadres premium en chêne naturel" },
  { tag:"Livraison", text:"Livraison gratuite à Abidjan dès 10 000 FCFA" },
  { tag:"Pack", text:"Pack 30 Polaroids Mini à 12 000 FCFA seulement" },
];

const products = [
  { cat:"Polaroid ", title:"Polaroid Normal · 8", price:"2 000 FCFA", badge:"Best-seller", icon:"polaroid", img:"https://i.postimg.cc/PJB0Z77k/IMG-4457.jpg" },
  { cat:"Polaroid Moyen", title:"Polaroid Moyen · Pack 10", price:"7 500 FCFA", icon:"polaroid" },
  { cat:"Polaroid Grand", title:"Polaroid Grand · Pack 5", price:"9 000 FCFA", icon:"polaroid" },
  { cat:"Spotify", title:"Polaroid Spotify", price:"2 500 FCFA", badge:"Nouveau", icon:"music" },
  { cat:"Personnalisé", title:"Polaroid Personnalisé", price:"3 000 FCFA", icon:"sparkle" },
  { cat:"Flyer", title:"Flyer A5 · 100 ex.", price:"15 000 FCFA", icon:"flyer" },
  { cat:"Affiche", title:"Affiche A3", price:"4 000 FCFA", icon:"poster" },
  { cat:"Cadre", title:"Cadre Photo Premium", price:"12 000 FCFA", badge:"Premium", icon:"frame" },
  { cat:"Impression", title:"Impression Photo 13×18", price:"800 FCFA", icon:"image" },
  { cat:"Spotify", title:"Spotify XL avec cadre", price:"8 500 FCFA", icon:"music" },
];

const pricing = [
  ["Polaroïd simple","Mini","20","2 000","1 300"],
  ["Polaroïd simple","Moyen","8","2 000","1 300"],
  ["Polaroïd simple","Grand","4","2 500","1 625"],
  ["Polaroïd personnalisable","Grand","4","3 000","1 950"],
  ["Polaroïd Spotify","Mini","15","2 000","1 300"],
  ["Polaroïd Spotify","Moyen","8","2 000","1 300"],
  ["Polaroïd Spotify","Grand","4","3 000","1 950"],
  ["Cadres","A4","1","5 000","3 250"],
  ["Cadres","A3","1","8 000","5 200"],
  ["Poster","A5","2","2 000","1 300"],
];


const gallery = [
  ["#F58CB6","#D8EEF2",1.2],["#E85A9A","#F58CB6",1.0],["#D8EEF2","#E85A9A",1.5],
  ["#F58CB6","#FFE5F0",0.9],["#1DB954","#0D1117",1.3],["#E85A9A","#D8EEF2",1.1],
  ["#FFB6D1","#D8EEF2",1.4],["#F58CB6","#E85A9A",1.0],["#D8EEF2","#F58CB6",1.2],
  ["#E85A9A","#FFE5F0",0.95],["#F58CB6","#1DB954",1.3],["#D8EEF2","#F58CB6",1.1],
];

const reviews = [
  { name:"Aïcha K.", initial:"A", stars:5, text:"Qualité incroyable, mes Polaroids Spotify sont magnifiques ! Livraison rapide et soignée." },
  { name:"Yann M.", initial:"Y", stars:5, text:"Le rendu est premium, vraiment au-dessus de ce que j'attendais. Je recommande sans hésiter." },
  { name:"Fatou D.", initial:"F", stars:5, text:"J'ai commandé des flyers pour mon événement, parfaits ! Service client au top." },
  { name:"Kévin O.", initial:"K", stars:4, text:"Beau travail, cadres très élégants. Petit délai mais ça vaut l'attente." },
  { name:"Mariam B.", initial:"M", stars:5, text:"Mon cadeau d'anniversaire a fait sensation grâce à leur Polaroid personnalisé." },
];

const faqs = [
  ["Comment commander ?","Cliquez sur 'Commander sur WhatsApp' ou utilisez le formulaire de contact. On vous guide en quelques minutes."],
  ["Quels sont les délais ?","Entre 24h et 72h selon le produit et la quantité. Les commandes urgentes sont possibles, contactez-nous."],
  ["Faites-vous des livraisons ?","Oui, partout en Côte d'Ivoire. Livraison gratuite à Abidjan dès 10 000 FCFA d'achat."],
  ["Quels formats proposez-vous ?","Polaroids mini/moyen/grand, Spotify, formats personnalisés, flyers A5/A4, affiches A3/A2, cadres et impressions photo standard."],
];

// SVG icons
const ICONS = {
  polaroid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="3" width="16" height="18" rx="2"/><rect x="6" y="5" width="12" height="11" rx="1" fill="currentColor" opacity=".25"/></svg>',
  music:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 14c2-1.2 5-1 8 .5M8.5 11c2.5-1.4 6-1 9 .7M9 8c3-1.2 6.5-.8 9 .7"/></svg>',
  sparkle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/></svg>',
  flyer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  poster:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m4 17 5-5 4 4 3-3 4 4"/></svg>',
  frame:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>',
  image:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m3 17 6-6 8 8"/></svg>',
};

// ---------- RENDER ----------
const $ = (s,p=document)=>p.querySelector(s);
const $$ = (s,p=document)=>[...p.querySelectorAll(s)];

// Ad banner
const adTrack = $("#adTrack");
ads.forEach((a,i)=>{
  const el = document.createElement("div");
  el.className = "ad-slide"+(i===0?" active":"");
  el.innerHTML = `<span class="ad-tag">${a.tag}</span><span>${a.text}</span>`;
  adTrack.appendChild(el);
});
let adIdx = 0;
const adSlides = $$(".ad-slide");
const showAd = (i)=>{ adSlides.forEach((s,k)=>s.classList.toggle("active",k===i)); adIdx=i; };
setInterval(()=>showAd((adIdx+1)%adSlides.length), 4500);
$(".ad-arrow.prev").onclick = ()=>showAd((adIdx-1+adSlides.length)%adSlides.length);
$(".ad-arrow.next").onclick = ()=>showAd((adIdx+1)%adSlides.length);

// Filters + products
const cats = ["Tous", ...new Set(products.map(p=>p.cat))];
const filtersEl = $("#filters");
cats.forEach((c,i)=>{
  const b = document.createElement("button");
  b.className = "filter-btn"+(i===0?" active":"");
  b.textContent = c;
  b.onclick = ()=>{ $$(".filter-btn").forEach(x=>x.classList.remove("active")); b.classList.add("active"); renderProducts(c); };
  filtersEl.appendChild(b);
});
function renderProducts(cat="Tous"){
  const grid = $("#productsGrid");
  grid.innerHTML = "";
  products.filter(p=>cat==="Tous"||p.cat===cat).forEach((p,i)=>{
    const el = document.createElement("article");
    el.className = "product glass reveal";
    el.style.transitionDelay = (i*40)+"ms";
    el.innerHTML = `
      <div class="ph">${p.badge?`<span class="badge">${p.badge}</span>`:""}${p.img?`<img src="${p.img}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"/>`:(ICONS[p.icon]||ICONS.image)}</div>
      <span class="cat">${p.cat}</span>
      <h3>${p.title}</h3>
      <div class="row"><span class="price">${p.price}</span>
        <button class="order" onclick="window.open('${WA}?text=${encodeURIComponent('Bonjour, je souhaite commander : '+p.title)}','_blank')">Commander
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>`;
    grid.appendChild(el);
  });
  observeReveal();
}
renderProducts();

// Pricing
$("#pricingBody").innerHTML = pricing.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td class="before">${r[3]} F</td><td>${r[4]} F</td></tr>`).join("");

// Masonry gallery (SVG placeholders for full self-containment)
const masonry = $("#masonry");
gallery.forEach(([c1,c2,ratio],i)=>{
  const w = 400, h = Math.round(w*ratio);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}'><defs><linearGradient id='g${i}' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='${w}' height='${h}' fill='url(%23g${i})'/><circle cx='${w*.7}' cy='${h*.3}' r='${w*.18}' fill='white' fill-opacity='.25'/><rect x='${w*.1}' y='${h*.6}' width='${w*.45}' height='${h*.25}' rx='12' fill='white' fill-opacity='.18'/></svg>`;
  const src = "data:image/svg+xml;utf8,"+svg.replace(/#/g,"%23");
  const item = document.createElement("div");
  item.className = "m-item reveal";
  item.style.transitionDelay = (i*50)+"ms";
  item.innerHTML = `<img class="mg" src="${src}" alt="Création ${i+1}" loading="lazy"/>`;
  item.onclick = ()=>openLightbox(src);
  masonry.appendChild(item);
});

// Reviews
const reviewsEl = $("#reviews");
reviewsEl.innerHTML = `<div class="review-track" id="reviewTrack">${reviews.map(r=>`
  <div class="review"><div class="ava">${r.initial}</div>
    <div><h4>${r.name}</h4><div class="stars">${"★".repeat(r.stars)}${"☆".repeat(5-r.stars)}</div><p>"${r.text}"</p></div>
  </div>`).join("")}</div>
  <div class="review-dots">${reviews.map((_,i)=>`<span class="${i===0?"active":""}" data-i="${i}"></span>`).join("")}</div>`;
let rIdx = 0;
const rTrack = $("#reviewTrack");
const rDots = $$(".review-dots span");
const goReview = (i)=>{ rIdx=i; rTrack.style.transform=`translateX(-${i*100}%)`; rDots.forEach((d,k)=>d.classList.toggle("active",k===i)); };
rDots.forEach(d=>d.onclick=()=>goReview(+d.dataset.i));
setInterval(()=>goReview((rIdx+1)%reviews.length), 5500);

// FAQ
$("#faqList").innerHTML = faqs.map(([q,a])=>`
  <div class="faq-item">
    <button class="faq-q">${q}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></button>
    <div class="faq-a"><p>${a}</p></div>
  </div>`).join("");
$$(".faq-item").forEach(it=>{
  it.querySelector(".faq-q").onclick = ()=>{ $$(".faq-item").forEach(x=>x!==it&&x.classList.remove("open")); it.classList.toggle("open"); };
});

// Year
$("#year").textContent = new Date().getFullYear();

// ---------- THEME ----------
const themeBtn = $("#themeBtn");
const saved = localStorage.getItem("theme");
if(saved) document.documentElement.setAttribute("data-theme",saved);
themeBtn.onclick = ()=>{
  const cur = document.documentElement.getAttribute("data-theme")==="dark"?"":"dark";
  if(cur) document.documentElement.setAttribute("data-theme","dark"); else document.documentElement.removeAttribute("data-theme");
  localStorage.setItem("theme",cur);
};

// ---------- MENU ----------
$("#menuBtn").onclick = ()=>$("#navLinks").classList.toggle("open");
$$("#navLinks a").forEach(a=>a.onclick=()=>$("#navLinks").classList.remove("open"));

// ---------- LIGHTBOX ----------
const lb = $("#lightbox");
const lbImg = lb.querySelector("img");
function openLightbox(src){ lbImg.src = src; lb.classList.add("open"); }
lb.querySelector(".lb-close").onclick = ()=>lb.classList.remove("open");
lb.onclick = (e)=>{ if(e.target===lb) lb.classList.remove("open"); };

// ---------- REVEAL ----------
function observeReveal(){
  const io = new IntersectionObserver((entries)=>entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }),{threshold:.12});
  $$(".reveal:not(.in)").forEach(el=>io.observe(el));
}
observeReveal();

// Parallax léger sur blobs
window.addEventListener("scroll",()=>{
  const y = window.scrollY;
  document.querySelectorAll(".blob").forEach((b,i)=>{ b.style.transform = `translateY(${y*(i+1)*0.04}px)`; });
},{passive:true});

// ---------- WHATSAPP BUBBLE (draggable) ----------
const wa = $("#waBubble");
let dragging=false, moved=false, sx=0, sy=0, ox=0, oy=0;
function pos(e){ return e.touches?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY}; }
function down(e){ dragging=true; moved=false; const r=wa.getBoundingClientRect(); const p=pos(e); sx=p.x; sy=p.y; ox=r.left; oy=r.top; wa.style.transition="none"; }
function move(e){ if(!dragging) return; const p=pos(e); const dx=p.x-sx, dy=p.y-sy; if(Math.abs(dx)+Math.abs(dy)>4) moved=true; wa.style.left=(ox+dx)+"px"; wa.style.top=(oy+dy)+"px"; wa.style.right="auto"; wa.style.bottom="auto"; e.preventDefault(); }
function up(){ dragging=false; wa.style.transition=""; }
wa.addEventListener("mousedown",down); window.addEventListener("mousemove",move); window.addEventListener("mouseup",up);
wa.addEventListener("touchstart",down,{passive:false}); window.addEventListener("touchmove",move,{passive:false}); window.addEventListener("touchend",up);
wa.addEventListener("click",(e)=>{ if(moved){ e.preventDefault(); return; } window.open(WA,"_blank"); });
