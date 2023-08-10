function createElements(size) {
  let container = document.querySelector(".draw-container");
  for (let i = 0; i < size ** 2; i++) {
    let element = document.createElement("div");
    element.classList.add("element");
    element.style.flex = `1 1 ${500 / size}px`;
    container.appendChild(element);
  }
}

function createListeners() {
  let elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
    element.addEventListener("mouseover", (elem) => {
      elem.currentTarget.classList.toggle("hover");
    });
    element.addEventListener("mouseout", (elem) => {
      elem.currentTarget.classList.toggle("hover");
    });
    element.addEventListener("click", (elem) => {
      elem.currentTarget.classList.toggle("selected");
    });
  });
}

function main() {
  const SIZE = 16;
  createElements(SIZE);
  createListeners();
}

main();
