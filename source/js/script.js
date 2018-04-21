let menu_show = false;

window.onbeforeunload = function(){
  $(document).find('.highlight').removeClass('highlight');
  $(document).find('.clicked').removeClass('clicked');
  $(document).find('.float-menu li').hide();
  console.log('reset');
}

$(function() {
  $('.fade-in').fadeIn('slow');
  $('.fade-in-seq').each(function(i) {
    $(this).delay(50 * i).fadeIn('slow');
  })
})

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
