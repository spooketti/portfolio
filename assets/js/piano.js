let audioCtx = new(window.AudioContext || window.webkitAudioContext)();
let oscillator = audioCtx.createOscillator();

oscillator.type = 'triangle';
let notes = ["C","D","E","F","G","A","B"]
let activeDict  = 
{
  true : "tweenPianoRight",
  false : "tweenPianoLeft"
}
let positionDict = 
{
  true : "0",
  false : "-20%"
}
let activePiano = false;
let pianoDOM = document.getElementById("piano")
let pianoBody = document.getElementById("pianoBody")
/*
document.addEventListener("keydown",e => {
    if(e.key == "Tab")
    {
        e.preventDefault()
        activePiano = !activePiano
        //pianoDOM.style.animation = null;
        //pianoDOM.style.animationDirection = activeDict[activePiano]
        pianoDOM.style.left = positionDict[activePiano]
        pianoDOM.style.animation = `${activeDict[activePiano]} 0.5s`
    }
})*/
function togglePiano()
{
    //e.preventDefault()
    activePiano = !activePiano
    //pianoDOM.style.animation = null;
    //pianoDOM.style.animationDirection = activeDict[activePiano]
    pianoDOM.style.left = positionDict[activePiano]
    pianoDOM.style.animation = `${activeDict[activePiano]} 0.5s`
}
let cummuNote = -1;
for(let i=0;i<20;i++)
{
  let whiteKey = document.createElement("div")
  whiteKey.style.bottom = `${5*i}%`
  whiteKey.classList.add("pianoW")
  pianoBody.appendChild(whiteKey)
  let currentNote = i%7
  cummuNote++
  whiteKey.dataset.note = cummuNote
  whiteKey.addEventListener('mousedown', function(e) {
    //alert(this.dataset.note)
    playNote(16.35*Math.pow(Math.pow(2,1/12),36+parseInt(this.dataset.note)))
});
  if(currentNote!=2&&currentNote!=6)
  {
    cummuNote++
    let blackKey = document.createElement("div")
    blackKey.style.bottom = `${(5*i)+4}%`
    blackKey.classList.add("pianoB")
    blackKey.dataset.note = cummuNote;
    pianoBody.appendChild(blackKey)
    blackKey.addEventListener('mousedown', function(e) {
      //alert(this.dataset.note)
      playNote(16.35*Math.pow(Math.pow(2,1/12),36+parseInt(this.dataset.note)))
  });
  }
}

function playNote(frequency) {
oscillator.frequency.value = frequency; // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
}

//playNote(1046.502)

document.addEventListener("mouseup",e =>
{
oscillator.disconnect();
})

