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