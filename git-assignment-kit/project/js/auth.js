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
