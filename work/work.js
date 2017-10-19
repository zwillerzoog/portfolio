console.log('hi')

$('.savage').on('click', () => {

    $('.savage-ghosting').removeAttr('hidden');
    $('.My-Rex').attr('hidden', true);
    $('.Loch-Ness-Learner').attr('hidden', true);
    $('.Feedback-Framework').attr('hidden', true)
})

$('.rex').on('click', () => {
    $('.My-Rex').removeAttr('hidden');
    $('.savage-ghosting').attr('hidden', true);
    $('.Loch-Ness-Learner').attr('hidden', true);
    $('.Feedback-Framework').attr('hidden', true)
})

$('.feedback').on('click', () => {
    $('.Feedback-Framework').removeAttr('hidden');
    $('.savage-ghosting').attr('hidden', true);
    $('.Loch-Ness-Learner').attr('hidden', true);
    $('.My-Rex').attr('hidden', true)
})

$('.loch').on('click', () => {
    console.log('HOWOOOWOW')
    $('.Loch-Ness-Learner').removeAttr('hidden');
    $('.savage-ghosting').attr('hidden', true);
    $('.Feedback-Framework').attr('hidden', true);
    $('.My-Rex').attr('hidden', true)
})