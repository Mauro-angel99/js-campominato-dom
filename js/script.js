// funzione per creare una cella 

function createCell() {
    const cell = document.createElement(`div`)

    cell.className = `cell`

    return cell
}


function randomNumber(max) {
    let random = Math.floor(Math.random() * (max + 1 - 1) + 1)
    console.log(random)
    return
}






const button = document.getElementById(`button-play`)

// funzione per creare il gioco


button.addEventListener(`click`, function () {


    const grid = document.getElementById(`grid`)

    const numberCell = 100

    let point = 0

    for (let i = 1; i <= numberCell; i++) {
        const cell = createCell()

        cell.addEventListener(`click`, function () {

            if (cell.classList.contains(`clicked`)) {
                return
            }

            cell.classList.add(`clicked`)

            console.log(i)

            point++

            console.log(`punti `, point)
        })


        cell.innerText = [i]

        grid.appendChild(cell)
    }


    // creo 16 numeri casuali da 1 a il numero massimo di caselle


    for (let i = 0; i < 16; i++) {
        randomNumber(numberCell)
    }


})
