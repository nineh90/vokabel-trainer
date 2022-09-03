let randomKey;
let gameStartSound = new Audio('./mp3/start.mp3');
let corretAnswerSound = new Audio('./mp3/applause.mp3');
let falseAnswerSound = new Audio('./mp3/fail.mp3');
let vokabulary = JSON.parse(localStorage.getItem('vokabulary')) || 
 {
    "berg": "mountain",
    "die, diese": "these",
    "geben": "give",
    "grillfest": "barbecue",
    "heiß": "hot",
    "herumlaufen": "walk around",
    "kalt": "cold",
    "kurz": "short",
    "morgen": "tomorrow",
    "regen": "rain",
    "regnerisch": "rainy",
    "schön": "beutiful",   
    "see": "lake",
    "sie waren nicht": "they weren't",
    "sonne": "sun",
    "sonnig": "sunny",
    "test": "test",
    "warm": "warm",
    "wetter": "weahter",
    "ziehen": "pull",
}