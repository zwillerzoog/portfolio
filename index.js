'use strict'

$('.about-button').on('click', () => {
    console.log('oouch!');
    $('.about-page').removeAttr('hidden');
    $('header').attr('hidden', true);
})

$('.header-button').on('click', () => {
    $('header').removeAttr('hidden');
    $('.about-page').attr('hidden', true);
});

window.addEventListener(‘scroll’, e => {})