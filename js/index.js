$(document).ready(function(){
// nav link shadow
  $('.navbar-nav').on('click','li', function(){
      $('.navbar-nav li.grey').removeClass('grey');
      $(this).addClass('grey');

  });


// NavBar Hamburger Menu
 $('.hamburger-wrapper').on('click', ()=> {
   $('.navbar-toggler').toggleClass('close');
 });



// Project Section
  $('.pr').hover(function() {
    $('.popup',this).css('display','flex');
  },function() {
    $('.popup',this).css('display','none');

  });


});
