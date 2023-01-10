// functions
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

function getRandomColor() {
  let letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// javascript
const grid = document.querySelector(".grid")

// creating the grid
createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div")
    div.classList.add("cell")
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black"
    })
    grid.appendChild(div)
  }
}

// slider programming
const slider = document.querySelector("#slider")
const screenVal = document.querySelector(".value")
slider.addEventListener("input", () => {
  let val = document.getElementById("slider").value
  screenVal.textContent = val
  removeAllChildNodes(grid)
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`
  )
  for (let i = 0; i < val * val; i++) {
    const div = document.createElement("div")
    div.classList.add("cell")
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black"
    })
    grid.appendChild(div)
  }
})

// reset button
const reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
  let val = document.getElementById("slider").value
  let cell = grid.children
  for (let i = 0; i < val * val; i++) {
    cell[i].style.backgroundColor = "white"
  }
})

// Button for black color
const black = document.querySelector('#black')
black.addEventListener('click', () => {
  let val = document.getElementById("slider").value
  let cell = grid.children
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'black'
    })
  }
})

// Button for RGB
const rgb = document.querySelector('#rgb')
rgb.addEventListener('click', () => {
  let val = document.getElementById("slider").value
  let cell = grid.children
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = getRandomColor()
    })
  }
})

// choosing a color
const color = document.querySelector('#color')
color.addEventListener('input', () => {
  let chosenColor = document.getElementById('color').value
  let val = document.getElementById("slider").value
  let cell = grid.children
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = chosenColor
    })
  }
})

// beginning grid for website
createGrid()
