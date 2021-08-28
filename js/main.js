/*console.log("hello");
alert("Hello js!");*/
/*console.log("Hello this is a console message");*/
/*var name = 'Amy'
alert(name);*/
/* Létrehozom az alapárat tartalmazó változót, 
aztán egy függvényt, ami azt csinálja
az amount inputmezőt kiválasztom benne
Harmadik lépésben kiszámolom az összeget.*/
function calcAmount() {
   let price = 1000;
   let amountInput = document.querySelector("input[name='amount-input']");
   let showAmount = document.querySelector("span.show-amount");
   let amount = parseInt(amountInput.value) * price;
   /*alert("Fizetendő: " + amount + "Ft.");*/
   showAmount.innerHTML = amount;
}
