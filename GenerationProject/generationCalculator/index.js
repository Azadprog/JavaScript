/*
This program runs on every types of Browser but, it's recommend to use Google Chrome.
The program is my own idea of creating a simple calaculator that gives user output of 
the total number of ancestors you had for x generation back . 
 The eqution i used  is  simple  : 2 ^ x where x = the value from userInput .

 Created By : 
 Asad Urehman Azhar

 Inspired by : 
 It's Okay To Be Smart
 Are We All Related?
 https://www.youtube.com/watch?v=mnYSMhR3jCI
*/

function findAncestors() {  // creating a  findAncestors Function
 var userInput = prompt("Type a number"); // declearing a userInput variable & Defining it to  be prompt
 var user = Math.pow(2, userInput);  //declearing a user variable and definning it Math.pow() wich is a 
 
  alert("You have total : " + user + " ancestors for   " + userInput + " generations back"); // alertiing the message to screen 
}

findAncestors();  // calling to the  findAncestors function

if (confirm("Try again")) { // creating a If else statement 
    findAncestors();
}else {
    alert("Welcome Back!");
}
