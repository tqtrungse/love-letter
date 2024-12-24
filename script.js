// Snowfall settings
const SNOWFLAKE_COUNT = 50;
const SNOWFLAKE_SYMBOL = "❄"; // Use any symbol or emoji for the snowflake

// Generate snowflakes
for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
  createSnowflake();
}

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.textContent = SNOWFLAKE_SYMBOL;

  // Randomize initial position and size
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = Math.random() * 3 + 5 + "s"; // Between 2s and 5s
  snowflake.style.animationDelay = Math.random() * 8 + "s"; // Delay between 0s and 5s
  snowflake.style.fontSize = Math.random() * 5 + 7 + "px"; // Font size between 10px and 20px

  document.body.appendChild(snowflake);

  // Remove snowflake after animation ends
  setTimeout(() => {
    snowflake.remove();
    createSnowflake(); // Replace it with a new one
  }, (parseFloat(snowflake.style.animationDuration) + parseFloat(snowflake.style.animationDelay)) * 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const girl = document.getElementById("girl");
  setTimeout(() => {
    girl.style.display = "block";
  }, 5000);

  const audio = document.getElementById("audioPlayer");
  setTimeout(() => {
    audio.style.display = "block";
    girl.style.display = "block";
  }, 13000);
});

var playTimes = 0;

document.getElementById("audioPlayer").addEventListener("play", function() {
  if (playTimes === 1) {
    return;
  }
  playTimes = 1;

  const boy = document.getElementById("boy");
  boy.style.display = "block";
  
  const text = document.getElementById("text");
  const snowMan = document.getElementById("snowman");
  setTimeout(() => {
    text.style.display = "block";
    snowMan.style.animation = "lean-move 15s forwards";
    setTimeout(() => {
      snowMan.style.animation = "lean 5s infinite alternate";
    }, 15000)
  }, 15000);

  setTimeout(() => {

    var animationContainer = document.getElementById("lottie-container");
    fetch(
      "https://lottie.host/6cf88769-5d53-4ce8-b091-c339b1fe3796/zpasJ8rFeh.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Errore nel caricamento del file JSON: " + response.statusText
          );
        }
        return response.json();
      })
      .then((animationData) => {
        var animation = lottie.loadAnimation({
          container: animationContainer,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData
        });

        function resizeAnimation() {
          var width = animationContainer.offsetWidth;
          var height = width * (1 / 1); 
          animationContainer.style.height = height + "px";
        }

        window.addEventListener("resize", resizeAnimation);
        resizeAnimation();
      })
      .catch((error) =>
        console.error("Error load animation:", error)
      );
  }, 14000);
});