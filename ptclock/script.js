const chime = new Audio("chime.mp3");

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let dateStr = (hours % 12) || 12;
  dateStr += ":" + minutes.toString().padStart(2, '0');
  dateStr += ":" + seconds.toString().padStart(2, '0');
  dateStr += hours >= 12 ? ' pm' : ' am';

  document.getElementById('current-time-value').innerHTML = dateStr;

  if (minutes % 1 === 0 && seconds % 10 === 0) {
    //chime.currentTime = 0;
    chime.play();
  }
}

// Update time every second
setInterval(updateTime, 1000);

