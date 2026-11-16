const ADMIN={e:"admin@tiffin.in",p:"admin123"};
async function hash(s){try{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode("tx:"+s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}catch(e){return btoa(unescape(encodeURIComponent(s)))}}
function authView(){
const adm=S.role==="admin",reg=!adm&&S.authTab==="register";
return`<div class="panel" style="max-width:420px;margin:30px auto"><h2>${adm?"Admin login":reg?"Create your account":"Customer login"}</h2>
<div class="bar"><button class="chip" data-role="user" aria-pressed="${!adm}">I’m a customer</button><button class="chip" data-role="admin" aria-pressed="${adm}">I’m the restaurant admin</button></div>
${reg?'<label for="an">Full name</label><input id="an" type="text" autocomplete="name">':""}
<label for="ae">Email</label><input id="ae" type="text" inputmode="email" autocomplete="username">
<label for="apw">Password</label><input id="apw" type="password" autocomplete="${reg?"new-password":"current-password"}">
<div class="msg" id="aerr" role="alert"></div>
<button class="btn red" id="authgo" style="width:100%;padding:12px">${reg?"Create account":"Log in"}</button>
${adm?'<p class="muted">Demo admin login: admin@tiffin.in / admin123</p>':`<p class="muted" style="text-align:center">${reg?"Already have an account?":"New here?"} <button class="btn ghost" data-tab="${reg?"login":"register"}">${reg?"Log in":"Create account"}</button></p>`}</div>`}
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
