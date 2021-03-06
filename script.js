var actionButton = document.getElementById("action");
var resetButton = document.getElementById("reset");
var stopWatch = document.getElementById("stopWatch");
var timeSelect = document.getElementById("timeSelect");
var circle = document.getElementById("circle");

var counter = 15;
var startTime = 15;
var interval = null;
var isPaused = false;

timeSelect.addEventListener("change", function(e) {
  startTime = e.target.value;
  if(interval == null) {
    stopWatch.textContent = parseTime(startTime);
  }
});

actionButton.addEventListener("click", function() {
  if(interval==null) {
    startTimer();
  } else if (isPaused) {
    resumeTimer()
  } else {
    pauseTimer()
  }
});

function parseTime(counter) {
  var displayCounter = counter.toString().padStart(2, '0')
  return `00:${displayCounter}`
}


resetButton.addEventListener("click", function() {
  actionButton.innerHTML="<i class='fas fa-play'></i> Start ";
  counter = startTime;
  clearInterval(interval)
  interval=null;
  isPaused = false;
  stopWatch.textContent = parseTime(counter);
});


function startTimer() {
  actionButton.innerHTML="<i class='fas fa-pause'></i> Pause ";
  counter = startTime;
  interval = setInterval(function(){
    if(!isPaused) {
      counter--;
      if (counter <= 0) {
        stopWatch.textContent = "Time's Up!";
        var audio = new Audio('assets/countdown-bleeps.mp3');
        audio.play();
        clearInterval(interval)
        interval=null;
      } else {
        stopWatch.textContent = parseTime(counter);
      }
    } 
  }, 1000)
}


function pauseTimer() {
  actionButton.innerHTML="<i class='fas fa-play'></i> Resume ";
  isPaused = true;
}


function resumeTimer() {
  actionButton.innerHTML="<i class='fas fa-pause'></i> Pause ";
  isPaused = false;
}