document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HACKED BY ZENITHX & XFELLOID</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Eater&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet">
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #000;
  font-family: 'Cinzel Decorative', serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
}
.container {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  text-align: center;
}
.team-photos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 30px 0;
  flex-wrap: wrap;
}
.photo-item {
  position: relative;
  transition: transform 0.3s;
}
.photo-item:hover {
  transform: scale(1.05);
}
.photo {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff0000;
  box-shadow: 
    0 0 30px #ff0000,
    0 0 60px rgba(255, 0, 0, 0.5);
  filter: grayscale(30%) contrast(120%);
  transition: all 0.3s;
}
.photo:hover {
  filter: grayscale(0%) contrast(100%);
  border-color: #00ff00;
  box-shadow: 
    0 0 40px #00ff00,
    0 0 80px rgba(0, 255, 0, 0.3);
}
.name-tag {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 0, 0, 0.9);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-family: 'Creepster', cursive;
  font-size: 1.5rem;
  white-space: nowrap;
  z-index: 10;
  border: 2px solid #ff0000;
}
.hacker-title {
  margin-top: 35px;
  font-family: 'Eater', cursive;
  font-size: 1.2rem;
  color: #ff4444;
}
.hacker-signature {
  margin: 20px 0 40px;
}
.hacked-by {
  font-family: 'Eater', cursive;
  color: #ff0000;
  font-size: 2rem;
  text-shadow: 0 0 15px #ff0000;
  margin-bottom: 10px;
}
.team-name {
  font-family: 'Creepster', cursive;
  color: #fff;
  font-size: 3.5rem;
  letter-spacing: 3px;
  text-shadow: 
    0 0 10px #ff0000,
    0 0 20px #ff0000,
    0 0 30px #ff0000;
}
.message-box {
  background: rgba(20, 0, 0, 0.8);
  border: 2px solid #ff0000;
  padding: 30px;
  margin: 30px auto;
  max-width: 800px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.message-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff0000, #00ff00, #ff0000);
}
.warning {
  color: #ff0000;
  font-family: 'Creepster', cursive;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.message {
  color: #00ff00;
  font-family: monospace;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 20px;
}
.audio-player {
  margin: 20px 0;
}
audio {
  width: 100%;
  max-width: 400px;
  filter: invert(20%) sepia(100%) saturate(1000%) hue-rotate(0deg);
}
.skull {
  font-size: 3rem;
  margin: 20px 0;
  animation: float 3s ease-in-out infinite;
  filter: drop-shadow(0 0 10px #ff0000);
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.footer {
  margin-top: 30px;
  color: #888;
  font-size: 0.9rem;
}
.blood-drip {
  position: fixed;
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, transparent, #ff0000, #8b0000);
  animation: drip 3s linear infinite;
}
@keyframes drip {
  0% { transform: translateY(-100px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
@media (max-width: 768px) {
  .team-photos {
    flex-direction: column;
    gap: 60px;
  }
  .photo {
    width: 180px;
    height: 180px;
  }
  .team-name {
    font-size: 2.5rem;
  }
  .warning {
    font-size: 2rem;
  }
}
</style>
</head>
<body>

<!-- Blood drips -->
<div class="blood-drip" style="left: 10%; animation-delay: 0s;"></div>
<div class="blood-drip" style="left: 30%; animation-delay: 1s;"></div>
<div class="blood-drip" style="left: 50%; animation-delay: 2s;"></div>
<div class="blood-drip" style="left: 70%; animation-delay: 0.5s;"></div>
<div class="blood-drip" style="left: 90%; animation-delay: 1.5s;"></div>

<div class="container">
  <div class="hacker-signature">
    <div class="hacked-by">HACKED BY</div>
    <div class="team-name">ZENITHX & XFELLOID</div>
  </div>
  
  <div class="team-photos">
    <div class="photo-item">
      <img src="https://files.catbox.moe/kgluxd.jpg" alt="ZENITHX" class="photo">
      <div class="name-tag">ZENITHX</div>
      <div class="hacker-title">BLACKHAT HACKER</div>
    </div>
    
    <div class="photo-item">
      <img src="https://files.catbox.moe/y6jik2.jpg" alt="SIMULAS" class="photo">
      <div class="name-tag">XFELLOID</div>
      <div class="hacker-title">BLACKHAT HACKER</div>
    </div>
  </div>
  
  <div class="message-box">
    <div class="warning">SYSTEM BREACHED</div>
    <div class="message">
      > SECURITY PROTOCOLS: COMPROMISED<br>
      > ADMIN ACCESS: GRANTED<br>
      > FIREWALL: DISABLED<br>
      > DATA ENCRYPTION: FAILED
    </div>
    
    <div class="audio-player">
      <audio controls autoplay loop>
        <source src="https://files.catbox.moe/foiz2l.mp4" type="audio/mpeg">
      </audio>
    </div>
    
    <div class="skull">☠️</div>
    
    <div class="message" style="color: #ff0000; font-family: 'Eater', cursive;">
      YOUR SECURITY IS AN ILLUSION
    </div>
  </div>
  
  <div class="footer">
    System compromised by Zenithx & XFELLOID
  </div>
</div>

<script>
// Terminal effect
const messages = [
  "> أيها الفاسدون الأوغاد...",
  "> يا عجوز، إذا لم تفهم ذلك فلا تنضم إلى ذلك الفريق ههه"
];

let msgIndex = 0;
const messageEl = document.querySelector('.message');

function updateTerminal() {
  messageEl.innerHTML = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
}

setInterval(updateTerminal, 2000);

// Photo hover effect
const photos = document.querySelectorAll('.photo');
photos.forEach(photo => {
  photo.addEventListener('mouseenter', function() {
    this.style.transform = 'rotate(5deg)';
  });
  
  photo.addEventListener('mouseleave', function() {
    this.style.transform = 'rotate(0deg)';
  });
});

// Console log
console.log('%c⚠️ SYSTEM BREACHED ⚠️', 'color: #ff0000; font-size: 24px; font-weight: bold;');
console.log('%cAttackers: Zenithx & exfloid', 'color: #00ff00; font-size: 16px;');
console.log('%cStatus: Target Compromised', 'color: #ff0000; font-size: 18px;');
</script>
</body>
</html>
`;

