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
      $('.fullscreen-menu').css('visibility', 'visible');
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
        nextImage = $('.slider-show__img').eq(nextImageIndex),
        activeBtnImgUp = $('.slider-button__img-up.active-btn'),
        activeBtnImgDown = $('.slider-button__img-down.active-btn'),
        btnImgDownNotActive = $('.slider-button__img-down:not(.active-btn)'),
        btnImgUpNotActive = $('.slider-button__img-up:not(.active-btn)');
      activeImage.fadeOut(500);
      activeImage.removeClass('active-img');
      btnImgDownNotActive.animate({top: '-100%'}, 0);
      btnImgUpNotActive.animate({top: '100%'}, 0);
      activeBtnImgUp.animate({
        top: '-100%',
      }, 500, function(){
        $(this).animate({top: '100%'}, 0);
      });
      activeBtnImgUp.removeClass('active-btn');
      activeBtnImgDown.animate({
        top: '100%',
      }, 500, function(){
        $(this).animate({top: '-100%'}, 0);
      });
      activeBtnImgDown.removeClass('active-btn');
      if(nextImageIndex == ($('.slider-show__img:last').index()+1)){
        $('.slider-show__img:nth-child(1)').fadeIn(500);
        $('.slider-show__img:nth-child(1)').addClass('active-img');
        $('.slider-button__img-up:nth-child(1)').animate({
          top: '0%',
        }, 500);
        $('.slider-button__img-up:nth-child(1)').addClass('active-btn');
        $('.slider-button__img-down:nth-child(1)').animate({
          top: '0%',
        }, 500);
        $('.slider-button__img-down:nth-child(1)').addClass('active-btn');
        $('.slider-info__title').text(sliderInfoTitle[0]);
        $('.slider-info__lang').text(sliderInfoLang[0]);
        
      } else {
        nextImage.fadeIn(500);
        nextImage.addClass('active-img');
        activeBtnImgUp.next().addClass('active-btn').animate({
          top: 0,
        }, 500);
        activeBtnImgDown.next().addClass('active-btn').animate({
          top: 0,
        }, 500);
        $('.slider-info__title').text(sliderInfoTitle[nextImageIndex]);
        $('.slider-info__lang').text(sliderInfoLang[nextImageIndex]);
      }
    });
    $('.slider-button_prev').on('click', () => {
      let activeImage = $('.slider-show__img.active-img'),
        activeImageIndex = activeImage.index(),
        prevImageIndex = activeImageIndex - 1,
        prevImage = $('.slider-show__img').eq(prevImageIndex),
        activeBtnImgUp = $('.slider-button__img-up.active-btn'),
        activeBtnImgDown = $('.slider-button__img-down.active-btn'),
        btnImgDownNotActive = $('.slider-button__img-down:not(.active-btn)'),
        btnImgUpNotActive = $('.slider-button__img-up:not(.active-btn)');
      activeImage.fadeOut(500);
      activeImage.removeClass('active-img');
      btnImgDownNotActive.animate({top: '100%'}, 0);
      btnImgUpNotActive.animate({top: '-100%'}, 0);
      activeBtnImgDown.animate({
        top: '-100%',
      }, 500, function(){
        $(this).animate({top: '100%'}, 0);
      });
      activeBtnImgDown.removeClass('active-btn');
      activeBtnImgUp.animate({
        top: '100%',
      }, 500, function(){
        $(this).animate({top: '-100%'}, 0);
      });
      activeBtnImgUp.removeClass('active-btn');
      if(prevImageIndex == ($('.slider-show__img:first').index()-1)){
        $('.slider-show__img:last-child').fadeIn(500);
        $('.slider-show__img:last-child').addClass('active-img');
        $('.slider-button__img-up:last-child').animate({
          top: '0%',
        }, 500);
        $('.slider-button__img-up:last-child').addClass('active-btn');
        $('.slider-button__img-down:last-child').animate({
          top: '0%',
        }, 500);
        $('.slider-button__img-down:last-child').addClass('active-btn');
        $('.slider-info__title').text(sliderInfoTitle[image.length-1]);
        $('.slider-info__lang').text(sliderInfoLang[image.length-1]);
      } else {
        prevImage.fadeIn(500);
        prevImage.addClass('active-img');
        activeBtnImgUp.prev().addClass('active-btn').animate({
          top: 0,
        }, 500);
        activeBtnImgDown.prev().addClass('active-btn').animate({
          top: 0,
        }, 500);
        $('.slider-info__title').text(sliderInfoTitle[prevImageIndex]);
        $('.slider-info__lang').text(sliderInfoLang[prevImageIndex]);
      }
    });
  }());

  
  $('.main-form').submit(function(e){
    e.preventDefault();
    var userValid;
    var passwordValid;
    var userName = $('#user-name').val();
    var userPass = $('#user-pass').val();
    if(userName === ''){
      $('#user-name').removeClass('form_success').addClass('form_failed');
      userValid = false;
    }else{
      $('#user-name').removeClass('form_failed').addClass('form_success');
      userValid = true;
    }
    if(userPass === ''){
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
  
  var preloader = (function() {
    var images = document.images,
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
      showPercent.text( (100/imagesTotal) * imagesCurrent + ' %');
      if(imagesCurrent >= imagesTotal) {
        
        setTimeout(() => {
          if(!preloader.hasClass('done')){
            return preloader.addClass('done');
          }
        }, 1000);
   
      }
    }
  }());
  
  var headerParallax = (function(){
    var bgImg = $('.bg-img'),
      portfolio = $('.portfolio'),
      aboutMe = $('.about-me');
    var translate = 'translate3d(0)';
  
    return {
      move(block, windowScroll, strafeAmount){
        var strafe;
        if(block == bgImg) {      
          strafe = (windowScroll / -strafeAmount + '%');
        }else if(block == portfolio){
          strafe = ((-15) + (windowScroll / -strafeAmount) + '%');
        } else {
          strafe = (35 + (windowScroll / -strafeAmount) + '%');
          
        }
        block.css('top', strafe);
        block.css('tranform', 'translate3d(0, ' + strafe + ', 0)');
        
      },
      init(wScroll){
        this.move(bgImg, wScroll, 35);
        this.move(portfolio, wScroll, 23);
        this.move(aboutMe, wScroll, 15);
        
      },
    };
  }());
  
  $(window).on('scroll', ()=>{
    var wScroll = window.pageYOffset;
    headerParallax.init(wScroll);
  });
  
  
  let scrollMenu = (function() {
    const $news = $('.blog-article');
    const $item = $('.blog-menu__item');
    const $wrapMenu = $('.blog-menu');
    let positionArticle = [];
    let offsetHeight = 0; // смещение реагирования на сменю меню
    
    var _setPositionArticle = function(element) {
      const len = element.length;
      element.each(function(item) {
        positionArticle[item] = {};
        positionArticle[item].top = $(this).offset().top - offsetHeight;
        positionArticle[item].bottom =
          positionArticle[item].top + $(this).innerHeight();
      });
      // console.log(positionArticle);
    };
  
    var _scrollPageFixMenu = function(e) {
      let scroll = window.pageYOffset;
      if (scroll < $news.offsetHeight) {
        $wrapMenu.removeClass('fixed');
      } else {
        $wrapMenu.addClass('fixed');
      }
    };
  
    var _scrollPage = function(e) {
      let scroll = window.pageYOffset;
      positionArticle.forEach( (element, index) => {
        if (
          scroll >= element.top &&
          scroll <= element.bottom
        ) {
          $item
            .eq(index)
            .addClass('blog-menu__item_active')
            .siblings()
            .removeClass('blog-menu__item_active');
        }
      });
    };
  
    var _clickMenu = function(e) {
      let $element = $(e.target);
      let index = $element.index();
      let sectionOffset = positionArticle[index].top;
  
      $(document).off('scroll', _scrollPage);
      $element.siblings().removeClass('blog-menu__item_active');
      $('body, html').animate(
        {
          scrollTop: sectionOffset,
        },
        1000,
        () => {
          $element.addClass('blog-menu__item_active');
          $(document).on('scroll', _scrollPage);
        }
      );
    };
  
    var addListener = function() {
      $('.blog-menu__item').on('click', _clickMenu);
      $(document).on('scroll', _scrollPage);
      $(document).on('scroll', _scrollPageFixMenu);
  
      _setPositionArticle($news);
  
      $(window).on('load', function(e) {
        _setPositionArticle($news);
      });
  
      $(window).on('resize', function(e) {
        _setPositionArticle($news);
      });
      console.log($news);
    };
  
    return {
      init: addListener,
    };
  })();
  
  scrollMenu.init();
  
  if(document.querySelector('.form_connect') || document.querySelector('.connect__bg')){
    var blur = (function(){
     
      var wrapper = document.querySelector('.form_connect'),// blur не знаю почему не работает
        connectBg = document.querySelector('.connect__bg');
  
      return {
        set: function() {
          var imgWidth =  document.querySelector('.form-bg').offsetWidth,
            posLeft = -wrapper.offsetLeft,
            posTop =  -wrapper.offsetTop;
          connectBg.style.backgroundSize = `${imgWidth}px auto`;
          connectBg.style.backgroundPosition = `${posLeft}px ${posLeft - 93}px`;
        },
      };
    
    })();
    blur.set();
    console.log(blur);
    window.onresize = function(){
      blur.set();
    };
  
  }
});






