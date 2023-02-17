"use strict"

const container = document.getElementById("container")
const text = document.getElementById("text")
const pointerContainer = document.getElementById("pointerContainer")
// 8500  milliseconds = 8.5 seconds
const totalTime = 9500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5
let animationRunning = false

// Immediately running the function on page load.

function setStyles() {
  pointerContainer.style.animation = "rotate 9.5s linear forwards infinite"
}

function breatheAnimation() {
  animationRunning = true
  text.innerHTML = "Breathe In."
  container.className = "container grow"
  pointerContainer.style.animation = "rotate 9.5s linear forwards infinite"

  // Takes in a function to be executed, and a timer that will count (in ms) down to execute.
  setTimeout(() => {
    text.innerText = "Hold."

    setTimeout(() => {
      text.innerText = "Breathe Out."
      container.className = "container shrink"
    }, holdTime)
  }, breatheTime)
}

while (animationRunning) {
  // Runs the function every 7 seconds (or for the specified time).
  setInterval(breatheAnimation, totalTime)
}
