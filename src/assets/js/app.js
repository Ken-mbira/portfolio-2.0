$(document).ready(function () {
    $(".page-nav").click(function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    })

    $(window).scroll(function () {
        $('.target').each(function (){
            if($(window).scrollTop() >= $(this).offset().top){
                var id = $(this).attr('id');
                $('.active').removeClass('active');
                $(".page-nav").each(function(){
                    if ($(this)[0].href == `http://localhost:4200/#${id}`){
                        $(this).addClass('active');
                    }
                })
            }
        })
    })
})