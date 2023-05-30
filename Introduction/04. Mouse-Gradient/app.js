function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    let result  = document.getElementById("result");

    gradient.addEventListener("mousemove", function (event){
        
        let widthPercentage = event.offsetX / 3;

        result.textContent = Math.trunc(widthPercentage);
        result.textContent += "%";
    })

}