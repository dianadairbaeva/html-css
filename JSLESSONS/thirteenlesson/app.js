const API_URL = "https://dummyjson.com"

const loginScreen = document.getElementById("loginScreen")
const profileScreen = document.getElementById("profileScreen")
// добавить еще скрины для продуктов и одного продукта

// Переменные экрана товаров
const productsScreen = document.getElementById("productsScreen")
const detailScreen = document.getElementById("detailScreen")

// Переменные одного товара
const productsBlock = document.getElementById("productsBlock")
const productDetailBlock = document.getElementById("productDetailBlock")

// Login переменные
const loginForm = document.getElementById("loginForm")
const usernameInput = document.getElementById("usernameInput")
const passwordInput = document.getElementById("passwordInput")
const loginMessage = document.getElementById("loginMessage")

// Profile переменные
const profileBlock = document.getElementById("profileBlock")
const logoutBtn = document.getElementById("logoutBtn")

// Кнопки
const goToProductsBtn = document.getElementById("goToProductsBtn")
const backtoProfileBtn = document.getElementById("backtoProfileBtn")
const backToProductsBtn = document.getElementById("backToProductsBtn")

function showScreen(screenName){
    loginScreen.classList.add("hidden")
    profileScreen.classList.add("hidden")
    productsScreen.classList.add("hidden")
    detailScreen.classList.add("hidden")

    if(screenName === "login"){
        loginScreen.classList.remove("hidden")
        logoutBtn.classList.add("hidden")
    }
    if(screenName === "profile"){
        profileScreen.classList.remove("hidden")
        logoutBtn.classList.remove("hidden")
    }
    if(screenName === "products"){
        productsScreen.classList.remove("hidden")
        logoutBtn.classList.remove("hidden")
    }
    if(screenName === "detail"){
        detailScreen.classList.remove("hidden")
        logoutBtn.classList.remove("hidden")
    }
}

loginForm.addEventListener("submit", async function (event){
    event.preventDefault()

    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()

    if(username === "" || password === ""){
        loginMessage.textContent = "Введите username и password"
        return
    }

    await loginUser(username, password)
})

async function loginUser(username,password){
    try{
        loginMessage.textContent = "Выполняется вход..."

        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresMins: 30
            })
        })
        if(!response.ok){
            throw new Error("Неверный логин или пароль")
        }
        const data = await response.json()

        localStorage.setItem("accessToken", data.accessToken)
        loginMessage.textContent = ""

      await loadProfile()
    }catch(error){
        loginMessage.textContent = error.message
    }
}

async function loadProfile(){
    try{
        profileBlock.innerHTML = "<p>Загрузка профиля...</p>"

        const token = localStorage.getItem("accessToken")

        if(!token){
            showScreen("login")
            return
        }

        const response = await fetch(`${API_URL}/auth/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        if(!response.ok){
            throw new Error("Не удалось получить профиль")
        }
        const user = await response.json()

        renderProfile(user)
        showScreen("profile")
    }catch(error){
        localStorage.removeItem("accessToken")
        loginMessage.textContent = "Сессия истекла. Войдите снова."
        showScreen("login")
    }
}

function renderProfile(user){
    profileBlock.innerHTML = `
    <img src = "${user.image}" alt = "${user.firstName}">

    <div>
        <h3>${user.firstName}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Birthday: ${user.birthDate}</p>
        <p>Gender: ${user.gender}</p>
    </div>
    `
}

window.addEventListener("DOMContentLoaded", function(){
    const token = localStorage.getItem("accessToken")

    if(token){
        loadProfile()
    }
    else{
        showScreen("login")
    }
})


logoutBtn.addEventListener("click", function(){
    localStorage.removeItem("accessToken")

    usernameInput.value = ""
    passwordInput.value = ""
    profileBlock.innerHTML = ""

    showScreen("login")
})

// 1) Кнопка перехода к экрану товаров
goToProductsBtn.addEventListener("click", function(){
    loadProducts()
})

// 2) Получение товаров с сервера
async function loadProducts(){
    try{
        productsBlock.innerHTML = "Загрузка..."

        const response = await fetch(`${API_URL}/products`)
        const data = await response.json()

        renderProducts(data.products)
        showScreen("products")
    }catch(e){
        productsBlock.innerHTML = "Не удалось загрузить товары..."
    }
}

// 3) Render товаров
function renderProducts(products){
    productsBlock.innerHTML = ""

    products.forEach(p => {
        const div = document.createElement("div")

        div.innerHTML = `
            <img src="${p.thumbnail}">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <p>${p.price}$</p>
            <p>⭐ ${p.rating}</p>
            <button data-id="${p.id}">Подробнее</button>
        `

        div.querySelector("button").onclick = () => {
            loadProductDetail(p.id)
        }

        productsBlock.appendChild(div)
    })
}

// 4) Возвращение к профилю
backtoProfileBtn.addEventListener("click", function(){
    showScreen("profile")
})

// 5) Экран одного товара
async function loadProductDetail(id){
    try{
    const response = await fetch(`${API_URL}/products/${id}`)
    const product = await response.json()

    productDetailBlock.innerHTML = `
        <img src="${product.thumbnail}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p><strong>Категория:</strong> ${product.category}</p>
        <p><strong>Бренд:</strong> ${product.brand}</p>
        <p><strong>Цена:</strong> $${product.price}</p>
        <p><strong>Скидка:</strong> ${product.discountPercentage}%</p>
        <p><strong>Рейтинг:</strong> ⭐ ${product.rating}</p>
        <p><strong>На складе:</strong> ${product.stock}</p>
    `

    showScreen("detail")
    }catch(e){
        productDetailBlock.innerHTML = "Не удалось загрузить товар..."
    }
}

// 7) Возвращение обратно ко всем товарам
backToProductsBtn.addEventListener("click", function(){
    showScreen("products")
})




