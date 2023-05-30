function solve() {

  let text = document.getElementById("text").value.split(" ");

  let shrift = document.getElementById("naming-convention").value;
  
  let output = "";

  if (shrift == "Camel Case") {
    for (let index = 0; index < text.length; index++) {

      let tempStr = text[index].toLowerCase();

      if (index != 0) {
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
        output += tempStr;
      }

      else {
        output += tempStr;
      }
    }
  }

  else if(shrift == "Pascal Case")
  {
    for (let index = 0; index < text.length; index++) {
      
      let tempStr = text[index].toLowerCase();
      tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
      output += tempStr;
    }
  }

  else
  {
    output = "Error!";
  }

  document.getElementById("result").innerText = output;
}