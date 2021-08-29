const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)







// animation search
;(function() {
    const searchEl = $('.header__wrap__logoSearch')
    const inputSearchEl = $('.input__search')
    const iconSearchEl = $('.search__logo')

    searchEl.onclick = function () {
        inputSearchEl.classList.add('open')
    }
    iconSearchEl.ondblclick = function () {
        inputSearchEl.classList.remove('open')

    }
})();


//CLOCK
function clockTime() {
    var clock = new Date
    var hours = clock.getHours()
    var minutes = clock.getMinutes()
    var dates = clock.getDate()
    switch (months = clock.getMonth()) {
        case 0:
            months ='January'
            break;
        case 1:
            months ='February'
            break;
        case 2:
            months ='March'
            break;
        case 3:
            months ='April'
            break;
        case 4:
            months ='May'
            break;
        case 5:
            months ='June'
            break;
        case 6:
            months ='July'
            break;
        case 7:
            months ='August'
            break;
        case 8:
            months ='September'
            break; 
        case 9:
            months = 'October'
            break;
        case 10:
            months = 'November'
            break;
        case 11:
            months ='December'
            break;
    }
    var years = clock.getFullYear()
    const hourEl = $('.hour')
    const minuteEl = $('.minute')
    const monthEl = $('.month')
    const dayEl = $('.day')
    const yearEl = $('.year')
    
    hourEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minutes+1);
    monthEl.innerHTML = months;
    dayEl.innerHTML = dates;
    yearEl.innerHTML = years;

};
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
clockTime();
setInterval(clockTime,50000)


// soundtrack
;(function () {
    const btn__relax = $('.button__toggle__play')
    const pause__music = $('.icon__music__pause')
    const play__music = $('.icon__music__play')
    const audioSoundtrackEl = $('.audio__soundtrack')

    audioSoundtrackEl.onpause = function(){
        btn__relax.onclick = function() {
            console.log('ngohongthong');
            pause__music.classList.toggle('toggle__music__pause')
            play__music.classList.toggle('toggle__music__play')
            audioSoundtrackEl.play()
        }}
    audioSoundtrackEl.onplay = function(){
        btn__relax.onclick = function() {
            console.log('pine');
            pause__music.classList.toggle('toggle__music__pause')
            play__music.classList.toggle('toggle__music__play')
            audioSoundtrackEl.pause()
        }}
    
    
    
})();




