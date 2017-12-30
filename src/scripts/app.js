import {parallaxWelcome} from './common/parallax_welcome';
var $ = require('jquery');

$(document).ready(function(){   
  // это мягкий скролл от секции к секции
  $('.arrow-down__link').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 300); 
    }
    return false;
  });
  
  $('.hamburger').on('click', function(){ // гамбургер на jquery
    $(this).toggleClass('active');
    $('.fullscreen-menu').toggleClass('active');
    if($('.hamburger').hasClass('active')){
      $('html').css('overflow-y', 'hidden');
    }else{
      $('html').css('overflow-y', 'auto');
    }
  });
  $('.sign-in, .to-main').on('click', function(){ //переворачивание плашки
    $('.block-info .about-me__wrapper').toggleClass('active-sign');
    $('.block-info .login__wrapper').toggleClass('active-sign');
    
  });

  var slider = (function (){
    var image = $('.slider-show__img');
    var sliderInfoTitle = ['Сайт школы онлайн образования', 'Современный блог об ИТ технологиях', 'Портал видеоуроков и IT сообщество'];
    var sliderInfoLang = ['Html, Css, Javacript', 'Html, Css, Javacript, Node.js, Vue.js', 'Html, Css, Javacript, Php'];
    $('.slider-button_next').on('click', () => {
      let activeImage = $('.slider-show__img.active-img'),
        activeImageIndex = activeImage.index(),
        nextImageIndex = activeImageIndex + 1,
        nextImage = $('.slider-show__img').eq(nextImageIndex);
      activeImage.fadeOut(300);
      activeImage.removeClass('active-img');
      if(nextImageIndex == ($('.slider-show__img:last').index()+1)){
        $('.slider-show__img:nth-child(1)').fadeIn(300);
        $('.slider-show__img:nth-child(1)').addClass('active-img');
        $('.slider-info__title').text(sliderInfoTitle[0]);
        $('.slider-info__lang').text(sliderInfoLang[0]);
        
      } else {
        nextImage.fadeIn(300);
        nextImage.addClass('active-img');
        $('.slider-info__title').text(sliderInfoTitle[nextImageIndex]);
        $('.slider-info__lang').text(sliderInfoLang[nextImageIndex]);
      }
    });
    $('.slider-button_prev').on('click', () => {
      let activeImage = $('.slider-show__img.active-img'),
        activeImageIndex = activeImage.index(),
        prevImageIndex = activeImageIndex - 1,
        prevImage = $('.slider-show__img').eq(prevImageIndex);
      activeImage.fadeOut(300);
      activeImage.removeClass('active-img');
      if(prevImageIndex == ($('.slider-show__img:first').index()-1)){
        $('.slider-show__img:last-child').fadeIn(300);
        $('.slider-show__img:last-child').addClass('active-img');
        $('.slider-info__title').text(sliderInfoTitle[image.length-1]);
        $('.slider-info__lang').text(sliderInfoLang[image.length-1]);
      } else {
        prevImage.fadeIn(300);
        prevImage.addClass('active-img');
        $('.slider-info__title').text(sliderInfoTitle[prevImageIndex]);
        $('.slider-info__lang').text(sliderInfoLang[prevImageIndex]);
      }
    });
  }());

  

  /*
  var preloader = (function () {
    var percentsTotal = 0,
      preloader = $('.preloader');
  
    var imgPath = $('*').map(function (ndx, element) {
      var background = $(element).css('background-image'),
        img = $(element).is('img'),
        path = '';
  
      if (background != 'none') {
        path = background.replace('url("', '').replace('")', '');
      }
  
      if (img) {
        path = $(element).attr('src');
      }
  
      if (path) return path;
      console.log(path);
  
    });
  
    var setPercents = function (total, current) {
      var persents = Math.ceil(current / total * 100);
  
      $('.preloader__percents').text(persents + '%');
  
      if (persents >= 100) {
        preloader.fadeOut();
      }
    };
  
    var loadImages = function (images) {
  
      if (!images.length) preloader.fadeOut();
  
      images.forEach(function (img, i, images) {
        var fakeImage = $('<img>', {
          attr: {
            src: img,
          },
        });
  
        fakeImage.on('load error', function () {
          percentsTotal++;
          setPercents(images.length, percentsTotal);
        });
      });
    };
  
    return {
      init: function () {
        var imgs = imgPath.toArray();
  
        loadImages(imgs);
      },
    };
  }());*/
  $('.main-form').submit(function(e){
    e.preventDefault();
    var userValid;
    var passwordValid;
    var userName = $('#user-name').val();
    var userPass = $('#user-pass').val();
    if(userName == ''){
      $('#user-name').removeClass('form_success').addClass('form_failed');
      userValid = false;
    }else{
      $('#user-name').removeClass('form_failed').addClass('form_success');
      userValid = true;
    }
    if(userPass == ''){
      $('#user-pass').removeClass('form_success').addClass('form_failed');
      passwordValid = false;
    }else{
      $('#user-pass').removeClass('form_failed').addClass('form_success');
      passwordValid = true;
    }
    if(userValid == true && passwordValid == true) {
      $('.main-form').unbind('submit').submit();
    }

  });
  
  
});
let images = document.images,
  imagesTotal = images.length,
  imagesCurrent = 0,
  preloader = $('.preloader'),
  showPercent = $('.preloader__percents');

for(var i = 0; i < imagesTotal; i++){
  var imageClone = new Image();
  imageClone.onload = funcImageLoaded;
  imageClone.onerror = funcImageLoaded;
  imageClone.src = images[i].src;
}

function funcImageLoaded(){
  imagesCurrent++;
  showPercent.innerHTML = (((100/imagesTotal)*imagesCurrent)<<0) + '%';
  if(imagesCurrent >= imagesTotal) {
    if(!preloader.hasClass('done')){
      setTimeout(() => {
        return preloader.addClass('done');
      }, 2000);
      
    }

  }
}



/*var images = $('img'),
  imagesTotal = images.length,
  imagesCurrent = 1,
  preloader = $('.preloader'),
  showPercent = $('.preloader__percents');
function imgLoaded(){
  setTimeout(() => {
    showPercent.text(`${imagesCurrent/imagesTotal*100}%`);
  }, 1000);
}
imgLoaded()*/


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



