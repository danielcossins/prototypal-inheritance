/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/
// function Vehicle(){
//   this.Make="Ford";
//   this.Model="Expedition";
// }



/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
function Make(){
  this.makeName="Ford";
}
// Make.prototype=new Vehicle();

/*
Create a function, Model, to hold the 
corresponding property and value
*/
function Model(){
  this.modelName="Expedition";
}
// What is the prototype of a Model?
Model.prototype = new Make();   //adds attributes of Doge to the new Animal

// Define a Car
function Car(color){
  this.color = color;
}
// What is the prototype of a Car?
Car.prototype = new Model();

// Create the first car
var car1 = new Car("white");

// Create the second car
var car2 = new Car("grey");

// Create the third car
var car3 = new Car("red");

console.log(car1);
console.log(car2);
console.log(car3);