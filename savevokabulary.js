function openVocabularyFolder(){
    let content = document.getElementById('startContent')
    content.innerHTML = generateVocabularyInputHTML();
}

function saveVokabulary(){
    let germanWord = document.getElementById('germanWord');
    let englishWord = document.getElementById('englishWord');
    if(germanWord.value && englishWord.value){
        saveVokabularyAndSetInputNull();
    }
    setTimeout(closeCheckBox, 3000);
}

function saveVokabularyAndSetInputNull(){
    document.getElementById('checkBox').classList.remove('d-none')
    vokabulary[germanWord.value.toLowerCase()] = englishWord.value.toLowerCase();
    germanWord.value = '';
    englishWord.value = '';
    localStorage.setItem('vokabulary', JSON.stringify(vokabulary));
}

function closeCheckBox(){
    document.getElementById('checkBox').classList.add('d-none')

}