function addItem() {
    let list = document.getElementById("items");
    let input = document.getElementById("newItemText");
    let newItemValue = input.value;
    let liNewItem = document.createElement("li");

    liNewItem.textContent = newItemValue;

    list.appendChild(liNewItem);

    input.value = "";
}