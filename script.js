// functions
let sizeOfGrid = 16;
// javascript

const container = document.querySelector(".container")

const createGrid = (amtOfGrids) => {
  for (let i = 0; i < amtOfGrids; i++) {
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 960 / sizeOfGrid
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width = `${widthAndHeight}px`
      gridBox.style.height = `${widthAndHeight}px`
      // adding event listener for mouse enter
      gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = 'black'
      })
      row.appendChild(gridBox)
    }
    container.appendChild(row)
  }
}

createGrid(sizeOfGrid)