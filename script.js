const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
  let random = -((Math.random() * 300) + 150);
  hole.style.top = random + "px";
  counter++;
})

setInterval(() => {
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
  let cTop = -(640 - characterTop);

  if (jumping == 0) {
    // Gravedad
    character.style.top = (characterTop + 2) + "px";
  }
  // Dead
  if ((characterTop > 640) || ((blockLeft < 50) && (blockLeft > -80) && ((cTop < holeTop) || (cTop > holeTop + 140)))) {
    restart();
  }
}, 10)

// Jump
const jump = () => {
  jumping = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (characterTop > 6) {
      //Jump height
      character.style.top = (characterTop - 3) + "px";
    }

    if (jumpCount > 15) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  })
}
//restart
const restart = () => {
  alert("game over. Score:" + counter);
  character.style.top = 100 + "px"
  counter = 0;
  console.log(window.getComputedStyle(block).getPropertyValue("left"))
}

setInterval(function () {
  const score = document.getElementById("score");
  score.innerHTML = `Score: ${counter}`;
}, 2)
