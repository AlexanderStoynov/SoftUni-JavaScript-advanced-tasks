function deleteByEmail() {

    let emailToDelete = document.getElementsByName("email")[0].value;
    let allElements = document.querySelectorAll("#customers td:nth-child(2)");
    
    let found = false;
    for(let element of allElements)
    {
        if(element.textContent === emailToDelete)
        {
            element.parentElement.remove();
            found = true;
        }
    }
    
    let result = document.getElementById("result");

    if(found == true)
    {
       result.textContent = "Deleted."
    }

    else
    {
        result.textContent = "Not found."
    }

}