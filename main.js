const container = document.querySelector(".container");
const sizeInput = document.querySelector("#size");
const generateBtn = document.querySelector(".options button");
let opacity = 0;
let size = sizeInput.value;

console.log("selected size:" + sizeInput.value);
sizeInput.addEventListener("change", () => {
  size = sizeInput.value;
});

const mouseOver = () => {};

const generateGrid = (size) => {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  opacity = 0;
  createGrid(size);
};

const createGrid = (size) => {
  let quantity = size * size;
  console.log(quantity);

  for (let i = 0; i < quantity; i++) {
    let square = document.createElement("div");

    square.setAttribute(
      "style",
      `width: ${100 / size}%; height: ${100 / size}%`
    );
    square.addEventListener("mouseenter", () => {
      square.attributes[0].nodeValue += `; background-color: rgb(${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${opacity})`;

      opacity += 0.1;
    });

    square.addEventListener("mouseleave", () => {
      square.attributes[0].nodeValue = `width: ${100 / size}%; height: ${
        100 / size
      }%`;
    });
    // square.className = "mouse-over";

    container.appendChild(square);
  }
  console.log(sizeInput.attributes[0].nodeValue);
};

generateGrid(size);

generateBtn.addEventListener("click", () => {
  generateGrid(size);
});
