var timerId = null;

function startingPage() {

    var gameLevel = document.getElementById("gameLevel").value;

    if (gameLevel == 0) {
        alert("Please select a level!");
    }
    else {
        window.location.href = 'game.html?' + gameLevel;
    }


}


function startGame() {

    var url = window.location.search;
    var gameLevel = url.replace("?", "");
    console.log(gameLevel);
    var gameTime = 0;
    var fullBalloons = 0;
    var emptyBalloons = 0;

    if (gameLevel == 1) {
        gameTime = 30;
        fullBalloons = 10;
    }
    if (gameLevel == 2) {
        gameTime = 20;
        fullBalloons = 20;
    }

    if (gameLevel == 3) {
        gameTime = 10;
        fullBalloons = 30;
    }
    //timer
    document.getElementById('timer').innerHTML = gameTime;
  
    createBalloons(fullBalloons, gameLevel);

    //full balloons
    document.getElementById("full").innerHTML = fullBalloons;

    //empty balloons
    document.getElementById("empty").innerHTML = emptyBalloons;

    timeCount(gameTime+1); //starts clock

    function timeCount(seconds) {

        seconds = seconds - 1;

        if (seconds == -1) {
            return false;
        }

        document.getElementById("timer").innerHTML = seconds;
        setTimeout(() => {
            timeCount(seconds);
        }, 1000);
    }


    function createBalloons(fullBalloons, gameLevel) {
        for (let area = 1; area <= gameLevel; area++) {
            for (let i = 0; i < 10; i++) {
                var balloon = document.createElement("img");
                balloon.src = "imagens/balao_azul_pequeno.png";
                balloon.style.margin = "10px";
                document.getElementById("balloonsArea" + area).appendChild(balloon);
            }
        }

    }
}

