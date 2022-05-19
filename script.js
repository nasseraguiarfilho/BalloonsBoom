function startGame() {
    var gameLevel = document.getElementById("gameLevel").value;

    if (gameLevel == 0) {
        alert("Please select a level!");
    }
    else {
        window.location.href = 'game.html?' + gameLevel;
    }


}
