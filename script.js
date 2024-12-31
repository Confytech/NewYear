// Countdown Timer
const countdown = () => {
    const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
    // Trigger fireworks and audio on New Year
    if (gap <= 0) {
      document.getElementById("greeting").classList.add("highlight");
      triggerFireworks();
      playAudio();
    }
  };
  
  // Play Background Music
  const playAudio = () => {
    const audio = document.getElementById("background-audio");
    audio.play();
  };
  
  // Fireworks Animation
  const triggerFireworks = () => {
    const container = document.getElementById("fireworks-container");
    for (let i = 0; i < 50; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = Math.random() * 100 + "vw";
      firework.style.animationDelay = Math.random() * 2 + "s";
      container.appendChild(firework);
  
      setTimeout(() => {
        firework.remove();
      }, 4000);
    }
  };
  
  // Update countdown every second
  setInterval(countdown, 1000);
  