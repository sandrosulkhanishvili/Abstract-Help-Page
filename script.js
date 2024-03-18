const menuIcon = document.querySelector(".menu-icon");
const headerRightSide = document.querySelector(".responsive-right-side");
const searchInput = document.getElementById("searchInput");
const searchArrow = document.getElementById("searchArrow");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  headerRightSide.classList.toggle("show-right-side");
});

function redirectTo404() {
  window.location.href = "404.html";
}

searchInput.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === "Enter") {
    redirectTo404();
  }
});

searchArrow.addEventListener("click", () => {
  redirectTo404();
});
