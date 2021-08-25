var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var stopWatch = document.getElementById("stopWatch");
var timeSelect = document.getElementById("timeSelect");
var circle = document.getElementById("circle");

var counter = 5;
var startTime = 5;
var interval = null;

timeSelect.addEventListener("change", function(e) {
  startTime = e.target.value;
  if(interval == null) {
    stopWatch.textContent = parseTime(startTime);
  }
});

startButton.addEventListener("click", function() {
  if(interval==null) {
    counter = startTime;
    circle.style.animation = `countdown ${startTime}s linear forwards`
    interval = setInterval(function(){
      counter--;
      if (counter <= 0) {
        stopWatch.textContent = "Time's up!";
        clearInterval(interval)
        interval=null;
        circle.style.animation = ""
      } else {
        stopWatch.textContent = parseTime(counter);
      } 
    }, 1000)
  } 
});

function parseTime(counter) {
  var displayCounter = counter.toString().padStart(2, '0')
  return `00:${displayCounter}`
}


resetButton.addEventListener("click", function() {
  counter = startTime;
  clearInterval(interval)
  interval=null;
  circle.style.animation = "";
  stopWatch.textContent = parseTime(counter);
});