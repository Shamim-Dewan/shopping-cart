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