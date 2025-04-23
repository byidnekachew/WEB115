console.log('hello world')
/*
const a = 1
function test(){
    const b = 2
    console.log(a,b)
}
test()
// Can't call b here

const globalVar = 'global'

let username = window.prompt("Enter username")
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()
console.log(username)


hello(goodbye)
function hello(callback){
    console.log("Hello!")
    callback()
}

function goodbye(){
    console.log("Goodbye!")
}

function task1(callback){
    console.log("Task 1")
    callback()
}
function task2(callback){
    console.log("Task 2")
    callback()
}
function task3(callback){
    console.log("Task 3")
    callback()
}
function task4(callback){
    console.log("Task 4")
    callback()
}
task1(task2(task3(task4(() => {console.log("All done")}))))
*/


//JSON
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]
console.log(names)
const jsonStringNames = JSON.stringify(names)
console.log(jsonStringNames) //Turns in to string. Can also do to objects

//JSON.parse()
const jsonNames = JSON.parse(jsonStringNames)
console.log(jsonNames)

//fetch()
fetch("./names.json").then(response => response.json()).then(value => console.log(value)) //converts to local and then logs
fetch("./names.json").then(response => response.json()).then(value => value.forEach(value => console.log(value)))
