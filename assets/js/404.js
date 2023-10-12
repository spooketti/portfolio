let xness = 0
let yness = 0
let r = document.querySelector(':root');

document.addEventListener("mousemove",function(e){
xness = (((e.clientX / (window.screen.width)) * 100)-50)*2
yness = (((e.clientY / (window.screen.height)) * 100)-50)*2
r.style.setProperty('--xmove', `${xness}%`)
r.style.setProperty('--ymove',`${yness}%`)


})