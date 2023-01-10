// functions

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

// javascript
const grid = document.querySelector(".grid")

// creating the grid

const createGrid = () => {
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

//

createGrid()
