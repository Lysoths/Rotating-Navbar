const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

circle.addEventListener("click", () => {
  if (container.classList.contains("transform-show")) {
    container.classList.remove("transform-show");
    circle.classList.remove("circle-menu");
  } else {
    container.classList.add("transform-show");
    circle.classList.add("circle-menu");
  }
});
