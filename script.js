let isDrawing = false;
let selectedColor = "#000000";
let previousColor = selectedColor;
let backgroundColor = "#f9f9f9";
let currentSize = 16;

function createElements() {
  let container = document.querySelector(".draw-container");
  for (let i = 0; i < currentSize ** 2; i++) {
    let element = document.createElement("div");
    element.classList.add("element");
    element.style.flex = `1 1 ${500 / currentSize}px`;
    element.style.backgroundColor = backgroundColor;
    container.appendChild(element);
  }
}

function clearBoard() {
  let elements = document.querySelectorAll(".draw-container>.element");
  elements.forEach(
    (element) => (element.style.backgroundColor = backgroundColor)
  );
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

function createNewBoard() {
  let container = document.querySelector(".draw-container");
  container.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  container.addEventListener("mousedown", () => {
    isDrawing = true;
  });
  container.innerHTML = "";
  createElements();
  createListenersElements();
}

function addSliderListener() {
  let slider = document.querySelector("#slider");
  slider.addEventListener("change", () => {
    currentSize = slider.value;
    createNewBoard();
  });
  slider.addEventListener("input", () => {
    const currVal = slider.value;
    const display = document.querySelector("#rangeValue");
    display.innerText = `${currVal} x ${currVal}`;
  });
}

function createColorPickerListener() {
  const colorPickerTrigger = document.querySelector(".color-picker-button");
  const colorPicker = document.getElementById("color-picker");

  colorPickerTrigger.addEventListener("click", () => {
    colorPicker.click(); // Simulate a click on the hidden color picker input
  });

  colorPicker.addEventListener("input", (event) => {
    selectedColor = event.target.value;
    colorPickerTrigger.style.backgroundColor = selectedColor;
  });
}

function createClearButtonListener() {
  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("click", () => {
    clearButton.classList.toggle("toggled");
    clearBoard();
  });
}

function createEraserButtonListener() {
  const eraserButton = document.querySelector("#eraser-button");
  eraserButton.addEventListener("click", () => {
    eraserButton.classList.toggle("toggled");
    if (eraserButton.classList.contains("toggled")) {
      previousColor = selectedColor;
      selectedColor = backgroundColor;
    }
    else {
      selectedColor = previousColor;
    }
  });
}

function createButtonListeners() {
  createClearButtonListener();
  createEraserButtonListener();
}

function main() {
  createNewBoard();
  addSliderListener();
  createColorPickerListener();
  createButtonListeners();
}

main();
