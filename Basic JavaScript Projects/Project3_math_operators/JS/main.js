function addition_Function() {
    var addition = 6 + 7; //this function performs the addition operation and stores the value in a variable to be passed to the html output on click
    document.getElementById("Math").innerHTML = "6 + 7 = " + addition;
}

function subtraction_Function() {
    var subtraction = 10 - 4; //this function performs the subtraction operation and stores the value in a variable to be passed to the html output on click
    document.getElementById("AlsoMath").innerHTML = "10 - 4 = " + subtraction;
}

function multiplication() {
    var basic_Multiplication = 6 * 8; //this function performs the multiplication operation and stores the value in a variable to be passed to the html output on click
    document.getElementById("Multiplication").innerHTML = "6 x 8 = " + basic_Multiplication;
}

function division() {
    var basic_Division = 48 / 6; //this function performs the division operation and stores the value in a variable to be passed to the html output on click
    document.getElementById("Division").innerHTML = "48 / 6 = " + basic_Division;
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 - 5; //this function performs several mathematical operators and store the value in the variable simple_Math, on click it pass the value to the html output
    document.getElementById("MoreMath").innerHTML = "1 plus 2, mulitplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var remainder = 25 % 6; //this function showcases the modulus operator and passes the result stored in the variable remainder to the html output on click at id Remainder
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

function negation_Operator() {
    var x = 10;                 //assigns variable x to a value and then returns the negative value of it to the html output.
    document.getElementById("Negation").innerHTML = -x;
}

function up_Increment() {
    var X = 5;
    X++;
    document.getElementById("up").innerHTML = X;
}
                                                    //these two functions increment a value assigned to a variable (either up or down) and pass the value to the html output on click.
function down_Increment() {
    var Y = 5.25;
    Y--;
    document.getElementById("down").innerHTML = Y;
}

function random_Number_Generator() {
    z = (Math.random() * 100); //uses math.random to assign a number to variable z to be passed to the html output on clickl
    document.getElementById("rng").innerHTML = z;
}