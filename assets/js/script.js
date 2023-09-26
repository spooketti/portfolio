let body = document.body
let topDist
let navbarVis = true
let navBar = document.getElementById("header")
let spinning = false
let reducedMotion = false
if(localStorage.reducedMotion)
{
    reducedMotion = localStorage.reducedMotion
}
localStorage.reducedMotion = reducedMotion
redMotDict = 
{
    true: "On",
    false: "Off",
}
let redMotButton = document.getElementById("redMotButton")
function toggleMot()
{
    reducedMotion = !reducedMotion
    localStorage.reducedMotion = reducedMotion
    redMotButton.innerText = "Reduced Motion: " + redMotDict[reducedMotion]
}

window.addEventListener("scroll",function(e)
{
    topDist = this.scrollY
    document.getElementById("ParalaxName").style.transform = `translate(0px,-${(topDist*(1/100))}px)`
    document.getElementById("ParalaxDesc").style.transform = `translate(0px,-${(topDist*(.25))}px)`
    for(let i=1;i<=3;i++)
    {
        document.getElementById("par"+i.toString()).style.transform = `translate(0px,-${(topDist*(i/5))}px)`
    }
    document.getElementById("par4".toString()).style.transform = `translate(0px,-${(topDist*(0.3))}px)`
})
let slideClassArray = [
    "slideOpacity"
]


//let entString = entry.target.classList.toString().split(" ").filter((word)=> !slideClassArray.includes(word)) //gets string's classlist as a string, split by spaces into arrya, filter every word to make sure it doesn't exist in the array

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
    console.log("up")
      navbarVis = true
      navBar.style.transform = "translateY(0)"
   } 
   scrollbuffer = ypos <= 0 ? 0 : ypos; 
});

function spinBody()
{
    if(spinning)
    {
        return;
    }
    spinning = true
    document.body.style.transform = "rotate(1turn)"
    document.body.style.transition = "all 4s ease 0s"
    setTimeout(() => {
        document.body.style.transform = null
        document.body.style.transition = null
        spinning = false
     }, "4000") 

}

function mineSweepToggle()
{
document.getElementById("minesweeperWrapper").style.display = "flex"
document.getElementById("msiframe").style.display = "block"
}