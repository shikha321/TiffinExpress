function ordersView(){
const uid=S.me?S.me.id:0,mine=S.orders.filter(o=>o.uid===uid);
if(!mine.length)return`<div class="panel empty"><h2>No orders yet</h2><p>Your placed orders and their live status will show up here.</p><button class="btn" data-v="menu">Order now</button></div>`;
return mine.slice().reverse().map(o=>`<div class="panel"><div class="row"><h2>Order #${o.id}</h2><b>${R(o.total)}</b></div><p class="muted" style="margin:0">${new Date(o.at).toLocaleString("en-IN")} · ${esc(o.pay)}</p>
<div class="track" aria-label="Order status: ${ST[o.s]}">${ST.map((x,i)=>`<div class="${i<=o.s?"on":""}">${x}</div>`).join("")}</div>
<p style="margin:0">${o.items.map(i=>`${i.q}× ${i.n}`).join(", ")}</p><p class="muted" style="margin:6px 0 0">Deliver to ${esc(o.name)}, ${esc(o.addr)}</p></div>`).join("")}
