const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector("#navBar");

// console.log(navBar);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  console.log(navBar.classList);
  if (navBar.classList.contains("hidden")) {
    navBar.classList.remove("hidden");
  } else {
    navBar.classList.add("hidden");
  }
});


