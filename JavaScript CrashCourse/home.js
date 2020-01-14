console.log('hello Rikkii');
//var name=prompt('what is Your Name?');
//greeting('Name');
//How do arguments work in function?
//How do we add 2 number togather in a function?

var b = 'JavaScript'
console.log(b);

var someNumber = 50;
console.log(someNumber);


//var age = prompt('What is Your Age?');
//document.getElementById('year').innerHTML = age;
//document.getElementById('hereAction').innerHTML = 'Hey I M Here';
 
//var num1 = 8;
//num1++;
//num1 = num1 + 2;
//console.log(num1);
//num1 = num1 - 2;
//console.log(num1);
//num1 = num1 * 2;
//console.log(num1);
//num1 = num1 / 2;
//console.log(num1);


//console.log(50 + 5);
//console.log(50 - 5);
//console.log(50 * 5);
//console.log(50 / 5);

//Functions

function greeting(yourName){
    
    var result = 'Hello'+ ' ' + yourName; //String Concatention
    console.log(result);
    
}
// var name = prompt('what is your name?');
greeting(name);

//How do argument in function?
//how do we add 2 number togather in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(10, 20);

//function sumNumber(num1, num2){
  //  var result = num1 + num2;
    //console.log('result');
//}
  
//sumNumber(10, 10);

//While Loops
 var num = 0;
  while (num<10){
      num +=1;
      console.log(num);

  }
  // For Loop
  
  for(let num=0; num <= 5; num++){
      console.log(num);
  }
//Data Types

let yourAge = 25;                             //number
let yourNme = 'Rikkii';                       //String
let fullName = {first:'Rikesh', last:'Singh'};    //object
let truth = true;                             //boolean
let groceries = ['apple', 'orange','lemons']; //array
let random;                                   //undefined
let nothing = null;                           // value null

//String in JavaScript (Common methods)

let fruit = 'apple';
let morefruits = 'Lemon\Apple.Oranges,Brit,pomigranate,Carret';   //new Line
console.log(fruit, morefruits);
console.log(fruit.length);
console.log(fruit.indexOf('pp'));
 console.log(fruit.slice(1, 5));
 console.log(fruit.replace('le', '1563'));
 console.log(fruit.toUpperCase());
 console.log(fruit.toLowerCase());
 console.log(fruit.split(''));         //split by a comma
 console.log(morefruits.split(','));   //split by characters


 let emptyArray = new Array();
 for (let num = 0; num <=10;num++){
      emptyArray.push(num);
 }
  console.log(emptyArray);

//Objects

  let student  = {
    first : 'Rikesh',
    Last : 'Singh',
    age : 25,
    height : 170,
 studentInfo: function(){
     return this.first + '\n' + this.Last + '\n' + this.age;
 }   
};
/* console.log(student.first);
console.log(student.Last);
console.log(student.age);
console.log(student.height);
student.first = 'Rikkii';       // Change Value
console.log(student.first);*/
student.age++;                  //Increage age
console.log(student.age);

console.log(student.studentInfo());


// conditional, control flows (if else)

  var age = 25;     //prompt('What is your age');

  if ((age >= 20) && (age <=40) ){
      status = 'My Age';
      console.log(status);
  }
  else{
      status = 'Not my age';
      console.log(status);
  }

  //Switch Statments
  //differenciate between weekday vs. Weekend
  //0 sunday
  //1 Monday
  //2 Tuesday
  //3 Wed
  //5 Friday
  //day 6 = Saturday
  //day 4 is Thursday = WeekDays
  switch (2){
      case 0:
          text = 'weekend';
        break;
        case 0:
          text = 'weekend';
        break;
        case 2:
           text = 'weekend';
        break;
        case 1:
           text = 'weekend';
        break;
        default:
             text = 'WeekDay';

  }

   console.log (text); 
