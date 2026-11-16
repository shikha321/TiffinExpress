const VIEWS={auth:"authView",menu:"menuView",cart:"cartView",orders:"ordersView",kitchen:"kitchenView"};
const has=v=>typeof window[VIEWS[v]]==="function";
function render(){
const me=S.me;
if(has("auth")){if(!me)S.view="auth";else if(me.role==="admin"&&has("kitchen"))S.view="kitchen";else if(me.role!=="admin"&&(S.view==="kitchen"||S.view==="auth"))S.view="menu"}
if(!has(S.view))S.view="menu";
const v=S.view,admin=me&&me.role==="admin",cust=!admin&&(me||!has("auth"));
$("#app").innerHTML=window[VIEWS[v]]();
$("#nav").innerHTML=cust&&v!=="auth"?[["menu","Menu"],["orders","My orders"]].filter(n=>has(n[0])).map(n=>`<button data-v="${n[0]}">${n[1]}</button>`).join(""):"";
document.querySelectorAll("nav button").forEach(b=>b.setAttribute("aria-current",b.dataset.v===v));
$("#cartbtn").hidden=!(cust&&has("cart"));
$("#logout").hidden=!me;if(me)$("#logout").textContent=(admin?"Admin":me.name)+" \u00b7 Log out";
$("#cartbtn").textContent=`Cart (${count()})`;
const q=$("#q");if(q&&S.focusQ){q.focus();q.setSelectionRange(q.value.length,q.value.length)}}
function go(v){S.view=v;render();scrollTo(0,0)}
document.addEventListener("click",e=>{const t=e.target.closest("button");if(!t)return;
if(t.dataset.v)return go(t.dataset.v);
if(t.id==="cartbtn")return go("cart");
if(t.dataset.role){S.role=t.dataset.role;return render()}
if(t.dataset.tab){S.authTab=t.dataset.tab;return render()}
if(t.id==="authgo")return authGo();
if(t.id==="logout"){S.me=null;S.cart={};S.role="user";S.authTab="login";save();return render()}
if(t.dataset.cat){S.cat=t.dataset.cat;S.focusQ=0;return render()}
if(t.id==="vegf"){S.veg=!S.veg;return render()}
if(t.dataset.d)return add(t.dataset.id,+t.dataset.d);
if(t.id==="applycp"){const c=$("#cp").value.trim().toUpperCase();S.coupon=c==="SAVE10"?c:"";toast(S.coupon?"Coupon applied: 10% off":"That coupon code isn’t valid");return render()}
if(t.dataset.adv){const o=S.orders.find(x=>x.id==t.dataset.adv);if(o&&o.s<3)o.s++;save();return render()}
if(t.dataset.so){S.soldout[t.dataset.so]=!S.soldout[t.dataset.so];save();return render()}
if(t.id==="place"&&typeof placeOrder==="function")placeOrder()});
document.addEventListener("input",e=>{if(e.target.id==="q"){S.q=e.target.value;S.focusQ=1;render()}});
document.addEventListener("change",e=>{if(e.target.name==="pay")S.pay=e.target.value});
render();
