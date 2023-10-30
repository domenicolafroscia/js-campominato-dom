const playBtn = document.getElementById("start");
let bomb = [];

let clickedCells = [];
console.log(clickedCells);

playBtn.addEventListener("click", function () {
    console.log(playBtn);

    const numbersArray = generateRandomOrderNumbers(100);
    console.log(numbersArray);

    bomb = generateBombs(100);
    console.log(bomb);

    const maxClick = 100 - bomb.length;
    console.log(maxClick);

    const gridElem = document.querySelector(".grid");
    gridElem.innerHTML = "";

    for (let i = 0; i < numbersArray.length; i++) {
        const curNumber = numbersArray[i];
        const cell = generateCell(curNumber); 
        cell.addEventListener("click", clickCell)
        gridElem.append(cell);
    }

    // FUNZIONI
    function numbersGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomOrderNumbers(maxNumber) {
        const result = [];
        while (result.length < maxNumber) {
            const duplicateNumber = numbersGenerate(1, maxNumber);
            if (!result.includes(duplicateNumber)) {
                result.push(duplicateNumber);
            }
        }
        return result;
    }

    function generateCell(numbers) {
        const duplicateCell = document.createElement("div");
        duplicateCell.classList.add("cell");
        duplicateCell.innerHTML = numbers;
        return duplicateCell;
    }

    function clickCell() {
        const click = parseInt(this.textContent);
        console.log(click);
        let message = "";
        if (bomb.includes(click)) {
            this.classList.add("red");
            message = "Hai perso"
        } else {
            this.classList.add("skyblue");
            if (!clickedCells.includes(click)) {
                clickedCells.push(click);
            }
            if (clickedCells === maxClick) {
                message = "Hai vinto"
            }
        }
        document.getElementById("result").innerHTML = message;
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateBombs(max) {
        const resultBombs = [];
        while (resultBombs.length < 16) {
            const rndNum = getRndInteger (1, max);
            if (!resultBombs.includes(rndNum)) {
                resultBombs.push(rndNum);
            }
        } 
        return resultBombs;
    }


    
});


