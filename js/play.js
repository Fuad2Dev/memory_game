let $previous = null;

function play(e) {
  let $current = this.childNodes[0];

  $current.style.display = "block";

  checkPair($current);
}

addEventListener("ball", "click", play);

function checkPair($current) {
  // if has pair
  if ($previous != null) {
    if ($previous.innerText != $current.innerText) {
      delay($previous, $current);
    } else {
      $previous.parentNode.removeEventListener("click", play);
      $current.parentNode.removeEventListener("click", play);
    }

    $previous = null;
  } else {
    $previous = $current;
  }
}
