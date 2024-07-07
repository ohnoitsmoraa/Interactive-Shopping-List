// Event to manipulate DOM elements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (shoppingform) => {
    shoppingform.preventDefault();
    itemList(shoppingform.target.inputbutton.value);
  });
});

// Adding items to shopping list
function itemList(toShop) {
  let lists = document.createElement("li");
  let purchase = document.createElement("button");
  let remove = document.createElement("button");
  remove.addEventListener("click", toDelete);
  remove.textContent = "Delete";
  lists.textContent = `${toShop}`;
  lists.appendChild(remove);
  lists.appendChild(purchase);
  purchase.textContent = "Mark Purchased";
  purchase.addEventListener("click", markPurchased);
  document.querySelector("#List").appendChild(lists);
}

// Deleting items added to a list
function toDelete(shoppingform) {
  shoppingform.target.parentNode.remove();
}

// Mark already purchased items
function markPurchased(purchase) {
  purchase.target.parentNode.style.textDecoration = "line-through";
}

// Clearing contents of list
const clearList = document.getElementById("reset_button");
const myShopList = document.getElementById("List");
clearList.addEventListener("click", () => {
  myShopList.innerHTML = "";
});
