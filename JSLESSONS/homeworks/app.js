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

// дз DOM, BOM
// 1) 
// const title = document.getElementById("title")
// const texts = document.getElementsByClassName("text")
// const p = document.getElementsByTagName("p")
// const firstButton = document.querySelector("button")
// const allParagraphs = document.querySelectorAll("p")

// console.log(title)
// console.log(texts)
// console.log(p)
// console.log(firstButton)
// console.log(allParagraphs)


// 2)
// const title = document.getElementById("title")
// const button = document.getElementById("changeBtn")
// const div = document.getElementById("content")

// button.addEventListener("click", () => {
//     title.textContent = "DOM работает!"
// })

// div.innerHTML = "<b>это жирный текст</b>"

// 3)
// const img = document.getElementById("img");
// const link = document.getElementById("link");
// const changeBtn = document.getElementById("changeBtn");

// changeBtn.addEventListener("click", () => {
//     img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7O0rnflBJFMrKti916_CVbY7Uj38l7kjpw&s";
//     img.alt = "Новая картинка";

//     link.href = "https://google.com";
//     link.textContent = "Новая ссылка";
// })

// 4)
// const title = document.getElementById("title");
// const texts = document.querySelectorAll(".text");
// const paintBtn = document.getElementById("paintBtn");

// paintBtn.addEventListener("click", () => {
//     title.style.color = "white";
//     title.style.fontSize = "30px";
//     title.style.background = "purple";

//     texts.forEach(el => {
//         el.style.color = "blue";
//         el.style.fontSize = "20px";
//     });
// })

// 5)
// const message = document.getElementById("message");
// const themeBtn = document.getElementById("themeBtn");

// themeBtn.addEventListener("click", () => {
//     message.classList.toggle("dark");
// });


// message.classList.add("dark");
// message.classList.remove("dark");
// console.log(message.classList.contains("dark"));


// 6)
// let count = 0;
// const counter = document.getElementById("counter");

// document.getElementById("plus").addEventListener("click", () => {
//     count++;
//     counter.textContent = count;
// });

// document.getElementById("minus").addEventListener("click", () => {
//     count--;
//     counter.textContent = count;
// });


// 7) 
// const password = document.getElementById("password");
// const togglePass = document.getElementById("togglePass");

// togglePass.addEventListener("click", () => {
//     if (password.type === "password") {
//         password.type = "text";
//         togglePass.textContent = "Скрыть";
//     } else {
//         password.type = "password";
//         togglePass.textContent = "Показать";
//     }
// });


// 8) 
// const box = document.getElementById("box");
// const clickBtn = document.getElementById("clickBtn");

// box.addEventListener("mouseover", () => {
//     box.style.background = "yellow";
// });

// box.addEventListener("mouseout", () => {
//     box.style.background = "lightgray";
// });

// clickBtn.addEventListener("click", () => {
//     alert("Кнопка нажата");
// });


// 9) 
// const inputText = document.getElementById("inputText");
// const output = document.getElementById("output");

// inputText.addEventListener("input", () => {
//     output.textContent = "Вы ввели: " + inputText.value;
// });


// 10)
// const nameInput = document.getElementById("nameInput");
// const sendBtn = document.getElementById("sendBtn");
// const result = document.getElementById("result");

// sendBtn.addEventListener("click", () => {
//     const name = nameInput.value.trim();

//     if (name === "") {
//         result.textContent = "Введите имя";
//     } else {
//         result.textContent = "Привет, " + name + "!";
//     }
// });

// дз inputы делегирование
// 1) 
// const nameInput = document.getElementById("nameInput");
// const sendName = document.getElementById("sendName");
// const nameResult = document.getElementById("nameResult");
// const nameError = document.getElementById("nameError");

// sendName.addEventListener("click", () => {
//     const name = nameInput.value.trim();

//     nameError.textContent = "";
//     nameResult.textContent = "";

//     if (name === "") {
//         nameError.textContent = "Введите имя";
//         return;
//     }

//     if (name.length < 2) {
//         nameError.textContent = "Имя слишком короткое";
//         return;
//     }

//     nameResult.textContent = "Здравствуйте, " + name + "!";
//     nameInput.value = "";
// });


// 2)
// const commentInput = document.getElementById("commentInput");
// const sendComment = document.getElementById("sendComment");
// const commentResult = document.getElementById("commentResult");
// const commentError = document.getElementById("commentError");

// sendComment.addEventListener("click", () => {
//     const comment = commentInput.value.trim();

//     commentError.textContent = "";
//     commentResult.textContent = "";

//     if (comment === "") {
//         commentError.textContent = "Комментарий не может быть пустым";
//         return;
//     }

//     if (comment.length < 5) {
//         commentError.textContent = "Комментарий слишком короткий";
//         return;
//     }

//     if (comment.length > 50) {
//         commentError.textContent = "Комментарий слишком длинный";
//         return;
//     }

//     commentResult.textContent = comment;
//     commentInput.value = "";
// });

// localstorage дз
// 1)
// const colorInput = document.getElementById("colorInput");
// const saveColorBtn = document.getElementById("saveColorBtn");
// const colorResult = document.getElementById("colorResult");

// saveColorBtn.addEventListener("click", () => {
//     localStorage.setItem("color", colorInput.value);
//     showColor();
// });

// function showColor() {
//     const saved = localStorage.getItem("color");
//     if (saved) {
//         colorResult.textContent = "Ваш любимый цвет: " + saved;
//     }
// }

// showColor();


// 2)
// let visits = localStorage.getItem("visits");

// if (visits === null) {
//     visits = 1;
// } else {
//     visits = Number(visits) + 1;
// }

// localStorage.setItem("visits", visits);

// document.getElementById("visitCount").textContent =
//     "Вы открыли страницу " + visits + " раз";


// // 3)
// const note = document.getElementById("note");
// const saveNoteBtn = document.getElementById("saveNoteBtn");

// saveNoteBtn.addEventListener("click", () => {
//     localStorage.setItem("note", note.value);
// });

// function loadNote() {
//     const saved = localStorage.getItem("note");
//     if (saved) {
//         note.value = saved;
//     }
// }

// loadNote();


// 4)
// const welcome = document.getElementById("welcome");
// const hideBtn = document.getElementById("hideBtn");

// hideBtn.addEventListener("click", () => {
//     welcome.style.display = "none";
//     localStorage.setItem("hidden", "yes");
// });

// if (localStorage.getItem("hidden") === "yes") {
//     welcome.style.display = "none";
// }


// 5)
// const itemInput = document.getElementById("itemInput");
// const addItemBtn = document.getElementById("addItemBtn");
// const list = document.getElementById("list");

// let items = JSON.parse(localStorage.getItem("items")) || [];

// addItemBtn.addEventListener("click", () => {
//     items.push(itemInput.value);
//     localStorage.setItem("items", JSON.stringify(items));
//     showList();
// });

// function showList() {
//     list.innerHTML = "";

//     items.forEach(item => {
//         const li = document.createElement("li");
//         li.textContent = item;
//         list.appendChild(li);
//     });
// }

// showList();

// дз асинхрон(11 урок)
// 1) 
// const title = document.getElementById("title")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", ()=>{
//     title.textContent = "Новый заголовок"
// })

// 2) const text = document.getElementById("text")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", ()=> {
//     text.style.color = "red"
// })

// 3)
// const box = document.getElementById("box")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () =>{
//     box.style.backgroundColor = "blue"
//     box.style.color = "white"
//     box.style.padding = "20px"
// })

// 4)
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () =>{
//     btn.textContent = "Нажато"
//     btn.style.backgroundColor = "green"
//     btn.style.color = "white"
//     btn.style.padding = "15px"
// })

// 5)
// const nameInput = document.getElementById("nameInput")
// const btn = document.getElementById("btn")
// const result = document.getElementById("result")

// btn.addEventListener("click", () => {
//     result.textContent = `Привет, ${nameInput.value}`
// })

// 6)
// const form = document.getElementById("form")
// const result = document.getElementById("result")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     result.textContent = `Ваш email: ${emailInput.value}`
// })

// 7)
// const form = document.getElementById("form")
// const nameInput = document.getElementById("nameInput")
// const message = document.getElementById("message")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     if(nameInput.value === ""){
//         message.textContent = "Введите имя"
//     } else {
//         message.textContent = `Привет, ${nameInput.value}`
//     }
// })

// 8)
// const image = document.getElementById("image")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRND7MzfQytXJRDJDCbbRyBwtIR-TIRKI2Uyg&s"
// })

// 9)
// const text = document.getElementById("text")
// const hideBtn = document.getElementById("hideBtn")
// const showBtn = document.getElementById("showBtn")

// hideBtn.addEventListener("click", () => {
//     text.style.display = "none"
// })

// showBtn.addEventListener("click", () => {
//     text.style.display = "block"
// })

// 10)
// const name = document.getElementById("name")
// const age = document.getElementById("age")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     name.textContent = "Dias"
//     age.textContent = "21"

//     name.style.color = "blue"
//     age.style.fontSize = "20px"
// })

// 11)
// const btn11 = document.getElementById("btn11")

// function getData() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve("Данные успешно загружены")
//        }, 2000)
//    })
// }

// btn11.addEventListener("click", async () => {
//     const result = document.getElementById("result11")

//     result.textContent = "Загрузка..."

//     const data = await getData()

//     result.textContent = data
// })

// 12)
// const btn = document.getElementById("btn")

// function getUser() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve({
//                name: "Aruzhan",
//                age: 19
//            })
//        }, 1000)
//    })
// }

// btn.addEventListener("click", async () => {
//     const result = document.getElementById("result")

//     result.textContent = "Загрузка..."

//     const user = await getUser()

//     result.textContent = `Пользователь: ${user.name}, возраст: ${user.age}`
// })

// 13)
// const form = document.getElementById("form")
// const passwordInput = document.getElementById("passwordInput")
// const message = document.getElementById("message")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     if(passwordInput.value.length < 6){
//         message.textContent = "Пароль слишком короткий"
//     } else {
//         message.textContent = "Пароль подходит"
//     }
// })

// 14)
// const title = document.getElementById("title")
// const description = document.getElementById("description")
// const btn = document.getElementById("btn")


// btn.addEventListener("click", () => {
//     title.textContent = "Мой первый DOM сайт"
//     description.textContent = "Я научился менять HTML через JavaScript"
//     title.style.color = "purple"
//     description.style.backgroundColor = "yellow"
// })

// 15)
// const login = document.getElementById("loginInput")
// const password = document.getElementById("passwordInput")
// const message = document.getElementById("message")
// const form = document.getElementById("form")

// form.addEventListener("submit", (e) =>{
//     e.preventDefault()

//     if (login.value === "" || password.value === ""){
//         message.textContent = "Заполните все поля"
//     }
//     else{
//         message.textContent = "Вы успешно вошли"
//     }
// })

// 16)
// const counter = document.getElementById("counter")
// const btn = document.getElementById("btn")

// let count = 0
// btn.addEventListener("click", () =>{
//     count++
//     counter.textContent = count
// })

// 17)
// const text = document.getElementById("textInput")
// const clearBtn = document.getElementById("clearBtn")

// clearBtn.addEventListener("click", () => {
//     text.value = ""
// })

// 18)
// const form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
    
//     const msg = document.getElementById('message')
//     message.textContent = "Данные сохранены"
//     message.style.color = "green"
// });

// 19)
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     productTitle.textContent = "Ноутбук"
//     productPrice.textContent = "Цена: 250000 тг"
//     productPrice.style.color = "red"
// })

// 20)
// const form = document.getElementById("form")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     if(nameInput.value === "" || emailInput.value === ""){
//         message.textContent = "Заполните все поля"
//     } else {
//         message.textContent = `Спасибо за регистрацию, ${nameInput.value}`
//         message.style.color = "green"
//         title.textContent = "Регистрация успешна"
//     }
// })