//Mad Lib

"use strict";

// Event Listener
document.getElementById("go-mad-btn").addEventListener("click", displayMadLib);

//Event Function
function displayMadLib() { 
   //Input
    let sillyWordA = document.getElementById("silly-word-a").value;
    let lastName = document.getElementById("last-name").value;
    let illness = document.getElementById("illness").value;
    let noun = document.getElementById("noun-plural").value;
    let adjectiveA = document.getElementById("adjective-a").value;
    let adejctiveB = document.getElementById("adjective-b").value;
    let sillyWordB  = document.getElementById("silly-word-b").value;
    let place = document.getElementById("place".value);
    let number = document.getElementById("number").value;
    let adjectiveC  = document.getElementById("adjective-c").value;
   
   //Build a message
    let madlib =  "Dear School Nurse, " + sillyWordA + " " + lastName + " will not be attending school today. They have come down with a case of " + illness + " and has horrible " + noun + " and a " + adjectiveA + " fever. We have made an appointment with the " + adejctiveB + " Dr." + sillyWordB + ", who studied for many years in " + place + " and has " + number + " degrees in pediatrics. He will send you all the information you need. Thank you! Sincerely Mrs." + adjectiveC + ".";

   //Output
   document.getElementById("Mad-Lib").innerHTML = madlib
}