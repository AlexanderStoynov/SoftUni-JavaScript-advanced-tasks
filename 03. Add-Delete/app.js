function addItem() {
    let list = document.getElementById("items");

    let value = document.getElementById("newItemText").value;

    let li = document.createElement("li");
    li.textContent = value + " ";

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function (event) {
       event.target.parentElement.remove();
    })
    
    li.append(deleteBtn);
    list.append(li);

}