function main() {
  const SIZE = 16;
  let container = document.querySelector(".container");
  for (let i = 0; i < SIZE ** 2; i++) {
    let element = document.createElement("div");
    element.classList.add("element");
    element.style.flex = `1 1 ${500 / SIZE}px`;
    container.appendChild(element);
  }
}

main();
