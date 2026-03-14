$(function () {

    // 太陽ボタンをクリックしたとき
    $(".sun2").click(function () {
        $("#space").removeClass("night");
    });

    // 月ボタンをクリックしたとき
    $(".moon2").click(function () {
        $("#space").addClass("night");
    });

    // drink-readmoreをクリックしたとき
    $(".drink-readmore").click(function () {
        $("#drink-add-class").addClass("open");
    });

    // light-readmoreをクリックしたとき
    $(".light-readmore").click(function () {
        $("#light-add-class").addClass("open");
    });

    // btnをクリックしたとき
    $(".btn").click(function () {
        $("#drink-add-class").removeClass("open");
    });
    $(".btn").click(function () {
        $("#light-add-class").removeClass("open");
    });

    //toggle-btnをクリックしたとき
    $(".toggle-btn").click(function () {
        $("header").toggleClass("header-open");
    });

    //navをクリックしたとき
    $("header nav a").click(function(){
        $("header").removeClass("header-open");
    });

    //maskをクリックしたとき
    $(".mask").click(function () {
        $("#drink-add-class").removeClass("open");
    });
    $(".mask").click(function () {
        $("#light-add-class").removeClass("open");
    });


    /*=================================================
     スムーススクロール
     ===================================================*/
    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let headerHeight = $("header").outerHeight();
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 300, "swing");
        return false;
    });


    // スクロールしたときのフェードイン
    $(window).scroll(function () {
        $(".fadein").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });


 //top-textのフェードイン
    $(".top-text p").each(function () {
        const $text = $(this);
        const content = $text.text();
        $text.text("");
        $.each(content.split(""), function (i, char) {
            $("<span>")
                .text(char)
                .css("animation-delay", (i * 0.05) + "s")
                .appendTo($text);
        });
    });

  
 //space画像のズーム   
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                $(".top-text p").each(function (i) {
                    const el = this;
                    setTimeout(function () {
                        $(el).addClass("show");
                    }, i * 600);
                });
            }
        });
    }, {
        threshold: 0.4
    });
    observer.observe(document.querySelector(".top-text"));

});