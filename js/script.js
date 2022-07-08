// funzione per creare una cella 

function createCell() {
    const cell = document.createElement(`div`)

    cell.className = `cell`

    return cell
}

// funzione per creare un numero casuale

function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1 - 1) + 1)

}

// funzione per creare un array contente 16 numeri casuali


function bombs(numberCell) {

    const bombs = []

    const numberBombs = 16

    while (bombs.length < numberBombs) {
        let random

        do {
            random = randomNumber(numberCell)
        } while (bombs.includes(random))

        bombs.push(random)

    }


    return bombs

}







const button = document.getElementById(`button-play`)

// funzione per creare il gioco


button.addEventListener(`click`, function () {


    const grid = document.getElementById(`grid`)

    const numberCell = 100

    let point = 0

    const numberBombs = bombs(numberCell)
    console.log(numberBombs)


    for (let i = 1; i <= numberCell; i++) {
        const cell = createCell()


        cell.addEventListener(`click`, function () {


            if (cell.classList.contains(`clicked`)) {
                return
            } else if (numberBombs.includes(i)) {
                cell.classList.add(`bomb`)
                console.log(`hai perso`)
                console.log(`punti `, point)
            } else {
                cell.classList.add(`clicked`)

                console.log(i)


                point++

            }



        })


        cell.innerText = [i]

        grid.appendChild(cell)
    }






})
