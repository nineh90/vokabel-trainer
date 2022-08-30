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
    console.log('Deine Mudda')
    let content = document.getElementById('startContent')
    content.innerHTML = '';
    content.innerHTML = generateVocabularyInputHTML();
}

function saveVokabulary(){
    alert('Du musst erst die Felder füllen, bevor du etwas speichern kannst!')
}