import {parallaxWelcome} from './common/parallax_welcome';
var $ = require('jquery');

$(document).ready(function(){   
  // это мягкий скролл от секции к секции
  $('.arrow-down__link').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
    }
    return false;
  });
  
  $('.hamburger').on('click', function(){ // гамбургер на jquery
    $(this).toggleClass('active');

    
  });
  $('.sign-in').on('click', function(){ //переворачивание плашки
    $('.info-container').toggleClass('active');
  });
});



var blur = (function(){
  if(document.querySelector('.form__connect') || document.querySelector('.connect_bg')){
    
    var wrapper = document.querySelector('.form__connect'),// blur не знаю почему не работает
      connectBg = document.querySelector('.connect_bg');

    return {
      set: function() {
        var imgWidth =  document.querySelector('.form').offsetWidth,
          posLeft = -wrapper.offsetLeft,
          posTop =  -wrapper.offsetTop;
        connectBg.style.backgroundSize = `${imgWidth}px auto`;
        connectBg.style.backgroundPosition = `${posLeft}px ${posTop}px`;
      },
    };
  }
})();


if(typeof blur === 'function'){
  blur.set();

  window.onresize = function(){
    blur.set();
  };
}



