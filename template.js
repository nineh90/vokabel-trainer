function generateStartBoxHTML(){
    return`<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center">
                <div onclick="openVocabularyFolder()" class="a">Vokabeln Einfügen</div>    
                <div class="a">Vokabeln Abfragen</div>    
                <div class="a">Übung</div>    
                <div class="a">Vokabel Test</div>    
            </div>`;
}

function generateVocabularyInputHTML(){
    return  `<div class="bg-1 w-100 h-75 d-flex align-center justify-center column txt-center">
                <h1>Vokabeln Einfügen</h1>
                <p class="discription-vokabulary-container">
                    Hier kannst du deine Vokabeln<br>
                    aus deinem Englisch Buch Speichern<br>
                    und im nächsten Schritt kannst<br>
                    du die Vokabeln lernen.
                </p>
                <input id="german" placeholder="Deutsch">
                <input id="english" placeholder="Englisch">
                <button onclick="saveVokabulary()" class="save-btn"><strong>Speichern</strong></button>
            </div>`;
}