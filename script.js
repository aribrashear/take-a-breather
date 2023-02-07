"use strict"

const container = document.querySelector(".container")
const text = document.querySelector(".text")
// 7500  milliseconds = 7.5 seconds
const totalTime = 7500
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

// Immediately running the function on page load.
breatheAnimation()

function breatheAnimation() {
  text.innerHTML = "Breathe In."
  container.className = "container grow"

  // Takes in a function to be executed, and a timer that will count (in ms) down to execute.
  setTimeout(() => {
    text.innerText = "Hold."

    setTimeout(() => {
      text.innerText = "Breathe Out."
      container.className = "container shrink"
    }, holdTime)
  }, breatheTime)
}

// Runs the function every 7 seconds (or for the specified time).
setInterval(breatheAnimation(), totalTime)
