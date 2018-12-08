var question1 = "How fast does the average snowflake fall?";
var question2 = "What is the coldest recorded winter temperature in the United States?";
var question3 = "Which country has the snowiest city on Earth?";
var question4 = "What is the United States record for snowfall in a 24 hour period?";
var question5 = "What year was the first Winter Olympics?";

var answers1 = ["1 mph", "2 mph", "3 mph", "4 mph",];
var answers2 = ["-100 degrees Fahrenheit", "-80 degrees Fahrenheit", "-60 degrees Fahrenheit", "-40 degrees Fahrenheit"]
var answers3 = ["United States", "Russia", "Australia", "Japan"];
var answers4 = ["76 inches", "88 inches", "93 inches", "101 inches"];
var answers5 = ["1899", "1910", "1924", "1937"];

var right = 0;
var wrong = 0;
var timer = 60;

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    timer--;

    $("#timer").text("Timer: " + timer);

    if (timer === 0) {
        stop();
        alert("Time's up!");
    }
}

function stop() {
    clearInterval(intervalId);
}




$(document).ready(function () {
    
    $("#start").on("click", function () {
        $("#answers1").css('visibility', 'visible');
        $("#answers2").css('visibility', 'visible');
        $("#answers3").css('visibility', 'visible');
        $("#answers4").css('visibility', 'visible');
        $("#answers5").css('visibility', 'visible');
        $("#question1").text(question1);
        $("#question2").text(question2);
        $("#question3").text(question3);
        $("#question4").text(question4);
        $("#question5").text(question5);
        $("#timer").text("Timer: " + timer);
        $("#answer1_1").text(answers1[0]);
        $("#answer1_2").text(answers1[1]);
        $("#answer1_3").text(answers1[2]);
        $("#answer1_4").text(answers1[3]);
        $("#answer2_1").text(answers2[0]);
        $("#answer2_2").text(answers2[1]);
        $("#answer2_3").text(answers2[2]);
        $("#answer2_4").text(answers2[3]);
        $("#answer3_1").text(answers3[0]);
        $("#answer3_2").text(answers3[1]);
        $("#answer3_3").text(answers3[2]);
        $("#answer3_4").text(answers3[3]);
        $("#answer4_1").text(answers4[0]);
        $("#answer4_2").text(answers4[1]);
        $("#answer4_3").text(answers4[2]);
        $("#answer4_4").text(answers4[3]);
        $("#answer5_1").text(answers5[0]);
        $("#answer5_2").text(answers5[1]);
        $("#answer5_3").text(answers5[2]);
        $("#answer5_4").text(answers5[3]);
        run();
    }
    )
    $("#submit").on("click", function () {
        if ($("#customRadioInline3").is(":checked")) {
            right++;
        }
        else {
            wrong++;
        }

        if ($("#customRadioInline6").is(":checked")) {
            right++;
        }
        else {
            wrong++;
        }

        if ($("#customRadioInline12").is(":checked")) {
            right++;
        }
        else {
            wrong++;
        }

        if ($("#customRadioInline13").is(":checked")) {
            right++;
        }
        else {
            wrong++;
        }

        if ($("#customRadioInline19").is(":checked")) {
            right++;
        }
        else {
            wrong++;
        }
        $("#right").text("Answered correctly: " + right);
        $("#wrong").text("Answered incorrectly: " + wrong);
        stop();
    });
});

