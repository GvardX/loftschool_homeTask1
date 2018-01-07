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

module.exports = slider;