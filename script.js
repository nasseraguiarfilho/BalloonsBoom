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
        gameTime = 5;
        fullBalloons = 30;
    }
    //timer
    document.getElementById('timer').innerHTML = gameTime;

    createBalloons(fullBalloons, gameLevel);

    //full balloons
    document.getElementById("full").innerHTML = fullBalloons;

    //empty balloons
    document.getElementById("empty").innerHTML = emptyBalloons;

    timeCount(gameTime + 1); //starts clock



    function timeCount(seconds) {

        seconds = seconds - 1;

        if (seconds == -1) {
            gameOver();
            return false;
        }

        document.getElementById("timer").innerHTML = seconds;
        timerId = setTimeout(() => {
            timeCount(seconds);
        }, 1000);
    }


    function createBalloons(fullBalloons, gameLevel) {

        for (let i = 0; i < gameLevel * 10; i++) {
            var balloon = document.createElement("img");
            balloon.src = "imagens/balao_azul_pequeno.png";
            balloon.style.margin = "10px";
            balloon.id = "b" + (i + 1);
            document.getElementById("balloonsArea1").appendChild(balloon);
            balloon.onclick = function () { pow(this); };
        }

    }

    function pow(balloon) {
        document.getElementById(balloon.id).setAttribute("onclick", "");
        document.getElementById(balloon.id).src = "imagens/balao_azul_pequeno_estourado.png";

        point();


    }

    function point() {
        document.getElementById("full").innerHTML--;
        document.getElementById("empty").innerHTML++;

        var full = document.getElementById("full").innerHTML;
        var empty = document.getElementById("empty").innerHTML;;

        verifyGame(full);
    }

    function verifyGame(full) {
        if (full == 0) {
            document.getElementById("result").className = "col-4 mt-3 ms-3 rounded bg-success text-center visible";
            document.getElementById("result").innerHTML = "You won!";
            gameOver();
        }
        if (full > 0 && document.getElementById("timer").innerHTML == 0) {
            gameOver();
        }

    }

    function gameOver() {
        clearTimeout(timerId);
        clearBalloonClicks();
        document.getElementById("result").className = "col-4 mt-3 ms-3 rounded bg-danger center visible";
        document.getElementById("result").innerHTML = "You lost!";
        document.getElementById("restart").className = "btn btn-primary mt-2 ms-3 visible text-center";
    }

    function clearBalloonClicks() {
        var i = 1;
        while (document.getElementById("b" + i)) {
            document.getElementById("b" + i).onclick = "";
            i++;
        }
    }

    function restartGame() {
        window.location.href = "index.html";
    }


}





