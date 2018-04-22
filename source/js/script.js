$(window).on('unload', function() {
  console.log('unload');
  $(document).find('.highlight').removeClass('highlight');
  $(document).find('.clicked').removeClass('clicked');
  $(document).find('.float-menu li').hide();
  // console.log('reset');
});

$(document).ready(function() {
  console.log('ready');

  $('.fade-in').addClass('show');
  $('.fade-in-seq').each(function(i) {
    $(this).delay(50 * i).addClass('show');
  });

  $('.article-card').hover(function() {
    $(this).find('.article-title').toggleClass('highlight');
  });

  $('.article-card').click(function() {
    $(this).find('.article-title').addClass('highlight');
  });

  let menuShow = false;

  $('.burger-icon').click(function() {
    $(this).toggleClass('clicked');
    if(!menu_show) {
      menuShow = true;
      $('.float-menu li').each(function(i) {
        $(this).delay(50 * i).fadeIn(500);
      });
    } else {
      menuShow = false;
      $('.float-menu li').each(function(i){
        $(this).delay(50 * i).fadeOut(500);
      });
    }
  });

  $(document).click(function(e) {
    if ($(e.target).closest('.burger-icon').length === 0) {
        $('.burger-icon').removeClass('clicked');
        menuShow = false;
        $('.float-menu li').each(function(i){
          $(this).delay(50 * i).fadeOut(500);
        });
      }
  });
});
