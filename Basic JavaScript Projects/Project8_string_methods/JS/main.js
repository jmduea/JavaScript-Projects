// function that adds multiple strings togeter to form one string

function complete_Sentence() {
    var beginning = "I made ";
    var middle = "a complete sentence ";
    var end = "from 3 seperate peices!";
    var sentence = beginning.concat(middle, end);
    document.getElementById("Concatenate").innerHTML = sentence;
}

//function that extracts a defined section of a string and returns it in a new string

function slice_Method() {
    var Sentence = "All work and no play makes Jon a dull boy.";
    var Section = Sentence.slice(27,30);
    document.getElementById("Slice").innerHTML = Section;
}

//function that takes the value for x and converts it to a string on click
function string_Method() {
    var X = 101;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();

}

//function that formats a number to a specific length
function precision_Method() {
    var x = 25167.295912350969;
    document.getElementById("Precision").innerHTML = x.toPrecision(7);
}