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
  let color = getRandomHexColor();
  const newElement = document.createElement("button");
  newElement.classList.add("element");
  newElement.textContent = color;
  newElement.style.backgroundColor = color;
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

// deleting element by clicking on it

containerEl.addEventListener("click", deletingClickedElement);

function deletingClickedElement(evt) {
  const isBoxEl = evt.target.nodeName === "BUTTON";

  if (!isBoxEl) {
    console.log("ololo");
    return;
  }

  const selectedElement = evt.target;
  selectedElement.remove();
}
