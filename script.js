var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var stopWatch = document.getElementById("stopWatch");
var timeSelect = document.getElementById("timeSelect");
var counter = 3;
var startTime = 3;
var interval = null;

timeSelect.addEventListener("change", function(e) {
  startTime = e.target.value
  stopWatch.textContent = parseTime(startTime);
});

startButton.addEventListener("click", function() {
  interval = setInterval(function(){
    counter--;
    if (counter <= 0) {
      stopWatch.textContent = "Time's up!";
      clearInterval(interval)
    } else {
      stopWatch.textContent = parseTime(counter);
    } 
  }, 1000)
});

function parseTime(counter) {
  var displayCounter = counter.toString().padStart(2, '0')
  return `00:${displayCounter}`
}


resetButton.addEventListener("click", function() {
  counter = 3
  stopWatch.textContent = parseTime(counter);
});