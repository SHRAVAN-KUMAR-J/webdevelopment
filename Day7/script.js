//what is control flow?
/* control flow is an order in which the code run
top-> bottom=>line by line

Condition - decision making 
loops - repetations
functions- reusable logix
how perticular program behaves.
*/
//

/*console.log("start")
console.log("middle")
console.log("end")
*/

/*Conditions*/
/*if statement:
syntax:
if(condition){
code
}
*/
/*
let age=20;//true
let age=17;//false
if(age=>18)
{
    console.log("you can vote");
}
    */

//if-else statement
/*
let marks=35;
if(marks>=40)
{
    console.log("pass");
}
else{
    console.log("fail");
}
*/


/*
let a=10;//which is a variable which can be changable
const b=20;//which is not changable .
we use var as less in code
*/

/*  if and else-if ladder

let score=85;
if(score>=90)
{
    console.log("grade A");
}
else if(score>=75)
{
    console.log("grade B");
}
else if(score>=60)
{
    console.log("grade C");
}
else{
    console.log("fail")
}
    */
   //


/*
Task */
//check if the number is even or odd 
/*
let a=2;
if(a%2==0)
{
    console.log("even");
}
else{
    console.log("odd")
}
    */

/*Loops
for loop
for (initialization:condition:increment)
{
code 
}
while loop
while(condition
{
code
}
*/
/*
for( let i=1;i<10;i++)
{
    console.log(i);
}


let i=1
while(i<=10)
{
    console.log(i);
    i++;
}
*/
// nested loop 
/*
for (let i=1;i<=5;i++)
{
    let star=" ";
    for (let j=1;j<=i;j++)
    {
        star+="*";
    }
    console.log(star);
}
*/
//break and continue
/*
for (let i=1;i<=10;i++)
{
    if(i===5)continue;//also use break
console.log(i);
}
*/
//task 2

// multiplication of 7
/*
for( let i=1;i<=10;i++)
{
    console.log("7 *",i,"=",7*i);
}
*/
//FUNCTION WITH And without return statement
//function without return statement

function greet(name)
{
    console.log("hello",name);
}
greet("john");
//function with return statement
function add(a,b)
{
    return a+b;
}
let sum=add(5,10);
console.log(sum);

