//function that adds one to x as long as it is less than 11

function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

//function that uses a for loop to output a list

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//function that creates an array and outputs a sentence that displays a sentence about a property of one of the objects

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

//function that creates a constant object and then adds properties to it then displays a sentence about that object

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

let cat = {
    age: "10 year old",
    color: "grey",
    weight: "15 lb",
    breed: "Russian Blue",
    name: "Toulose",
    description : function() {
        return "The cat is a " + this.age + ", " + this.color + ", " + this.weight + ", " +
        this.breed + ", " + "named " + this.name + ".";
    }
};
document.getElementById("cat_Object").innerHTML = cat.description();