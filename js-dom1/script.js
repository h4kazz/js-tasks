// Task 1: Change Heading Text

const changeTitle = () => {
  const title = document.getElementById("main-title");
  title.innerHTML = "New amazing title";
};

const buttonTask1 = document.getElementById("change-title-btn");
buttonTask1.addEventListener("click", changeTitle);

// Task 2: Highlight All List Items

const highlightLiItems = () => {
  const liItems = document.getElementById("todo-list");
  liItems.style.color = "red";
};

const buttonTask2 = document.getElementById("highlight-btn");
buttonTask2.addEventListener("click", highlightLiItems);

// Task 3: Toggle Dark Mode Class

const darkMode = () => {
  const page = document.getElementById("page");
  page.classList.toggle("dark");
}

const buttonTask3 = document.getElementById("toggle-theme-btn");
buttonTask3.addEventListener("click", darkMode);

// Task 4: Add New List Item from Input

const addLiItem = () => {
  const input = document.getElementById("item-input");
  const list = document.getElementById("items");

  const inputValue = input.value;
  const li = document.createElement("li");
  li.textContent = inputValue;
  list.appendChild(li);
  input.value = "";
}

const buttonTask4 = document.getElementById("add-item-btn");
buttonTask4.addEventListener("click", addLiItem);

// Task 5: Change Image src and alt

const changeImage = () => {
  const image = document.getElementById("preview");
  image.setAttribute("src", "images/img2.png");
  image.setAttribute("alt", "Second image");
}

const buttonTask5 = document.getElementById("change-img-btn");
buttonTask5.addEventListener("click", changeImage)

// Task 6: Show/Hide Paragraph

const para = document.getElementById("secret-text");
const buttonTask6 = document.getElementById("toggle-text-btn");

const hideOrShow = () => {
  if (para.style.display === "none") {
    para.style.display = "block";
    buttonTask6.textContent = "Hide";
  } else {
    para.style.display = "none";
    buttonTask6.textContent = "Show";
  }
}

buttonTask6.addEventListener("click", hideOrShow)

// Task 7: Mouseover Highlight Box

const box = document.getElementById("box");
const originalBorder = window.getComputedStyle(box).border;

const changeColor = () => {
  box.style.border = "3px solid red";
}

const restoreOriginalColor = () => {
  box.style.border = originalBorder;
}

box.addEventListener("mouseover", changeColor);
box.addEventListener("mouseout", restoreOriginalColor);

// Task 8: Live Character Counter

const msg = document.getElementById("message");
const count = document.getElementById("char-count");

const counter = () => {
  const text = msg.value;
  count.textContent = text.length;
}

msg.addEventListener("input", counter);

// Task 9: Simple Tab Switcher

const tabButtons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

const switchTab = (event) => {
  const targetId = event.target.dataset.target;

  tabs.forEach(tab => {
    tab.style.display = "none";
  });

  const activeTab = document.getElementById(targetId);
  activeTab.style.display = "block";
};

tabButtons.forEach(button => {
  button.addEventListener("click", switchTab);
});
