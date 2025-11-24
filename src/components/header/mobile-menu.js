export function initMobileMenu(shadowRoot) {
  const menuMobile = shadowRoot.querySelector(".menu-mobile");
  const sidebar = document.querySelector("app-sidebar");

  menuMobile.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    document.documentElement.style.overflow = sidebar.classList.contains(
      "active"
    )
      ? "hidden"
      : "auto";
  });
}

export function toggleMobileMenu(shadowRoot) {
  const closeMenu = shadowRoot.querySelector(".menu-mobile");

  closeMenu.addEventListener("click", () => {
    const sidebar = document.querySelector("app-sidebar");
    sidebar.classList.remove("active");
    document.documentElement.style.overflow = "auto";
  });
}
