function welcome(){
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    setCSS();
    setTimeout(init, 5000);
    gameStartSound.play();
}  

function setCSS(){
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
}

function init(){
    generateStartBox();
}

function generateStartBox(){
    let taskQuery = document.getElementById('startContent');
    vokabelIndexContainer.classList.add('d-none');
    taskQuery.classList.remove("d-none");
    taskQuery.innerHTML = '';
    taskQuery.innerHTML = generateStartBoxHTML();
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;

}

function openVocabularyFolder(){
    let content = document.getElementById('startContent')
    content.innerHTML = generateVocabularyInputHTML();
}

function saveVokabulary(){
    let germanWord = document.getElementById('germanWord');
    let englishWord = document.getElementById('englishWord');
    if(germanWord.value && englishWord.value){
        vokabulary[germanWord.value.toLowerCase()] = englishWord.value.toLowerCase();
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

function checkAnswer(){
    if (translateInGerman.value){
            if (translateInGerman.value.toLowerCase() == randomKey.toLowerCase()){
                // TRUE
                setTrueAttributes();
            } else {
                // False
                setFalseAttributes();
            }
    }else{
        alert('Schreibe erst etwas bevor es weiter geht');
    }
}

function setFalseAttributes(){
    document.getElementById('background').style.backgroundImage = `url('./img/sadsmiliey.png')`;
    falseAnswerSound.play();
    isAnswersCorrect.innerHTML = `FALSCH! Richtige Antwort ist ${randomKey}`; 
    document.getElementById('checkBtn').classList.add('d-none');
    setTimeout(showNextVokabulary, 5000);
}

function setTrueAttributes(){
    document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
    corretAnswerSound.play();
    isAnswersCorrect.innerHTML = `Richtig!`;
    document.getElementById('checkBtn').classList.add('d-none');
    setTimeout(showNextVokabulary, 5000);
}

function showNextVokabulary(){
    document.getElementById('checkBtn').classList.remove('d-none');
    let objectKeys= Object.keys(vokabulary);
    randomKey = objectKeys[Math.floor(Math.random() * objectKeys.length)];
    wordToTranslate.innerHTML ='';
    wordToTranslate.innerHTML = `${vokabulary[randomKey]}`;
    translateInGerman.value = "";
    isAnswersCorrect.innerHTML = ""; 
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;
}



function showIndexCard(){
    vokabelIndexContainer.classList.remove('d-none');
    vokabelIndexContainer.innerHTML ='';
    vokabelIndexContainer.innerHTML = generateVokabularyHTML(); 
    for (let key in vokabulary) {
        vokabularyList.innerHTML += generateVokabularyListHTML(key);
    }
}

function openVokabularyTest(){
    onClick = 0;
    counter = 0;
    let vokabularyTestOutput = document.getElementById('startContent');
    vokabularyTestOutput.innerHTML = '';
    vokabularyTestOutput.innerHTML =    generateVokabularyTestHTML();
    nextGermanWord();
    setTimeout(testEnd, 600000);
}

function testEnd(){
    document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
    let testResultContainer = document.getElementById('startContent');
    testResultContainer.innerHTML = ``;
    testResultContainer.innerHTML =  generateTestResult();
    checkResultCounter();
}
 
function checkResultCounter(){
    console.log('RESULT', counter) 
    ifCounterSmaler15();
    ifCounterGreater14();
    ifCounterGreater24();
    ifCounterGreater34();
}

function ifCounterSmaler15(){
    if(counter < 15){
        if (testResult) {
            testResult.innerHTML = `Das geht besser ;(`;
        }
    } 
}

function ifCounterGreater14(){
    if(counter > 14){
        if (testResult) {
            testResult.innerHTML = `<img onclick="openGiftOne()" class="pointer bus" src="./img/fornitebus.png">`;
        }
    }
}

function ifCounterGreater24(){
    if(counter > 24){
        if (testResult) {
            testResult.innerHTML = `<img onclick="openGiftTwo()" class="pointer bus" src="./img/fornitebus.png">`;
        }
    } 
}

function ifCounterGreater34(){
    if(counter > 34){
        if (testResult) {
            testResult.innerHTML = `<img onclick="openGiftThree()"  class="pointer bus" src="./img/fornitebus.png">`;
        }
    }
}

function openGiftOne(){
    let giftOne = document.getElementById('startContent');
    giftOne.innerHTML = giftOneHTML();
}

function openGiftTwo(){
    let giftTwo = document.getElementById('startContent');
    giftTwo.innerHTML = giftTwoHTML();
}

function openGiftThree(){
    let giftThree = document.getElementById('startContent');
    giftThree.innerHTML = giftThreeHTML();
}

function nextGermanWord(){
    let testBtn = document.getElementById('testBtn');
    if (testBtn) {
        testBtn.classList.remove('d-none');
    }
    let objectKeys= Object.keys(vokabulary);
    randomWord = objectKeys[Math.floor(Math.random() * objectKeys.length)];
    germanWordToTranslate.innerHTML ='';
    germanWordToTranslate.innerHTML = `${randomWord}`;
    translateInEnglish.value = "";
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;
}

function checkTestAnswer(){
    if(translateInEnglish.value){
        if (translateInEnglish.value.toLowerCase() == vokabulary[randomWord]){
            answerIsTrue();
        } else {
            answerIsFalse()
        }
    } else {
        alert('Ups. Du hast nichts Eingegeben!')
    }    
    onclickCounter();
    setTimeout(nextGermanWord, 5000);
}

function answerIsTrue(){
    document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
    corretAnswerSound.play();            
    document.getElementById('testBtn').classList.add('d-none');
    correctAnswerCounter();
}

function answerIsFalse(){
    document.getElementById('background').style.backgroundImage = `url('./img/sadsmiliey.png')`;
    document.getElementById('testBtn').classList.add('d-none');
    falseAnswerSound.play();
}

function onclickCounter(){
    onClick += 1;
}

function correctAnswerCounter(){
    counter += 1;
}



    
