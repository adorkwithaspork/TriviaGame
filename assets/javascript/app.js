// 2000's trivia
$(document).ready(function(){
    
})

var correct;

var questions = [{
    question: "What does Napoleon Dynamites famous shirt say?", 
    answer:["Make 7 UP Yours", "vote pedro", "make it rain", "I'm with Stupid"], 
    correct:["vote pedro"]
}, {
    question: "Who did Janet Jackson perform with during her Superbowl halftime show wardrobe malfunction?",
    answer:["Aerosmith", "Justin Timberlake", "Beyonce", "Brittany Spears"],
    correct: ["Justin Timerlake"]
}, {
    question: "What was y2k?",
    answer:["N'SYNC and Backstret Boys Collaboration Album","The First Crypto Currency", "Midnight on January 1, 2000, all electronic devices would cease to work"],
    correct: ["Midnight on January 1, 2000, all electronic devices would cease to work"]
}, {
    question: "Who was Dr. Dre?",
    answer:["brain surgery pioneer", "A famous microbiologist", "A famous rapper", "A space cadet"],
    correct:["A famous rapper"]
}];




//MAJOR TASK 1 :CREATE DYNAMIC CONTAINERS FOR QUESTIONS & ANSWERS && have populate on the screen 
// Functions go here:
// answerTracker

var initializeGame = function(){
    for (var i = 0; i<questions.length; i++){
        var questionDiv = $("<div>");   
        questionDiv.html("<h2>" + questions[i].question + "</h2>")
        for (var j = 0; j<questions[i].answer.length; j++){
        questionDiv.append("<input type='radio'"+questions[i].answer[j]+"name="+"q"+i+">"+questions[i].answer[j]);
        $("#questions").append(questionDiv)
        
    }
}
initializeGame()

//dynamically create radio button and assign 





// $("#submitButton").click(event){
// var radioValue = $("input[name='0']:checked")
// console.log(radioValue);
// 
