// console.log("Hello World");
// var a= 200;
// console.log(a);
// console.log(xyz);
// var xyz=() =>{
//     console.log("This is XYZ Function");
// }
//  console.log("End");


// console.log("Hello World");
// var a= 200;
// console.log(a);
// console.log(xyz);
// xyz=() =>{
//     console.log("This is XYZ Function");
// }
// console.log("End");

// function calculate(logicFunction , a, b){
//     return logicFunction(a,b);
// }
// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// console.log(calculate(add, 10, 20));
// console.log(calculate(sub, 10, 20));

// function highorder(name){
//     return name();
// }
// function studentDetails(){
//     var name= "Lavisha";
//     var fees= 20000;
//     console.log("name"+ " " + name);
//     console.log("fees" + " " + fees);
// }
// studentDetails();
// function feeEmi(){
//     var fees= 20000;
//     return fees/10;
// }
// console.log(feeEmi());
// function welcome(){
//     return ""
// }

// setTimeout(()=>{
//     console.log("Hello World");
// },3)

// setInterval(()=>{
//     console.log("Set interval");
// },2) 

// console.log("I decided to go to Restraunt");

// function walkInRes(cb){
//     console.log("I AM WALKING INSIDE THE RESTRAUNT");
//     setTimeout(cb, 3000);
// }
// function checkMenu(cb){
//     console.log("I AM Checking MENU");
//     setTimeout(cb, 3000);
// }
// function orderFoof(cb){
//     console.log("I AM Ordering Food");
//     setTimeout(cb, 3000);
// }
// function havingLunch(cb){
//     console.log("I AM HAVING MY LUNCH");
//     setTimeout(cb, 3000);
// }
// function walkOutRes(){
//     console.log("I AM WALKING OUTSIDE THE RESTRAUNT");
// }

// walkInRes(() => {
//     checkMenu(() => {
//         orderFoof(() => {
//             havingLunch(() => {
//                 walkOutRes(() => {
//                     console.log("DONE WITH LUNCH PROCESS");// pyramid of doom / callback hell // inversion of control
//                 });
//             });
//         });
//     });
// });
/*
var cart = ["SHOES", "WATCHES"];

function createOrder(cart) {
    let price = 0;
    let noOfItems = cart.length;
    price = noOfItems * 1000;
    console.log("Order created with", noOfItems, "items. Total price:", price);
    return { price, noOfItems };
}
function placeOrder(price, noOfItems) {
    let orderId = "ORD" + Math.floor(Math.random() * 10000);
    console.log("Placing order:", orderId, "with", noOfItems, "items. Total price:", price);
    return orderId;
}
function orderPayment(orderId, price, noOfItems) {
    console.log("Processing payment for Order:", orderId);
    console.log("Amount to pay:", price);
    console.log("Number of items:", noOfItems);
    console.log("Payment successful!");
}
function orderStatus() {
    console.log("Your order is being processed. You will receive a confirmation soon.");
}
let orderDetails = createOrder(cart);
let orderId = placeOrder(orderDetails.price, orderDetails.noOfItems);
orderPayment(orderId, orderDetails.price, orderDetails.noOfItems);
orderStatus();
 */


// console.log("Start Script");

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("I will get placement");

//     },3000);
// });

// myPromise
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err));


// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("I'm Happy");

//     },4000);
// });
// newPromise
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err));


// const newPromise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Party Time");

//     },5000);
// });
// newPromise1
// .then((res)=> console.log(res))
// .then(()=> setTimeout(()=>{
//     console.log("I'll work hardly")
// },5000))
// .catch((err)=> console.log(err));

// function myPlacement(placementStep, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("I will get Placement" + placementStep);
//             console.log("I will get Placement" + placementStep);
//         }, delay)
//     });
// }

// myPlacement("I got Placed", 5000)
// .then(()=> myPlacement("Partyy", 3000))
// //.catch((err)=> console.log(err));


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("JetData");
//         console.log("JetData");

//     },1000);
// });


// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Get Data");
//        console.log("Get Data");


//     },2000);
// });


// const myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Data Fetched");
//         console.log("Data Fetched");
//     },3000);
// });


// const myPromise4 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Menzies Data");
//         console.log("Menzies Data");
//     },4000);
// });

// Promise.all([myPromise, myPromise2, myPromise3, myPromise4]);
// Promise.allSettled([myPromise, myPromise2, myPromise3, myPromise4]);
// Promise.any([myPromise, myPromise2, myPromise3, myPromise4]);
// Promise.race([myPromise, myPromise2, myPromise3, myPromise4]);


// console.log("HEYY NEW DAY!!");

// function fetchDataProducts(){
//     const data= fetch('https://dummyjson.com/products')
//     console.log(data);
// }
// fetchDataProducts();

// console.log("HEYY NEW DAY!!");

// function fetchDataProducts(){
//     const data2 = await fetch('https://dummyjson.com/products');
//     const final data2= await data2.json();
//     console.log(data2);
// }
// fetchDataProducts();

// const promiseByMe= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Complete")
//     },3000)
// });

// async function checkAssignment(){
//     const 
    
// }

// const grandparent= document.getElementById('grandparent');
// const parent= document.getElementById('parent');
// const child= document.getElementById('child');

// grandparent.addEventListener('click',()=>{
//     console.log("grandparent div")
// },true)

// parent.addEventListener('click',()=>{
//     console.log("parent div")
// },true)

// child.addEventListener('click',()=>{
//     console.log("child div")
// },true)

// const computer= document.getElementById('computer');
// const laptop= document.getElementById('laptop');
// const mouse= document.getElementById('mouse');
// const keyboard= document.getElementById('keyboard');

// function closure(){
// const searchBox= document.getElementById("searchHandle");

// let timeoutId;
// searchBox.addEventListener("input", (event)=>{
//     clearTimeout(timeoutId)
//     timeoutId=setTimeout(()=>{
//         console.log(event.target.value);
//     },2000)
// });
// }
// closure();


// (function(module, require){
//     require("./path");
//     function sumOfTwo(a,b){
//         console.log(a+b)
//         return a/b;
//     }
//     module.exports={sumOfTwo}
// }()) // iife immediate invoke function 

// eventemmiter

// in this we can pass multiple arguments also


const EventEmmiter = require('node:events');

const eventEmmiter = new EventEmmiter();

eventEmmiter.on('g5', ()=>{
    console.log('started');
});
eventEmmiter.emit('g5');

// dns module assignment 
// assignment2_dns_module

