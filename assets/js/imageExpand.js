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
    expandedIMG.style.animation = "imageExpand 1s cubic-bezier(.08,1.9,1,.86) forwards"
    expandedIMG.classList.add("noExpand")
    expandBG.onclick = function()
    {
       expandBG.style.animation = "closeImage 1s cubic-bezier(.47,.72,.86,.09) forwards"
       window.setTimeout(function() {expandBG.remove()},1100)
    }
    document.body.appendChild(expandBG)
    expandBG.appendChild(expandedIMG)


};
   

}
});