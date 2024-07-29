(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f=1500,v=document.querySelector("#cards-container"),d=document.querySelector("#hello-card"),a=document.querySelector("#about-card"),n=document.querySelector("#projects-card");let i=0,L=document.getElementById("project-wall"),j=L.querySelector(".project"),S=L.children.length-2;function O(){var r=d.querySelector(".house-container"),o=r.getBoundingClientRect(),s=o.x+window.innerWidth*5.2/100,l=o.y+window.innerWidth*5/100,e=`${s}px ${l}px`;v.style.transformOrigin=e;var t=s-a.clientWidth/1.935,c=l-a.clientHeight/1.97,m=r.clientWidth/a.clientWidth;a.style.transformOrigin="50% 50%",a.style.transform=`translate(${t}px, ${c}px) scale(${m})`;var g=m*.3,w=t+n.clientWidth*.15*g,b=c-window.innerHeight/100;n.style.transformOrigin="50% 50%",n.style.transform=`translate(${w}px, ${b}px) scale(${g})`;let u=document.getElementById("project-arrow-left"),h=document.getElementById("project-arrow-right");u.addEventListener("click",()=>{i--,j.style.marginLeft=`calc(50vw - 250pt - ${i*1e3}pt - ${i*40}px)`,i===0&&(u.style.opacity=0,u.disabled=!0),h.disabled=!1,h.style.opacity=100}),h.addEventListener("click",()=>{i++,j.style.marginLeft=`calc(50vw - 250pt - ${i*1e3}pt - ${i*40}px)`,i===S-1&&(h.style.opacity=0,h.disabled=!0),u.disabled=!1,u.style.opacity=100})}var y=0,p=!0;function B(){d.style.display="grid",v.style.transform="scale(1)";var o=d.querySelector(".house-container");o.style.transformOrigin="70% 50%";var r=d.querySelector("#hello-dino"),o=d.querySelector(".house-container");r.style.left="0vw";var s=a.querySelector("#about-dino");s.style.marginLeft="-30vw",s.style.marginRight="30vw";var l=a.querySelector(".about-desc");setTimeout(()=>{r.style.opacity=1,r.style.transform="scaleX(1)",r.style.left="8vw",o.style.transform="scale(1)",o.style.transition="transform 1s ease",l.style.marginLeft="60vw",l.style.marginRight="-60vw"},f/3),setTimeout(()=>{n.style.display="none"},1.5*f/3),p=!1,setTimeout(()=>{p=!0},f)}function R(){a.style.display="grid";var r="scale(15)";v.style.transform=r;var o=a.querySelector("#about-dino"),s=a.querySelector(".about-desc"),l=d.querySelector(".house-container");l.style.transformOrigin="80% 50%";var e=d.querySelector("#hello-dino");e.style.transform="scaleX(-1)",e.style.left="-1vw";var t=n.querySelector("h1");t.style.marginTop="-120vh",t.style.marginBottom="120vh";let c=n.querySelectorAll(".project");for(let w of c){let b=w.querySelectorAll("p");for(let u of b)u.style.opacity=0}let m=document.getElementById("project-arrow-left"),g=document.getElementById("project-arrow-right");m.style.opacity=0,g.style.opacity=0,l.style.transform="scale(3.5)",l.style.transition="transform 1.5s ease-in",setTimeout(()=>{o.style.marginLeft=0,o.style.marginRight=0,s.style.marginLeft=0,s.style.marginRight=0,n.style.display="flex"},f/3),p=!1,setTimeout(()=>{e.style.opacity=0,d.style.display="none",t.style.opacity=0,p=!0},f)}function A(){v.style.transform=`translate(${n.clientWidth*.41}px, ${window.innerHeight/1.23}px) scale(48)`;var r=n.querySelector("h1");r.style.opacity=100;let o=n.querySelectorAll(".project");for(let c of o){let m=c.querySelectorAll("p");for(let g of m)g.style.opacity=100}let s=document.getElementById("project-arrow-left"),l=document.getElementById("project-arrow-right");s.style.opacity=i>0?100:0,l.style.opacity=i<S-1?100:0,s.disabled=i===0,l.disabled=i===S-1;var e=a.querySelector("#about-dino");e.style.marginLeft="-30vw",e.style.marginRight="30vw";var t=a.querySelector(".about-desc");t.style.marginLeft="60vw",t.style.marginRight="-60vw",setTimeout(()=>{r.style.marginTop=0,r.style.marginBottom=0},f/3),p=!1,setTimeout(()=>{a.style.display="none",p=!0},f)}function T(r){if(r>0?y+=1:y-=1,y<0){y=0;return}else if(y>2){y=2;return}y===2?A():y===1?R():B()}addEventListener("wheel",r=>{p&&T(r.deltaY)});const q=150;var x,E,$;addEventListener("touchstart",function(r){var o=r.changedTouches[0];E=o.pageX,$=o.pageY,x=new Date().getTime()});addEventListener("touchend",function(r){var o=r.changedTouches[0],s=o.pageX-E,l=o.pageY-$,e=new Date().getTime()-x;console.log(e);var t=Math.abs(l)>=q&&Math.abs(s)<=2*q/3;t&&T(-l)});window.addEventListener("load",function(){O(),n.style.display="none"});