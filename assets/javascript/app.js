

//start button//
$('#triviastart').on('click', function () {
    // console.log("start button works")
    // trivia.fadeOut(function () {
        // removes question after answered//
        $('#question').remove();
    // })
    trivia.triviastart();

})
// fadeout between questions, create function to show 1 question at a time//

    // trivia.fadeOut(function () {
    //     $('#question').remove();
    // })


// next button appears with each question//
$(document).on('click', '#next', function () {
    trivia.displayNext();
})


// trivia game questions//
var questions = [{
    question: "What color is the bridesmaid dress that Rachel wears in Mindy's wedding?",
    answers: ["Green", "Yellow", "Pink"],
    correctAnswer: "Pink"
}, {
    question: "'Pi-VOT!'Who said it?",
    answers: ["Chandler", "Monica", "Ross"],
    correctAnswer: "Ross"
}, {
    question: "Which soap opera does Joey act in?",
    answers: ["General Hospital", "Days of Our Lives", "Princess Consuela Banana Hammock"],
    correctAnswer: "Princess Consuela Banana Hammock"
}, {
    question: "What is the name of Phoebe's most-played song?",
    answers: ["Colors of the rainbow", "Butter flys", "Smelly Cat"],
    correctAnswer: "Smelly Cat"
}, {
    question: "Why did Chandler break up with his first girlfriend?",
    answers: ["She was crosseyed", "She slept with Joey", "She had an obnoxious laugh"],
    correctAnswer: "She had an obnoxious laugh"
}];

var trivia = {
    correct: 0,
    incorrect: 0,
    counter: 15,
    countdown: function () {
        trivia.counter--;
        $('#counter').html(trivia.counter);
        if (trivia.counter === 0) {
            clearInterval(timer)
        //   when timer equals 0, triia should stop//
            trivia.done();
        }
    },
    triviastart: function () {
        timer = setInterval(trivia.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        // removes start button after clicking start//
        $('#triviastart').remove();
        // display the questions and answers, make answers clickable//
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');

            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        $('#subwrapper').append('<br><button id="next">Next</button>')
    },

    // check each players input to see if answer correct or incorrect//
    done: function () {
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }

        });
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }
        });
        // display results page with correct, incorrect, and not answered info//
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}


