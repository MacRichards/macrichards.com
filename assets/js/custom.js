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
        "easeInOutExpo",
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
          1e3,
        ),
        !1
      );
    });
});

/* Blur card on desktop devices */
function hideNoDesk() {
  document.getElementById("no-desk").style.display = "none";
}

function year() {
  const date = new Date();
  return date.getFullYear();
}
document.getElementById("year").innerHTML = year();
