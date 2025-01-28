/* If Statements */
let age = 1000;
if(age>=18){
    console.log("You are a legal adult");
}
else{
    console.log("You are a minor");
}

let hasLicense = true;
if(age>=16){
    if (hasLicense == true){
        console.log("You can drive. Now get a job");
    }
    else{
        console.log("You can get a license then drive");
    }
}
else{
    console.log("Get off the road");
}

if(age>=13 & age<100){
    console.log("You are old enough to doomscroll. Even better, get a job.");
}
else if(age<0){
    console.log("Prebirth..?");
}
else if(age==0){
    console.log("Who let you get a phone?");
}
else if(age>=100){
    console.log("Way too old to brainrot");
}
else{
    console.log("Still, get a job. It may not be legal, but at least you don't have to pay income tax.");
}

/* Functions */
function hbd(name, yo){
    console.log("Happy birthday, " + name + "! You are " + yo + " years old.");
}
hbd("Rahul", age);

function add(x, y){
            let result = x+y;
            return result
}

let ans = add(age,567);
console.log(ans);
console.log(add(age, 567));

function isEv(num){
    if(num%2 ==0){
        return true;
    }
    else {
        return false;
    }
}

// Ternary operator
function isEven(num){
    return num%2==0 ? true : false;
}

