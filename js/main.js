function checkWidth() {
    var e = $(document).width();
    return e <= 900 ? (overflowCondition = !0, console.log(overflowCondition)) : overflowCondition = !1, e <= 450 ? ($(".j-expert").attr("src", "images/notify-apply_mobile.jpg"), !0) : e <= 768 ? ($(".j-expert").attr("src", "images/notify-apply_tablet.jpg"), !0) : ($(".j-expert").attr("src", "images/notify-apply.jpg"), !0)
}

function move_bulletClick(e) {
    var t = e - 1;
    target = document.querySelector(".j-move"), rootTarget = document.querySelectorAll(".j-root")[t], distance_top = rootTarget.offsetTop, target.style.top = distance_top + "px", status = 0
}

function move_bulletUp(e) {
    if (!(e > 1)) return !0;
    var t = e - 2;
    target = document.querySelector(".j-move"), rootTarget = document.querySelectorAll(".j-root")[t], distance_top = rootTarget.offsetTop, target.style.top = distance_top + "px", rootTarget.className += " active"
}

function move_bulletDown(e) {
    if (!(e <= rootLength)) return !0;
    var t = e - 1;
    target = document.querySelector(".j-move"), rootTarget = document.querySelectorAll(".j-root")[t], distance_top = rootTarget.offsetTop, target.style.top = distance_top + "px", rootTarget.className += " active"
}

function addServices(e) {
    var t = Object.keys(dataServices[e]).length;
    for ($(".j-checkinterest").html(""), i = 1; i <= t; i++) {
        var a = dataServices[e][i];
        servHTML = '<li class="w-half pull-left"><input class="pull-left j-categories" input-num="3" value="' + a + '"  id="interets-' + i + '" type="checkbox"><label class="pull-left" for="interets-' + i + '">' + a + "</label></li>", $(".j-checkinterest").append(servHTML)
    }
    var o = new Array;
    $(".j-categories").click(function() {
        var e = $(this).attr("input-num"),
            t = $(this).attr("value");
        if (this.checked) {
            o.push(t);
            var a = o.join(", ");
            $(".j-fill_" + e).html(a)
        } else {
            o = jQuery.grep(o, function(e) {
                return e != t
            });
            var a = o.join(", ");
            $(".j-fill_" + e).html(a)
        }
        checkboxForm = 0 == o ? 0 : 1, validation()
    })
}

function validation() {
    1 == inputForm && 1 == radioForm1 && 1 == radioForm2 && 1 == requireForm && 1 == checkboxForm ? ($(".j-review_btn").addClass("clickable"), $(".j-review_btn").removeClass("disabled-button")) : ($(".j-review_btn").removeClass("clickable"), $(".j-review_btn").addClass("disabled-button"))
}

function notifyValidation() {
    1 == inputForm ? ($(".j-notify_button").removeClass("disabled-button"), $(".j-notify_button").addClass("j-inputed"), $(".j-notify_button").prop("disabled", !1)) : ($(".j-notify_button").addClass("disabled-button"), $(".j-notify_button").removeClass("j-inputed"), $(".j-notify_button").prop("disabled", !0))
}

function checkEmail(e) {
    var t = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return t.test(e)
}
"addEventListener" in document && document.addEventListener("DOMContentLoaded", function() {
    FastClick.attach(document.body)
}, !1), $("img.svg-image").each(function() {
    var e = $(this),
        t = e.attr("id"),
        a = e.attr("class"),
        i = e.attr("src");
    $.get(i, function(i) {
        var o = $(i).find("svg");
        "undefined" != typeof t && (o = o.attr("id", t)), "undefined" != typeof a && (o = o.attr("class", a + " replaced-svg")), o = o.removeAttr("xmlns:a"), e.replaceWith(o)
    }, "xml")
});
var sectionLength = $(".section").length,
    rootLength = $(".j-root").length,
    status = 0,
    overflowCondition = !1;
$(document).ready(function() {
    checkWidth(), $(window).resize(checkWidth);
    var e = !1,
        t = window.navigator.userAgent,
        a = t.indexOf("MSIE "),
        i = t.indexOf("Trident/");
    (a > -1 || i > -1) && (e = !0), e && ($(".j-bigtext").addClass("ie-fallback"), $(".j-fullheight").addClass("fallback"));
    var o = $(window).outerHeight(),
        s = 20 * o / 100,
        r = o - s;
    $(".j-input").css({
        "min-height": r
    }), $("#fullpage").fullpage({
        scrollOverflow: overflowCondition,
        onLeave: function(index, nextIndex, direction){
            if( status > 0 ) {
                return true;
            } else {
                if(index > 1 && index <= sectionLength && direction == "up"){
                    $('.j-root').removeClass('active');
                    move_bulletUp(nextIndex);
                }

                if(nextIndex >= 2 && index < sectionLength && direction == "down"){
                    $('.j-root').removeClass('active');
                    move_bulletDown(index);
                }
            }

            if(nextIndex == 2){
                $('.j-bigtext').removeClass('active');
                $('.j-animation').removeClass('active');
                $('.j-bigtext_1').addClass('active');
                $('.j-animation_1').addClass('active');
            } else if(nextIndex == 3){
                $('.j-bigtext').removeClass('active');
                $('.j-animation').removeClass('active');
                $('.j-bigtext_2').addClass('active');
                $('.j-animation_2').addClass('active');
            } else if(nextIndex == 4){
                $('.j-bigtext').removeClass('active');
                $('.j-animation').removeClass('active');
                $('.j-bigtext_3').addClass('active');
                $('.j-animation_3').addClass('active');
                $('.j-notify_scroll').removeClass('overflow_auto');
            } else if(nextIndex == 5){
                setTimeout(function(){
                    $('.j-notify_scroll').addClass('overflow_auto');
                }, 1000);
                $('.j-notify_scroll').scroll(function(){
                    var notifyHeight = $('.j-notify_scroll').scrollTop();
                    if(notifyHeight < 5){
                        $.fn.fullpage.setAllowScrolling(true, 'up');
                    } else{
                        $.fn.fullpage.setAllowScrolling(false, 'up');
                    }
                });
            }

            if(nextIndex >= 2){
                $('.j-header').addClass('header-nonactive');
                $('.j-logo').addClass('fade');
                $('.j-scroll').addClass('fade');
                $('.j-intro_desk').removeClass('active');
                $('.j-intro_mob').removeClass('active');
                setTimeout(function(){
                    $('.j-header').removeClass('header-nonactive');
                    $('.j-header').addClass('header-active');
                    if(nextIndex == sectionLength){
                        $('.j-notify').addClass('active');
                        $('.j-feature').removeClass('active');
                        $('.j-footer').removeClass('active');
                        $('.j-tree').removeClass('active');
                        $('.j-notify').addClass('active');
                        $('.j-bigtext').removeClass('active');
                        $('.j-animation').removeClass('active');
                        // @jo add new code 30/8/2017
                        $('.j-get').addClass('active');
                        $('.j-get__footer').addClass('active');
                        // end add new code 30/8/2017
                    } else{
                        $('.j-feature').addClass('active');
                        $('.j-footer').addClass('active');
                        $('.j-tree').addClass('active');
                        $('.j-notify').removeClass('active');
                        // @jo add new code 30/8/2017
                        $('.j-get__footer').removeClass('active');
                        $('.j-get').removeClass('active');
                        // end add new code 30/8/2017
                    }
                }, 500);
            } else{
                $('.j-header').removeClass('header-active');
                $('.j-header').addClass('header-nonactive');
                $('.j-feature').removeClass('active');
                $('.j-footer').removeClass('active');
                $('.j-tree').removeClass('active');
                $('.j-logo').removeClass('fade');
                $('.j-intro_desk').addClass('active');
                $('.j-intro_mob').addClass('active');
                $('.j-scroll').removeClass('fade');
                $('.j-bigtext').removeClass('active');
                $('.j-animation').removeClass('active');
                setTimeout(function(){
                    $('.j-header').removeClass('header-nonactive');
                }, 500);
            }
        }
    }), $(".j-root").click(function() {
        var e = $(this).index(),
            t = e + 1;
        status = 1, $.fn.fullpage.moveTo(t), 2 == t ? ($(".j-bigtext").removeClass("active"), $(".j-animation").removeClass("active"), $(".j-bigtext_1").addClass("active"), $(".j-animation_1").addClass("active"), $(".j-notify_scroll").removeClass("overflow_auto")) : 3 == t ? ($(".j-bigtext").removeClass("active"), $(".j-animation").removeClass("active"), $(".j-bigtext_2").addClass("active"), $(".j-animation_2").addClass("active"), $(".j-notify_scroll").removeClass("overflow_auto")) : 4 == t ? ($(".j-bigtext").removeClass("active"), $(".j-animation").removeClass("active"), $(".j-bigtext_3").addClass("active"), $(".j-animation_3").addClass("active"), $(".j-notify_scroll").removeClass("overflow_auto")) : 5 == nextIndex && ($(".j-notify_scroll").addClass("overflow_auto"), $(".j-notify_scroll").scroll(function() {
                var e = $(".j-notify_scroll").scrollTop();
                0 == e ? $.fn.fullpage.setAllowScrolling(!0, "up") : $.fn.fullpage.setAllowScrolling(!1, "up")
            })), $(".j-root").removeClass("active"), $(this).addClass("active"), move_bulletClick(e)
    }), $(".j-feature").click(function() {
        $.fn.fullpage.moveTo(2)
    }), $(".j-mouse").click(function() {
        $.fn.fullpage.moveTo(2)
    }), $(".j-notify").click(function() {
        $.fn.fullpage.moveTo(5)
    }), $(".j-inputed").click(function() {
        $(".j-notify_form").addClass("inputed")
    }), $(".j-form_input").addClass("active"), $("html,body").animate({
        scrollTop: 0
    }, 800), $(".j-review_btn").click(function() {
        return !$(this).hasClass("clickable") || ($("html,body").animate({
                scrollTop: 0
            }, 800), void setTimeout(function() {
                $(".j-form_input").addClass("inputed"), $(".j-form_review").addClass("active")
            }, 900))
    }), $(window).load(function() {
        $(".j-intro_desk").addClass("active"), $(".j-intro_mob").addClass("active"), $(".j-logo").removeClass("fade"), $(".j-scroll").removeClass("fade")
    })
});

var data = function(data){
    dataServices = data;
    return 1;
};

var dataServices = {
        // beauty: {
        //     1: "Make-Up",
        //     2: "Hair-Do",
        //     3: "Nail Arts",
        //     4: "Eyelashes",
        //     5: "Skin Care",
        //     6: "Massage"
        // },
        // "fashion design": {
        //     1: "Womens Dress",
        //     2: "Custom Accessories"
        // },
        // photography: {
        //     1: "Wedding",
        //     2: "Event",
        //     3: "Product",
        //     4: "Advertising"
        // },
        // videography: {
        //     1: "Wedding",
        //     2: "Event",
        //     3: "Product",
        //     4: "Advertising"
        // },
        // "interior design": {
        //     1: "Houses &amp; Apartments",
        //     2: "Offices",
        //     3: "Cafes &amp; Restaurants"
        // },
        // entertainment: {
        //     1: "MC",
        //     2: "Singer",
        //     3: "Band/Group",
        //     4: "DJ",
        //     5: "Dancer",
        //     6: "Model"
        // }
    },
    inputForm = 0,
    radioForm1 = 0,
    radioForm2 = 0,
    requireForm = 0,
    checkboxForm = 0;
$(".j-service").click(function() {
    $(".j-service").prop("checked", !1), $(this).prop("checked", !0), radioForm1 = 1;
    var e = $(this).attr("service"),
        t = $(this).attr("input-num"),
        a = "<div>So you're into <span>" + e + ".<span></div><div>What services do you offer?</div>";
    $(".j-interest").removeClass("non-active"), $(".j-interest").find(".j-interest_title").html(a), $(".j-fill_" + t).html(e), addServices(e), validation()
}), $(".j-check").change(function() {
    var e = $(this).val(),
        t = $(this).attr("input-num");
    if ($(".j-phone_fill").hide(), $(".j-fill_" + t).html(""), $(".j-fill_" + t).html(e), $(this).hasClass("j-phone")) {
        var a = $(this).val().length;
        a <= 10 ? (inputForm = 0, $(this).siblings(".apply-error").show(), $(".j-phone_fill").hide(), validation()) : (inputForm = 1, $(this).siblings(".apply-error").hide(), $(".j-phone_fill").show(), $(".j-fill_" + t).html(""), $(".j-fill_" + t).html("+62" + e), validation())
    }
}), $(".j-require").change(function() {
    var e = $(this).val(),
        t = ($(this).attr("input-num"), $(".j-require").length);
    sums = 0, $(".j-require").each(function() {
        $(this).val().length > 0 ? sums++ : sums--
    }), inputForm = sums === t ? 1 : 0, $(this).hasClass("j-email") && (checkEmail(e) ? (inputForm = 1, $(this).siblings(".apply-error").hide()) : (inputForm = 0, $(this).siblings(".apply-error").show())), validation(), $(this).hasClass("j-notify_email") && (checkEmail(e) ? (inputForm = 1, $(this).siblings(".j-notify_error").hide()) : (inputForm = 0, $(this).siblings(".j-notify_error").show())), notifyValidation()
}), $(".j-requireone").change(function() {
    var e = 0;
    $(".j-requireone").each(function() {
        var t = 0,
            a = $(this).eq(t).val(),
            i = $(this).eq(t).attr("input-num");
        $(this).val().length > 0 ? (e = $(this).val().length + e, $(".j-fill_" + i).parents(".clearfix").show(), $(".j-fill_" + i).html(""), $(".j-fill_" + i).html(a)) : (e = $(this).val().length + e, $(".j-fill_" + i).parents(".clearfix").hide()), t++
    }), requireForm = e > 0 ? 1 : 0, validation()
}), $(".j-time").click(function() {
    $(".j-time").prop("checked", !1), $(this).prop("checked", !0), radioForm2 = 1;
    var e = $(this).attr("value"),
        t = $(this).attr("input-num");
    $(".j-fill_" + t).html(e), validation()
}), jQuery.each(jQuery("textarea[data-autoresize]"), function() {
    var e = this.offsetHeight - this.clientHeight,
        t = function(t) {
            jQuery(t).css("height", "auto").css("height", t.scrollHeight + e)
        };
    jQuery(this).on("keyup input", function() {
        t(this)
    }).removeAttr("data-autoresize")
}), $(".j-edit").click(function() {
    $(this).attr("edit-num");
    $("html,body").animate({
        scrollTop: 0
    }, 800), setTimeout(function() {
        $(".j-form_input").removeClass("inputed"), $(".j-form_review").removeClass("active")
    }, 900)
});