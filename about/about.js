//Show Contact Descriptions
$('.contact-link-email').mouseover(() => {
    $('.email-words').removeAttr('hidden')
  })
  $('.contact-link-linkedin').mouseover(() => {
    $('.linkedin-words').removeAttr('hidden')
  })
  $('.contact-link-github').mouseover(() => {
    $('.github-words').removeAttr('hidden')
  })
  //Hide Contact Descriptions
  $('.contact-link-email').mouseout(() => {
    console.log('HIIIII')
    $('.email-words').attr('hidden', true)
  })
  $('.contact-link-linkedin').mouseout(() => {
    $('.linkedin-words').attr('hidden', true)
  })
  $('.contact-link-github').mouseout(() => {
    $('.github-words').attr('hidden', true)
  })