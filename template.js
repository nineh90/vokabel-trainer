function generateStartBoxHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center">
                <div onclick="openVocabularyFolder()" class="a">Vokabeln Einfügen</div>    
                <div onclick="openQuestionFolder()" class="a">Vokabeln Abfragen</div>    
                <div onclick="openPractice()" class="a">Übung</div>    
                <div onclick="openVokabularyTest()" class="a">Vokabel Test</div>    
            </div>`;
}

function generateVocabularyInputHTML(){
    return  `<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png">
                <h1>Vokabeln Einfügen</h1>
                <div id="inputArea" class="d-flex align-center justify-center column">
                    <input onsubmit="saveVokabulary()" id="germanWord" placeholder="Deutsch">
                    <input onsubmit="saveVokabulary()" id="englishWord" placeholder="Englisch">
                    <button onclick="saveVokabulary()" class="save-btn"><strong>Speichern</strong></button>
                <div>    
            
            </div>`;
}

function generateVocabularyOutputHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
                <h1>Vokabeln Abfragen</h1>
                <h2><strong>translate the following word</strong></h2>
                <h1 id="wordToTranslate">????</h1>
                <span class="font-size24px" id="isAnswersCorrect"></span>
                <input id="translateInGerman" placeholder="Deutsch">
                <button onclick="checkAnswer()" class="save-btn"><strong>Weiter</strong></button>
            </div>`;
}

function generatePracticeHTML(){
    return `<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png">
                <h1>Übung Kartei Karten</h1>
                <button onclick="showIndexCard()" class="save-btn"><strong>Weiter</strong></button>
            </div>`;
}

// function generateTestDescription(){
//     return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
//                 <img onclick="generateStartBox()" class="cross" src="./img/cross.png">
//                 <h1>Vokabel Test</h1>
//                 <p>
//                     Übersetze aus dem deutschen in das Englische.
//                 </p>
//                 <button onclick="openVokabularyTest()" class="save-btn"><strong>Weiter</strong></button>
//             </div>`;
// }

function generateVokabularyHTML(){
    return`<div class="">
                <img onclick="generateStartBox()" class="cross-mexy" src="./img/cross.png">
                <div id="vokabularyList"></div>
            </div>`;  
}



// function generateVokabularyTestHTML(){
// return`<div>
//         <div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative padding margin-bt">
//             <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
//             <h1>Vokabel Test</h1>
//             <h2><strong>10 Minuten Zeit</strong></h2>
//             <span id="testDescription" class="font-size24px">
//                 Sobald du auf Start drückst Startet die Zeit<br>
//                 Übersetze aus dem deutschen ins englische!                        
//             </span>
//             <button onclick="generateVokabularyTest()" class="save-btn"><strong>Start</strong></button>
//         </div>
//     </div>`
// }