var x = function () {
  var hod = 0;

  var reset = document.querySelector('#reset');
  reset.addEventListener("click", function() {
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].innerText = "";
    ceil[i].addEventListener('click', changeGamer);
  }
});


  var ceil = getFieldCells('.section');
  var currentGame = 'X';
  function getFieldCells(selector) {
    return document.querySelectorAll(selector);
  }
  for (var i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener('click', changeGamer);
  }

  function changeGamer() {
    this.innerHTML = currentGame;
    if (currentGame == 'X') {
      currentGame = 'O';
      document.getElementById('player').innerHTML = 'Ход игрока О';
      }
      else {
        currentGame = 'X'
        document.getElementById('player').innerHTML = 'Ход игрока Х';
      }
      this.removeEventListener('click',changeGamer)
      var win = checkWinner(ceil);

      if (win != false) {
        endGame(ceil, win);
      }


  }
  function endGame(ceil, win) {
    stopGame(ceil);
    showWinner(win);
  }
  function stopGame(ceil) {
    for (var i = 0; i < ceil.length; i++) {
      ceil[i].removeEventListener('click', changeGamer);
  }
}
function showWinner(name) {
 alert('Победил игрок: ' + name);
}
  function checkWinner(ceil) {
    var winCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ];
    console.log(winCombinations);
    for (var i = 0; i < winCombinations.length; i++) {
      var wc = winCombinations[i];
      if (ceil[wc[0]].innerHTML == ceil[wc[1]].innerHTML && ceil[wc[1]].innerHTML == ceil[wc[2]].innerHTML && ceil[wc[0]].innerHTML != '') {
            return ceil[wc[0]].innerHTML;
            // alert('Победил игрок: ' + ceil[wc[0]].innerHTML)
      }
    }
    return false;
  }

}


x();
