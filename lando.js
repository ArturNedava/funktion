// task 1
//const btn = document.querySelector(".btn")

//btn.addEventListener("click", () => {
 //   alert("hello world")
//});


// task 2

//const input = document.querySelector("#guessField")
//const pText = document.querySelector("#guessResult")

//const checkGuess = (min, max) => {
 //   let rNumber = Math.floor(Math.random() * 99 + 1)

 //  if(rNumber === +input.value){
 //   pText.textContent = "вы угадали"
 //  }else{
 //   pText.textContent = "вы не угодали"
 //  }
//}



// task 3

//let counter = 0;
//document.addEventListener("click" , () => {
  //counter++;
 // console.log(` на страничку нажали ${counter}`)
//});


// task 4

//const applyCallbackToEachElement = (arr,callback) => {
  //const arrayNumber = []
 // for(const number of arr ){
  //  arrayNumber.push(callback(number));
 // }
 // return arrayNumber;
//}

//const arr = [1, 2, 3, 4, 5]
//const squareCallback = (number) => {
  //  return number ** 2;

//}
//const result = applyCallbackToEachElement(arr, squareCallback);
//console.log(result);


// task 5


const calculateDiscontedPrice = (price, discount, callback) => {
 let discountP =  price - price / discount
  callback (discountP);
}


const showDiscountedPrice = (TotalPrice) => {
    console.log(`ваш товар со скидкой стоит: ${TotalPrice}`)
}

calculateDiscontedPrice(100,10 , showDiscountedPrice);


  
 
  
  





