$(document).ready(function () {
    $('.advantages-carousel').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    centerMode: true,
                }
            }
        ]
    });

    $('.recommended-carousel').slick({
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                }
            }
        ]
    });

    //ticking machine
    var percentTime;
    var tick;
    var time = .1;
    var progressBarIndex = 0;

    $('.progress-bar-container-mobile .item').hide();
    $('.progress-bar-container-mobile .item [data-slick-index=0]').parent().show();
    $('.recommended-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.progress-bar-container-mobile .item').hide();
        $('.progress-bar-container-mobile .item [data-slick-index=' + nextSlide +']').parent().show();
        progressBarIndex = nextSlide;
        startProgressbar();
    });

    $('.progress-bar-container-mobile .progress-bar').each(function (index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    $('.progress-bar-container .progress-bar').each(function (index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 5);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.single-item').slick('slickNext');
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }

    startProgressbar();
    // End ticking machine

    $('.item').click(function () {
        clearInterval(tick);
        var goToThisIndex = $(this).find("span").data("slickIndex");
        $('.single-item').slick('slickGoTo', goToThisIndex, false);
        startProgressbar();
    });


    $('.testimonials').slick({
        appendArrows: '.testimonials-nav',
        appendDots: '.testimonials-nav',
        draggable: true,
        dots: true,
        nextArrow: '<button type="button" class="slick-next">&#8594;</button>',
        prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true,
                }
            }
        ]
    });
});