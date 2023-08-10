function createElements(size) {
  let container = document.querySelector(".draw-container");
  for (let i = 0; i < size ** 2; i++) {
    let element = document.createElement("div");
    element.classList.add("element");
    element.style.flex = `1 1 ${500 / size}px`;
    container.appendChild(element);
  }
}

function createListenersElements() {
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

function createNewBoard(size) {
  let container = document.querySelector(".draw-container");
  container.innerHTML = "";
  createElements(size);
  createListenersElements();
}

function addSliderListener() {
  let slider = document.querySelector("#slider");
  slider.addEventListener("change", () => {
    const currVal = slider.value;
    createNewBoard(currVal);
  });
  slider.addEventListener("input", () => {
    const currVal = slider.value;
    const display = document.querySelector("#rangeValue");
    display.innerText = currVal;
  });
}

function main() {
  const SIZE = 16;
  createNewBoard(SIZE);
  addSliderListener();
}

main();
