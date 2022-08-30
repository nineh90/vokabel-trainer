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
}    

function init(){
    generateStartBox();
    //alert('DEINE MUDDA SCHWITZT BEIM KACKEN');
}

function generateStartBox(){
    let taskQuery = document.getElementById('startContent');
    taskQuery.classList.remove("d-none");
    taskQuery.innerHTML = '';
    taskQuery.innerHTML = generateStartBoxHTML();
}

function openVocabularyFolder(){
    let content = document.getElementById('startContent')
    content.innerHTML = '';
    content.innerHTML = generateVocabularyInputHTML();
}

function saveVokabulary(){
    let germanWord = document.getElementById('germanWord');
    let englishWord = document.getElementById('englishWord');
    if(germanWord.value&& englishWord.value){
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
}

function openPractice(){
    let practice = document.getElementById('startContent');
    practice.innerHTML = "";
    practice.innerHTML = generatePracticeHTML();
}

function openVokabularyTest(){
    let testOutput = document.getElementById('startContent');
    testOutput.innerHTML = "";
    testOutput.innerHTML =  generateTestDescription();
}

function showIndexCard(){
    let indexCard = document.getElementById('startContent');

    console.log(indexCard)
}