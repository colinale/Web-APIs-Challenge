function printHighscores() {

  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // highscores set in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    // high score tags
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // page display
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

// run function 
printHighscores();
