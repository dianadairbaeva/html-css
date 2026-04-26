// const form = document.getElementById("taskForm")
// const input = document.getElementById("taskInput")
// const result = document.getElementById("result")

// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     const text = input.value.trim()
//     if (text == ""){
//         alert("введите задачу")
//         return
//     }
//     // const text = input.value
//     result.textContent = "вы ввели: " + text
// })

// const form = document.getElementById("taskForm")
// const input = document.getElementById("taskInput")
// // const result = document.getElementById("result")
// const success = document.getElementById("success")
// const error = document.getElementById("error")


// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     const text = input.value.trim()
//     error.textContent = ""
//     success.textContent = ""

//     if (text === ""){
//         error.textContent = "поле не должно быть пустым"
//         error.style.color = "red"
//         return
//     }

//     if(text.length < 3){
//         error.textContent = "минимум 3 символа"
//         error.style.color = "red"
//         return
//     }

//     if(text.length > 20){
//         error.textContent = "максимум 20 символов"
//         error.style.color = "red"
//         return
//     }
//     success.textContent = "задача добавлена" + text
//     success.style.color = "green"
//     input.value = ""

// })

