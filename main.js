const navbar = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
// ketika hamburger di klik maka navbar muncul
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ketika scroll navbar hilang
window.onscroll = () => {
  navbar.classList.remove("active");
};
