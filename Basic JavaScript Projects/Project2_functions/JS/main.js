window.alert("Welcome to my 1st javascript assignment!");

document.write("<h1>CLICK THE BUTTON</h1>"); //writes whatever's in the parentheses directly to the html output

function My_Second_Function() {
    let Sent1 = "This is the beginning of the string"; //this sets the variable Sent1 to the text string in quotes
    let Sent2 = " and this is the end of the string"; //this sets the variable Sent2 to the text string in quotes
    var result = Sent1.concat(Sent2); //this adds the two strings above into 1 variable
    document.getElementById("Button_Text").innerHTML = result; //this outputs the value of variable result when the button is pressed.
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}   // this function assigns a string to the variable sentence and then adds another string onto it.
    //on click it will output the value stored in the sentence variable.

function my_Third_Function() {
    var Sent3 = "This is my third function";
    Sent3 += "; JavaScript Rocks!";
    document.getElementById("Function3").innerHTML = Sent3;
} //assigns a string to variable Sent3 and then adds on an other string.
//on click it will return the value stored in variable Sent3 to the html element Function3