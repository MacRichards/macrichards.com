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
  // Sticky Navbar
  $(window).scrollTop() >= 50
    ? $(".navbar").addClass("sticky")
    : $(".navbar").removeClass("sticky");

  // Smooth Scrolling
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

  // Selected Nav Item
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.getAttribute("label") == current) {
      li.classList.add("active");
    }
  });
});

// Blur Card on Desktop Devices
function hideNoDesk() {
  $("#no-desk").style.display = "none";
}

// Update Copyright Year
function year() {
  const date = new Date();
  return date.getFullYear();
}
document.querySelector("#year").innerHTML = year();
