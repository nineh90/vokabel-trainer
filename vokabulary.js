let randomKey;
let gameStartSound = new Audio('./mp3/start.mp3');
let corretAnswerSound = new Audio('./mp3/applause.mp3');
let falseAnswerSound = new Audio('./mp3/fail.mp3');
let vokabulary = JSON.parse(localStorage.getItem('vokabulary')) || {};