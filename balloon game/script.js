let tap = 3;
var count = 1;
const balloonContainer = document.querySelector(".balloon-container");
const container = document.querySelector(".container");
// const audio = new Audio("./pop_sound.mp3");
const audio = new Audio("./short_audio.mp3");

function balloonFilling() {
  console.log(tap);
  if (tap % 3 === 0) {
    console.log("Release and create the new balloon");
    createBalloon();
  } else {
    increaseBalloon();
  }

  tap = tap + 1;
}

function createBalloon() {
  const balloon = document.createElement("div");

  const balloonImage = document.createElement("img");

  console.log(count + "this is count");

  balloonImage.src = `./Graphics_2/Symbol 10000${count}.png`;

  balloonImage.classList.add("balloon-image");
  const letterImage = document.createElement("img");
  letterImage.src = `./Graphics_2/Symbol 1000${count}.png`;
  letterImage.classList.add("letter-image");

  // Append images to the balloon container
  balloon.appendChild(balloonImage);
  balloon.appendChild(letterImage);

  console.log("Balloon count is " + count);
  balloon.classList.add("balloon");
  balloon.style.width = "0px";
  balloon.style.height = "0px";

  balloonContainer.appendChild(balloon);

  setTimeout(()=>{
  balloon.style.width = "25px";
  balloon.style.height = "25px";
  },300)

  count += 1;
}

function increaseBalloon() {
  let balloon = document.querySelector(".balloon");

  if (tap % 2 == 0) {
    console.log("Increase the balloon by 1");
    balloon.style.width = "50px";
    balloon.style.height = "50px";
  } else {
    console.log("Increase the balloon by 2");
    balloon.style.width = "100px";
    balloon.style.height = "100px";

    // setting the initail position
    const balloonLocation = balloon.getBoundingClientRect();
    balloon.style.left = `${balloonLocation.left - 23}px`;
    balloon.style.top = `${balloonLocation.top - 120}px`;
    container.appendChild(balloon);

    balloon.addEventListener("click", () => {
      console.log("Balloon pop sound");
      audio.play();
      balloon.remove();
    });

    balloon.classList.add("floating");

    setInterval(() => floatRandomly(balloon), 1000);

    document.querySelector(".pop-text").textContent =
      "Click on the balloon to pop it 📌💥";
  }
}

function floatRandomly(balloon) {
  const randomX = Math.floor(
    Math.random() * (window.innerWidth - balloon.offsetWidth)
  );
  const randomY = Math.floor(
    Math.random() * (window.innerHeight - balloon.offsetHeight)
  );

  // Set the new position
  balloon.style.left = randomX + "px";
  balloon.style.top = randomY + "px";
  
}
