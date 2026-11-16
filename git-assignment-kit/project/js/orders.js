function placeOrder(){
const nm=$("#nm").value.trim(),ph=$("#ph").value.trim(),ad=$("#ad").value.trim(),er=$("#err");
if(!nm||!ad)return er.textContent="Enter your name and delivery address.";
if(!/^[6-9]\d{9}$/.test(ph))return er.textContent="Enter a valid 10-digit mobile number.";
const blocked=Object.keys(S.cart).find(id=>S.soldout[id]);
if(blocked)return er.textContent=MENU.find(m=>m.id==blocked).n+" is sold out. Remove it to continue.";
const t=totals(),id=1001+S.orders.length;
S.orders.push({id,uid:S.me?S.me.id:0,at:Date.now(),name:nm,phone:ph,addr:ad,pay:S.pay,total:t.total,s:0,items:Object.keys(S.cart).map(i=>({n:MENU.find(m=>m.id==i).n,q:S.cart[i]}))});
S.cart={};S.coupon="";save();toast("Order #"+id+" placed");go("orders")}
