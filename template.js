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
                <p class="discription-vokabulary-container">
                    Hier kannst du deine Vokabeln<br>
                    aus deinem Englisch Buch Speichern<br>
                    und im nächsten Schritt kannst<br>
                    du die Vokabeln lernen.
                </p>
                <input id="germanWord" placeholder="Deutsch">
                <input id="englishWord" placeholder="Englisch">
                <button onclick="saveVokabulary()" class="save-btn"><strong>Speichern</strong></button>
            </div>`;
}

function generateVocabularyOutputHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png"> 
                <h1>Vokabeln Abfragen</h1>
                <p class="discription-vokabulary-container">
                    Hier kannst du deine Vokabeln,<br>
                    die du bereits gespeichert hast üben.<br>
                    Übersetzte dazu aus dem Englischen<br>
                    in das Deutsche.
                </p>
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
                <p class="discription-vokabulary-container">
                    Hier kannst du deine Vokabeln,<br>
                    die du bereits gespeichert hast üben.<br>
                    Schau dir dazu das deutsche Wort an<br>
                    und sprich das englische Wort laut aus.<br>
                    Durch klicken auf die Karte siehst du,<br>
                    ob deine Antwort Richtig ist
                </p>
                <button onclick="showIndexCard()" class="save-btn"><strong>Weiter</strong></button>
            </div>`;
}

function generateTestDescription(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png">
                <h1>Vokabel Test</h1>
                <p class="discription-vokabulary-container">
                    Hier kannst du deine Vokabeln,<br>
                    die du bereits gelernt hast Testen.<br>
                    Schau dir dazu das deutsche Wort an<br>
                    und schreibe das Englische Wort.<br>
                    Durch klicken auf "Weiter",<br>
                    kommst du zur nächsten Frage.<br>
                    Der Test läuft auf Zeit, am Ende gibt es<br>
                    eine Auflistung wie viele du richtig hast.
                </p>
                <button class="save-btn"><strong>Weiter</strong></button>
            </div>`;
}

function generateVokabularyHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center relative">
                <img onclick="generateStartBox()" class="cross" src="./img/cross.png">
                <div id="vokabularyList"></div>
            </div>`;  
}