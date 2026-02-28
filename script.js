const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
nav.classList.add("active");
};

closeMenu.onclick = () => {
nav.classList.remove("active");
};