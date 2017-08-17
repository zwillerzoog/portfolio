'use strict';

$('.about-button').on('click', () => {
  console.log('oouch!');
  $('.about-page').removeAttr('hidden');
  $('header').attr('hidden', true);
  $('#work').attr('hidden', true);
  $('');
});

$('.header-button').on('click', () => {
  $('header').removeAttr('hidden');
  $('.about-page').attr('hidden', true);
  $('#contact').attr('hidden', true);
});

$('.work-button').on('click', () => {
  $('#work').removeAttr('hidden');
  $('.about-page').attr('hidden', true);
  $('#contact').attr('hidden', true);
  $('header').attr('hidden', true);
});

$('.contact-button').on('click', () => {
  $('#contact').removeAttr('hidden');
  $('header').attr('hidden', true);
  $('.about-page').attr('hidden', true);
  $('#work').attr('hidden', true);
});
// function endpointSend() {
//     const endpoint = location.hash;

//     switch (endpoint) {
//         case '#about':

//     }

//}

//$(window).on('hashchange', function() {
$(document).ready(() => {
  console.log('hey it loaded woah');
//   window.onscroll(console.log('scrollin'));
  switch (location.hash) {
    case '#about': 
      console.log('abouts here');
     return $('.about-button').trigger('click');
    case '#work':
        return $('.work-button').trigger('click');
    case '#contact':
       return $('.contact-button').trigger('click');
    default: 
    return null;
  }
});


// })

window.addEventListener('scroll', function(e) {
    console.log('YAYEEE');
}); 
