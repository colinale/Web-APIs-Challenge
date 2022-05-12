function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
}