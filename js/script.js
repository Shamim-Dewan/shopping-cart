// btn-plus
document.getElementById("btn-plus").addEventListener("click", function(){
    let counter = document.getElementById("first-count");
    let countNum = parseFloat(counter.value);
    let increamentCountNum = countNum + 1;
    counter.value = increamentCountNum;

    // price count
let price = document.getElementById("mobile-price");
let priceCalculate = increamentCountNum * 1219;
price.innerText = priceCalculate;
})

// btn-minus
document.getElementById("btn-minus").addEventListener("click", function(){
  let counter = document.getElementById("first-count");
  let countNum = parseFloat(counter.value);
  let decreamentCountNum = countNum - 1;
   // if less than 1
   if(decreamentCountNum < 1){
    alert("You have to add atleast One item");
    counter.value = decreamentCountNum + 1;
    return;
  }
  counter.value = decreamentCountNum;

// price count
let price = document.getElementById("mobile-price");
let priceCalculate = decreamentCountNum * 1219;
price.innerText = priceCalculate;
})

// second cart

// btn-plus
document.getElementById("btn-Plus").addEventListener("click", function(){
    let counter = document.getElementById("display-number");
    let countNum = parseFloat(counter.value);
    let increamentCountNum = countNum + 1;
    counter.value = increamentCountNum;

    // price count
let price = document.getElementById("cover-price");
let priceCalculate = increamentCountNum * 1359;
price.innerText = priceCalculate;
})

// btn-minus
document.getElementById("btn-Minus").addEventListener("click", function(){
  let counter = document.getElementById("display-number");
  let countNum = parseFloat(counter.value);
  let decreamentCountNum = countNum - 1;
   // if less than 1
   if(decreamentCountNum < 1){
    alert("You have to add atleast One item");
    counter.value = decreamentCountNum + 1;
    return;
  }
  counter.value = decreamentCountNum;

// price count
let price = document.getElementById("cover-price");
let priceCalculate = decreamentCountNum * 1359;
price.innerText = priceCalculate;
})

// cross btn first
document.getElementById("phone-remove1").addEventListener("click", function(){
  document.getElementById("phone-section1").style.display = "none";
})
// cross btn second
document.getElementById("phone-remove2").addEventListener("click", function(){
document.getElementById("phone-section2").style.display = "none";
})

// total price calculate
document.getElementById("btn-checkout").addEventListener("mouseover",function(){
// carts
let f1 = document.getElementById("phone-section1");
let f2 = document.getElementById("phone-section2");

// if first display is none
if(f1.style.display == "none"){
  console.log(3);
  // we will show the second cart only
  let Secondprice = +document.getElementById("cover-price").innerText;
// subtotal
let subTotal = document.getElementById("sub-total");
let subTotalCalc =  Secondprice;
subTotal.innerText = subTotalCalc;
// tax
let tax = document.getElementById("tax");
let vat = subTotalCalc * 0.15;
tax.innerText = vat;
// total
let total = document.getElementById("total");
let totalCalc = subTotalCalc + vat;
total.innerText = totalCalc;

}

// if second display is none
if(f2.style.display == "none"){
  // we will show the first cart only
  let Fistprice = +document.getElementById("mobile-price").innerText;
// subtotal
let subTotal = document.getElementById("sub-total");
let subTotalCalc =  Fistprice;
subTotal.innerText = subTotalCalc;
// tax
let tax = document.getElementById("tax");
let vat = subTotalCalc * 0.15;
tax.innerText = vat;
// total
let total = document.getElementById("total");
let totalCalc = subTotalCalc + vat;
total.innerText = totalCalc;

}

// if both display is not none
if(f2.style.display != "none" && f1.style.display != "none"){

  let Fistprice = +document.getElementById("mobile-price").innerText;
  let Secondprice = +document.getElementById("cover-price").innerText;
  // subtotal
  let subTotal = document.getElementById("sub-total");
  let subTotalCalc = Fistprice + Secondprice;
  subTotal.innerText = subTotalCalc;
  // tax
  let tax = document.getElementById("tax");
  let vat = subTotalCalc * 0.15;
  tax.innerText = vat;
  // total
  let total = document.getElementById("total");
  let totalCalc = subTotalCalc + vat;
  total.innerText = totalCalc;


}

// if both display is none
if(f2.style.display == "none" && f1.style.display == "none"){
  
  // subtotal
  let subTotal = document.getElementById("sub-total");
  subTotal.innerText = "0";
  // tax
  let tax = document.getElementById("tax");
  tax.innerText = "0";
  // total
  let total = document.getElementById("total");
  total.innerText = "0";


}

})
