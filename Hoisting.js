//Hoisting 
///how js work
//execution context
//1.memory phase-variable enviroment
//2. code phgase- thread of exec ution
//Global Execution Context
//synchronous single threaded language
 //code phases

 console.log(a); // show undefine
hello();

var a = 10; // show a=10

function hello() {
  console.log("Hello JS"); // show hello js
}
