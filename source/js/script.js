let menu_show = false;

$(window).bind('pagecontainershow', function() {
  $(document).find('.highlight').removeClass('highlight');
  $(document).find('.clicked').removeClass('clicked');
  $(document).find('.float-menu li').hide();
});

$('.article-card').hover(function() {
  $(this).find('.article-title').toggleClass('highlight');
});

$('.article-card').click(function() {
  $(this).find('.article-title').addClass('highlight');
});

$('.burger-icon').click(function() {
  $(this).toggleClass('clicked');
  if(!menu_show) {
    menu_show = true;
    $('.float-menu li').each(function(i) {
      $(this).delay(50 * i).fadeIn(500);
    });
  } else {
    menu_show = false;
    $('.float-menu li').each(function(i){
      $(this).delay(50 * i).fadeOut(500);
    });
  }
});

$('.nav .nav-item').hover(function() {
  $(this).animate('perspective');
});
