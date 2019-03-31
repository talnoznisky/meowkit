
files = [
{id: "67", file: "sounds/b-1.wav"},
{id: "86", file: "sounds/b-2.wav"},
{id: "66", file: "sounds/b-3.wav"},
{id: "78", file: "sounds/b-4.wav"}
]

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var audioBuffer = null;
var isPlaying = false
var source = null;
var bufferArray = []
var file = null;
var activeBeat = null;
var activeButton = null;
buttons = Array.from(document.getElementsByClassName('key-beat'))

function loadSound(url){
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function(buffer){
    context.decodeAudioData(request.response, function(buffer){
 //     audioBuffer = buffer;
      newObj = {"src": url, "buffer":buffer}
      bufferArray.push(newObj)
    })
  }
  request.send()
}

function createBufferArray(){
  for(index in files){
    loadSound(files[index].file)
  }
}

function getBuffer(e){
  sourceId = e.target.attributes[0].value;
  console.log(sourceId)
  file = files.find(x => x.id === sourceId).file
  audioBuffer = bufferArray.find(x => x.src === file).buffer
}
function playSound(buffer){
  source = context.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start(0);
  source.loop = true;
  isPlaying = true;
}

function stopSound(buffer){
  source.stop()
  isPlaying = false;
  audioBuffer = null;
  source = null;
}

function toggleAudio(buffer){
  if(isPlaying == false){
    playSound(source)
  }else if(isPlaying == true){
    stopSound(source)
  }
}

function activeClassToggle(e){
  // start if there is no active beat
  if(activeButton == null){
    activeButton = e.target;
    activeButton.classList.add("active");
  // validate that active class is set from scratch
    return
  }
  // turn off if active button is clicked again
  if(e.target == activeButton){
    activeButton.classList.remove("active");
    activeButton = null;
  // validate that active class is removed from turned-off button
    console.log(document.getElementsByClassName('active'), "part 2")
    return
  }
  // toggle active class from last clicked button to event target button
  else if(e.target != activeButton)
    activeButton.classList.remove("active");
    activeButton = e.target;
    activeButton.classList.add("active");
   // validate that active class has been switched
    console.log(document.getElementsByClassName('active'), "part 3")
    return
}

window.addEventListener("load", createBufferArray())

buttons.forEach(function(elem){
  elem.addEventListener('click', function(e){
    activeClassToggle(e)
    getBuffer(e)
    toggleAudio(audioBuffer)
  })
})
