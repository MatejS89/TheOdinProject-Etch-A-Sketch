let isDrawing = false;
let selectedColor = "#000000";
let backgroundColor = "#F9F9F9";
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
      if (isDrawing) elem.currentTarget.style.backgroundColor = selectedColor;
      else elem.currentTarget.classList.add("hover");
    });
    element.addEventListener("mouseout", (elem) => {
      elem.currentTarget.classList.remove("hover");
    });
    element.addEventListener("mousedown", (elem) => {
      elem.currentTarget.style.backgroundColor = selectedColor;
      elem.currentTarget.classList.remove("hover");
    });
  });
}

function createNewBoard(size) {
  let container = document.querySelector(".draw-container");
  container.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  container.addEventListener("mousedown", () => {
    isDrawing = true;
  });
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
    display.innerText = `${currVal} x ${currVal}`;
  });
}

function createColorPickerListener() {
  const colorPickerTrigger = document.querySelector(".color-picker-button");
  const colorPicker = document.getElementById('color-picker');

  colorPickerTrigger.addEventListener('click', () => {
    colorPicker.click(); // Simulate a click on the hidden color picker input
  });

  colorPicker.addEventListener('input', (event) => {
    selectedColor = event.target.value;
    colorPickerTrigger.style.backgroundColor = selectedColor;
  });
}

function main() {
  const SIZE = 16;
  createNewBoard(SIZE);
  addSliderListener();
  createColorPickerListener();
}

main();
