console.log('Hello World')

let user1 = new Object() //object constructor
let user2 = {
    "key": "value",
    "property name": "value",
} //object literal syntax

let user = {
    name: "Karim",
    age: 30,
}
console.log(user)

user.isStudent = true;
console.log(user)

delete user.age
console.log(user)

user['likes birds'] = true
console.log(user)

let newUser = {}
newUser["likes roblox"] = true //set
alert(newUser["likes roblox"]) //get
delete newUser["likes roblox"] //delete
console.log(newUser)


let usr = {}

usr.name = "Biruk",
usr.surname = "Yidnekachew",
usr.name = "Name"
delete usr.name


const steve = {
    //Object States - pRoperties that describe charactaristics
    firstName: "Steve",
    lastName: "Minecraft",
    age: 55,
    isEmployed: false,

    //Object behaviors (methods) - things that the object can do
    sayHello: function(){
        console.log("I... AM STEVE")
    },

    action: function(){
        console.log('CHICKEN JOCKEY!!!')
    }
}
steve.sayHello()
steve.action()

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",

    displayInfo: function(){
        console.log(`${this.title} by ${this.author}`)
    },
}
book.displayInfo()

class Book{
    #genre;
    constructor(title, author, genre){
        this.title = title;
        this.author = author;
        this.#genre = genre; //Private
    }

    displayInfo(){
        console.log(`${this.title} by ${this.author}`)
    }
}

let myBook = new Book("Harry Potter", "J.K. Rowling", "Fantasy")
myBook.displayInfo()


class Vehicle{
    constructor(name){
        this.name = name;
    }

    start(){
        console.log(`${this.name} is starting`)
    }
}
class Tesla extends Vehicle{
    drive(){
        console.log(`${this.name} gets in to a crash instantly because it is a tesla`)
    }
}