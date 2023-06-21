//To Write a JavaScript function called "calculateArea" that takes two parameters: "length" and "width". 
//The function should calculate and return the area of a rectangle using the given length and width.

//Function Declaration
function calculateArea(length,width){
      
      return length*width; //To Calculate Area of Rectangle
      
      //or we can use
      //Area = length*width;
      //return Area;
}

var length = parseInt(prompt("Enter Length of the Rectangle: ")); //To Take User Input
var width = parseInt(prompt("Enter Width of the Rectangle: "));

//Invoking Function
console.log("Area of Rectangle is: "+calculateArea(length,width)); //To Print the the value of the return value of the function i.e Area of Rectangle
