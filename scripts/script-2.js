function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const containerEl = document.querySelector(".btn-container");
const inputAddEl = document.querySelector(".js-input-add");
const inputRemoveEl = document.querySelector(".js-input-remove");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const btnRemoveEl = document.querySelector("[data-remove]");
const btnCreateTextEl = document.querySelector(".js-create-amount");
const btnRemoveTextEl = document.querySelector(".js-remove-amount");

// adding amount to button create
inputAddEl.addEventListener("input", (evt) => {
  btnCreateTextEl.textContent = evt.currentTarget.value;
});

// adding amount to button remove
inputRemoveEl.addEventListener("input", (evt) => {
  btnRemoveTextEl.textContent = evt.currentTarget.value;
});

// adding elements
btnCreateEl.addEventListener("click", onElementsCreate);

function onElementsCreate() {
  if (inputAddEl.value) {
    if (inputAddEl.value > 100 || inputAddEl.value < 1) {
      alert("Insert number from 1 to 100");
    } else {
      let createElements = onCreatingElements(inputAddEl.value);
      containerEl.append(...createElements);
      inputAddEl.value = "";
      btnCreateTextEl.textContent = "";
    }
  }
}

// creating elements
function onCreatingElements(value) {
  let elementsToAdd = [];

  for (let i = 1; i <= value; i += 1) {
    let color = getRandomHexColor();
    const newElement = document.createElement("button");
    newElement.classList.add("element");
    newElement.textContent = color;
    newElement.setAttribute("type", "button");
    newElement.style.backgroundColor = color;
    elementsToAdd.push(newElement);
  }
  return elementsToAdd;
}

// deleting elements
btnDestroyEl.addEventListener("click", onElementsDelete);

function onElementsDelete() {
  containerEl.innerHTML = "";
}

// removing elements
btnRemoveEl.addEventListener("click", onElementsToRemove);

function onElementsToRemove() {
  let quantityElementsToRemove = inputRemoveEl.value;
  let totalElements = containerEl.children.length;
  if (inputRemoveEl.value > totalElements || inputRemoveEl.value < 1) {
    alert("Input correct quantity");
  } else {
    for (let i = 0; i < quantityElementsToRemove; i += 1) {
      if (containerEl.lastElementChild) {
        containerEl.lastElementChild.remove();
      }
    }
    inputRemoveEl.value = "";
    btnRemoveTextEl.textContent = "";
  }
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

// adding elements by clicking enter while focused in input

inputAddEl.addEventListener("keydown", (evt) => {
  if (evt.keyCode == 13) {
    onElementsCreate();
  }
});

// deleting elements by clicking enter while focused in input

inputRemoveEl.addEventListener("keydown", (evt) => {
  if (evt.keyCode == 13) {
    onElementsToRemove();
  }
});
