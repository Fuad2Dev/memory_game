$player = localStorage.getItem("players");
$size = localStorage.getItem("size");

// generate numbers on board
$arr = generateNumbers($size);

// scatter generated numbers on board
$balls = document.querySelectorAll(".ball");
$balls.forEach((element) => {
  element.childNodes[0].innerText = removeRandomElement($arr);
});

// hide board values
$balls.forEach((element) => {
  element.childNodes[0].style.display = "none";
});
