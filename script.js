function updateClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr = now.getHours();

  const secDeg = sec * 6; // 360/60
  const minDeg = min * 6 + sec * 0.1; // smooth movement
  const hrDeg = hr * 30 + min * 0.5; // 360/12 + smooth

  document.getElementById("secondHand").style.transform = `rotate(${secDeg}deg)`;
  document.getElementById("minuteHand").style.transform = `rotate(${minDeg}deg)`;
  document.getElementById("hourHand").style.transform = `rotate(${hrDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
