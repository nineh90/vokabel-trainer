function showIndexCard(){
    vokabelIndexContainer.classList.remove('d-none');
    vokabelIndexContainer.innerHTML ='';
    vokabelIndexContainer.innerHTML = generateVokabularyHTML(); 
    for (let key in vokabulary) {
        vokabularyList.innerHTML += generateVokabularyListHTML(key);
    }
}