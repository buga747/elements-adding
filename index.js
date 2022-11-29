function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerEl = document.querySelector(".btn-container");
const btnAddEl = document.querySelector("[data-button-add]");
const btnRemoveEl = document.querySelector("[data-button-remove]");
const btnClearEl = document.querySelector("[data-button-clear]");

// Add element
btnAddEl.addEventListener("click", onElementAdd);

function onElementAdd() {
  const elementToAdd = [];
  const newElement = document.createElement("div");
  newElement.classList.add("element");
  newElement.style.backgroundColor = getRandomHexColor();
  elementToAdd.push(newElement);
  containerEl.append(...elementToAdd);
}

// remove last element
btnRemoveEl.addEventListener("click", onLastElementRemove);

function onLastElementRemove() {
  if (containerEl.lastElementChild) {
    containerEl.lastElementChild.remove();
  }
}

// clear all elements
btnClearEl.addEventListener("click", onElementsClear);

function onElementsClear() {
  containerEl.innerHTML = "";
}
