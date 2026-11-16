function add(id,d){const q=(S.cart[id]||0)+d;if(q<=0)delete S.cart[id];else S.cart[id]=q;save();render()}
function menuView(){
const items=MENU.filter(m=>(S.cat==="All"||m.c===S.cat)&&(!S.veg||m.v)&&m.n.toLowerCase().includes(S.q.toLowerCase()));
return`<section class="hero"><h1>${STORE_TAGLINE}</h1><p>Order from our kitchen, pay online or on delivery. Free delivery above ₹500.</p></section>
<div class="bar"><input id="q" type="search" placeholder="Search dishes" value="${esc(S.q)}" aria-label="Search dishes"><button class="chip" id="vegf" aria-pressed="${S.veg}">Veg only</button></div>
<div class="bar">${CATS.map(c=>`<button class="chip" data-cat="${c}" aria-pressed="${S.cat===c}">${c}</button>`).join("")}</div>
<div class="grid">${items.map(m=>{const q=S.cart[m.id]||0,out=S.soldout[m.id];return`<article class="card"><div class="em" aria-hidden="true">${m.e}</div><h3><span class="${m.v?"veg":"nv"}" title="${m.v?"Vegetarian":"Non-vegetarian"}"></span>${m.n}</h3><p>${m.d}</p>
<div class="row"><span class="price">${R(m.p)}</span>${out?'<span class="muted">Sold out</span>':q?`<span class="qty"><button data-d="-1" data-id="${m.id}" aria-label="Remove one">−</button>${q}<button data-d="1" data-id="${m.id}" aria-label="Add one">+</button></span>`:`<button class="btn" data-d="1" data-id="${m.id}">Add to cart</button>`}</div></article>`}).join("")||'<p class="empty">No dishes match. Clear the search or filters.</p>'}</div>`}
