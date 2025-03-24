

// ページが読み込まれてから3秒後にクラスを追加
setTimeout(function () {
    $('.none').show();
}, 5000); // 3000ミリ秒（3秒）

setTimeout(function () {
    $('.header').css('transform','translateY(0)')
}, 5000);

setTimeout(function () {
    const elements = document.querySelectorAll('.my-img-before');
    elements.forEach(function (element) {
        element.classList.remove('my-img-before');
        element.classList.add('my-img-after');
    });
}, 5000)



setTimeout(function () {
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    function scrollAnimation() {
        $(window).scroll(function () {
            $(".u-fade-type-up").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('is-active'); // アクティブ化
                }
            });
        });
    }

    // 初期トリガー（ページ読み込み時にスクロール位置を反映）
    $(window).trigger('scroll');
}, 7000); // 5000ミリ秒（5秒）


setTimeout(function () {
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    function scrollAnimation() {
        $(window).scroll(function () {
            $(".u-fade-type-up2").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 400) {
                    $(this).addClass('is-active2'); // アクティブ化
                }
            });
        });
    }

    // 初期トリガー（ページ読み込み時にスクロール位置を反映）
    $(window).trigger('scroll');
}, 7100); // 5000ミリ秒（5秒）


  
