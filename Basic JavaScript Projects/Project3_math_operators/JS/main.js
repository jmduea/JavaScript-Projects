function addition_Function() {
    var addition = 6 + 7; //sets variable addition to the value of 6 + 7
    document.getElementById("Math").innerHTML = "6 + 7 = " + addition;
}

function subtraction_Function() {
    var subtraction = 10 - 4;
    document.getElementById("AlsoMath").innerHTML = "10 - 4 = " + subtraction;
}

function multiplication() {
    var basic_Multiplication = 6 * 8;
    document.getElementById("Multiplication").innerHTML = "6 x 8 = " + basic_Multiplication;
}

function division() {
    var basic_Division = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + basic_Division
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("MoreMath").innerHTML = "1 plus 2, mulitplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}