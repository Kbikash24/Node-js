let timerInterval;
let running = false;
let time = 0;

function updateTimeDisplay() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  document.getElementById('stopwatch').innerText = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  timerInterval = setInterval(() => {
    time++;
    updateTimeDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timerInterval);
  running = false;                                                                                                                 
}
document.getElementById("startStopButton").style.background="red"
document.getElementById('startStopButton').addEventListener('click', function() {
  if (running) {
    stopStopwatch();
  } else {
    startStopwatch();
  }
});
