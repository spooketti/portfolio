let body = document.body
let topDist
let navbarVis = true
let navBar = document.getElementById("header")
let spinning = false
let reducedMotion = false
if(localStorage.getItem("reducedMotion") == "true")
{
    reducedMotion = true
}

localStorage.reducedMotion = reducedMotion
redMotDict = 
{
    true: "On",
    false: "Off",
}
let redMotButton = document.getElementById("redMotButton")
redMotButton.innerText = "Reduced Motion: " + redMotDict[reducedMotion]
function toggleMot()
{
    reducedMotion = !reducedMotion
    localStorage.reducedMotion = reducedMotion
    redMotButton.innerText = "Reduced Motion: " + redMotDict[reducedMotion]
}
const observer = new IntersectionObserver((entries) => 
{
    
    entries.forEach((entry) =>
    
    {   
        entry.target.style.animation = null;
        if(entry.isIntersecting && !spinning && !reducedMotion)
        {

            switch(entry.target.dataset.slideanim)
            {
                case "slideRight":
                   entry.target.style.animation += "slideRight 1s cubic-bezier(.77,.27,.48,.9)"
                break;

                case "slideOpacity":
                    entry.target.style.animation += "slideOpacity 1s cubic-bezier(.77,.27,.48,.9)"
                break;
                case "slideLeft":
                    entry.target.style.animation += "slideLeft 1s cubic-bezier(.77,.27,.48,.9)"
                break;

                default:
                   
                break;
            }
            /*
            if(entry.target.dataset.slideanim == "")
        {
            entry.target.style.animation = "typewriter 3s ease .5s"
        }*/
        }
    })
})

const slidables = document.querySelectorAll(".slideable")
slidables.forEach((el) => observer.observe(el))

let scrollbuffer = 0;
document.addEventListener("scroll", function(){
   let ypos = window.scrollY
   if (ypos > scrollbuffer) {
      navbarVis = false
      navBar.style.transform = "translateY(-100%)"
      
   } else if (ypos < scrollbuffer) {
    //console.log("up")
      navbarVis = true
      navBar.style.transform = "translateY(0)"
   } 
   scrollbuffer = ypos <= 0 ? 0 : ypos; 
});

