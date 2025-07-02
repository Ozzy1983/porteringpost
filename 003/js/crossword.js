//CROSSWORD

const crossword = [
    [{ letter: '', number: 1 }, '', { letter: '', number: 2 }, '', {black: true}, {letter: '', number: 3}, { letter: '', number: 4 }, '', '', '', { letter: '', number: 5 }, '', { letter: '', number: 6 }],
    ['',{black: true}, '',{black: true}, { letter: '', number: 7}, {black: true}, '', {black: true}, {black: true}, {black: true}, '', {black: true}, ''],
    [{ letter: '', number: 8 }, '', '', '', '', '', '', {letter: '', number: 9}, '', {letter: '', number: 10}, '', {letter: '', number: 11}, ''],
    ['', {black: true}, '', {black: true}, '', {black: true}, {black: true}, '', {black: true}, '',{black: true}, '',{black: true}],
    [{letter: '', number: 12}, {letter: '', number: 13}, '', {letter: '', number: 14}, '', {letter: '', number: 15}, {black: true}, { letter: '', number: 16}, {letter: '', number: 17}, '',{ letter: '', number: 18}, '', {letter: '', number: 19}],
    [{black: true}, '', {black: true}, '', {black: true}, '', {black: true}, {black: true}, '', {black: true}, '', {black: true}, ''],
    [{letter: '', number: 20}, '', {letter: '', number: 21},'', '', '', {letter: '', number: 22}, '', '', '', , '', '', ''],
    ['', {black: true}, '', {black: true}, {black: true}, {black: true}, '', {black: true}, '', {black: true}, '', {black: true}, ''],
    [{ letter: '', number: 23}, '', '', '', '', '', '', '', {black: true}, { letter: '', number: 24}, '', '', ''],
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

// to dropdown the news
function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

function toggleText(element) {
    var moreText = element.previousElementSibling; 
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        element.textContent = "Read less...";
    } else {
        moreText.style.display = "none";
        element.textContent = "Read more...";
    }
}


// ANOTHER CROSSWORD

function smallCrossword(){
    const gridSmall = document.getElementById("anotherCrossword");
    for(let i = 0; i <4; i++){
        let input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.className = "cell2";
        gridSmall.appendChild(input);
    }
}

smallCrossword();


//dropdown issues
            const toggleButton = document.getElementById("toggle-menu");
            const dropdownMenu = document.getElementById("dropdown-menu");

            toggleButton.addEventListener("click", function(e) {
                e.preventDefault();
                dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            });

            // Cerrar menú si se hace clic fuera
            document.addEventListener("click", function(e) {
                if (!dropdownMenu.contains(e.target) && !toggleButton.contains(e.target)) {
                    dropdownMenu.style.display = "none";
                }
            });