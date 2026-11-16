function placeOrder(){
const nm=$("#nm").value.trim(),ph=$("#ph").value.trim(),ad=$("#ad").value.trim(),er=$("#err");
if(!nm||!ad)return er.textContent="Enter your name and delivery address.";
if(!/^[6-9]\d{9}$/.test(ph))return er.textContent="Enter a valid 10-digit mobile number.";
const blocked=Object.keys(S.cart).find(id=>S.soldout[id]);
if(blocked)return er.textContent=MENU.find(m=>m.id==blocked).n+" is sold out. Remove it to continue.";
const t=totals(),id=1001+S.orders.length;
S.orders.push({id,uid:S.me?S.me.id:0,at:Date.now(),name:nm,phone:ph,addr:ad,pay:S.pay,total:t.total,s:0,items:Object.keys(S.cart).map(i=>({n:MENU.find(m=>m.id==i).n,q:S.cart[i]}))});
S.cart={};S.coupon="";save();toast("Order #"+id+" placed");go("orders")}
function ordersView(){
const uid=S.me?S.me.id:0,mine=S.orders.filter(o=>o.uid===uid);
if(!mine.length)return`<div class="panel empty"><h2>No orders yet</h2><p>Your placed orders and their live status will show up here.</p><button class="btn" data-v="menu">Order now</button></div>`;
return mine.slice().reverse().map(o=>`<div class="panel"><div class="row"><h2>Order #${o.id}</h2><b>${R(o.total)}</b></div><p class="muted" style="margin:0">${new Date(o.at).toLocaleString("en-IN")} · ${esc(o.pay)}</p>
<div class="track" aria-label="Order status: ${ST[o.s]}">${ST.map((x,i)=>`<div class="${i<=o.s?"on":""}">${x}</div>`).join("")}</div>
<p style="margin:0">${o.items.map(i=>`${i.q}× ${i.n}`).join(", ")}</p><p class="muted" style="margin:6px 0 0">Deliver to ${esc(o.name)}, ${esc(o.addr)}</p></div>`).join("")}
