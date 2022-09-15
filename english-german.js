function openQuestionFolder(){
    let vokabularyOutput = document.getElementById('startContent');
    vokabularyOutput.innerHTML = '';
    vokabularyOutput.innerHTML = generateVocabularyOutputHTML();
    showNextVokabulary();
}

function openPractice(){
    let practice = document.getElementById('startContent');
    practice.innerHTML = "";
    practice.innerHTML = generatePracticeHTML();
}

function checkAnswer(){
    if (translateInGerman.value){
            if (translateInGerman.value.toLowerCase() == randomKey.toLowerCase()){
                // TRUE
                setTrueAttributes();
            } else {
                // False
                setFalseAttributes();
            }
     }
}

function setFalseAttributes(){
    // debugger
    document.getElementById('bgAnswer').style.backgroundColor = "rgba(255 0 0 / 50%)";
    inputGerman.classList.add('d-none');
    loaderGermanWord.classList.remove('d-none');
    document.getElementById('background').style.backgroundImage = `url('./img/sadsmiliey.png')`;
    falseAnswerSound.play();
    isAnswersCorrect.innerHTML = `FALSCH! Richtige Antwort ist ${randomKey}`; 
    document.getElementById('checkBtn').classList.add('d-none');
    setTimeout(showNextVokabulary, 5000);
}

function setTrueAttributes(){
    document.getElementById('bgAnswer').style.backgroundColor = "rgba(14 155 0 / 35%)";
    inputGerman.classList.add('d-none');
    document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
    loaderGermanWord.classList.remove('d-none');
    corretAnswerSound.play();
    isAnswersCorrect.innerHTML = `Richtig!`;
    document.getElementById('checkBtn').classList.add('d-none');
    setTimeout(showNextVokabulary, 5000);
}

function showNextVokabulary(){
    document.getElementById('bgAnswer').style.backgroundColor = "rgba(0 0 0 / 35%)"
    inputGerman.classList.remove('d-none')
    loaderGermanWord.classList.add('d-none');
    document.getElementById('checkBtn').classList.remove('d-none');
    let objectKeys= Object.keys(vokabulary);
    randomKey = objectKeys[Math.floor(Math.random() * objectKeys.length)];
    wordToTranslate.innerHTML ='';
    wordToTranslate.innerHTML = `${vokabulary[randomKey]}`;
    translateInGerman.value = "";
    isAnswersCorrect.innerHTML = ""; 
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;
}
