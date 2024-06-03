let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 333);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  gameFlash(randbtn);
}

function checkAns(idx) {
  // let idx = level - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!! Your score was <b>${level}</b> <br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red"; 
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "black";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  gameFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allbtn = document.querySelectorAll(".box");
for (btn of allbtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
