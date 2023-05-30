function solve() {
   let shoppingCart = document.getElementsByClassName("shopping-cart")[0];
   let outcome = document.getElementsByTagName("textarea")[0];

   let totalPrice = 0;
   let products = [];

   let checkoutDone = false;

   shoppingCart.addEventListener("click", function (event) {
      if (event.target.nodeName !== "BUTTON") {
         return;
      }

      if(checkoutDone)
      {
         return;
      }
      let btn = event.target;

      if (Array.from(btn.classList).indexOf("add-product") >= 0) {
         let element = event.target.parentElement.parentElement;
         let product = element.querySelectorAll(".product-title")[0].textContent;
         let price = element.querySelectorAll(".product-line-price")[0].textContent;

         outcome.append(`Added ${product} for ${price} to the cart.\n`);

         totalPrice += Number(price);
         products.push(product);
      }

      else if(Array.from(btn.classList).indexOf("checkout") >= 0){
         
         outcome.append(`You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`)
         checkoutDone = true;
      }
   })
}