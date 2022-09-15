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
                    <input onsubmit="saveVokabulary()" id="germanWord" placeholder="Deutsch" autocomplete="off">
                    <input onsubmit="saveVokabulary()" id="englishWord" placeholder="Englisch" autocomplete="off">
                    <button onclick="saveVokabulary()" class="save-btn"><strong>Speichern</strong></button>
                    <div><img id="checkBox" style="width: 45px;" class="d-none" src="./img/check.png"></div>
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
                <input autocomplete="off" id="translateInGerman" placeholder="Deutsch">
                <button id="checkBtn" onclick="checkAnswer()" class="save-btn"><strong>Weiter</strong></button>
                <span id="loaderGermanWord" class="loader d-none"></span>
            </div>`;
}

function generatePracticeHTML(){
    return `<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png">
                <h1>Übung Kartei Karten</h1>
                <button onclick="showIndexCard()" class="save-btn"><strong>Weiter</strong></button>
            </div>`;
}

function generateVokabularyHTML(){
    return`<div class="">
                <img onclick="generateStartBox()" class="cross-mexy" src="./img/cross.png">
                <div id="vokabularyList"></div>
            </div>`;  
}

function generateVokabularyListHTML(key){
    return  `<div class="vokabulary-container bg-1">
                <div class="h-42-5 border-btm">${key.toUpperCase()}</div> 
                <div class="h-42-5">${vokabulary[key].toUpperCase()}</div>
            </div>`;
}

function generateVokabularyTestHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <h1>Vokabel Test</h1>
                <h2><strong><span id="timer">10 : 00</span></strong></h2>
                <h1 id="germanWordToTranslate">Deutsches Wort einfügen!!</h1>
                <span class="font-size24px" id="isAnswersCorrect"></span>
                <input autocomplete="off" id="translateInEnglish" placeholder="Englisch">
                <button id="testBtn" onclick="checkTestAnswer()" class="save-btn"><strong>Weiter</strong></button>
                <span id="loaderTest" class="loader d-none"></span>

            </div>`;
}
 
function generateTestResult(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
                <h1>Test ist zu Ende</h1>
                <h2><strong>Du hast <span id="correctAnswers">${counter}</span> Richtig von <span>${onClick}</span> beantwortet </strong></h2>
                <h1 id="testResult"></h1>
            </div>`;       
}

function giftOneHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
                <h1>Belohnung Freigeschaltet</h1>
                <img src="./img/welldone.png">
                <h2><strong>50 CENT</strong></h2>
            </div>`;
}

function giftTwoHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
                <h1>Belohnung Freigeschaltet</h1>
                <img src="./img/welldone.png">
                <h2><strong>1 €</strong></h2>
            </div>`
}

function giftThreeHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
                <h1>Belohnung Freigeschaltet</h1>
                <img src="./img/welldone.png">
                <h2><strong>5 €</strong></h2>
                <p>Zur Freien Verwendung!</p>
            </div>`
}