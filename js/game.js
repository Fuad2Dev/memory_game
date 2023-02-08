let theme = "numbers";
let players = 1;
let size = 4;

function setTheme(e) {
  let elements = document.querySelectorAll(".theme");

  elements.forEach((element) => {
    element.classList.remove("active");
  });

  document.getElementById(e.target.id).classList.add("active");

  theme = e.target.id;
}

function setPlayer(e) {
  let elements = document.querySelectorAll(".players");

  elements.forEach((element) => {
    element.classList.remove("active");
  });
  document.getElementById(e.target.id).classList.add("active");

  players = e.target.id;
}

function setSize(e) {
  let elements = document.querySelectorAll(".size");

  elements.forEach((element) => {
    element.classList.remove("active");
  });
  document.getElementById(e.target.id).classList.add("active");

  size = e.target.id;
}

function setUrl() {
  let $url;

  $url = size == 4 ? "4x4" : "6x6";
  $url += players == 1 ? "/solo.html" : "/multi.html";

  return $url;
}

function startGame() {
  // localStorage.setItem("theme", theme);
  localStorage.setItem("players", players);
  localStorage.setItem("size", size);

  // if (size == 4) {

  // } else {

  // }

  location.href = "../views/" + setUrl();
}
