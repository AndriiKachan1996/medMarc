// Додаємо обробники подій на всі кнопки з класом 'btn'
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    flipCard(btn);
  });
});

// Функція для перевертання картки
function flipCard(btn) {
  const parentNodeId = 'parent-id';
  const toggleClassId = 'toggle-class';
  const parentId = btn.getAttribute(parentNodeId);
  const toggleId = btn.getAttribute(toggleClassId);

  if (parentId && toggleId) {
    const card = document.getElementById(parentId);
    if (card) {
      card.classList.toggle(toggleId);
    } else {
      console.log('Card not found');
    }
  } else {
    console.log('parentId and/or toggleId not found');
  }
}



// const weight = "88,3"; 
// const height = "1.75" 

// const normalizeWeight = + weight.replace(',', ".")
// const bmi = (normalizeWeight / height ** 2)
// console.log(+bmi.toFixed(1))

//   let cost;

//   const subscription = "";

//   if(subscription === "standart") { 
//     cost = 100;
//   }

//   else if( subscription === "pro") { 
//     cost = 150;
//   }

//   else if ( subscription === "gold") { 
//     cost = 200;
//   }

//   else if ( subscription === "diamond") {
//     cost = 250;

//   }
//   else { 
//  console.log('Sorry, but you dont have any cots')
//   }


// let cost = 0;
// const subscription = ''

// switch (subscription) { 
//   case "start" : cost = 0; 
//   break;

//   case "standart" : cost = 100;
//   break;

//   case "gold" : cost = 150;
//   break;

//   default : console.log("Sorry, but you don't have any cots"); 

// }


// console.log(cost)

// const input = prompt('Яка офіційна назва JS');

// console.log(input)


// if(input === "ECMAScript"){
// alert("Вірно");
// } else {
//   alert("Ви не знаєте JS");
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   const totalPrice = pricePerDroid * orderedQuantity + deliveryFee

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee}) is included in total price.`

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50))

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   const delta = customerCredits - totalPrice;

//   if(totalPrice > customerCredits) {
//    message =  "Insufficient funds!";
//   } 
//   else {
//    message = `You ordered ${orderedQuantity} droids, you have ${delta} credits left`
//   }

//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000))

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   if (ordered === 0) {
//     message = "There are no products in the order!"
//   }
//   else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!"
//   }
//   else {
//     message = "The order is accepted, our manager will contact you"
//   }


//   return message;
// }

// console.log(checkStorage(100, 500))



// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// console.log(isNumberInRange(100, 500, 100))

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType === 'pro' || subType === "vip"); // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent('vip'))


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000 && totalSpent > 50000) {
//     discount = GOLD_DISCOUNT;
//   }
//   else if (totalSpent >= 20000 || totalSpent > 50000) {
//     discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000 || totalSpent > 20000) {
//     discount = BRONZE_DISCOUNT;
//   }
//   else {
//     discount = BASE_DISCOUNT
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(8200))

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   ordered > available ? message = "Not enough goods in stock!" : message = "The order is accepted, our manager will contact you"

//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(20, 1000))

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   switch (country) {
//     case "Australia": message = "Shipping to Australia will cost 170 credits";
//       break;

//     case "China": message = "Shipping to China will cost 100 credits";
//       break;

//     case "Jamaica": message = "Shipping to Jamaica will cost 170 credits";
//       break;

//     case "Chile": message = "Shipping to Chile will cost 170 credits";
//       break;



//     default: message = "Sorry, there is no delivery to your country"

//   }

//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost('China'))


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(courseTopicLength, firstElement, lastElement)


// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring('hello world', 5))


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + '...';
//   }
//   else {
//     result = message
//   }

//   console.log(message.length)



//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16))


// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("JAKDRkjansdkjsand"))


// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   const normalizeMessage = message.toLowerCase()
//   result = normalizeMessage.includes("spam") || normalizeMessage.includes("sale")
//   // console.log(normalizeMessage)


//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Curabitur ligula sapien spam"))


// const input = + prompt("Enter your number")

// if (input > 0) {
//   console.log("it's positive number")
// }

// else if (input < 0) {
//   console.log("it's number with minuce")
// }

// else if (input === 0) {
//   console.log("it's 0")
// }

// else if (input !== String) {
//   console.log("Please enter numbers")
// }

// else if (input === null) {
//   console.log("Let's try again")
// }

// console.log(input)

const a = 120;
const b = 1300;

if (a > 100 && b > 100) {
  a > b ? console.log(a) : console.log(b)
} else {
  console.log(b + 512)
}

