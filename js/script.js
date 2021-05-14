// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

// home > btn
// ==================================================
$(function() {
    $('.contact-btn').hover(function() {
        $(this).css('margin-top', '4px'),
        $(this).css('border-bottom', 'solid 2px #C1B800')
    },function() {
        $(this).css('margin-top', 0),
        $(this).css('border-bottom', 'solid 6px #C1B800')
    });
});

// contact > btn
// ==================================================
$(function() {
    $('.contact-btn-2').hover(function() {
        $(this).css('margin-top', '4px'),
        $(this).css('border-bottom', 'solid 2px #C1B800')
    },function() {
        $(this).css('margin-top', 0),
        $(this).css('border-bottom', 'solid 6px #C1B800')
    });
});

// animation / wow.js
// ==================================================
$(function() {
    new WOW().init();
});
