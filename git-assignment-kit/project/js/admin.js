function kitchenView(){
const open=S.orders.filter(o=>o.s<3).slice().reverse();
return`<div class="panel"><h2>Admin dashboard: incoming orders</h2>${open.map(o=>`<div class="line"><span><b>#${o.id}</b> ${esc(o.name)} (${esc(o.phone)}): ${o.items.map(i=>`${i.q}× ${i.n}`).join(", ")}<br><span class="muted">${ST[o.s]} · ${R(o.total)}</span></span><button class="btn" data-adv="${o.id}">Mark as ${ST[o.s+1].toLowerCase()}</button></div>`).join("")||'<p class="empty">No open orders. New orders appear here when customers check out.</p>'}</div>
<div class="panel"><h2>Menu availability</h2>${MENU.map(m=>`<div class="line"><span>${m.e} ${m.n}</span><button class="btn ghost" data-so="${m.id}">${S.soldout[m.id]?"Mark available":"Mark sold out"}</button></div>`).join("")}</div>
<div class="panel"><h2>Sales summary</h2><div class="line"><span>Registered customers</span><b>${S.users.length}</b></div><div class="line"><span>Orders placed</span><b>${S.orders.length}</b></div><div class="line"><span>Revenue</span><b>${R(S.orders.reduce((a,o)=>a+o.total,0))}</b></div></div>`}

// Admin module verified by mosaddikur
