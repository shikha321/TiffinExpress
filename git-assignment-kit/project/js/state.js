let S={view:"menu",cat:"All",q:"",veg:false,cart:{},orders:[],soldout:{},coupon:"",pay:"UPI",placing:false,users:[],me:null,role:"user",authTab:"login"};
try{const x=JSON.parse(localStorage.getItem("tx")||"null");if(x){S.cart=x.cart||{};S.orders=x.orders||[];S.soldout=x.soldout||{};S.users=x.users||[];S.me=x.me||null}}catch(e){}
const save=()=>{try{localStorage.setItem("tx",JSON.stringify({cart:S.cart,orders:S.orders,soldout:S.soldout,users:S.users,me:S.me}))}catch(e){}};
const $=s=>document.querySelector(s),R=n=>"₹"+n.toFixed(n%1?2:0);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),1800)}
function totals(){let sub=0;for(const id in S.cart){const m=MENU.find(x=>x.id==id);if(m)sub+=m.p*S.cart[id]}
const disc=S.coupon==="SAVE10"?Math.round(sub*.1):0,fee=sub&&sub-disc<500?30:0,gst=Math.round((sub-disc)*.05);
return{sub,disc,fee,gst,total:sub-disc+fee+gst}}
const count=()=>Object.values(S.cart).reduce((a,b)=>a+b,0);
