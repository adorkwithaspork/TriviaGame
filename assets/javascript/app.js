// 2000's trivia
$(document).ready(function(){
    
})

var answeredCorrectly = [];
var answeredIncorrectly = [];
var questionIndex = [];
var answerIndex = [];
var correctIndex = [];
function question(question,ans,index){

    return  `
<form>
    <fieldset>
        <legend>${question}</legend>

        <div>
            <input type="radio" id="${index}-0" name= ${index} />
            <label for="dewey">${ans[0]}</label>
        </div>

        <div>
            <input type="radio" id="${index}-1" name= ${index} />
            <label for="dewey">${ans[1]}</label>
        </div>

        <div>
            <input type="radio" id="${index}-2"name= ${index} />
            <label for="louie">${ans[2]}</label>
        </div>
        <div>
            <input type="radio" id="${index}-3"name= ${index} />
            <label for="louie">${ans[3]}</label>
        </div>


    </fieldset>
</form>
`
}


var questions = [{
    prompt: "What does Napoleon Dynamites famous shirt say?", 
    answer:["Make 7 UP Yours", "vote pedro", "make it rain", "I'm with Stupid"], 
    correct:["vote pedro"]
}, {
    prompt: "Who did Janet Jackson perform with during her Superbowl halftime show wardrobe malfunction?",
    answer:["Aerosmith", "Justin Timberlake", "Beyonce", "Brittany Spears"],
    correct: ["Justin Timerlake"]
}, {
    prompt: "What was y2k?",
    answer:["N'SYNC and Backstret Boys Collaboration Album","The First Crypto Currency", "Midnight on January 1, 2000, all electronic devices would cease to work"],
    correct: ["Midnight on January 1, 2000, all electronic devices would cease to work"]
}, {
    prompt: "Who was Dr. Dre?",
    answer:["brain surgery pioneer", "A famous microbiologist", "A famous rapper", "A space cadet"],
    correct:["A famous rapper"]
}];

//MAJOR TASK 1 : SEPERATE TRIVIA INTO DIFFERENT ARRAYS AND CREATE DYNAMIC CONTAINERS FOR QUESTIONS & ANSWERS
for(i = 0; i < questions.length; i++){
    $("#quiz").append(question(questions[i].prompt,questions[i].answer,""+i));
}



$("#submitButton").click((e)=>{
    
var radioValue = $("input[name='0']:checked");
console.log(radioValue);



})

//grab the valuse of the user input
//compare to the corre3ct answer array 
//if- 
//$("#quiz").append(question(questions[1].prompt,[9,0,7 ],1));
    // dMajor task two: generate question and asnwer buttons 
// ÷
    
    
    
    // function generateQuestion() {

        
    // }




// function generateQuestion() {
//     document.querySelector("question-container").HTML += questionIndex[i];
//     document.querySelector("question-container");

// generateQuestion()


//MAJOR TASK 3: 

// function showQuestion(question, questionContainer){
// forEach(questionIndex[i])
    
// });
 // add questions inside question box
//   $("question-box").append(questionIndex[i]);

//   ;

// //   var radioBtn = $('<btn>');
// answerbox.append(questionbox);
// ocument.querySelector('answer-box').innerHTML+= '<p>'+ questions[i].answer+'<br';


//   document.getElementById("answer").innerHTML+= 'btn'+ questions[i].answer;

//   $("btn").append(question)
 



// // questionIndex.attr("question", questionIndex[i]);
// // $("question").append(questionIndex)







// debugger



// function renderQuestion(){
//     if(questionIndex <= questions.length -1)){
//     document.write()
//     }
//    var randomQuestion = questions.question[Math.floor(Math.random() * questions.question.lenght)];
//   return randomQuestion
// }
// console.log("r2", dq)
// debugger


// if(userInput === questions[questionIndex].correct) {
//     alert("correct")
// }

// //Major Task 1:
// // Create Dynamic Dynamic Radio Buttons for Questions
// // create a for loop to create Questions for every object
// //get questions: 

// function showQuestion()


// //create for loop to create questions for each object in the array
// for(var i = 0; i < questions.question.lenght; i++){
//     // create question for each 
//     questions[i] = randomQuestion
//     //for each iteration we will create a button
//     var radioBtn = $("<btn>")
// }
// showQuestion()


// //Dynamically (with document.getElementById or jQuery) remove the current question and add the next question, when the user clicks the “Next” button. The Next button will be the only button to navigate this version of the quiz.


// 		// // create choices as radio inputs
// 		// for (var i = 0; i < quiz.allQuestions[quiz.index]["choices"].length; i++) {
// 		// 	var choice = document.createElement('input');
// 		// 	choice.type = 'radio';
// 		// 	choice.className = 'choices';
// 		// 	choice.value = i;



// // Display questions
// //assign radio button answers
// //on click event:
// //loop through radio buttons to see what was clicked 
// //compare answers
// //profit

// //update correct
// //update incorrect 
// //update unanswered 


// //make a timer