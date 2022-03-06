`use strict`;

function jsonToHtml(items) {
  const container = document.querySelector(".items");
  function displayList(item) {
    return `<li class="item">
        <img src="./img/${item.color}_${item.type.slice(0, 1)}.png">
        <span>${item.gender}, ${item.size} size</span>
    </li>`;
  }

  container.innerHTML = items.map(displayList).join("");
}
function filterItems(event, items) {
  const data = event.target.dataset;
  const key = data.key;
  const value = data.value;
  console.log(data.size);
  if (key == null || value == null) {
    return;
  }

  const filtered = items.filter((item) => {
    return item[key] === value;
  });
  jsonToHtml(filtered);
}
function onClickEvent(items) {
  const buttons = document.querySelector("#buttons");
  const logo = document.querySelector(".logo");

  buttons.addEventListener("click", (event) => filterItems(event, items));
  logo.addEventListener("click", () => jsonToHtml(items));
}

fetch("./data/data.json")
  .then((response) => response.json())
  .then((json) => json.items)
  .then((items) => {
    jsonToHtml(items);
    onClickEvent(items);
  });
