//close all chapter
function collapse() {
    document.getElementById('return').style.display = 'none'
    for (let i of document.getElementsByClassName('band')) {
        i.style.zIndex = '0'
        i.style.clipPath = null
        i.style.filter = null
    }
    for (let i of document.getElementsByClassName('chapitre')) {
        i.style.opacity = '0.0'
    }
    chap0.style.opacity = '1.0'
    band6.style.opacity = '1'
}

//open a chapter
function expand(id, id2) {
    if (id.style.clipPath == 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)') {
        collapse();
    } else {
        if (id != document.getElementById('band6')) {
          band6.style.opacity = "0";
        }
        id.style.transitionDuration = '0.8s'
        id.style.zIndex = '1'
        id2.style.zIndex= '3'
        id.style.filter = 'grayscale(0) brightness(100%)'
        id.style.clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)'
        id2.style.opacity = '1.0'
        document.getElementById('chap0').style.transitionDuration = '0.5'
        document.getElementById('chap0').style.opacity = '0.0'
        document.getElementById('return').style.display = 'block'
    }
}

//start the intro video
function start() {
    IntroVideo.play();
    hide.style.display = 'none';
    LeSaintJimi.style.transitionDuration = '1.5s';
    LeSaintJimi.style.opacity = '0.0';
}

//in start
window.onload = function(){
    db = document.documentElement;
    if(db.requestFullScreen){
        db.requestFullScreen();
    } else if(db.webkitRequestFullscreen){
        db.webkitRequestFullscreen();
    } else if(db.mozRequestFullScreen){
        db.mozRequestFullScreen();
    } else if(db.msRequestFullscreen){
        db.msRequestFullscreen();
    }
    wrap.style.width = window.screen.width+"px";
    wrap.style.height = window.screen.height+"px";
}

//skip intro video
function skip() {
    IntroVideo.pause();
    Intro.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
    HideBeforeIntro.style.opacity = '1';
    hide2.style.opacity = '0';
    Holy_sound.play();
}

//TODO PARALLAX SUR LE BACKGROUND
