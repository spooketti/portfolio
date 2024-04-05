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
    expandedIMG.classList.add("noExpand")
    expandBG.onclick = function()
    {
       expandBG.remove()
    }
    document.body.appendChild(expandBG)
    expandBG.appendChild(expandedIMG)


};
   

}
});