// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var selectElement = document.getElementById("horn-select");

  selectElement.addEventListener('change', (event) => {
    document.querySelector("img").src = `assets/images/${event.target.value}.svg`;
    document.getElementsByClassName("hidden").item(0).src=`assets/audio/${event.target.value}.mp3`;
  });
  
  const playButton = document.querySelector("button");
  playButton.addEventListener('click', (event) => {
    document.getElementsByClassName("hidden").item(0).play();
    console.log(`played ${selectElement.value}`);
    if (selectElement.value == "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

  const volume = document.getElementById("volume");
  volume.addEventListener('input',(event) => {
    var audio = document.getElementsByClassName("hidden").item(0);
    let volLevel = event.target.value;
    if (volLevel == 0) {
      document.querySelector("div > img").src = 'assets/icons/volume-level-0.svg';
      audio.volume = volLevel / 100;
    }
    
    else if (volLevel < 33) {
      document.querySelector("div > img").src = 'assets/icons/volume-level-1.svg';
      audio.volume = volLevel / 100;
      
    }
    else if (volLevel < 67) {
      document.querySelector("div > img").src = 'assets/icons/volume-level-2.svg';
      audio.volume = volLevel / 100;
    }
    else {
      document.querySelector("div > img").src = 'assets/icons/volume-level-3.svg';
      audio.volume = volLevel / 100;
    }

    console.log(audio.volume);
  } )
}