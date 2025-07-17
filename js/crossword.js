//CROSSWORD

const crossword = [
    [{ letter: '', number: 1 }, '', '', { letter: '', number: 2 }, {black: true}, {letter: '', number: 3}, {black: true}, { letter: '', number: 4 }, {black: true}, { letter: '', number: 5 }, '', '', { letter: '', number: 6 }],
    ['',{black: true}, {black: true}, { letter: '', number: 7}, '', '', '', '', '', '', {black: true}, {black: true}, ''],
    [{ letter: '', number: 8 }, '', '', '', {black:true}, '',{black:true}, '',{black:true}, { letter: '', number: 9 }, '', '', '' ],
    ['', {black: true}, {black: true}, { letter: '', number: 10}, '', '', { letter: '', number: 11}, '', '', '', {black: true}, {black: true}, '' ],
    [{letter: '', number: 12}, '', '', '', {black: true}, {black: true}, '', {black: true}, {black: true}, { letter: '', number: 13}, '', '', ''],
    ['', {black: true}, {black: true}, { letter: '', number: 14}, '', { letter: '', number: 15}, '', { letter: '', number: 16}, '', '', {black: true}, {black: true}, '' ],
    [{letter: '', number: 17}, '', '', '', {black: true}, '', {black: true}, '', {black: true}, { letter: '', number: 18}, '', '', '' ],
    ['', {black: true}, {black: true}, {letter: '', number: 19}, '', '', '', '', '', '', {black: true}, {black: true}, '' ],
    [{ letter: '', number: 20}, '', '', '', {black: true}, '', {black: true}, '', {black: true}, { letter: '', number: 21}, '', '', ''],
];

const grid = document.getElementById("grid");

crossword.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
        const container = document.createElement("div");
        container.classList.add("cell-container");
                
        if (cell.black) {
            container.classList.add("black");
        } else {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.classList.add("cell");
            if (cell.letter) {
                input.value = cell.letter;
                input.disabled = true;
            }
            container.appendChild(input);
                    
            if (cell.number) {
                const number = document.createElement("div");
                number.classList.add("number");
                number.textContent = cell.number;
                container.appendChild(number);
                }
            }
                
        grid.appendChild(container);
    });

});

//TIC TOC TAC

const tablero = document.getElementById("tablero");
const mensaje = document.getElementById("mensaje");

let turno = "X";
let celdas = [];

function crearTablero() {
tablero.innerHTML = "";
celdas = Array(9).fill("");
for (let i = 0; i < 9; i++) {
    const celda = document.createElement("div");
    celda.classList.add("celda");
    celda.dataset.index = i;
    celda.addEventListener("click", marcarCelda);
    tablero.appendChild(celda);
}
            mensaje.textContent = "It's time for: " + turno;
            }

            function marcarCelda(e) {
            const index = e.target.dataset.index;
            if (celdas[index] !== "") return;

            celdas[index] = turno;
            e.target.textContent = turno;

            if (verificarGanador()) {
                mensaje.textContent = `${turno} Win!`;
                tablero.querySelectorAll(".celda").forEach(c => c.removeEventListener("click", marcarCelda));
            } else if (!celdas.includes("")) {
                mensaje.textContent = "Draw!";
            } else {
                turno = turno === "X" ? "O" : "X";
                mensaje.textContent = "It's time for: " + turno;
            }
            }

            function verificarGanador() {
            const combinaciones = [
                [0,1,2], [3,4,5], [6,7,8], 
                [0,3,6], [1,4,7], [2,5,8], 
                [0,4,8], [2,4,6]           
            ];
            return combinaciones.some(comb => {
                const [a, b, c] = comb;
                return celdas[a] && celdas[a] === celdas[b] && celdas[a] === celdas[c];
            });
            }

function reiniciar() {
turno = "X";
crearTablero();
}

crearTablero();


// ANOTHER CROSSWORD

function smallCrossword(){
    const gridSmall = document.getElementById("anotherCrossword");
    for(let i = 0; i <6; i++){
        let input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.className = "cell2";
        gridSmall.appendChild(input);
    }
}

smallCrossword();