// function greet(name){
//     console.log("Привет" + name)
// }

// greet("Alex")
// greet("John")
// greet("Edward")

// function sum(a,b){
//     return a + b
// }

// let numbers1 = sum(1,1)
// sum(4, 5)
// sum(1, 2)
// sum(3, 3)
// console.log(numbers1)

// function multiply(a,b){
//     return a * b
// }
// console.log(multiply(4,5))
// console.log(multiply(7,8))

// function checkAge(age){
//     if(age >= 18)
//         console.log("доступ разрешен")
//     else{
//         console.log("доступ запрещен")
//     }
// }

// checkAge(20)
// checkAge(15)

// function shout(word){
//     console.log(word.toUpperCase())
// }
// shout("hello")
// shout("javascript")

// function getDiscount(price){
//     return price * 0.9
// }

// let newPrice = getDiscount(1000);
// console.log("цена со скидкой" + newPrice)

// practice 
// 1) function doubleNumber(num){
//     return num * 2
// }

// let result = doubleNumber(5)
// console.log(result)

// 2) function square(num){
//     return num * num
// }
// console.log(square(5))

// 3) function sum(a,b){
//     return a + b
// }

// console.log(sum(4,5))

// function square(num){
//     return num * num
// } обычная функция

// const square2 = (num) =>{
//     return num * num
// } сокращенная стрелочная

// const square3 = (num) => num * num

// const add = (a,b) => {
//     return a + b
// }

// const add2 = (a,b) => a + b 

// const isEven = (num) => num % 2 === 0

// const isAdult = age => age >=18

// const getLength = text => text.length
// console.log(getLength("Javascript"))

// const getDiscount = price => price * 0.7


// console.log(isAdult(19))
// console.log(isAdult(16))

// console.log(isEven(6))
// console.log(isEven(9))

// console.log(add(1,2))
// console.log(add2(1,2))

// const toUppercase = text => text.toUppercase;
// console.log(toUppercase("hello"))

// const applyDiscount = price => price * 0.9;

// console.log(applyDiscount(100))

// let numbers = [10, 20, 30, 40, 50, 60]

// numbers.push(70)
// numbers.pop()
// numbers.unshift(0)
// numbers.shift()
// console.log(numbers.includes(100))
// console.log(numbers.indexOf(60))
// console.log(numbers.slice(1,3))

// for(let i = 0; i < numbers.length; i++){
//     console.log(i,numbers[i])
// }

// let words = ["Я", "Учу", "Javascript"]
// let a = words.join(" ")
// console.log(a)

// map -> создать новый массив

// let nums = [1, 2, 3, 4]
// let doubled = nums.map(num => num * 2)

// console.log(doubled)

// filter -> оставить только подходящие элементы

// let nums = [1, 2, 3, 4, 5, 6, 7, 8]
// let evenNums = []

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//         evenNums.push(nums[i])
//     }
// }
// console.log(evenNums)

// let nums = [1, 2, 3, 4, 5, 6, 7, 8]
// let evenNums = nums.filter(num => num % 2 === 0)

// console.log(evenNums)

// let nums = [1, 2, 3, 4, 5, 6, 7, 8]

// let result = nums.find(num => num > 4)
// console.log(result)

// let fruits = ["🍇", "🍉", "🍊", "🍎"]

// fruits.forEach(fruit => {
//     console.log("Фрукт: ", fruit)
// }) 

