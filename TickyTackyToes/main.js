class Sheet {
    constructor(board) {
        
        let body = document.body;
        let page = document.createElement('div');
        let pageRow = document.createElement('div');
        let pageRowCol = document.createElement('div');
        let pageRowColH2 = document.createElement('h1');
        let gridRow = document.createElement('div');
        let gridCol1 = document.createElement('button');
        let gridCol2 = document.createElement('button');
        let gridCol3 = document.createElement('button');
        let gridCol4 = document.createElement('button');
        let gridCol5 = document.createElement('button');
        let gridCol6 = document.createElement('button');
        let gridCol7 = document.createElement('button');
        let gridCol8 = document.createElement('button');
        let gridCol9 = document.createElement('button');
        let buttonRow = document.createElement('div');
        let buttonCol = document.createElement('div');
        let btn = document.createElement('button');
        page.className = "container text-center"
        pageRow.className = "row text-center"
        pageRowCol.className = "column"
        pageRowColH2.className = "heading text-center"
        gridRow.className = "row text-center grid-container" //grid-container 
        gridCol1.className = "col-4"
        gridCol2.className = "col-4"
        gridCol3.className = "col-4"
        gridCol4.className = "col-4"
        gridCol5.className = "col-4"
        gridCol6.className = "col-4"
        gridCol7.className = "col-4"
        gridCol8.className = "col-4"
        gridCol9.className = "col-4"
        buttonRow.className = "row text-center"
        buttonCol.className = "col"
        btn.className = "mt-4 mb-1"
        pageRowColH2.innerText = "Ticky-Tacky-Toes";
        btn.innerText = "Go";

        body.appendChild(page)
        page.append(pageRow, gridRow, buttonRow);

        gridRow.append( gridCol1, gridCol2, gridCol3, 
                        gridCol4, gridCol5, gridCol6, 
                        gridCol7, gridCol8, gridCol9);

        pageRow.append(pageRowCol);
        pageRowCol.append(pageRowColH2);
        buttonRow.append(buttonCol);
        buttonCol.append(btn);
    }
}


class Tile {
    constructor() {
    
    }
}

class Player {
    constructor(mark) {
        this.mark = mark;
    }
}

class NewGame {
    constructor() {
        this.board = new board();
        this.Player = [new Player ("X"), new Player("O")]
    }
}


// 1. add event listener -> remove
            // 2. add onclick function g.onclick = myFunction(i)
            // if statement elemten i is true
            // turn it false
            // 3. create "smart" class
            // let ele = new Tile(gridCol, i, myFunction) // pass in lots of data