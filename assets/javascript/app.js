var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0

//Major Task 1: Questions -- create objects in the array to call on them

var questions = [{
    question: "What does Napoleon Dynamites famous shirt say?",
    answer: ["Make 7 UP Yours", "vote pedro", "Make it Rain", "I am with Stupid"],
    correct: ["vote pedro"]
}, {
    question: "Who did Janet Jackson perform with during her Superbowl halftime show wardrobe malfunction?",
    answer: ["Aerosmith", "Justin Timberlake", "Beyonce", "Brittany Spears"],
    correct: ["Justin Timberlake"]
}, {
    question: "What was y2k?",
    answer: ["N'SYNC and Backstret Boys Collaboration Album", "The First Crypto Currency", "Midnight on January 1, 2000, all electronic devices would cease to work"],
    correct: ["Midnight on January 1, 2000, all electronic devices would cease to work"]
}, {
    question: "Who was Dr. Dre?",
    answer: ["brain surgery pioneer", "A famous microbiologist", "A famous rapper who started with NWA", "A space cadet"],
    correct: ["A famous rapper who started with NWA"]
}];


//Major Task 2: Create timer function  and stop function--  may want to initialize on key press????

var timer = 30;

function start() {
    counter = setInterval(decrement, 1000);
};

function decrement() {
    timer--;
    $('#timeRemaining').html('<h2>' + " Time Remaining : " + timer + " Seconds" + '</h2>');
    if (timer === 0) {
        stop();
        $('#container').hide();
        $(".jumbotron").hide();
        $("#submitButton").hide();
        $("#results").show();
        var html =
            "<p>Correct: " + correctAnswer + "</p>" +
            "<p>InCorrect: " + incorrectAnswer + "</p>" +
            "<p>Unanswered: " + unanswered + "</p>"
        document.querySelector("#results").innerHTML = html;
    }
}
function stop() {
    clearInterval(counter);
}


//MAJOR TASK 3 :CREATE DYNAMIC CONTAINERS FOR QUESTIONS & ANSWERS && have populate on the screen 

var initializeGame = function () {
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = $("<div>");
        questionDiv.html("<h2>" + questions[i].question + "</h2>")
        for (var j = 0; j < questions[i].answer.length; j++) {
            console.log("questions[i].answer.length", questions[i].answer.length);
            questionDiv.append(`<input type='radio' name='question-${i}' value='${questions[i].answer[j]}'> ${questions[i].answer[j]}`);
            $("#questions").append(questionDiv);
        }
    }
    $("#questions").show();
    $("#results").hide();
    $(".jumbotron").hide();
}



$("#submitButton").click(function () {
    for (i = 0; i < questions.length; i++) {
        //take the input name and store as a variable 
        var answer = document.querySelector(`input[name="question-${i}"]:checked`).value
        // $('input:radio[name=question-'+[i],':checked').val();
        if (answer == questions[i].correct[0]) {
            correctAnswer++;
        } else {
            incorrectAnswer++;
        }
    }

    $('#container').hide();
    $(".jumbotron").hide();
    $("#submitButton").hide();
    $("#results").show();
    var html =
        "<p>Correct: " + correctAnswer + "</p>" +
        "<p>InCorrect: " + incorrectAnswer + "</p>" +
        "<p>Unanswered: " + unanswered + "</p>"
    document.querySelector("#results").innerHTML = html;
});

function startGame() {
    initializeGame();
    start();
}

$("#startButton").click(startGame());