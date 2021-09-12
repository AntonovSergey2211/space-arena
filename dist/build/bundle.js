!function(){"use strict";var t;!function(t){t.create=function(t=0,e=0){return{x:t,y:e}},t.t=function(t,e){const n=t.x-e.x,i=t.y-e.y;return n*n+i*i},t.e=function(t){return t.x*t.x+t.y*t.y}}(t||(t={}));const e=Math.round,n=Math.random,i=Math.sin,o=Math.cos,s=Math.atan2,a=Math.abs,c=Math.max,r=Math.min,h=Math.sqrt,l=Math.PI,u=2*Math.PI,d=Math.PI/2;function f(){return n()>.5}function p(t,i){return e(t+n()*(i-t))}function x(t,e){return t+n()*(e-t)}function g(t,e){const n=2*l;let i=(t-e)%n;return i>l&&(i-=n),i<-l&&(i+=n),i}var m;!function(t){t.n=function(t,e){let n=t>>24&255,i=t>>16&255,o=t>>8&255,s=255&t;return n=n*e.am+e.ao&255,i=i*e.rm+e.ro&255,o=o*e.gm+e.go&255,s=s*e.bm+e.bo&255,`rgba(${i}, ${o}, ${s}, ${n/255})`},t.i=function(t){return`rgba(${t>>16&255}, ${t>>8&255}, ${255&t}, ${(t>>24&255)/255})`}}(m||(m={}));function y(t,e,s,a,c,r,h,l){let u=p(c,r);t.push(4,u);const d=2*Math.PI/u;let f=Math.PI*n();for(;u--;)t.push(s+i(f)*p(h,l),a+o(f)*p(h,l)),f+=d;t.push(0,e)}function b(t){const{o:e}=t,n=[];let i=p(3,6);for(;i--;)y(n,p(0,e.length-1),p(-50,50),p(-50,50),7,15,40,70);return{o:e,s:n,r:0,h:120,x:0,y:0,l(e){this.r+=t.u*e}}}function v(e){const n=[];let{count:s}=e;const{f:a,p:c,g:r,m:h,o:l,v:d}=e,f=1.5*h/c,p=1===c?.2*f:0;for(;s--;){const t=b({o:l,u:0}),e=x(0,u),s=x(p,f);t.x=o(e)*s,t.y=i(e)*s,n.push(t)}return{k:n,p:c,f:a,g:r,l(){if(1===this.p&&d){const e=d.M().k;this.k.forEach((n=>{e.forEach((e=>{const i=t.t(n,e),o=e.w+n.h/3;i<o*o&&e.z(-1e3)}))}))}}}}var k;!function(t){t.S=function(){return{a:1,b:0,c:0,d:1,x:0,y:0}},t.T=function(t,e,n){const i=e.a*t.a+e.b*t.c,o=e.a*t.b+e.b*t.d,s=e.c*t.a+e.d*t.c,a=e.c*t.b+e.d*t.d,c=e.x*t.a+e.y*t.c+t.x,r=e.x*t.b+e.y*t.d+t.y;n.a=i,n.b=o,n.c=s,n.d=a,n.x=c,n.y=r},t.j=function(t){return c(a(t.a),a(t.b),a(t.c),a(t.d))}}(k||(k={}));const M=k.S();var w;!function(t){function e(t,e){var n,i,o,s,a,c;const{r:r}=t,h=null!==(i=null!==(n=t.A)&&void 0!==n?n:t.f)&&void 0!==i?i:1,l=null!==(s=null!==(o=t.$)&&void 0!==o?o:t.f)&&void 0!==s?s:1;if(e.x=null!==(a=t.x)&&void 0!==a?a:0,e.y=null!==(c=t.y)&&void 0!==c?c:0,r){const t=Math.cos(r),n=Math.sin(r);return e.a=t*h,e.b=n*h,e.c=-n*l,void(e.d=t*l)}e.a=h,e.b=0,e.c=0,e.d=l}t.O=e,t.U=function(t,e){var n;const i=null!==(n=t.R)&&void 0!==n?n:1,{D:o}=t;if(o){const{C:t=0,value:n=1}=o,s=1-n,a=t>>16&255,c=t>>8&255,r=255&t;return e.am=i,e.rm=s,e.gm=s,e.bm=s,e.ao=0,e.ro=a*n,e.go=c*n,void(e.bo=r*n)}let{g:s}=t;if(void 0!==s){s>1?s=1:s<-1&&(s=-1);const t=1-Math.abs(s);let n=0;return s>0&&(n=255*s),e.am=i,e.rm=t,e.gm=t,e.bm=t,e.ao=0,e.ro=n,e.go=n,void(e.bo=n)}e.am=i,e.rm=1,e.gm=1,e.bm=1,e.ao=0,e.ro=0,e.go=0,e.bo=0},t.E=function(t,n,i){const{x:o,y:s}=n;e(t,M),i.x=o*M.a+s*M.c+M.x,i.y=o*M.b+s*M.d+M.y}}(w||(w={}));const z=jsfxr([0,0,.2996286612451152,.049831483062296344,.15737676185023775,.5703562729712254,.037420144186540515,-.3879256862405088,0,0,0,0,0,.18821061188407817,.09033692527451312,0,0,0,1,0,0,.024003649437587614,0,.5]),S=jsfxr([3,0,.3208591283506936,.5818983553245236,.4412527797139363,.08430907838621725,0,-.3216593280968755,0,0,0,0,0,0,0,0,.1444287878082801,-.11652028380910384,1,0,0,0,0,.5]);function T(t){const e=new Audio;e.volume=t,e.src=z,e.play().catch((()=>{}))}var j=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function c(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}r((i=i.apply(t,e||[])).next())}))};const A=["ship01","ship02","ship03","ship04","ship05"];let $;const O=t.create();function U(t,e,n,i){const o=[];y(o,0,0,0,5,10,10,20),O.y=0,O.x=-n,w.E(t,O,O),i.L().create({x:O.x,y:O.y,o:[f()?2576980377:2573624934],P:1,r:e,s:o,time:.3,R:5,v:i,h:20})}const R="ship01",D="ship02",C="ship03",E="ship04",L="ship05",P=.3,H=t.create(),F=[R,D,C,E,L],W={[R]:{H:300,F:3,W:.1,G:1e3,K:30,V:3,I:200,N:1e3,q:20,X:10,B:[{x:100,y:-40},{x:100,y:40}],gunColor:4294901760,o:[4288256409,4284900966,4288217088,4288217088,4294901760]},[D]:{H:350,F:3.5,W:.1,G:1e3,K:30,V:2.5,I:300,N:1e3,q:15,X:10,B:[{x:0,y:-45},{x:0,y:45}],gunColor:4294967295,o:[4278216192,4293848814,4278207488,4284900966,4284900966,4293848814]},[C]:{H:300,F:3.5,W:.1,G:1e3,K:30,V:3,I:250,N:1e3,q:20,X:10,B:[{x:90,y:-35},{x:90,y:35}],gunColor:4284940134,o:[4284900966,4288256409,4280427042,4278255615,4278255615,4284940134]},[E]:{H:400,F:3.5,W:.1,G:1e3,K:30,V:2,I:350,N:1e3,q:10,X:5,B:[{x:50,y:-70},{x:50,y:70}],gunColor:4284901119,o:[4288243251,4290493337,4294967295,4288256256,4284901119]},[L]:{H:300,F:3.5,W:.1,G:1e3,K:30,V:3,I:200,N:1e3,q:20,X:10,B:[{x:50,y:-60},{x:50,y:60}],gunColor:4278255615,o:[4282664004,4289967023,4284900966,4278216294,4278255615]}};function G(e){const{name:n,v:s,m:a,id:c}=e,r=(a-80)*(a-80),h=function(t){return $[A.indexOf(t)]}(n),f=W[n],{o:g}=f;let m=0;return{id:c,f:.5,h:127,w:100,J:100,Q:0,x:0,y:0,r:0,P:0,u:0,Y:0,Z:!1,_:0,tt:0,rocketTime:0,k:[{r:d,k:[{s:h,o:g,x:-127,y:-127},{s:h,o:g,A:-1,x:128,y:-127}]}],l(e){this.P+=(f.H-this.P)*e*3;const n=e*this.P,c=this.Y*f.F;this.u+=(c-this.u)*e*3,this.r+=e*this.u;const h=this.r,u=o(h)*n,d=i(h)*n;if(this.x+=u,this.y+=d,this.Z&&this._>f.W){const t=f.B[this.tt],e=s.et().create({m:a,id:this.id,nt:f.V,P:f.G,it:0,ot:1e3,C:f.gunColor,width:5,length:f.K,type:0,v:s});w.E(this,t,H),e.x=H.x,e.y=H.y,e.r=this.r,this._=0,this.tt++,this.tt&=f.B.length-1,T(s.at().st(e))}this._+=e,this.Q>0?(this.Q-=e,this.Q<0&&(this.Q=0),this.D={C:4278255360,value:this.Q/P}):this.Q<0&&(this.Q+=e,this.Q>0&&(this.Q=0),this.D={C:4294967295,value:-this.Q/P}),this.rocketTime>0&&(this.rocketTime-=e);t.e(this)>r&&this.z(-1e3),this.ct&&(m-=e,m<=0&&(m=.05,U(this,this.r+l,80,s)))},rt(){if(this.rocketTime>0)return;this.rocketTime=f.X;const t=s.et().create({id:this.id,m:a,nt:f.q,P:f.I,it:f.N,ot:2e3,C:4294928127,width:10,length:40,type:1,v:s});t.x=this.x,t.y=this.y,t.r=this.r,T(s.at().st(t))},z(t){if(this.J+=t,t>0)this.J>100&&(this.J=100),this.Q=P;else if(t<0&&(this.Q=-.3,this.J<=0)){s.M().ht(this);!function(t){const e=new Audio;e.volume=t,e.src=S,e.play().catch((()=>{}))}(s.at().st(this)),this.ct&&function(t,e,n){let i=20;for(;i--;){const i=[];y(i,0,0,0,5,10,5,10);const o=e[p(0,e.length)];n.L().create({x:t.x,y:t.y,o:[o],P:x(2,5),r:x(0,u),s:i,time:x(.5,.7),R:2,v:n,h:10})}const o=[2576980377,2573624934];for(i=50;i--;){const e=[];y(e,0,0,0,5,10,10,20);const i=o[p(0,o.length)];n.L().create({x:t.x,y:t.y,o:[i],P:x(0,5),r:x(0,u),s:e,time:x(.5,.7),R:2,v:n,h:10})}n.at().lt=.5}(this,g,s)}}}}function K(e){const n=G(e),i=.8*e.m*e.m*.8;let o=0,a=0;return Object.assign(Object.assign({},n),{ut:0,dt:0,ft:0,pt:0,l(c){if(n.l.call(this,c),a>0)a-=c;else{if(t.e(this)>i)return this.target=void 0,this.Y=1,o+=c,void(o>1&&(a=2))}if(this.target||(this.dt-=c,this.dt<=0&&(0===this.Y?(this.Y=f()?-1:1,this.dt=x(.5,2)):(this.Y=0,this.dt=x(3,7)))),this.ft-=c,this.ft<=0&&(this.ft=x(3,5),this.target=void 0,this.pt=x(.5,2)),this.pt-=c,this.pt<=0&&!this.target&&(this.target=e.v.M().xt(this,this.id,100,1e3)),this.target&&this.target.J>0){const t=s(this.target.y-this.y,this.target.x-this.x);this.r+=g(t,this.r)*c*5,this.Z=!0,this.rt()}else this.Z=!1}})}function V(){return F[p(0,F.length-1)]}function I(e){const{m:n,gt:i,v:o,p:c}=e,r={p:c,ht(t){const e=this.k.indexOf(t);-1!==e&&this.k.splice(e,1)},xt(e,n,i,o){const c=this.k;let r;const h=i*i;let l=o*o;return c.forEach((i=>{if(i.id!==n){const n=s(i.y-e.y,i.x-e.x);if(a(g(n,e.r))<1){const n=t.t(i,e);h<n&&n<l&&(r=i,l=n)}}})),r},start(){let t=0;const s=[],a=function(t){const e=G(t);return Object.assign(Object.assign({},e),{l(n){e.l.call(this,n),t.gt.x=this.x,t.gt.y=this.y},onKeyDown(t){switch(t.code){case"ArrowLeft":this.Y=-1;break;case"ArrowRight":this.Y=1;break;case"Space":this.Z=!0;break;case"ArrowUp":this.rt()}},onKeyUp(t){switch(t.code){case"ArrowLeft":case"ArrowRight":this.Y=0;break;case"Space":this.Z=!1}}})}({name:V(),m:n,gt:i,v:o,id:t++});a.r=-d,s.push(a);let{count:c}=e;for(;c--;){const e=K({name:V(),m:n,v:o,id:t++});e.x=x(-n,n),e.y=x(-n,n),e.r=x(0,u),s.push(e)}this.k=s}};return e.v.M=()=>r,r}function N(t){const{mt:e,p:i,m:o,bigStartsChance:s}=t,a=2048,c=1024,r=function(t,e,i){const o=document.createElement("canvas");o.width=e,o.height=e;const s=o.getContext("2d");for(;t--;){const t=x(3,e-3),o=x(3,e-3);let a=x(1.5,3);n()<i&&(a*=2),s.fillStyle=m.i(p(4288256409,4294967295)),s.beginPath(),s.arc(t,o,a,0,d),s.fill()}return o}(e,a,s),h=[];for(let t=-o;t<o;t+=a)for(let e=-o;e<o;e+=a)h.push({x:t,y:e,h:c,k:[{image:r,x:-1024,y:-1024}]});return{k:h,p:i}}function q(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=t;const o=t/2,s=i.getContext("2d"),a=s.createRadialGradient(o,o,0,o,o,o);return e.forEach(((t,e)=>{a.addColorStop(n[e],m.i(t))})),s.fillStyle=a,s.fillRect(0,0,t,t),i}function X(t){const{p:e,m:n}=t,i=n/3;return{k:[{image:q(2048,[4294967040,4294967040,1728052992,0],[0,.3,.33,1]),x:i-1024,y:i-1024},{image:q(1024,[4278229248,4278229248,855677184,0],[0,.5,.53,1]),x:-i-512,y:-i-512},{image:q(512,[4288256409,4288256409,570425344,570425344,0],[0,.5,.53,.6,1]),x:-i-512,y:-i-512+128},{image:q(1536,[4290445312,4290445312,582680576,0],[0,.3,.33,1]),x:i-768,y:-i-768},{image:q(2048,[4278190080,4278190080,2852126720,0],[0,.3,.33,1]),x:-i-1024,y:i-1024}],p:e}}function B(e){const{p:n,v:a}=e,c={p:n,k:[],create(e){const n=function(e){const{P:n,ot:a,width:c,length:r,C:h,nt:u,type:d,v:f,id:p,it:x,m:m}=e,y=m*m;let b=0;return{type:d,nt:u,P:n,id:p,x:0,y:0,r:0,ot:0,o:[h],h:r+c,s:[2,0,0,3,r,0,1,0,c],l(e){if(1===this.type){if(this.target&&this.target.J<=0&&(this.target=void 0),this.target||(this.target=f.M().xt(this,this.id,100,2e3)),this.target){const t=s(this.target.y-this.y,this.target.x-this.x);this.r+=g(t,this.r)*e*5}this.P+=e*x,this.ct&&(b-=e,b<=0&&(b=.01,U(this,this.r+l,0,f)))}const n=this.P*e;this.x+=n*o(this.r),this.y+=n*i(this.r),this.ot+=n,this.ot>a&&f.et().ht(this),t.e(this)>y&&f.et().ht(this)}}}(e);return this.k.push(n),n},ht(t){const e=this.k.indexOf(t);-1!==e&&this.k.splice(e,1)},l(){const e=a.M().k;this.k.forEach((n=>{e.forEach((e=>{if(n.id!==e.id){t.t(n,e)<e.w*e.w&&(this.ht(n),e.z(-n.nt))}}))}))}};return e.v.et=()=>c,c}function J(t){const{m:e,p:n}=t,s=[],a=u/200,c=[4283760640,4288217088];for(let t=0;t<200;t++){const n=b({o:c,u:x(-5,5)}),r=a*t;n.x=o(r)*e+x(-30,30),n.y=i(r)*e+x(-30,30),n.f=x(.2,.4),n.r=0,s.push(n)}return{k:s,p:n,r:0,l(t){this.r+=.3*t}}}function Q(t){const{p:e}=t,n={p:e,k:[],create(t){const e=function(t){const{x:e,y:n,P:s,r:a,s:c,o:r,h:h}=t;let l=0;const u=s*o(a),d=s*i(a);return{x:e,y:n,r:0,s:c,o:r,R:1,h:h,l(e){this.x+=u,this.y+=d,l+=e,l>t.time&&(this.R-=e*t.R,this.R<0&&t.v.L().ht(this))}}}(t);return this.k.push(e),e},ht(t){const e=this.k.indexOf(t);-1!==e&&this.k.splice(e,1)}};return t.v.L=()=>n,n}const Y=2500;function Z(t){const{v:n,options:i}=t;function o(){const t=n.M().k[0];if(t&&0===t.id)return t}const s={C:4294967295,font:"arial",m:30},a=20,c={text:Object.assign(Object.assign({},s),{value:"health"})},r={text:Object.assign(Object.assign({},s),{align:1})},h={text:Object.assign(Object.assign({},s),{align:.5})},l={text:Object.assign(Object.assign({},s),{m:50,align:.5})},u={text:Object.assign(Object.assign({},s),{align:.5})};let d=!1;function f(t){l.text.value=t,u.text.value="press ENTER to start again",d=!0}return{k:[c,r,h,l,u],l(){const t=function(){const t=o();return t?e(t.J):0}(),s=function(){let t=n.M().k.length;return o()&&t--,t}();c.text.value=`health: ${t} %`,c.x=a/this.f,c.y=a/this.f,h.text.value=`rocket: ${function(){const t=o();return t?t.rocketTime<=0?"ready":`${t.rocketTime.toFixed(1)} s`:""}()}`,h.x=i.yt()/2/this.f,h.y=a/this.f,r.text.value=`opponents: ${s}`,r.x=(i.yt()-a)/this.f,r.y=a/this.f,l.x=i.yt()/2/this.f,l.y=(i.bt()/2-50)/this.f,u.x=i.yt()/2/this.f,u.y=(i.bt()-30-a)/this.f,t<=0?f("GAME OVER!"):0===s?(f("WIN!"),n.at().enabled=!1):(l.text.value="",u.text.value="LEFT & RIGHT - move    SPACE - fire    UP - rocket")},onKeyDown(t){"Enter"===t.code&&d&&(d=!1,n.at().enabled=!0,n.M().start(),n.et().k=[])}}}function _(e){const n={},i=function(e){const n=t.create(),i={gt:n,lt:0,k:[N({mt:1e4,p:.3,m:Y,bigStartsChance:.1}),X({p:.4,m:Y}),v({count:100,p:.8,f:.4,m:Y,g:-.6,o:[4283782485,4284900966]}),v({count:50,p:.9,f:.6,m:Y,g:-.4,o:[4283782485,4284900966]}),v({count:30,p:1,f:1,m:Y/1.5,g:0,o:[4283760640,4285988864],v:e}),B({v:e,p:1}),Q({v:e,p:1}),I({count:20,m:Y,gt:n,v:e,p:1}),J({m:Y,p:1}),v({count:25,p:1.2,f:1,m:Y,g:-.2,o:[861230421,862348902]}),v({count:15,p:1.5,f:1.5,m:Y,g:0,o:[861230421,862348902]})],m:Y,vt(t){const{x:e,y:n}=this.gt,i=this.k;let o=0,s=0;this.lt>0&&(this.lt-=t,o=x(3,10),s=x(3,10)),i.forEach((t=>{t.x=-e*t.p+o,t.y=-n*t.p+s}))},st(e){const i=h(t.t(n,e));return 1-r(1,c(0,i/1250))}};return e.at=()=>i,e.M().start(),i}(n),o=Z({v:n,options:e});return{k:[i,o],kt(t){const n=e.yt(),s=e.bt(),a=r(n/1024,s/1024);o.f=a,i.f=a,i.x=n/2,i.y=s/2,i.vt(t)}}}var tt,et;!function(t){t.S=function(){return{am:1,rm:1,gm:1,bm:1,ao:0,ro:0,go:0,bo:0}},t.T=function(t,e,n){const i=t.am*e.am,o=t.rm*e.rm,s=t.gm*e.gm,a=t.bm*e.bm,c=t.am*e.ao+t.ao,r=t.rm*e.ro+t.ro,h=t.gm*e.go+t.go,l=t.bm*e.bo+t.bo;n.am=i,n.rm=o,n.gm=s,n.bm=a,n.ao=c,n.ro=r,n.go=h,n.bo=l}}(tt||(tt={})),function(t){t.Mt=function t(e,n,i,o){var s;if(e.ct=!1,!(null===(s=e.visible)||void 0===s||s))return;const a=k.S();if(w.O(e,a),k.T(n,a,a),e.h){const t=k.j(a)*e.h;if(a.x+t<0||a.y+t<0||a.x-t>o.canvas.width-0||a.y-t>o.canvas.height-0)return}const c=tt.S();if(w.U(e,c),tt.T(i,c,c),c.am<=0)return;e.ct=!0,o.setTransform(a.a,a.b,a.c,a.d,a.x,a.y);const{s:r,image:h,o:l,text:u,k:d}=e;r&&l&&function(t,e,n,i){for(let o=0;o<t.length;o++)switch(t[o]){case 0:i.fillStyle=m.n(e[t[++o]],n),i.fill();break;case 1:i.strokeStyle=m.n(e[t[++o]],n),i.lineWidth=t[++o],i.stroke();break;case 2:i.beginPath(),i.moveTo(t[++o],t[++o]);break;case 3:i.lineTo(t[++o],t[++o]);break;case 4:let s=t[++o];for(s--,i.beginPath(),i.moveTo(t[++o],t[++o]);s--;)i.lineTo(t[++o],t[++o]);break;default:throw`unknown command: ${t[o]}`}}(r,l,c,o),u&&function(t,e,n){var i,o,s;if(!t.value)return;n.fillStyle=m.n(null!==(i=t.C)&&void 0!==i?i:4278190080,e),n.font=`${null!==(o=t.m)&&void 0!==o?o:10}px ${null!==(s=t.font)&&void 0!==s?s:"arial"}`,n.textBaseline="top";let a=0;t.align&&(a=-n.measureText(t.value).width*t.align),n.fillText(t.value,a,0)}(u,c,o),h&&function(t,e,n){n.fillStyle=n.createPattern(t,"no-repeat"),n.fillRect(0,0,t.width,t.height)}(h,0,o),d&&d.forEach((e=>t(e,a,c,o)))},t.wt=function t(e,n){if(!1===e.enabled)return;e.l&&e.l(n);const{k:i}=e;i&&i.forEach((e=>t(e,n)))},t.keyDown=function t(e,n){e.onKeyDown&&e.onKeyDown(n);const{k:i}=e;i&&i.forEach((e=>t(e,n)))},t.keyUp=function t(e,n){e.onKeyUp&&e.onKeyUp(n);const{k:i}=e;i&&i.forEach((e=>t(e,n)))}}(et||(et={}));const nt=k.S(),it=tt.S(),ot=document.getElementById("c"),st=ot.getContext("2d"),at=devicePixelRatio;var ct;!function(t){t.Mt=function(t){!function(){const t=innerWidth*at|0,e=innerHeight*at|0;t!==ot.width&&(ot.width=t),e!==ot.height&&(ot.height=e),nt.a=nt.d=at}(),st.setTransform(),st.fillStyle="#000022",st.fillRect(0,0,ot.width,ot.height),et.Mt(t,nt,it,st)}}(ct||(ct={}));var rt=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function a(t){try{r(i.next(t))}catch(t){s(t)}}function c(t){try{r(i.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}r((i=i.apply(t,e||[])).next())}))};let ht,lt=performance.now();function ut(){requestAnimationFrame(ut);const t=function(){const t=performance.now(),e=t-lt;return lt=t,e/1e3}();et.wt(ht,t),ht.kt(t),ct.Mt(ht)}function dt(){return rt(this,void 0,void 0,(function*(){yield function(){return j(this,void 0,void 0,(function*(){const t=A.map((t=>j(this,void 0,void 0,(function*(){const e=yield fetch(`shapes/${t}`),n=yield e.arrayBuffer();return new Uint8Array(n)}))));$=yield Promise.all(t)}))}()}))}!function(){rt(this,void 0,void 0,(function*(){yield dt(),ht=_({yt:()=>innerWidth,bt:()=>innerHeight}),lt=performance.now(),ut(),document.addEventListener("keydown",(t=>{et.keyDown(ht,t),t.preventDefault()})),document.addEventListener("keyup",(t=>{et.keyUp(ht,t),t.preventDefault()}))}))}()}();
