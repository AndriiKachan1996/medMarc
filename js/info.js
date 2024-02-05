const location = document.getElementById("location");
location.addEventListener("click", function() {
  window.open("https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D0%BB%D0%BE%D0%BC-%D0%90%D0%BB%D0%B5%D0%B9%D1%85%D0%B5%D0%BC%D0%B0,+46,+%D0%91%D1%96%D0%BB%D0%B0+%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0,+%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB.,+09100/@49.7907398,30.1263525,17z/data=!3m1!4b1!4m5!3m4!1s0x40d342033c4cab13:0xe44612821b60b0a3!8m2!3d49.7907398!4d30.1263525?entry=ttu", "_blank");
});



const call = document.getElementById("call");
call.addEventListener("click", function() {

  const link = call.querySelector(".info__link");
  const phoneNumber = link.getAttribute("href");

  window.location.href = phoneNumber;
});


const workHours = document.getElementById("workHours");

workHours.addEventListener("click", function() {
  window.location.href = "./contants.html";
});



// Functions 

// callbacks

// 1. Назва функції = її функіонал 
// 2. Одна функція = одна задача
// 3. Не рекомендуєсть змінювати зовнішні, відносно функції, змінні

// function printMyName() {
//   console.log('Andrii')
// }

// setTimeout(printMyName, 1000) 

// function anotherFnc( ) {
// /// lalala
// }

// function fnWithCallback(callbackFunction) {
//   callbackFunction() // виклик функціїв тілі іншої функції назв колбек
// }

// fnWithCallback(anotherFnc)


//  створення копії об'кту

// const onePerson = { 
//   name: "Andrii",
//   age: 26,
// }
 
// function incrPersone(persone) { 
//   const updateAge = Object.assign({}, persone) // new obj
//   updateAge.age += 1;
//   return updateAge
// }

// const updateOnePersonAge = incrPersone(onePerson)

// console.log(onePerson.age) //26
// console.log(updateOnePersonAge.age) //27


// передача значення по посиланню (not good)

// const onePerson = { 
//   name: "Andrii",
//   age: 26,
// }

// function incrPersonAge(data) { 
//   data.age += 1;
//   return data
// }

// incrPersonAge(onePerson)
// console.log(onePerson.age) // 27


// функція це об'єкт 

// function myFnc(a,b) { 
//   let c 
//   a = a + 1
//   c = a + b
//   return c
// }

// console.dir(myFnc)
// console.log(myFnc(5,5))

/////////////////////////////////////////
// Copy Obj 4 
// const person = {
//   name: 'Andrii',
//   age: 26,
//   info: {
//     country: 'Ukraine',
//     city: 'BC'
//   }
// }

// const person2 = JSON.parse(JSON.stringify(person));
// // JSON.stringify(person) - перетворюю на строку
// // JSON.parse(отримана строка) - перетворюємо на об

// // Робимо повноцінну копію і уберігаємся від мутації 
// // тобто вкладені об не будуть змінюватись в ориг об
// // на виході посилання вкладених об не зберігаються 

// person2.age = 28;
// person2.isAduld = false;
// person2.info.city = 'Kiev'



// console.log(person) 
// // {
// //   name: 'Andrii',
// //   age: 26,
// //   info: {
// //     country: 'Ukraine',
// //     city: 'BC'
// //   }
// // }
// console.log(person2)

// // {
// //   name: 'Andrii',
// //   age: 26,
// //   info: {
// //     country: 'Ukraine',
// //     city: 'Kiev'
// //   }
// // }

/////////////////////////////////////////
// // Copy Obj 2 
// const person = {
//   name: 'Andrii',
//   age: 26,
//   info: {
//         country: 'Ukraine',
//         city: 'BC'
//       }
// }

// const person2 = {...person } 

// // через оператор spred (...) розпилюй старий об'єкт в новий.
// // !!підходе, якщо немає вкладених об'єктів
// // бо вкадені об'єкти будуть змінюваться і в оригінальному об'єкті.

// person2.age = 28;
// person2.isAduld = false;

// person.info.city = 'Kiev'


// console.log(person)
// // name: 'Andrii',
// // age: 26,
// // info: {
// //       country: 'Ukraine',
// //       city: 'Kiev'
// //     }

// console.log(person2)
// name: 'Andrii',
// age: 26,
// info: {
//       country: 'Ukraine',
//       city: 'kiev'
//     }

/////////////////////////////////////////
// // Copy Obj 1 
// const person = {
//   name: 'Andrii',
//   age: 26
// }

// const person2 = Object.assign({}, person); 
// створює новий об'єкт.
// !!підходе, якщо немає вкладенрих об'єктів

// person2.age = 28;
// person2.isAduld = false;

// console.log(person.age) // 27
// console.log(person.isAduld) // true

// console.log(person2.age) // 28
// console.log(person2.isAduld) // false 

/////////////////////////////////////////
// Copy by reference
// const person = {
//   name: 'Andrii',
//   age: 26
// }

// const person2 = person;

// person2.age = 27;
// person2.isAdult = true;

// console.log(person.isAdult) // true;
// console.log(person.age) // 27;
/////////////////////////////////////////
// Copy by reference

// const person = {
//   name: 'Andrii',
//   age: 26
// }

// person.age = 27;
// person.isAdult = true;

// console.log(person.isAdult) // true;
// console.log(person.age) // 27;

/////////////////////////////////////////
// Copy by value
// const a = 10 ;

// let b = a;

// b = 30;

// console.log(a) // 10
// console.log(b) //30

/////////////////////////////////////////
// const myCity = {

//   country: "Ukraine",
//   favorite: true
// }


// myCity['popular'] = false;

// const cityName = null;

// myCity[cityName] = "Bila Tserkva"

// console.log(myCity)

// delete myCity.country;


// const keys = Object.keys(myCity)
// const values = Object.values(myCity)

// console.log(keys);
// console.log(values);






