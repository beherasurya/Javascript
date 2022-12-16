# Javascript

This repository contains all the basic information regarding syntax and implementation of Javascript from basic to advanced concept.

Difference between Java and JavaScript
--------------------------------------------------------------------------------------
Java                                                JavaScript

-Programming Language                           -Browser based programming language
-Needs an IDE                                   -Works with any latest browser               
-Used for Software Development                  -Works fine with any code editor
-Needs a compiler to run                        -Simple and easy to start

Where is JavaScript Used?

-Applications
    -Acrobat
    -Photoshop
    -Other popular applications
-Server side
    -Node.JS
    -Google Apps Script

History of JavaScript

-Developed in 1995 (LiveScript)
-JavaScript Netscape(1996)- IE3 Jscript
-Ecma script(1997)
-Ecma script 3(1999)
-ES5- 2009
-ES6 $ ES7

What you should know?

-HTML & HTML5
-CSS & CSS3           
                        HTML         CSS           JavaScript
                          |           |               |
                          |           |               |
                      Content         |           Behavioural
                    Structural     Style
                                Presentation


Do's and Don't

Correct alert("Hello, World!");
Wrong   Alert("Hello, World!");

Statements in JavaScript

-Change color of heading
-Calculate age
-Move and image
-Hide a menu
-Alert some "important message"
 
 Statements are written in 1 line

 user multiple line to declare your statement

 alert("Hello,World!");
 alert("Another message!");
 alert("Warning message!");

Whitespace in javaScript
 Correct Syntax:
    alert("hello,World!");
    alert ( "Hello,World!" );
    alert(
        "Hello,World!"
    );

Wrong Syntax
    alert("Hello, World!");

Comments in JavaScript

//this is a comment
alert("hello,World!");//another comment
/*
this is a block comment
*/

Variables in JavaScript

Creating variables

-var name,email,phone
-var year;
-var customerEmail;
-var todaysDate;
-var box;
-var x;
 Wrong Sytax           -var 99boxes;
-var boxes99;

Variable datatypes
Integer
Floating point
String
Boolean
Array
Date
object

Setting variable

var box=99;
var box="Hello World";
var box='Hello world';
var box=true;
var box=false;

Conditions in JavaScript

if(condition)
{
    //code goes here
}

programming guidelines

( Parentheses)
[Brackets]
{Braces}

True or False with Conditions

if(x<50)
{
    //code goes here
}

simple operations

if(a==b)
{
    //do something
}
a==b
a>b
a!=b
a==b

Extended Conditions

if(something is true)
{
    //do this
}
else
{
    //do something else
}
Nested Conditions
if(something is true)
{
    //do this
    if(something is true inside)
    {
        //do something nested
    }
}else
{
    //do something else
}
Arithmetic  Operators
Addition(+)
Subtraction(-)
Multiplication(*)
Division(/)

Assignment Operator
Assignment operator(=)
        result=a+b
score=score+10;
score+=10;
+=
-=
*=
/=
Operator Precedence
result=10+10*5; 60
result=(10+10)*5; 100

Comparison Operator

a=5;
b=10;

Wrong Way
if(a=b)
{
    //True 
}
if(a==b)
{
    //False
}
if(a===b)
{
    //False
}
Comparison Operator
a=5;
b=10;
if(a!=b)
{
    //True
}
if(a!==b)
{
    //True
}
Comparison Operator
a=5;
b=10;
if(a>b)
{
    //code 
}
if(a<b)
{
    //code
}
if(a>=b)
{
    //code
}
if(a<=b)
{
    //code
}
Logical AND /OR
Comparing several things

if(a===b && ==d)
{

}
if(a===b || c==d)
{

}
Modulus
var year=2003
var remainder=year%4;//remainder is 3
 Increment & Decrement
 a=a+1;
 a+=1;
 a++;
 ++a;
 a=a-1;
 a-=1;
 a--;
 --a;
 Postfix & Prefix
 var a=5;
 alert(++a);  6
 var a=5;
 alert(a++);  5

 Ternary Operator

 condition?true:false

 Ternary Example
 var playerOne=500;
 var playerTwo=600;
 var highScore;
 if(playerOne > playerTwo)
 {
    highScore=playerOne;
 }
 else
 {
    highScore=playerTwo;
 }
 var highScore=(playerOne>playerTwo)?playerOne:playerTwo;

 Loops in JavaScript

 Repeat code again & again
 Repeat this 500 times
 Statement One
 Statement Two

 While Loop
 var a=1;
 if(a<10)
 {
    //do something
 }
 var a=1
 while(a<10)
 {
    //do something
    a++;
 }
 Do While Loop
 var a=1;
 do
 {
    //do something
    a++;
 }while(a<10);
 For Loop
 for(i=1;i<10;i++)
 {
    //do something
 }
 Break
 for(i=1;i<10;i++)
 {
    //do something
    if(i==5)
    {
        break;
    }
 }
 Continue
 for(i=1;i<10;i++)
 {
    //do something
    if(i==5)
    {
        continue;
    }
 }
Functions in javascript
get window height
get window widht        calculateArea
calculate area
store area

do calculations
check value             createMessage
output message

get image position
calculate new value
set image position       animateImage
change text color
if position correct
    Output message
Where to Decl(are Functions

Define your functions before you call them
Wrong Syntax:
myFunction();

function myFunction()
{
    console.log('Do something');
}
Corret syntax
function myFunction()
{
    console.log('Do something');
}
myFunction();
Functions with Parameters

function myFunction(x,y,z)
{
    var a=x+y+z;
    console.log(a);
    return a;
}
myFunction(2,3,4);
Variable Scope

function myFunction()
{
    a=25;//local scope
    console.log(a);
}
myFunctioin();
a=20; //Global scope
function myFunction()
{
    console.log();
}
Function Mismatch                       
function myFunction(x,y,z)                   
{
    //do something
}
myFunction(25,26);
//z is undefined

function myFunction(x,y,z)
{
    //do something
}
myFunction(25,26,27,28);
//28 is ignored
