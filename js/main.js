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
   /*alert("Fizetendő: " + amount + "Ft.");*/
   let amountNumber = parseInt(amountInput.value)
   /*ha nem írok be számot, törlöm a nullát is, akkor NaN felirat lesz a 
   fizetendő résznél, mert a parseInt (följebb egy sorral) nem tudja
   számmá alakítani a semmit Ezért írunk egy if -et, hogy ha az 
   amountNumber értéke NaN, akkor állítsa át 0-ra. Ezt kell írni:
   if (isNaN(amountNumber)) {
      amountNumber = 0;
   }
   Ez jó volt, de most egyszerűsítjuk 3 operandusos kifejezéssel, lásd 
   leckében az if feltétel egyszerűsítése címszónál, tehát a komment
   alatt már az van:
   */
   amountNumber = isNaN(amountNumber) ? 0: amountNumber;
   if (amountNumber > 10) {
      alert("Maximum 10 db. terméket vásárolhat!");
      return;
   } else if (amountNumber < 1) {
      alert("Minimum 1db. terméket vásárolhat");
   } else {
      let amount = amountNumber * price;
      showAmount.innerHTML = amount;
   }
}


