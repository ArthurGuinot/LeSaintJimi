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
        i.style.zIndex= "0"
    }
    chap0.style.opacity = '1.0'
    chap0.style.zIndex = '5'
    band6.style.opacity = '1'
}

//open a chapter
function expand(id, chap) {

    if (id.style.clipPath == 'url("expanded")' || id.style.clipPath == 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);') {
        collapse();

    } else {

        if (id != document.getElementById('band6')) {
          band6.style.opacity = "0";
        }

        id.style.transitionDuration = '0.8s'
        id.style.zIndex = '1'
        chap.style.zIndex= '5'
        id.style.filter = 'grayscale(0) brightness(100%)'
        id.style.clipPath = 'url("expanded")'
		id.style.clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%);'
        chap.style.opacity = '1.0'
        document.getElementById('chap0').style.transitionDuration = '0.5'
        document.getElementById('chap0').style.opacity = '0.0'
        document.getElementById('return').style.display = 'block'
        document.getElementById('return').style.zIndex = '10'
    }
}


//open a discoDesc
function descr(id) {

    for (let i of document.getElementsByClassName('descDisque')) {
        i.style.zIndex = null
        i.style.opacity = null
    }
    id.style.zIndex = '5'
    id.style.opacity = '1.0'
}

//switch chapter
function change(id, id2) {
  collapse();
  expand(id, id2);
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

//start the intro video
function start() {
    IntroVideoLol.style.display = 'none'
    hide.style.display = 'none'
    LeSaintJimi.style.opacity = '0.0';
    IntroVideo.play();
}

//skip intro video
function skip() {
    IntroVideo.pause();
    IntroVideoLol.pause();
    Intro.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
    HideBeforeIntro.style.opacity = '1';
    hide2.style.opacity = '0';
    Holy_sound.play();
    document.style.overflow = 'auto';
}

//change video
function diff() {
    IntroVideo.style.display = 'none'
    hide.style.display = 'none'
    LeSaintJimi.style.opacity = '0.0';
    IntroVideoLol.play();
}

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});
