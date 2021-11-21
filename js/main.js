const links = document.querySelectorAll(".nav-item");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  links.forEach((l) => {
    l.classList.remove("active");
  });
});

const scrollTop = document.getElementById("scrollTop");

document.addEventListener("scroll", () => {
  scrollTopButtonVisiblility();
});

function scrollTopButtonVisiblility() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
