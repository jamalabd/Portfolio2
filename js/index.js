$(document).ready(function(){
  $('.navbar-nav').on('click','li', function(){
      $('.navbar-nav li.grey').removeClass('grey');
      $(this).addClass('grey');
  });
});
