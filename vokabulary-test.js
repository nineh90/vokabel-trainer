function openVokabularyTest(){
    onClick = 0;
    counter = 0;
    let vokabularyTestOutput = document.getElementById('startContent');
    vokabularyTestOutput.innerHTML = '';
    vokabularyTestOutput.innerHTML =    generateVokabularyTestHTML();
    nextGermanWord();
    setTimeout(testEnd, 600000);
    startTimer();
}

function startTimer(){
    let startTime = new Date().getTime();
    let tenMinutes = 1000 * 60 * 10;
    let endTime = startTime + tenMinutes;
    let intervall = setInterval(function(){
        let timeLeft = endTime - new Date().getTime();
        if (timeLeft > 0){
            timerattributes(timeLeft);
        } else {
           killTimer(intervall);
        }    
    }, 1000)
}

function timerattributes(timeLeft){
    let minutes = timeLeft / (1000 * 60);
        minutes = Math.floor(minutes);
    let seconds = (timeLeft / 1000) % 60;
        seconds = Math.round(seconds);
        seconds = ('0' + seconds).slice(-2); 
    let text = '0' + minutes + ':' + seconds;
        timer.innerHTML = text;
}

function killTimer(intervall){
    clearInterval(intervall);
    timerAlertSound.play();
    timer.innerHTML = '00:00';
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
    loaderTest.classList.add('d-none');
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
    console.log(objectKeys.length);
}

function checkTestAnswer(){
    if(translateInEnglish.value){
        if (translateInEnglish.value.toLowerCase() == vokabulary[randomWord]){
            answerIsTrue();
        } else {
            answerIsFalse();
        }
    } else {
        alert('Ups. Du hast nichts Eingegeben!')
    }    
    onclickCounter();
}

function answerIsTrue(){
    loaderTest.classList.remove('d-none');
    document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
    corretAnswerSound.play();            
    document.getElementById('testBtn').classList.add('d-none');
    correctAnswerCounter();
    setTimeout(nextGermanWord, 5000);
}

function answerIsFalse(){
    loaderTest.classList.remove('d-none');
    document.getElementById('background').style.backgroundImage = `url('./img/sadsmiliey.png')`;
    document.getElementById('testBtn').classList.add('d-none');
    falseAnswerSound.play();
    setTimeout(nextGermanWord, 5000);
}

function onclickCounter(){
    onClick += 1;
}

function correctAnswerCounter(){
    counter += 1;
}

function testEnd(){
    document.getElementById('background').style.backgroundImage = `url('./img/mexify.jpg')`;
    let testResultContainer = document.getElementById('startContent');
    testResultContainer.innerHTML = ``;
    testResultContainer.innerHTML =  generateTestResult();
    checkResultCounter();
}
