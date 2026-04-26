// подключение js к html

// const title = document.getElementById("title")
// console.log(title)

// console.log(document)
// console.log(document.body)
// console.log(document.title)

// 1 getElementById получение элемента через ID 

// 2 getElementsByClassName достает коллекцию элементов 
// const texts = document.getElementsByClassName("text")
// console.log(texts)

// 3 getElementsByTagName возвращает коллекцию элементов по тегу
// const paras = document.getElementsByTagName("p")
// console.log(paras)

// 4 querySelector универсальный метод который возвращает первый элемент по css селектору
// const sub = document.querySelector(".subtitle")
// console.log(sub)

// 5 querySelectorAll
// const allTexts = document.querySelectorAll(".text")
// console.log(allTexts)

// что такое NODELIST и HTMLCOLLECTION
// nodelist - массив с индексами
// htmlcollection - это объект

// изменение содержимого элемента
// 1. поменять текст
// const title = document.getElementById("title")
// title.textContent = "новый текст"

// 2.
// const title = document.getElementById("title")
// title.innerHTML = "<div><b>это иннер хтмл</b></div>"

// 3. 
// const photo = document.getElementById("photo")
// const link = document.getElementById("link")

// console.log(photo.getAttribute("src"))
// photo.setAttribute("src", "https://play-lh.googleusercontent.com/KQnKLnS1L-rNVd3fVFwrdc-7H2ODB2wpU8jmjq6vp3W6SITiQV180s5022V3-QlcfZc")
// photo.setAttribute("alt", "Pixel")

// console.log(link.getAttribute("href"))
// link.setAttribute("href", "https://pixelcom.kz/")
// link.textContent = "Pixel"

// 4.
// const text = document.getElementById("title")

// text.style.color = "red"
// text.style.fontSize = "5px"
// text.style.backgroundColor = "yellow"
// text.style.width
// text.style.height 

// const p = document.querySelectorAll(".text")
// p.forEach(item =>{
//     item.style.color = "blue"
// })

// const message = document.getElementById("message")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () =>{
//     message.classList.add("active")
// })

// const title = document.getElementById("title")
// const changeBtn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     title.textContent = "новый текст"
// })

// const countEl = document.getElementById("count")
// const plusBtn = document.getElementById("plus")
// const minusBtn = document.getElementById("minus")

// let count = 0

// plusBtn.addEventListener("click", () => {
//     count++
//     countEl.textContent = count
// })

// minusBtn.addEventListener("click", () => {
//     count--
//     countEl.textContent = count
// })

const card = document.getElementById("card")
const buttons = document.querySelectorAll("button")

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        card.style.backgroundColor = btn.textContent
    })
})