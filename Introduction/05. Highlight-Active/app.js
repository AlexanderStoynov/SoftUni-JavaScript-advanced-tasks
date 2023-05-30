function focused() {
    let list = document.getElementsByTagName("input");
    

    for(let element of list)
    {
        element.addEventListener("focus", function (event){
            
            element.parentElement.classList.add("focused");
        });

        element.addEventListener("blur", function (event){
            element.parentElement.classList.remove("focused");
        })
    }
}