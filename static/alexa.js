window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const alexa = new SpeechRecognition();



window.addEventListener('click', ()=> {
    document.body.innerHTML += "Alexa start";
    return alexa.start() ;
});

alexa.addEventListener('result', (event)=>{
    console.dir(event);
    console.log(event.results[0][0].transcript);
});

alexa.addEventListener('end', ()=>{
    document.body.innerHTML = "Alexa end";
});

