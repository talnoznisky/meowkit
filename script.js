/piano code/ 

  function addListenerMulti(elem, eNames, listener){
  var events = eNames.split(' ');
  for(var i = 0; i<events.length; i++){
  elem.addEventListener(events[i],listener,false);
    }
}
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function startLoop(x){
    x.play(); 
    x.loop = true;

  }

  function resetLoop(x){
    x.pause();
    x.currentTime = 0;
    x.duration = 0.9999;
    x.loop = false;
  }
 

  function playSound(e) {
    
    if (e.type == 'click'){
      keyCode = e.target.attributes[0].value;
    }else if (e.type == 'touchstart'){
      keyCode = e.target.attributes[0].value;
    }else if(e.type == 'keydown'){
      keyCode = e.keyCode
    }
    else return

    const audio = document.querySelector('audio[data-key="'+keyCode+'"]');
    const key = document.querySelector('div[data-key="'+keyCode+'"]');
    if (!audio) return;

    src = audio.src

    key.classList.add('playing');
    if (audio.classList.contains("piano")){
      audio.currentTime = 0;
      audio.play();   
    }      
    if (audio.classList.contains("beat")){
      if(!audio.loop){
        beataudio = document.getElementsByClassName('beat-audio')
        active = document.getElementsByClassName('active')
        for(i = 0; i < beataudio.length; i++){
          if(beataudio[i].loop = true){
            resetLoop(beataudio[i])
          }
        }
        for(i = 0; i < active.length; i++){
          if(active[i].loop = true){
            active[i].classList.remove('active')
          }
        }
          startLoop(audio);
          key.classList.add('active')
        }else if(audio.loop=true){
          resetLoop(audio);
          key.classList.remove('active')
        }
      } 
      
  }  

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  addListenerMulti(window, 'click keydown touchstart', playSound);



