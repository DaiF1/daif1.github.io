(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const y=1500,m=document.querySelector("#cards-container"),c=document.querySelector("#hello-card"),s=document.querySelector("#about-card"),i=document.querySelector("#projects-card");function L(){i.style.display="none";var r=c.querySelector(".house-container"),e=r.getBoundingClientRect(),a=e.x+window.innerWidth*5.2/100,n=e.y+window.innerWidth*5/100,t=`${a}px ${n}px`;m.style.transformOrigin=t;var o=a-s.clientWidth/1.935,d=n-s.clientHeight/1.97,f=r.clientWidth/s.clientWidth;s.style.transformOrigin="50% 50%",s.style.transform=`translate(${o}px, ${d}px) scale(${f})`;var w=s.querySelector(".about-desc");w.getBoundingClientRect();var S=o+s.clientWidth*f*.07,q=d-s.clientHeight*f*.17,T=f*.6;i.style.transformOrigin="50% 50%",i.style.transform=`translate(${S}px, ${q}px) scale(${T})`}var l=0,u=!0;function x(){c.style.display="grid",m.style.transform="scale(1)";var e=c.querySelector(".house-container");e.style.transformOrigin="70% 50%";var r=c.querySelector("#hello-dino"),e=c.querySelector(".house-container");e.querySelector(".left-side"),r.style.left="0vw";var a=s.querySelector("#about-dino");a.style.marginLeft="-30vw",a.style.marginRight="30vw";var n=s.querySelector(".about-desc");setTimeout(()=>{r.style.opacity=1,r.style.transform="scaleX(1)",r.style.left="8vw",e.style.transform="scale(1)",e.style.transition="transform 1s ease",n.style.marginLeft="60vw",n.style.marginRight="-60vw"},y/3),u=!1,setTimeout(()=>{i.style.display="none",u=!0},y)}function O(){i.style.display="block",s.style.display="grid";var r="scale(15)";m.style.transform=r;var e=s.querySelector("#about-dino"),a=s.querySelector(".about-desc"),n=c.querySelector(".house-container");n.style.transformOrigin="80% 50%";var t=c.querySelector("#hello-dino");t.style.transform="scaleX(-1)",t.style.left="-1vw";var o=i.querySelector("h1");o.style.marginTop="-3em",o.style.marginBottom="3em",n.style.transform="scale(3.5)",n.style.transition="transform 1.5s ease-in",setTimeout(()=>{e.style.marginLeft=0,e.style.marginRight=0,a.style.marginLeft=0,a.style.marginRight=0},y/3),u=!1,setTimeout(()=>{t.style.opacity=0,c.style.display="none",i.style.overflow="hidden",u=!0},y)}function X(){i.style.display="block",m.style.transform="scale(24) translate(0, 14px)",i.style.overflow="visible";var r=i.querySelector("h1"),e=s.querySelector("#about-dino");e.style.marginLeft="-30vw",e.style.marginRight="30vw";var a=s.querySelector(".about-desc");a.style.marginLeft="60vw",a.style.marginRight="-60vw",setTimeout(()=>{r.style.marginTop=0,r.style.marginBottom=0},y/3),u=!1,setTimeout(()=>{s.style.display="none",u=!0},y)}function g(r){if(r>0?l+=1:l-=1,l<0){l=0;return}else if(l>2){l=2;return}l===2?X():l===1?O():x()}addEventListener("wheel",r=>{u&&g(r.deltaY)});const v=150,R=200;var h,p,b;addEventListener("touchstart",function(r){var e=r.changedTouches[0];p=e.pageX,b=e.pageY,h=new Date().getTime()},!1);addEventListener("touchend",function(r){var e=r.changedTouches[0],a=e.pageX-p,n=e.pageY-b,t=new Date().getTime()-h,o=t<=R&&Math.abs(n)>=v&&Math.abs(a)<=2*v/3;o&&g(dist)},!1);window.addEventListener("load",function(){L()});