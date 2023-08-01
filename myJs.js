// let number = 0;
// let textchn = document.getElementById('icrenumber');

// function hello() {
//     console.log("ok! Function is created");
//     number += 1;
//     textchn.innerText = number;
// }


// function condown() {
//     alert('click to start the race');
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
//     console.log(5);
//     alert('race is over');
// }
// condown();

// function check() {
//     console.log('42');
// }
// check();



// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;



// function addlap() {
//     let sum = lap1 + lap2 + lap3;
//     console.log(sum);
// }
// addlap();

// let lapsCompleted = 0;

// function icrement() {
//     lapsCompleted = lapsCompleted + 1;

// }
// icrement();
// icrement();
// icrement();
// console.log(lapsCompleted);

// let count = 0;
// let lets = document.getElementsByClassName('count-el');

// function incrementcount() {
//     count = count + 1;
//     lets.InnerText = count;
// }
// incrementcount();
// let alerti = "hello";
// let message = "You have tree new notifications";
// let messageToUser = alerti + " " + message;
// alert(messageToUser);



// let namee = "shahid";
// let greeting = "Hi, my name is";
// let myGreeting = greeting + " " + namee;

// console.log(myGreeting);



// console.log(4 + 5) // 9
// console.log("2" + "4")//24
// console.log("5" + 1)//51
// console.log(100 + "100")//100100

// let welcomeEl = document.getElementById('welcome-el');

// let namee = "shahid ";
// let greeting = " dear we welcomes you";

// welcomeEl.innerText = namee + greeting;

// welcomeEl.innerText += "👋";



// // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// // 3. Render the variable in the saveEl using innerText
// // NB: Make sure to not delete the existing content of the paragraph






// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById('save-el');

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     let abc = "12 -";
//     saveEl.innerText = abc;
//     // 3. Render the variable in the saveEl using innerText
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }



let count = 0;
let addResult = 0;
var arr = [];
let lets = document.getElementById('countel');
let saveno = document.getElementById('savenumbr');
let totalSum = document.getElementById('totalsum');


function incrementcount() {
    count = count + 1;
    lets.innerText = count;
}

function reset() {
    count = 0;
    lets.innerText = count;
}

function save() {
    arr.push(count)
    saveno.innerText += count + "+";
    count = 0;
    lets.innerText = count;
}

function total() {
    for (let i = 0; i < arr.length; i++) {
        addResult = addResult + arr[i];
    }
    totalSum.innerText = addResult;
    addResult = 0;
}