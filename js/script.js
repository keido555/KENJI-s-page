// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

$(function() {
    $('a[href^="#"]').click(function() {
        let speed = 400;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    })
})

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
