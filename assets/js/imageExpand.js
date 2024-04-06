let documentImages = document.querySelectorAll("img")
let expandBG
documentImages.forEach(img => {
if(!img.classList.contains("noExpand"))
{
    img.onclick = function() { 
    if(document.getElementById("expandBG"))
    {
        return;
    }
    expandBG = document.createElement("div")
    expandBG.id = "expandBG"
    let expandedIMG = document.createElement("img")
    expandedIMG.src = img.src
    expandedIMG.id = "expandedIMG"
    expandedIMG.style.animation = "imageExpand 1s cubic-bezier(.08,1.9,1,.86) forwards"
    expandedIMG.classList.add("noExpand")
    expandBG.onclick = function()
    {
       expandBG.style.animation = "closeImage .5s cubic-bezier(.47,.72,.86,.09) forwards"
       window.setTimeout(function() {expandBG.remove()},510)
    }
    document.body.appendChild(expandBG)
    expandBG.appendChild(expandedIMG)


};
   

}
});
window.addEventListener('DOMContentLoaded', () => {
    const cblocks = document.querySelectorAll('.hljs');
cblocks.forEach(codeblock => {
  console.log("fu")
let btn = document.createElement("button")
let span = document.createElement("span")
btn.classList.add("copyCodeButton")
span.classList.add("material-symbols-outlined")
span.innerText = "content_copy"
codeblock.insertBefore(btn,codeblock.firstChild);
btn.appendChild(span)
btn.onclick = function(){
    span.innerText = ""
    navigator.clipboard.writeText(codeblock.innerText)
    span.innerText = "check"
    window.setTimeout(function(){span.innerText = "content_copy"},1000)
}
});
});
