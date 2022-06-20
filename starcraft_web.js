let zerg = document.querySelector('.zerg_title');
let terran = document.querySelector('.terran_title');
let protoss = document.querySelector('.protoss_title');
let table = document.querySelectorAll('table');

let zerg_bg = document.querySelector('.zerg');
let terran_bg = document.querySelector('.terran');
let protoss_bg = document.querySelector('.protoss');


window.addEventListener('scroll',function(){
    let value = window.scrollY;
    console.log('screenY',value);

    zerg_bg.style.backgroundPositionY = value * -0.2 +'px';
    terran_bg.style.backgroundPositionY = value * -0.2 +'px';
    protoss_bg.style.backgroundPositionY = value * -0.7 +'px';

    if(value>140){
        zerg.style.animation='races_slide 2s forwards';
        terran.style.animation='races_slide 2s forwards';
        protoss.style.animation='races_slide 2s forwards';
        
        for(let i=0; i<table.length; i++){
            table[i].style.animation='table_slide 2s forwards';
        }
    }
});