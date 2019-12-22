var randomNumber = 0;
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;

$(document).ready(function() {
    var jewel1 = $("#jewel1");
    var jewel2 = $("#jewel2");
    var jewel3 = $("#jewel3");
    var jewel4 = $("#jewel4");

    function initGame(){
        val1 = Math.round(Math.random()*15);
        val2 = Math.round(Math.random()*15);
        val3 = Math.round(Math.random()*15);
        val4 = Math.round(Math.random()*15);
        randomNumber = Math.round(Math.random()*50);
        $("#scoreVariable").text(randomNumber);  
        userScore = 0;
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
        $("#userScore").text(userScore);
        // $("#display").empty();
    }

    initGame();
    // $(".button").on("click", function(){
    //     var buttonPressed = $(".button");
    //     alert(buttonPressed);
    // }) 
    jewel1.on("click", function(){
        buttonPress(jewel1, val1);
        checkAnswer(userScore, randomNumber);
    })
    jewel2.on("click", function(){
        buttonPress(jewel2, val2);
        checkAnswer(userScore, randomNumber);
    })
    jewel3.on("click", function(){
        buttonPress(jewel3, val3);
        checkAnswer(userScore, randomNumber);
    })
    jewel4.on("click", function(){
        buttonPress(jewel4, val4);
        checkAnswer(userScore, randomNumber);
    })

        // Check the current value to the randomNumber
    function checkAnswer(userScore, randomNumber){
        if(userScore > 0 && userScore == randomNumber){
            wins++;
            alert("You won!");
            initGame();
        } else if(userScore > randomNumber){
            losses++;
            alert("You lost!");
            initGame();
        }

    }
    function buttonPress(object,value){
        object.text(value);
        userScore = userScore + value;
        $("#userScore").text(userScore);
    }



});

