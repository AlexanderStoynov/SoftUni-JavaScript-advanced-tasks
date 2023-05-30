function validate() {
    let box = document.getElementById("email");

    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    box.addEventListener("blur", function (event) {
        let text = box.value;
         
        if (text.match(regExp)) {
            box.classList.remove("error");
        }

        else {
            box.classList.add("error");
        }
    })
}