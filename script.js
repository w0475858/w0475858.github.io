//  Author: Jitin Sharma
//   Description: Portfolio.
//   Last Updated: Oct 28, 2024

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  fetch("header.html")
      .then(response => response.text())
      .then(data => document.getElementById("my-header").innerHTML = data);

});