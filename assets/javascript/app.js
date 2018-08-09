// 2000's trivia
$(document).ready(function () {

})



var correctAnswer = [];
var incorrectAnswer = [];

//Major Task 1: Questions -- create objects in the array to call on them

var questions = [{
    question: "What does Napoleon Dynamites famous shirt say?",
    answer: ["Make 7 UP Yours", "vote pedro", "make it rain", "I'm with Stupid"],
    correct: ["vote pedro"]
}, {
    question: "Who did Janet Jackson perform with during her Superbowl halftime show wardrobe malfunction?",
    answer: ["Aerosmith", "Justin Timberlake", "Beyonce", "Brittany Spears"],
    correct: ["Justin Timerlake"]
}, {
    question: "What was y2k?",
    answer: ["N'SYNC and Backstret Boys Collaboration Album", "The First Crypto Currency", "Midnight on January 1, 2000, all electronic devices would cease to work"],
    correct: ["Midnight on January 1, 2000, all electronic devices would cease to work"]
}, {
    question: "Who was Dr. Dre?",
    answer: ["brain surgery pioneer", "A famous microbiologist", "A famous rapper", "A space cadet"],
    correct: ["A famous rapper"]
}];


//Major Task 2: Create timer function  and stop function--  may want to initialize on key press????
var timer;

// function myFunction() {
//     timer = setInterval(function () {
//         done();
//     }, 10000);
// }

// myFunction();

// function stop() {
//     clearInterval(timer);
// }

//MAJOR TASK 3 :CREATE DYNAMIC CONTAINERS FOR QUESTIONS & ANSWERS && have populate on the screen 

var initializeGame = function () {
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = $("<div>");
        questionDiv.html("<h2>" + questions[i].question + "</h2>")
        for (var j = 0; j < questions[i].answer.length; j++) {
            console.log("questions[i].answer.length", questions[i].answer.length);
            questionDiv.append("<input type='radio' name='question-" + i + "'value'" + questions[i].answer[j] + "''>" + questions[i].answer[j]);
            $("#questions").append(questionDiv);
        }
    }
}

initializeGame();

$("submitButton").click(function () {
    for (i = 0; i < questions.answer.length; i++) {
        //take the input name and store as a variable 
        //document.querySelector('input[name="question-"+[i]]:checked').value
        $('input:radio[name=question-'+[i],':checked').val();
        if ($(this.val() === questions[i].correct[i])) {
            correctAnswer++;
        } else {
            incorrectAnswer++;
        }
       
    } console.log("ca1", correctAnswer, "ia", incorrectAnswer)
})
console.log("ca2", correctAnswer, "ia", incorrectAnswer)


// function done(){
//     $.each($("input[name='question-0]:checked"), function(){
//         if ($(this.val() === questions[0].correct[0]) ) {
//             correct++;
//         }else{
//             incorrect++;
//         }
//     });

//     $.each($("input[name='question-1]:checked"), function(){
//         if ($(this.val() === questions[1].correct[1]) ) {
//             correct++;
//         }else{
//             incorrect++;
//         }
//     });

//     $.each($("input[name='question-2]:checked"), function(){
//         if ($(this.val() === questions[2].correct[2]) ) {
//             correct++;
//         }else{
//             incorrect++;
//         }
//     });
//     $.each($("input[name='question-1]:checked"), function(){
//         if ($(this.val() === questions[3].correct[3]) ) {
//             correct++;
//         }else{
//             incorrect++;
//         }
//     });
// }


// $("#submitButton").click(event){
// var radioValue = $("input[name='0']:checked")
// console.log(radioValue);
//