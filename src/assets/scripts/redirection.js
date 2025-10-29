const userStatus = localStorage.getItem("userStatus");

console.log("User Status:", userStatus);

if (userStatus == "online") {
  window.location.href = "/dashboard/";
}
