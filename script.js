let isDrawing = false;
let selectedColor = "#000000";
let previousColor = selectedColor;
let currentSize = 16;

function createElements() {
  let container = document.querySelector(".draw-container");
  for (let i = 0; i < currentSize ** 2; i++) {
    let element = document.createElement("div");
    element.classList.add("element");
    element.style.flex = `1 1 ${500 / currentSize}px`;
    container.appendChild(element);
  }
}

function clearBoard() {
  let elements = document.querySelectorAll(".draw-container>.element");
  elements.forEach((element) => {
    element.classList.remove("hover");
    element.style.backgroundColor = "";
  });
}

function createListenersElements(drawBoard) {
  drawBoard.addEventListener("mouseover", (e) => {
    if (isDrawing) e.target.style.backgroundColor = selectedColor;
    else e.target.classList.add("hover");
  });
  drawBoard.addEventListener("mouseout", (e) => {
    e.target.classList.remove("hover");
  });
  drawBoard.addEventListener("mouseup", () => {
    isDrawing = false;
  });
  drawBoard.addEventListener("mousedown", (e) => {
    isDrawing = true;
    e.target.style.backgroundColor = selectedColor;
  });
  drawBoard.addEventListener("mouseleave", () => (isDrawing = false));
}

function createNewBoard() {
  let drawBoard = document.querySelector(".draw-container");
  drawBoard.innerHTML = "";
  createElements();
  createListenersElements(drawBoard);
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
    colorPicker.click();
  });

  colorPicker.addEventListener("input", (event) => {
    selectedColor = event.target.value;
    colorPickerTrigger.style.backgroundColor = selectedColor;
  });
}

function createClearButtonListener() {
  const clearButton = document.querySelector("#clear-button");
  clearButton.addEventListener("mousedown", () => {
    clearButton.classList.toggle("toggled");
    clearBoard();
  });
  clearButton.addEventListener("mouseup", () => {
    clearButton.classList.toggle("toggled");
  });
  clearButton.addEventListener("mouseout", () => {
    clearButton.classList.remove("toggled");
  });
}

function createEraserButtonListener() {
  const eraserButton = document.querySelector("#eraser-button");
  eraserButton.addEventListener("mousedown", () => {
    eraserButton.classList.toggle("toggled");
    if (eraserButton.classList.contains("toggled")) {
      previousColor = selectedColor;
      selectedColor = "#ffffff";
    } else {
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
