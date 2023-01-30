/*
------------------------------------------------------------------------
* Template Name    : Elvish | Responsive Bootstrap 4 Personal Template * 
* Author           : ThemesBoss                                        *
* Version          : 1.0.0                                             *
* Created          : May 2018                                          *
* File Description : Main Js file of the template                      *
*-----------------------------------------------------------------------
*/

$("#status").fadeOut(),
    $("#preloader").delay(350).fadeOut("slow"),
    $("body").delay(350).css({
        overflow: "visible",
    }),
    $(window).on("scroll", function () {
        $(window).scrollTop() >= 50
            ? $(".sticky").addClass("stickyadd")
            : $(".sticky").removeClass("stickyadd");
    }),
    $(".navbar-nav a, .scroll_down a").on("click", function (e) {
        var t = $(this);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $(t.attr("href")).offset().top - 0,
                },
                1500,
                "easeInOutExpo"
            ),
            e.preventDefault();
    }),
    $("#navbarCollapse").scrollspy({
        offset: 20,
    });
var a = 0;
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav div div ul li");
$(window).on("scroll", function () {
    var current = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("label") == current) {
            li.classList.add("active");
        }
    });
    $(window).on("load", function () {
        var e = $(".work-filter"),
            t = $("#menu-filter");
        e.isotope({
            filter: "*",
            layoutMode: "masonry",
            animationOptions: {
                duration: 750,
                easing: "linear",
            },
        }),
            t.find("a").on("click", function () {
                var o = $(this).attr("data-filter");
                return (
                    e.isotope({
                        filter: o,
                        animationOptions: {
                            animationDuration: 750,
                            easing: "linear",
                            queue: !1,
                        },
                    }),
                    !1
                );
            });
    });
    $(window).on("scroll", function () {
        $(this).scrollTop() > 100
            ? $(".back_top").fadeIn()
            : $(".back_top").fadeOut();
    }),
        $(".back_top").click(function () {
            return (
                $("html, body").animate(
                    {
                        scrollTop: 0,
                    },
                    1e3
                ),
                !1
            );
        }),
        $(".element").each(function () {
            var e = $(this);
            e.typed({
                strings: e.attr("data-elements").split(","),
                typeSpeed: 100,
                backDelay: 3e3,
            });
        });
});
