
$(window).on('unload', function() {
  console.log('unload');
  $(document).find('.highlight').removeClass('highlight');
  $(document).find('.clicked').removeClass('clicked');
  $(document).find('.float-menu li').hide();
  // console.log('reset');
});

$(document).ready(function() {
  console.log('ready');
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
