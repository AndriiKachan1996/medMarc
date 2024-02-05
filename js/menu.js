(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    isMenuOpen
      ? (document.body.style.overflow = 'auto')
      : (document.body.style.overflow = 'hidden');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.style.overflow = 'auto';
  });
})();



// function test(array, value) {
//   for (let i of array) {
//     if (i === value) return true

//   }
//   return false
// }

// console.log(test([1, 2, 3, 4, 5], 17))


// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// function getExtremeElements(array) {
//   // Change code below this line


//   const lastEl = array[array.length - 1]

//   const firstEl = array[0]

//   return [firstEl, lastEl]

//   // Change code above this line
// }

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]))


// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line

//   words = message.split(delimiter)

//   // Change code above this line
//   return words;
// }


// console.log(splitMessage("Mango hurries to the train", " "))

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100



// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   const split = message.split(' ')
//   return split.length * pricePerWord

//   // Change code above this line
// }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))


// Доповни код функції makeStringFromArray(array, delimiter) 
// таким чином, щоб вона повертала у змінній string результат з'єднання 
// елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter)

//   // Change code above this line
//   return string;
// }

// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//   // Change code below this line
//   const arr = title.split(" ");
//   return arr.join("-").toLowerCase();
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"))

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);

// console.log(lastThreeEls)

// Напиши функцію makeArray(firstArray, secondArray, maxLength) 
// для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. 
// Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, 
// функція повинна повернути копію масиву довжиною maxLength елементів. 
// В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   const unitesArr = firstArray.concat(secondArray);

//   if (unitesArr.length > maxLength) {
//     return unitesArr.slice(0, maxLength);
//   }

//   return unitesArr.slice(0);

//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))

// for (let i = 0; i <= 20; i += 1) {
//   console.log(i);
// }

// Напиши функцію calculateTotal(number), яка приймає ціле число 
// (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. 
// Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300


// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;

//   for (let i = 0; i <= number; i++) {
//     total += i
//   }

//   return total


//   // Change code above this line
// }


// console.log(calculateTotal(7))

// const number = 10



// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i++) {
//     total += order[i]
//   }

//   // Change code above this line
//   return total;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]))


// Напиши функцію findLongestWord(string), 
// яка приймає довільний рядок, що складається тільки зі слів, 
// розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//   const arr = string.split(" "); //роблю масив з слів
//   let findWord = arr[0]; // за замовчуванням беру перше слово з масиву

//   for (const word of arr) { // перебираю масив
//     if (word.length > findWord.length) { // порівнюю на кожній ітерації переше слово з всіма іншими 
//       findWord = word; // при виконнані умови, перезаписую слово яке було за замов. на слово, яке виявилось довше
//     }
//   }
//   return findWord // повертаю знайдене слово 
// }


// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// console.log(findLongestWord("Google do a roll"))
// console.log(findLongestWord("May the force be with you"))
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// console.log(findLongestWord("brown fox the lazy dog"))

// Доповни код функції createArrayOfNumbers(min, max) 
// таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++) {
//     numbers.push(i)
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3))
// Напиши функцію filterArray(numbers, value), 
// яка приймає масив чисел (параметр numbers) і повертає новий масив, 
// в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив

// В циклі for використовувався метод push

// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArr = []; // створюю новий масив, пустий. Для пушування туди потрібнех мені значень

//   for (const number of numbers) { // перебираю масив 
//     if (number > value) { // на кожній ітерації порівнюю параметр value з числом з масиву
//       newArr.push(number) // при виконанні умови, пушую в пустий масив ті числа, чкі проходять за умовою
//     }
//   }
//   return newArr; // повертаю новий масив
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))
// console.log(filterArray([1, 2, 3, 4, 5], 4))
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([1, 2, 3, 4, 5], 5))


// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] 
// спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. 
// А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), 
// яка отримує два масиви довільної довжини в параметри array1 і array2, 
// і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   let newArray = []; // ініціалізую новий масив 
//   for (const num of array1) { // перебираю кожен елемент першого масиву
//     if (array2.includes(num)) { // перевіряю чи є співпадіння по елементам з другим масивом
//       newArray.push(num); // всі співпавші елементи пушую в новий масив 
//     }
//   }
//   return newArray; // і вивожу його


//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]))
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив

// Функція filterArray() використовує цикл for..of

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))

// Напиши функцію getEvenNumbers(start, end), 
// яка повертає масив усіх парних чисел від start до end. 
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає [2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає [4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає [8]
// Виклик функції getEvenNumbers(7, 7) повертає []
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
//   const arr = []

//   for (let i = start; i < end; i++) {
//     if (2 % i) {
//       arr.push(i)
//     }
//   }

//   return arr


// }

// console.log(getEvenNumbers(2, 5))

// Напиши функцію includes(array, value), яка робить те саме, 
// що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, 
// повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {
//   // Change code below this line
//   // let result = undefined;
//   for (const item of array) {
//     if (value === item) {
//       return true
//     }

//   }
//   return false

//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3)) // true
// console.log(includes([1, 2, 3, 4, 5], 17)) // false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")) // 

////////////////////////////////////////////////////////////////////////////////////////////
// OBJECTS

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount = Object.keys(object).length
//     }
//   }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }))


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const hexColor of colors) {
//   hexColors.push(hexColor.hex)
// }

// for (const rgbColor of colors) {
//   rgbColors.push(rgbColor.rgb)
// }

// console.log(hexColors)
// console.log(rgbColors)


// for(const rgbColor of colors) { 
// rgbColors.push(colors.hexColor)
// }



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const { name, price } of products) {
//     if (name === productName) {
//       return price
//     }
//   }
//   return null


//   // Change code above this line
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Grip"))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const arr = []

//   for (const product of products) {
//     if (product[propName]) {
//       arr.push(product[propName])
//     }

//   }
//   return arr;

//   // Change code above this line
// }

// console.log(getAllPropValues("price"))


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity
//     }

//   }
//   return totalPrice
//   // Change code above this line
// }


// console.log(calculateTotalPrice("Radar"))


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line



//   // Change code above this line
// }


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon : "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature)
// console.log(highTemperatures)


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(highTemperatures)


