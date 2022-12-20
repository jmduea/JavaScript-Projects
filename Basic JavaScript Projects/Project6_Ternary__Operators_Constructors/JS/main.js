
//this function retrieves the users input on the webpage and checks to see if it's greater or less than 52 to determine the message to output.


function Age_Check() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//constructor function that defines the vehicle class

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//instances of the vehicle class

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//functions to display results of the above constructor function

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function myFunction2() {
    document.getElementById("New_and_This").innerHTML = "Emily drives a " + Emily.Vehicle_Year + " " + Emily.Vehicle_Make + " " + Emily.Vehicle_Model;
}

//nested function that adds one to a start point (in this case 0)

function test_NestedFunction(){
    document.getElementById("Nested_Function").innerHTML = nestedFunction();
    function nestedFunction() {
        var start = 0;
        function nestedFunctionCount() {start += 1;}
        nestedFunctionCount();
        return start;
    }
}