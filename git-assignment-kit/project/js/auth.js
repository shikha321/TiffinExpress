async function authGo(){
const em=$("#ae").value.trim().toLowerCase(),pw=$("#apw").value,er=$("#aerr");
if(!em||!pw)return er.textContent="Enter your email and password.";
const ph=await hash(pw);
if(S.role==="admin"){if(em===ADMIN.e&&ph===await hash(ADMIN.p)){S.me={role:"admin",name:"Admin"};save();return go("kitchen")}return er.textContent="Wrong admin email or password."}
if(S.authTab==="register"){const nm=$("#an").value.trim();
if(!nm)return er.textContent="Enter your full name.";
if(!/^\S+@\S+\.\S+$/.test(em))return er.textContent="Enter a valid email address.";
if(pw.length<6)return er.textContent="Use a password of at least 6 characters.";
if(S.users.some(u=>u.e===em))return er.textContent="That email is already registered. Log in instead.";
const u={id:Date.now(),e:em,n:nm,p:ph};S.users.push(u);S.me={role:"user",id:u.id,name:nm};S.cart={};save();toast("Welcome, "+nm);return go("menu")}
const u=S.users.find(x=>x.e===em&&x.p===ph);
if(!u)return er.textContent="Wrong email or password. New here? Create an account.";
S.me={role:"user",id:u.id,name:u.n};S.cart={};save();go("menu")}
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&S.view==="auth"&&e.target.tagName==="INPUT")authGo()});
