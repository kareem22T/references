$(function () {
    $('.lessons li .img').on('click', function () {
        $(this).parent().find('.pop-up-container').css('display', 'flex')
        $(this).parent().find('.pop-up-container').fadeIn()
        $(this).parent().find('.pop-up-container').find('.pop-up').addClass('animate__animated animate__rubberBand')
    })
    $('.lessons li .fa-xmark').on('click', function () {
        $(this).parent().parent().find('.pop-up').removeClass('animate__animated animate__rubberBand')
        $(this).parent().parent().fadeOut()
    })
})