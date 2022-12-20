
//checks the input from the user to see if the time entered is between 10:01 PM - 5:59 AM

function bedtime_Reminder() {
    console.log("Script executing");
    UsersTime = document.getElementById("Time").value;

    if (UsersTime > 22 || UsersTime < 6) {
        Reminder = "GET SOME SLEEP";   //checks the input from the user to see if the time entered is between 10:01 PM - 5:59 AM
    }
    else {
        Reminder = "Have a great day!"; //if not between those times reminds the user to have a good day (error will show up here in console log)
    }
    
    document.getElementById("Sleep").innerHTML = reminder; //outputs the result on button click
    console.log("Script Executed");    
}


//function that automatically grabs the current time from your pc and then based on that outputs a statement.
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
