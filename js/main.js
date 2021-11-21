const links = document.querySelectorAll(".nav-item");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const home = document.querySelector(".home");
home.addEventListener("click", (e) => {
  links.forEach((l) => {
    l.classList.remove("active");
  });
});
