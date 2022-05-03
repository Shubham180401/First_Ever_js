let turn = 0;
const drawBoard = [0, 3, 3, 3, 3, 3, 3, 3, 3, 3];

function restart() {
  location.reload();
}
function erase() {
  document.getElementById("celloFill").style.zIndex = "-1";
  document.getElementById("celloFill").innerHTML = " ";
}

function announcement(judgement) {
  document.getElementById("celloFill").style.zIndex = "9";
  document.getElementById("celloFill").innerHTML =
    '<div class="messageBox"><div id="announcement"></div><div id="restart" onclick="restart()">play again</div></div>';
  if (judgement == 1) {
    document.getElementById("announcement").innerText = "winner is blue";
  } else if (judgement == 2) {
    document.getElementById("announcement").innerText = "winner is red";
  } else if (judgement == 100) {
    document.getElementById("announcement").innerText = "match is draw";
  }
}

function winnerCalculation(boardNumber, player) {
  drawBoard[boardNumber] = player;
  if (
    (drawBoard[1] == 1 && drawBoard[2] == 1 && drawBoard[3] == 1) ||
    (drawBoard[4] == 1 && drawBoard[5] == 1 && drawBoard[6] == 1) ||
    (drawBoard[7] == 1 && drawBoard[8] == 1 && drawBoard[9] == 1) ||
    (drawBoard[1] == 1 && drawBoard[4] == 1 && drawBoard[7] == 1) ||
    (drawBoard[2] == 1 && drawBoard[5] == 1 && drawBoard[8] == 1) ||
    (drawBoard[3] == 1 && drawBoard[6] == 1 && drawBoard[9] == 1) ||
    (drawBoard[1] == 1 && drawBoard[5] == 1 && drawBoard[9] == 1) ||
    (drawBoard[3] == 1 && drawBoard[5] == 1 && drawBoard[7] == 1)
  ) {
    announcement(1);
  } else if (
    (drawBoard[1] == 2 && drawBoard[2] == 2 && drawBoard[3] == 2) ||
    (drawBoard[4] == 2 && drawBoard[5] == 2 && drawBoard[6] == 2) ||
    (drawBoard[7] == 2 && drawBoard[8] == 2 && drawBoard[9] == 2) ||
    (drawBoard[1] == 2 && drawBoard[4] == 2 && drawBoard[7] == 2) ||
    (drawBoard[2] == 2 && drawBoard[5] == 2 && drawBoard[8] == 2) ||
    (drawBoard[3] == 2 && drawBoard[6] == 2 && drawBoard[9] == 2) ||
    (drawBoard[1] == 2 && drawBoard[5] == 2 && drawBoard[9] == 2) ||
    (drawBoard[3] == 2 && drawBoard[5] == 2 && drawBoard[7] == 2)
  ) {
    announcement(2);
  } else if (drawBoard[0] == 100) {
    announcement(100);
  }
}

function moves(boardNumber) {
  if (drawBoard[boardNumber] == 3) {
    turn += 1;
    let ids = "block" + boardNumber;
    if (turn % 2 === 0) {
      document.getElementById(ids).style.background = "#ad6ed7";
      winnerCalculation(boardNumber, 1);
    } else {
      document.getElementById(ids).style.background = "#c04f4f";
      winnerCalculation(boardNumber, 2);
    }
  } else {
    document.getElementById("celloFill").style.zIndex = "9";
    document.getElementById("celloFill").innerHTML =
      '<div class="messageBox"><div id="announcement">Choose the unchoose block</div><div id="restart" onclick="erase()">draw move</div></div>';
  }
  if (turn === 9) {
    winnerCalculation(0, 100);
  }
}
