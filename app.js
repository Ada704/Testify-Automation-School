
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

//const salary = 700000;
// switch(salary){
//     case 800000:
//         console.log('Welcome to the next level')
//         break
//     case 500000:
//         ('We can\'t afford you')
//         break
//     case 1000000:
//         console.log('You\'re not eligible for this position')
//     default:
//         console.log('lol')

// }

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

function performance(position) {
   const sum = position
    //console.log('Obinna is '+position);
    return position;
}
    
console.log(performance(1 + 'st'))