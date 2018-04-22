 // iOS sticky hover fix
 (function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document);

$(window).on('unload', function() {
  $(document).find('.highlight').removeClass('highlight');
  $(document).find('.clicked').removeClass('clicked');
  $(document).find('.float-menu li').hide();
  // console.log('reset');
});

window.addEventListener('pagehide', function() {
  $(document).find('.highlight').removeClass('highlight');
  $(document).find('.clicked').removeClass('clicked');
  $(document).find('.float-menu li').hide();
}, false);


$(document).ready(function() {
  $(document).find('.highlight').removeClass('highlight');
  $(document).find('.clicked').removeClass('clicked');
  $(document).find('.float-menu li').hide();

  let menuShow = false;
  $('.float-menu li').hide();

  $('.fade-in').addClass('show');
  $('.fade-in-seq').each(function(i) {
    $(this).delay(50 * i).addClass('show');
  });

  $('.article-card').hover(function() {
    $(this).find('.article-title').toggleClass('highlight');
  });

  $('.article-card').on('click', function() {
    $(this).find('.article-title').addClass('highlight');
  });

  var burgerClick = function() {
    console.log($(this));
    $(this).toggleClass('clicked');
    if(!menuShow) {
      menuShow = true;
      $('.float-menu li').each(function(i) {
        $(this).delay(50 * i).fadeIn(500);
      });
    } else {
      menuShow = false;
      $('.float-menu li').each(function(i) {
        $(this).delay(50 * i).fadeOut(500);
      });
    }
  }

  $('.burger-icon').on('click', burgerClick);

  $(document).on('click', function(e) {
    if ($(e.target).closest('.burger-icon').length === 0) {
      $('.burger-icon').removeClass('clicked');
      menuShow = false;
      $('.float-menu li').each(function(i) {
        $(this).delay(50 * i).fadeOut(500);
      });
    }
  });
});
