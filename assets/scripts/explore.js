// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const inputTxt = document.getElementById('text-to-speak');
  const synth = window.speechSynthesis;

  let voices = [];

  window.addEventListener('load', (event) => {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' - DEFAULT';
      }
      
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  });
  
  const textToSpeech = document.querySelector("button");
  textToSpeech.addEventListener('click', (event) => {
    console.log(inputTxt.value);
    const utterance = new SpeechSynthesisUtterance(inputTxt.value);
    //const utterance2 = new SpeechSynthesisUtterance(inputTxt.value);
    const voice = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');
    console.log(document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name'));
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voice) {
        utterance.voice = voices[i];
      }
    }

    synth.speak(utterance);
    inputTxt.blur();
    
    if (synth.speaking == true) {
      document.querySelector("img").src = "assets/images/smiling-open.png";  
    }

    utterance.addEventListener('end', (event) => {
      document.querySelector("img").src = "assets/images/smiling.png";
    })

  });

}

