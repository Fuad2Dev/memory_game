let $previous = null;

function move(e) {
  this.style.background = "#FDA214";
  let $current = this.childNodes[0];
  
  $current.style.display = "block";

  checkPair($current);
}

function checkPair($current) {
  // if has pair
  let isFirstPlay = $previous == null;

  if (isFirstPlay) {
    $previous = $current;
  } else {
    let isEqual = $previous.innerText == $current.innerText;

    if (players > 1) switchTurn(isEqual);
    else updateMoves();

    if (isEqual) {
      $previous.parentNode.removeEventListener("click", move);
      $current.parentNode.removeEventListener("click", move);
      
      $previous.parentNode.style.background = "#BCCED9";
      $current.parentNode.style.background = "#BCCED9";
    } else {
      delay($previous, $current);
    }

    $previous = null;
  }
}

addEventListener("ball", "click", move);
