// дз циклы

// 1) let n = Number(prompt("введите число"))
// let i = 1;
// let sum = 0;

// while(i <= n){
//     sum += i
//     i++
// }

// console.log(sum)

// 2) let n = Number(prompt("введите число"))
// let reversed = 0

// while (n > 0){
//     let digit = n % 10
//     reversed = reversed * 10 + digit
//     n = (n - n % 10) / 10
// }

// console.log(reversed)

// 3) let secret = Number(prompt("загадай число от 1 до 10"))
// let guess

// do {
//     guess = Number(prompt("угадай число"))

// }

// while (guess !== secret)

// alert("ты угадал")

// 4) const password = "12345"
// let attempts = 0
// let input
// do{
//     input = prompt("введите пароль")
//     attempts++
// } while (input !== password && attempts < 3)

// if(input === password){
//     alert("доступ открыт")
// }
// else{
//     alert("доступ закрыт")
// }

// 5) let n = Number(prompt("введите число"))

// for(let i = 1; i <= n; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 6) let n = Number(prompt("введите число"))
// let fact = 1

// for (let i = 1; i <=n; i++){
//     fact *= i
// }

// console.log(fact)


// функции и массивы 

// блок 1
// function triple(num){
//     return num * 3
// }

// function isNegative(num){
//     return num < 0
// }

// function lastLetter(text){
//     return text[text.length - 1]
// }


// const triple = num => num * 3
// const isNegative = num => num < 0
// const lastLetter = text => text[text.length - 1]

// блок 2
// let nums = [7, 14, 2, 9, 20, 11, 4]

// let sum = nums.reduce((acc, num) => acc + num, 0)
// console.log(sum)

// let max = Math.max(...nums)
// console.log(max)

// let even = nums.filter(num => num % 2 === 0)
// console.log(even)

// let plusFive = nums.map(num => num + 5)
// console.log(plusFive)

// let firstBig = nums.find(num => num > 10)
// console.log(firstBig)

// блок 3
// let words = ["red", "blue", "green", "hi", "yellow", "cat"]

// let upper = words.map(word => word.toUpperCase())
// console.log(upper)

// let lengths = words.map(word => word.length)
// console.log(lengths)

// let longWords = words.filter(word => word.length > 3)
// console.log(longWords)

// let firstG = words.find(word => word[0] === "g")
// console.log(firstG)

// let joined = words.join(", ")
// console.log(joined)




// Часть 1
// let numbers = [2, 5, 7, 12, 0, -3, 15]; 

// let multiplied = numbers.map(num => num * 3);
// console.log("Умноженные на 3:", multiplied);

// let greaterThan10 = multiplied.filter(num => num > 10);
// console.log("Больше 10:", greaterThan10);

// let divisibleBy5 = multiplied.find(num => num % 5 === 0);
// console.log("Первое, делящееся на 5:", divisibleBy5);

// let hasNegative = multiplied.some(num => num < 0);
// console.log("Есть ли число < 0:", hasNegative);

// let allEven = multiplied.every(num => num % 2 === 0);
// console.log("Все числа четные:", allEven);

// let sum = multiplied.reduce((acc, num) => acc + num, 0);
// console.log("Сумма всех чисел:", sum);

// Часть 2
// let words = ["apple", "banana", "kiwi", "strawberry", "melon"];

// let upperCaseWords = words.map(word => word.toUpperCase());
// console.log("В верхнем регистре:", upperCaseWords);

// let longerThan5 = words.filter(word => word.length > 5);
// console.log("Длиннее 5 символов:", longerThan5);

// let longerThan7 = words.find(word => word.length > 7);
// console.log("Первое слово >7 символов:", longerThan7);


// Часть 3
// let users = [
//   { name: "Ali", age: 17, isActive: true },
//   { name: "Dana", age: 22, isActive: false },
//   { name: "Aruzhan", age: 19, isActive: true },
//   { name: "Maksat", age: 15, isActive: true }
// ];

// let names = users.map(user => user.name);
// console.log("Имена пользователей:", names);

// let activeUsers = users.filter(user => user.isActive);
// console.log("Активные пользователи:", activeUsers);

// let olderThan18 = users.filter(user => user.age > 18);
// console.log("Пользователи старше 18:", olderThan18);

// let firstInactive = users.find(user => !user.isActive);
// console.log("Первый неактивный пользователь:", firstInactive);

// let hasUnder16 = users.some(user => user.age < 16);
// console.log("Есть ли пользователь <16:", hasUnder16);

// let allActive = users.every(user => user.isActive);
// console.log("Все пользователи активны:", allActive);

// let totalAge = users.reduce((acc, user) => acc + user.age, 0);
// console.log("Сумма возрастов:", totalAge);