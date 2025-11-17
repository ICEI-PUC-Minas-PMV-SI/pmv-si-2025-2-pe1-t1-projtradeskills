const userStatus = localStorage.getItem("userStatus");

if (userStatus == "online") {
  window.location.href = "/dashboard/";
}
