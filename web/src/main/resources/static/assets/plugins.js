// plugins.js — тут производим инициализацию jQuery плагинов и производим действия с элементами на фронте


$(document).ready(function () {
    $('.menu li').on('click', function () {
        $('.menu .active').removeClass('active');
        $(this).addClass('active')
    })
});

$(document).ready(function () {
    $('#search-btn').on('click', function () {
        $(this).closest('.search-form').addClass('searchable');
    })
});

// Lazy Load
$(".tbody .row").slice(30).hide();

var mincount = 30;
var maxcount = 50;


$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50) {
        $(".tbody .row").slice(mincount, maxcount).slideDown(1400);

        mincount = mincount + 10;
        maxcount = maxcount + 10

    }
});


//Фиксируем шапку таблицы
$(window).scroll(function(){
    if ($(window).scrollTop() >= 192) {
        $('.thead').addClass('fixed-header');
    }
    else {
        $('.thead').removeClass('fixed-header');
    }
});

