function welcome(){
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
    .add({
        targets: '.ml2 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
    setTimeout(init, 5000);
    //gameStartSound.play();
}    

function init(){
    generateStartBox();
}

function generateStartBox(){
    // vokabelIndexContainer.classList.add('d-none');
    // vokabularyTestContainer.classList.add('d-none');
    vokabelIndexContainer.classList.add('d-none');
    let taskQuery = document.getElementById('startContent');
    taskQuery.classList.remove("d-none");
    taskQuery.innerHTML = '';
    taskQuery.innerHTML = generateStartBoxHTML();
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;

}

function openVocabularyFolder(){
    let content = document.getElementById('startContent')
    content.innerHTML = '';
    content.innerHTML = generateVocabularyInputHTML();
}

function saveVokabulary(){
    let germanWord = document.getElementById('germanWord');
    let englishWord = document.getElementById('englishWord');
    if(germanWord.value && englishWord.value){
        vokabulary[germanWord.value] = englishWord.value;
        germanWord.value = '';
        englishWord.value = '';
        localStorage.setItem('vokabulary', JSON.stringify(vokabulary))
    } else {    
        alert('Du musst erst die Felder füllen, bevor du etwas speichern kannst!')
    }
}

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

// function openVokabularyTest(){
//     let testOutput = document.getElementById('startContent');
//     testOutput.innerHTML = "";
//     testOutput.innerHTML =  generateTestDescription();
// }

function showNextVokabulary(){
    let objectKeys= Object.keys(vokabulary);
    randomKey = objectKeys[Math.floor(Math.random() * objectKeys.length)];
    wordToTranslate.innerHTML ='';
    wordToTranslate.innerHTML = `${vokabulary[randomKey]}`;
    translateInGerman.value = "";
    isAnswersCorrect.innerHTML = ""; 
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;
}

function checkAnswer(){
    if (translateInGerman.value){
            if (translateInGerman.value.toLowerCase() == randomKey.toLowerCase()){
                // TRUE
                document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
                corretAnswerSound.play();
                isAnswersCorrect.innerHTML = `Richtig!`;
                setTimeout(showNextVokabulary, 5000);
            } else {
                // False
                document.getElementById('background').style.backgroundImage = `url('./img/sadsmiliey.png')`;
                falseAnswerSound.play();
                isAnswersCorrect.innerHTML = `FALSCH! Richtige Antwort ist ${randomKey}`; 
                setTimeout(showNextVokabulary, 5000);
            }
    }else{
        alert('Schreibe erst etwas bevor es weiter geht');
    }
   
}

function showIndexCard(){
    vokabelIndexContainer.classList.remove('d-none');
    vokabelIndexContainer.innerHTML ='';
    vokabelIndexContainer.innerHTML = generateVokabularyHTML(); 
    for (let key in vokabulary) {
    vokabularyList.innerHTML += `<div class="vokabulary-container bg-1">
                                     <div class="h-42-5 border-btm">${key.toUpperCase()}</div> 
                                     <div class="h-42-5">${vokabulary[key].toUpperCase()}</div>
                                 </div>`;
     }
}

function openVokabularyTest(){
    console.log('DEINE MUDDA');
    let vokabularyTestOutput = document.getElementById('startContent');
    vokabularyTestOutput.innerHTML = '';
    vokabularyTestOutput.innerHTML =    `<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                                            <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
                                            <h1>Vokabel Test</h1>
                                            <h2><strong>ZEIT: <span id="minutes">10</span>:<span id="seconds">00<span> Minuten</strong></h2>
                                            <h1 id="germanWordToTranslate">Deutsches Wort einfügen!!</h1>
                                            <span class="font-size24px" id="isAnswersCorrect"></span>
                                            <input id="translateInEnglish" placeholder="Englisch">
                                            <button onclick="checkTestAnswer()" class="save-btn"><strong>Weiter</strong></button>
                                        </div>`;
    nextGermanWord();
    
}

function nextGermanWord(){
    let objectKeys= Object.keys(vokabulary);
    randomWord = objectKeys[Math.floor(Math.random() * objectKeys.length)];
    germanWordToTranslate.innerHTML ='';
    germanWordToTranslate.innerHTML = `${randomWord}`;
    translateInEnglish.value = "";
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;
    console.log(vokabulary[randomWord]);
    //  checkTestanswer();
}

function checkTestAnswer(){
    if (translateInEnglish.value.toLowerCase() == vokabulary[randomWord]){
        // TRUE
        document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
        corretAnswerSound.play();
        console.log('True');
   } else {
       // False
        document.getElementById('background').style.backgroundImage = `url('./img/sadsmiliey.png')`;
        falseAnswerSound.play();
        console.log('false'); 
   }
    setTimeout(nextGermanWord, 5000);
}

// function generateVokabularyTest(){
//     let vokabularyOutput = document.getElementById('startContent');
//     vokabularyOutput.innerHTML = '';
//     vokabularyOutput.innerHTML = generateVocabularyOutputHTML();
//     showNextVokabulary();
// }

// function generateVokabularyTest(randomWord){
//     vokabularyTestContainer.innerHTML ='';
//     vokabularyTestContainer.innerHTML = `<div class="bg-1 d-flex align-center justify-center column txt-center relative size">
//     <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
//     <h1>Vokabel TEST</h1>
//     <h2><strong>translate the following word</strong></h2>
//     <h1 id="germanWordToTranslate">${randomWord}</h1>
//     <input id="germanTranslate" placeholder="Deutsch">
//     <button onclick="nextVokabulary()" class="save-btn"><strong>Weiter</strong></button>
//     </div>`;    
//     nextVokabulary();
// }


    
