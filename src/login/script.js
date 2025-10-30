const loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", event => {
  event.preventDefault();
  localStorage.setItem("userStatus", "online");
  window.location.href = "/dashboard/";
});
