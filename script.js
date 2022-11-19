changeDirection.addEventListener('click', (event) => {
    form.style.display = "flex"
    form.style.flexDirection = "column"
    form.style.width = "250px"
})

changeToGrid.addEventListener('click', (event) => {
    form.style.backgroundColor = "white"
    form.style.justifyContent = "center"
    form.style.gap = "25px"
    form.style.display = "grid"
    form.style.gridTemplateColumns = "250px 250px 250px"
    form.style.gridRow = "auto auto auto"
    
    one.style.gridArea = "1 / 1 / span 1 / span 2"
    one.style.width = "auto"
    one.style.borderStyle = "solid"

    two.style.gridArea = "1 / 3 / 3 / span 3"
    two.style.borderStyle = "solid"

    three.style.gridArea = "3 / 1 / span 3 /  4"
    three.style.width = "auto"
    three.style.borderStyle = "solid"

    four.style.gridArea = "2 / 1 / 3 / 2"
    four.style.borderStyle = "solid"
    
    five.style.gridArea = "2 / 2 / 3 / 3"
    five.style.borderStyle = "solid"
})
