//outputs the combined string and number as one

function string1() {
    document.getElementById("TypeCoercion").innerHTML = ("10" + 5);
}


function my_Function() { //outputs NaN when the element referenced is clicked
    document.getElementById("Test").innerHTML = 0/0;
}



function my_Function2() { //outputs true or false depending on whether the data is a number or not
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

document.write(typeof "words"); //this outputs the data type of the variable words
document.write("<br>");



document.write(-4E920); //outputs -infinity
document.write("<br>");
document.write(4E920); //outputs infinity
document.write("<br>");



document.write(10>3); //evaluates for true or false and outputs the result
document.write("<br>");
document.write(10<9);
document.write("<br>");


console.log(10 + 12); //outputs the result to the console
console.log(10<9);

document.write(11==11); //checks to see whether the data on the left is equal to the right, outputs true or false depending on the result.
document.write("<br>")
document.write(10==11);
document.write("<br>");


//these all compare the data of whatever is on each side for equality and that they are the same data type and outputs true/false
x = 10;
y = 10;
document.write(x === y);
document.write("<br>");
a = 10;
b = "10"
document.write(a===b);
document.write("<br>");
c = 9;
d = 4;
document.write(c===d);
document.write("<br>");
e = "seven";
f = 7;
document.write(e===f);
document.write("<br>");



//outputs true or false depending on if the conditions of the AND | OR operator are met
document.write(3 > 1 && 5 > 2);
document.write("<br>");
document.write( 1 > 4 && 5 > 2);
document.write("<br>");
document.write(3 > 2 || 6 > 3);
document.write("<br>");
document.write(5 > 7 || 3 > 12);
document.write("<br>");


//checks the argument to see whether it's true or false and displays the opposite.
function not_Function() {  
    document.getElementById("Not").innerHTML = !(15 > 7);
}

function notnot_Function() {
    document.getElementById("NotNot").innerHTML = !(7 > 15);
}