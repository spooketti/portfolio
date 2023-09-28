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

function cardZoom(el)
{
el.classList.add("redirectCard")
el.style.transform = "translateX(105%)"
setTimeout(() => {
    el.style.transform = "translateX(105%) scale(1000%)"
}, 1000);
}