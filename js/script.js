$(document).ready(function () {

    // $("input[name='tel']").mask("+7(999)999-99-99");



    jQuery.fn.extend({
        toggleText: function (a, b) {
            var that = this;
            if (that.text() != a && that.text() != b) {
                that.text(a);
            } else
                if (that.text() == a) {
                    that.text(b);
                } else
                    if (that.text() == b) {
                        that.text(a);
                    }
            return this;
        }
    });

    $('.all-nom').click(function () {
        event.preventDefault();
        $('.hidden-wrap').slideToggle(500);

        $(this).toggleText('Все номинации', 'Скрыть номинации');
    })


    //    переключатель о спикере
    $('.speaker-info').on('click', function () {
        event.preventDefault();
        $(this).parent().addClass('active');

    })
    $('.speaker .close').on('click', function () {
        event.preventDefault();
        $(this).parent().parent().removeClass('active');

    })






    //slider-video
    var swiper1 = new Swiper('.slider-video', {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }


    })

    //slider-photo
    var swiper2 = new Swiper('.slider-photo', {
        slidesPerView: 3,
        spaceBetween: 20,
        //        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            576: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 991px
            991: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }

    })



    //    верхнее липкое меню
    $(window).scroll(function () {

        //        var toggler = 0;

        if (pageYOffset > 100) {

            //            if (toggler === 0) {

            $('nav').addClass('activate')

            //                toggler = 1
            //            }

        } else if (pageYOffset < 100) {

            $('nav').removeClass('activate')

            //            toggler = 0
        }

    })
});



$('.mobile-button').on('click', function () {
    event.preventDefault();
    $(this).toggleClass('active')
    $(this).next().toggleClass('active')
})

$(document).mouseup(function (e) { // событие клика по веб-документу

    if (!$(e.target).hasClass('mobile-button')) { //если не крестик, то

        var div = $("#mobile-menu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0 // и не по его дочерним элементам

        ) {

            div.removeClass('active'); // скрываем его
            $('.mobile-button').removeClass('active')
        }
    }



    if (!$(e.target).is('input[type="checkbox"]')) {
        console.log('check')
        $('input[type="checkbox"]').next().css('border-color', '#4f595f')
    }



});


//кнопка наверх

$(window).scroll(function () {
    if (pageYOffset > 100) {
        $('.up-link').addClass('active')
    } else {
        $('.up-link').removeClass('active')
    }
})

$('.up-link').click(function () {
    event.preventDefault()
    $('html, body').animate({
        scrollTop: $('#section1').position().top
    }, 200)
})


//карта

$('.watch-map').on('click', function () {
    event.preventDefault()
    $('.wrap-map').addClass('active')
})

$('.close-map').on('click', function () {
    event.preventDefault()
    $('.wrap-map').removeClass('active')
})



//стилизация чекбокс инпутов
var checked = $('form input[type="checkbox"]');


checked.each(function (i, elem) {


    $(elem).next().click(function () {
        if ($(this).prev().prop('checked') == false) {
            $(this).css('border-color', '#4f595f')
        }
    })
})

$('input[type="submit"]').on('click', function () {

    checked.each(function (i, elem) {


        if ($(elem).prop('checked') == false) {

            $(elem).next().css('border-color', 'red')

        } else if ($(elem).prop('checked') == true) {
            $(elem).next().css('border-color', '#4f595f')
        }
    })

})




//modal

$('.modal-button').click(function () {
    event.preventDefault();

    //    checked.each(function (i, elem) {
    //        $(elem).next().css('border-color', '#4f595f')
    //    })

    $('.wrap-modal').css('display', 'flex')

    $('.layer').fadeIn()

    $('body, html').css('overflow-y', 'hidden')

    if ($(this).hasClass('accred')) {
        $('.accred-modal').fadeIn()

    } else if ($(this).hasClass('stay-partner')) {
        $('.stay-partner-modal').fadeIn()

    } else if ($(this).hasClass('register-button') || $(this).hasClass('register')) {
        $('.register-modal').fadeIn()

    }



})



$('.close-modal, .layer').click(function () {
    event.preventDefault();
    $('.modal, .layer').fadeOut();
    $('body, html').css('overflow-y', 'unset');

    $('.wrap-modal').css('display', 'none')
})




// проверяем, что заполнены все поля. Если да - отправляем форму

$('.order').submit(function (event) {

    event.preventDefault();
    //
    var form = $(this);


    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'http://f.mserver.red/gen-dir-button/js/mail.php', // путь к обработчику
        data: form.serialize(),
        success: function (message) {
            if (message == 'ok') {
                form.trigger('reset'); // очищаем поля формы


                $('.modal').fadeOut();
                $('.layer').fadeIn();

                $('.thank-modal').fadeIn();



                setTimeout(function () {
                    $('.layer').fadeOut();
                    $('.thank-modal').fadeOut();


                    $('input[type="checkbox"]').next().css('border-color', '#4f595f')
                }, 2000);

                $('body').css('overflow-y', 'unset')



                // ошибка отправки формы
            } else if (message == 'err') {
                alert('Не отправилось сообщение!');
            }
        },
        // ошибка json
        error: function () {
            alert('Ошибка данных!');
        },
    });

});


$('.accred-submit').submit(function (event) {

    event.preventDefault();
    //
    var form = $(this);


    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'http://f.mserver.red/gen-dir-button/js/mail2.php', // путь к обработчику
        data: form.serialize(),
        success: function (message) {
            if (message == 'ok') {
                form.trigger('reset'); // очищаем поля формы


                $('.modal').fadeOut();
                $('.layer').fadeIn();

                $('.accred-thank-modal').fadeIn();



                setTimeout(function () {
                    $('.layer').fadeOut();
                    $('.accred-thank-modal').fadeOut();


                    $('input[type="checkbox"]').next().css('border-color', '#4f595f')
                }, 2000);

                $('body').css('overflow-y', 'unset')



                // ошибка отправки формы
            } else if (message == 'err') {
                alert('Не отправилось сообщение!');
            }
        },
        // ошибка json
        error: function () {
            alert('Ошибка данных!');
        },
    });

});
