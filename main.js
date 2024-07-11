const hamburger = document.querySelector(".hamburger");
const buttonBurger = () => {
  const slide = document.body;
  slide.classList.toggle("show");
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});
