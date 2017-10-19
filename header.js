'use strict';

let aboutButton = $('.about-button');
let headerButton = $('.header-button');
let workButton = $('.work-button');
let about = $('.about-page');
let header = $('header');
let work = $('#work');

let buttonArray = [aboutButton, headerButton, workButton];
let pageArray = [about, header, work]

// for (let i = 0; i < buttonArray.length; i++) {
//   console.log(buttonArray[i], "was clicked")
//   buttonArray[i].on('click', () => {
//     pageArray[i].fadeIn(2000);
//     if (i < 1) {
//       pageArray[i + 1].fadeOut(1000);
//       pageArray[i + 2].fadeOut(1000);
//     } else if (i = 1) {
//       pageArray[i - 1].fadeOut(1000);
//       pageArray[i + 1].fadeOut(1000);
//     } else if (i > 1) {
//       pageArray[i - 1].fadeOut(1000);
//       pageArray[i - 2].fadeOut(1000);
//     }
//   })
  
  
// }


aboutButton.on('click', () => {
  console.log('oouch!');
  $('.about-page').removeAttr('hidden');
  $('header').attr('hidden', true)
  $('#work').attr('hidden', true);
  $('body').css('background-image', 'url(assets/running-horse-once.gif)');
});

headerButton.on('click', () => {
  console.log('headerrr')
  $('header').removeAttr('hidden');
  $('.about-page').attr('hidden', true);
  $('#contact').attr('hidden', true);
  $('body').css('background-image', 'url(assets/running-horse-once.gif)');
});

workButton.on('click', () => {
  console.log('work')
  $('#work').removeAttr('hidden');
  $('.about-page').attr('hidden', true);
  $('#contact').attr('hidden', true);
  $('header').attr('hidden', true);
  $('body').css('background-image', 'url(assets/running-horse-once.gif)');
});

$('.contact-button').on('click', () => {
  $('#contact').removeAttr('hidden');
  $('header').attr('hidden', true);
  $('.about-page').attr('hidden', true);
  $('#work').attr('hidden', true);
  $('body').css('background-image', 'url(assets/running-horse-once.gif)');
});

$('.contact-button').mouseover(() => {
  $('about-link').removeAttr('hidden')
})


//$(window).on('hashchange', function() {
$(document).ready(() => {
  console.log('hey it loaded woah');
//   window.onscroll(console.log('scrollin'));
  switch (location.hash) {
    case '#about': 
      console.log('abouts here');
     return aboutButton.trigger('click');
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
