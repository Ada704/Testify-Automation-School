
// alert('Hello World')

// const name = 'Chioma'
// const age = 29
// const skinColor = 'light skinned'
// const height = 164

// const sentence = 'My name is '+name+
// console.log (`Hello my name is ${name} and my age is ${age}`); modern

// console.log('Hello my name is '+ name + ' and i am '+ age + ' years old' +'.' +' I am '+ skinColor + 'in complexion')
 
// % -modulus operator (it returns the remainder of a division)

//  const division = 40%7;

//  console.log(division);

// const compare = 4 == '4'

// console.log(compare) <> <= >= == === 

// const age = 20;
// const name = 'Chioma';

// const logic = age === 200 && name === 'try';
// console.log (!logic)


/* CONDITIONAL STATEMENT */

// const age = 20  //if statements only take in true statements and will not return anything if the statement is false

// if(age >= 20) {

//     console.log ('You are beautiful')
// };

// const salary = 499999;
// if(salary < 500000) {
//     console.log('You\'re not eligible for this position')
// };

/** IF ELSE **/

// const age = 5;  //if... else statement take in true statements and also returns a value if condition is false

// if(age >= 20) {
//     console.log ('You are welcome')
// } else if(age > 40) {
//     console .log ('You are too old to vote')
// } else {
//     console.log ('You\'re not eligible')
// };

// const salary = 500000;
// if(salary < 500000) {
//     console.log('You\'re not eligible for this position')
// } else {
//     console.log('Welcome to the next level')
// };

// const salary = 700000;
// if(salary >= 300000 && salary < 500000) {
//     console.log('Welcome to the next level')  // ! will be first stored in a variable before it can be logged to the console
// } else if(salary > 500000) {
// } else if(salary > 500000) {
//     console.log('We can\'t afford you')
// } else {
//     console.log('You\'re not eligible for this position')
// };

/* SWITCH STATEMENT */

// const day = 'Wednesday'

// switch(day) {
//     case 'Friday':
//         console.log('tgif!')
//            break
//     case 'Saturday':
//         console.log('the weekend is here!')
//            break
//     case 'Sunday':
//         console.log('happy sunday')
//            break
//     default:
//         console.log('got to work') 
// };

// const salary = 500000;
// switch(salary){
//     case 800000:
//         console.log('Welcome to the next level')
//         break
//     case 500000:
//         console.log(`We can't afford you`)
//         break
//     case 1000000:
//         console.log('You\'re not eligible for this position')
//     default:
//         console.log('lol')

// };

/* FOR/WHILE LOOPS */

// let star = 1; //starting point
// while(star <=10000) {
//     if(star > 1) {
//         console.log(star +' stars')
//     } else {
//         console.log(star +' star')
//     }
//     star = star + 1
// };

// let sideGig = 10;
// while(sideGig >=1) {
//     if(sideGig === 1){
//         console.log(sideGig + ' sideGig')
//     } else {
//         console.log(sideGig + ' sideGigs')
//     }
//     sideGig = sideGig - 1
// };

// for(let star = 1; star <=10; star = star+1) {
//     if(star=== 1 || star===0) {
//         console.log(star +' stars')
// } else {
//        console.log(star +' star')
// }
// };

// for(sideGig = 10; sideGig >=1; sideGig = sideGig - 1)
//     if(sideGig === 1){
//         console.log(sideGig + ' sideGig')
// } else {
//         console.log(sideGig + ' sideGigs')
// }

// for(let number = 1; number <=10; number = number+1) {
//     if(number % 2 === 0) {
//         console.log(number +' is an even number')
// } else {
//        console.log(number +' is an odd number')
// }
// };

// function greeting() {
//     console.log('Good morning');
// }

// greeting();

// function addNumbers(firstNumber, secondNumber) {
//     const add = firstNumber + secondNumber
//     console.log(add);
    
// }
// addNumbers(3,4);


// function performance(position) {
   
//     console.log('Obinna is '+position);
// }
    
// performance(1 + 'st');

// function performance(position, grade) {
//     const good = position + grade
//     console.log(good);
// }
    
// performance(1, 'A');

/* RETURN VALUE */

// function addNumbers(firstNumber, secondNumber) {
//     const sum = firstNumber + secondNumber
//     const product = firstNumber * secondNumber
//     return[sum, product];
    
// }
// addNumbers(3,4);

// const myName = 'Ada' //global variable

// function greet(){
//     console.log('Good morning'+', '+myName)
// }

// greet();


// const myName = 'Ada' //global variable

// function greet(){
//     console.log('Good morning'+', '+myName);
//       function greetAgain(){
//         console.log('Good afternoon' +', '+myName);
//     }
//     greetAgain();
// }

// greet();

//functions created within a function cant be accessed outside that function
// function greet(){
//     const myName = 'Ada' 
//     console.log('Good morning'+', '+myName);
//       function greetAgain(){
//         console.log('Good afternoon' +', '+myName);
//     }
//     greetAgain();
// }
// console.log('Good evening' +', '+myName);
// greet();

// const deem = function(){ //expressed functions

// };

// const right = function red(){ //declared functions can be accessed anywhere

// };

// function performance(position) {
//    const sum = position
//     //console.log('Obinna is '+position);
//     return position;
// }
    
// console.log(performance(1 + 'st'))


// const books = {
//     title: "Half of a yellow Sun", 
//     Description: "Historical Fiction", 
//     numberOfPages: 256, 
//     author: "Eze Chioma", 
//     Reading: true
// }

// console.log(books.Description) dot notation
// console.log(books["Description"]) bracket notation

// const books = {
//     title: "Half of a yellow Sun", 
//     description: "Historical Fiction", 
//     numberOfPages: 256, 
//     author: ["Eze Chioma"], 
//     reading: true,
//     addAuthor: function(name){
//         books.author.push(name)
//     }
//     }
//     toggleReadingStatus: function(){
//         if(books.reading === false){
//             books.reading = true
//         } else {
//             books.reading = false
//         }
//     }

// }
// books.toggleReadingStatus()
// books.addAuthor("Maryblossom")
//books.color = "yellow"
// console.log(books)

//const name = 'chioma'
// const age = 100
// const concate = name + age
// //console.log("it's "+ name +". " +"I am " + age + " years old.")
// console.log(`Hello, it's me ${name}. I am ${age} years old`)
// console.log(typeof (age))

// const name = 'raph'
// switch (name){
//     case 'chioma':
//         console.log('sorry, no appointment today')
//         break;
//         case 'jesse':
//             console.log('come back next week')
//             break;
//             case 'raph':
//                 console.log(`you're not registered`)
//                 break;
//                 default:
//                     console.log('click on the link in your email to join the meeting')
// };

// const value = 2;

// switch (typeof value){
//     case 1:
//     case 2:
//         value = 'number'
//         // console.log(`number`)
//         break;
//     case 3:
//         value = 'double'
//         // console.log(`number`)
//         break;
//     case 4:
//         value = 'string'
//         // console.log(`string`)
//         break;
//     case 5:
//         value = 'boolean'
//         // console.log(`boolean`)
//         break;
//     default:
//         // console.log(`other`)
// };
// console.log(`Datatype is ${value}`)

// const shoeSize = 46

// if(shoeSize >=45){
//     console.log(`${shoeSize} is available`)
// } else if(){
//     console.log(`preorder is available`)
// }else{

// }

// let time1 = 20;

// if(time1 >= 6 && time1 < 12 ){
//     console.log(`Good morning`);
// }
//  else if( time1 >= 12 && time1 <= 18){
//     console.log(`Good afternoon`)
// } 
// else {
//     console.log(`Good evening`)
// }

// const value = 8.9;

// switch (typeof value){
//     case 'number':
//     case 'double':
//      console.log('number')
//         break;
//     case 'boolean':
//      console.log('boolean')
//         break;
//     case 'string':
//      console.log('string')
//         break;
//     default:
//      console.log('other')
// };

// Ternary Operator

// let age =  7;

// (age >= 10) ? console.log('Come back home'): console.log('You are beautiful');

//  let age = 17;

//  let output = (age >= 10) ? 'Come back home': 'You are beautiful';
//  console.log(output);

// let number = 0;
// let number1 = 0

// while(number <= 20 && number1 <= 20){
// if((number === 0 || number === 1) && (number1 === 0 || number1 === 1)) {
//      console.log(`${number} book`)
//      console.log(`${number1} book`)
// } 
// else{
//      console.log(`${number} books`)
//      console.log(`${number1} books`)
// } //you can put an if else statement in a while/for loop
//     number += 1
//     number1++
// };


// const names = ['ada', 'obi', 'caro', 'sera', 'edwin',];

// for(name of names) {
// console.log(`My name is ${name}`);
// }


// const names = ['ada', 'obi', 'caro', 'sera', 'edwin',];

// for(name of names) {
//     console.log(`My name is ${name}`);
//     if(name === 'obi'){
//         console.log('Obi is here')
//         break;
//     }
// }

// let names = ['ada', 'obi', 'caro', 'sera', 'edwin'];

// for(let i = 2; i < names.length; i++){
//     console.log(names[i])
// }


// let letters = ['A', 'B', 'C', 'D']
// let numerals = ['i', 'ii', 'iii']

//  for(let i = 0; i < letters.length; i++){
//     console.log(letters[i] );

//     for(let j = 0; j < numerals.length; j++){
//         console.log(numerals[j] + '. Choose options A-D')
        
//     }
//     console.log()
// };

// let people = ['ada', 'obi', 'caro', 'sera', 'edwin']
// let i = 0

// do{
//     console.log(people[i])
//     i++
// }
// while(i < people.length);

// let i = 7

// do{
//     console.log(i)
//     i++
// }
// while(i <= 3);

// function login(username){
//     console.log(`${username} successful`)
    
// }
// login(+2349098878988);

// function employee(salary)   higher-order function
//     salary()
// }
// employee(function(){
// console.log('awesome')
// })

// function employee(salary) {
//     salary()
// }
// function email(){
// console.log('awesome')
// }
// employee(email)

// function calc(a, b=0){

//     return (2 * (a + b));
// }
// console.log(calc(6));

// function calc(a, ...b){     //rest parameter can only be the last param
//     console.log(a)
//     console.log(b)
// }
// calc(5,6,7,8,9)

(function() {
    console.log('IIFE')
}) ()