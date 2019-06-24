/* jshint esversion: 8 */
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

  // contact section forms and buttons

  // variables

  const status = $('.status');
  status.innerHTML="";

  $('#submit-btn').click(function() {
    $('.formContact').validate({
      rules: {
        email: {required: true, email: true},
        name: {required: true, lettersonly: true, name: true},
        phone: {required: true, phoneUs: true, name: true},
        message: {required: true, name: true}

      },
      messages: {
       email: {required: 'email cant be blank..', email: 'email is not valid..'},
       name: {required: 'name cant be blank..', name: 'name is not valid..'},
       phone: {required: 'phone cant be blank..', phone: 'phone is not valid..'},
       message: {required: 'message cant be blank..', name: 'message is not valid..'}
     },

     errorPlacement: function(error, element){
       if (error) {
         error.insertAfter('.formContact');
       }
     }

    });

  });


  const popUp=()=>{
    markup =
    `
    <div class="viewMoreWindow window1">
      <img class="projectImg" src="" alt="">
      <h5 class="projectTitle"></h5>
      <p class="description"></p>
      <button class="viewSight" type="button" name="button"></button>
      <button class="viewCode" type="button" name="button"></button>
    </div>
    `;

    document.querySelector('.windows').insertAdjacentHTML('beforeend', markup);
  };


popUp();

});
