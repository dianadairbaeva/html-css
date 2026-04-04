// class User {
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     login(){
//         console.log(this.name + "logged in")
//     }
// }

// const user1 = new User("Alex", "alex@gmail.com")
// console.log(user1.name)
// console.log(user1.email)
// user1.login()
// console.log(user1) 

// class Bank{
//     #balance = 0;

//     deposit(amount){
//         if(amount <= 0) return
//         this.#balance += amount 
//     }

//     withdraw(amount){
//         if(amount > this.#balance){
//             console.log("error")
//             return
//         }
//         this.#balance -= amount
//     }

//     getBalance(){
//         return this.#balance
//     }
// }

// const acc1 = new Bank()
// console.log(acc1.getBalance())
// acc1.deposit(5000)
// console.log(acc1.getBalance())
// acc1.withdraw(3000)
// console.log(acc1.getBalance())

// class Product {
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }

//     getInfo(){
//         return "Товар: " + this.name + "Цена: " + this.price
//     }

//     applyDiscount(percent){
//         const discount = this.price * (percent / 100)
//         this.price -= discount
//     }
// }

// class User{
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }

//     getInfo(){
//         return `${this.name} (${this.email})`
//     }

//     getRole(){
//         return "user"
//     }

// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email)
//         this.permissions = ["read", "write", "delete", "update"]
//     }

//     deleteUser(user){
//         console.log(this.name + " deleted " + user.name)
//     }

//     getRole(){
//         return "admin"
//     }
// }

// class Moderator extends User{
//     banUser(user){
//         console.log(this.name + " banned " + user.name)
//     }

//     getRole(){
//         return "moderator"
//     }
// }

// const admin = new Admin("Alex", "admin@mail.com")
// const user = new User("John", "john@mail.com")
// const mod = new Moderator("Kate", "mod@mail.com")

// admin.deleteUser(user)
// mod.banUser(user)

