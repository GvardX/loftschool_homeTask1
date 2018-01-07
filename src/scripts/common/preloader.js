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
      }, 2000);
   
    }
  }
}());

module.exports = preloader;