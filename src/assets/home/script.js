const menuMobile = document.querySelector(".menu-mobile");
const menuBox = document.querySelector(".menu-box");
const menuLinks = document.querySelectorAll(".nav-link");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuBox.classList.remove("active");
    menuMobile.classList.remove("active");
    document.body.classList.remove("menu-active");
  });
});

handleMenu = () => {
  menuBox.classList.toggle("active");
  menuMobile.classList.toggle("active");
  document.body.classList.toggle("menu-active");
};

menuMobile.addEventListener("click", handleMenu);

document.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    console.log("removendo classes");
  }
});
