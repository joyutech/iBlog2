$(function () {
    var shows = window.tools || [0, 1, 2],
        toggle = $('#ss_toggle'),
        menu = $('#share-menu'),
        rot,
        img;
    if (shows.indexOf(0) >= 0) {
        $('ul.fixed-tool li.share-li').show();
        $('#ss_toggle').on('click', function () {
            if (!$(".qrcontain").is(":hidden")) {
                $(".qrcontain").hide();
                $("#qrBtn").removeClass("opened");
            }
            rot = parseInt($(this).data('rot')) - 180;
            if (rot / 180 % 2 == 0) {
                menu.css('transform', 'rotate(' + rot + 'deg)');
                menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
                toggle.parent().addClass('ss_active');
                toggle.addClass('close');
            } else {
                menu.css('transform', 'rotate(' + parseInt(rot - 30) + 'deg)');
                menu.css('webkitTransform', 'rotate(' + parseInt(rot - 30) + 'deg)');
                toggle.parent().removeClass('ss_active');
                toggle.removeClass('close');
            }
            $(this).data('rot', rot);
        });
        menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
            if (rot / 180 % 2 == 0) {
                $("#share-menu i.fab").addClass('bounce');
            } else {
                $("#share-menu i.fab").removeClass('bounce');
            }
        });
    }

    if (shows.indexOf(2) >= 0) {
        $('ul.fixed-tool li.top-li').show();
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 0) {
                $("#scrollTop").show();
                $(".qrcontain").css("top", "-57px");
                $(".qrcontain .arrow").css("top", "52%");
            } else {
                $("#scrollTop").hide();
                $(".qrcontain").css("top", "-107px");
                $(".qrcontain .arrow").css("top", "86%");
            }
        });

        $("#scrollTop a").on("click", function () {
            $("html,body").animate({scrollTop: 0}, 800);
        });
    }
});