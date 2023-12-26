let milli = 0;
let second = 0;
let minutes = 0;
let timer;

document.querySelector("#start").addEventListener("click", () => {
  clearInterval(timer);
  timer = setInterval(() => {
    milli++;
    document.getElementById("milli").innerHTML =
      milli < 10 ? "0" + milli : milli;
    if (milli >= 99) {
      milli = 0;
      second++;
      document.getElementById("seconds").innerHTML =
        second < 10 ? "0" + second : second;
    }
    if (second >= 59) {
      second = 0;
      minutes++;
      document.getElementById("minutes").innerHTML =
        minutes < 10 ? "0" + minutes : minutes;
    }
  }, 10);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(timer);
});

document.querySelector("#reset").addEventListener("click", () => {
  milli = "00";
  second = "00";
  minutes = "00";
  clearInterval(timer);
  document.getElementById("milli").innerHTML = milli;
  document.getElementById("seconds").innerHTML = second;
  document.getElementById("minutes").innerHTML = minutes;
});

function startInvertal() {}
