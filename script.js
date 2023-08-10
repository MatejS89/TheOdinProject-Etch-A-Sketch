function main() {
  const SIZE = 16;
  let container = document.querySelector(".container");
  for (let i = 0; i < SIZE ** 2; i++) {
    let element = document.createElement("div");
    element.classList.add("element");
    element.style.flex = `1 1 ${500 / SIZE}px`;
    container.appendChild(element);
  }

  let elements = document.querySelectorAll(".element");
  elements.forEach((element) =>{
    element.addEventListener("mouseover", (elem) => {
      elem.currentTarget.classList.toggle("hover");
    });
    element.addEventListener("mouseout", (elem) => {
      elem.currentTarget.classList.toggle("hover");
    });
    element.addEventListener("click",(elem) => {
      elem.currentTarget.classList.toggle("selected");
    })
  }
  );
}

main();
