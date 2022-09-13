function welcome(){
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    setCSS();
    setTimeout(init, 5000);
    //gameStartSound.play();
}  

function setCSS(){
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
}

function init(){
    generateStartBox();
}

function generateStartBox(){
    let taskQuery = document.getElementById('startContent');
    vokabelIndexContainer.classList.add('d-none');
    taskQuery.classList.remove("d-none");
    taskQuery.innerHTML = '';
    taskQuery.innerHTML = generateStartBoxHTML();
    document.getElementById('background').style.backgroundImage = `url('./img/fortnite.jpg')`;

}





    
