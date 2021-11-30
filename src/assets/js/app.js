$(document).ready(function () {
    $(".page-nav").click(function (event) {
        $('.active').removeClass('active');
        $(this).addClass('active');
    })
})