$( document ).ready(function() {
    $('.advantages-carousel').owlCarousel({
        margin:16,
        responsive:{
            0:{
                items:1,
                dots: true,
                loop:true,
            },
            768:{
                autoWidth: true,
                items:3,
                dots:false,
                loop:false,
                mouseDrag: false
            },
            2550:{
                autoWidth: true,
                margin: 32
            }
        }
    })
});