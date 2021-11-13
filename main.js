class Model {
    constructor() {
        this.counter = 0;
    }

    handler(e) {
        // console.log(e.target.id);
        // console.log(this)

        let element = document.getElementById(e.target.id);
        let things = document.getElementById(e.target.id).nodeValue;

        // console.log(things);
        // console.log(typeof things);
        if (typeof things !== "number") {
            things = 0;
        }


        // console.log(things);

        if (this.counter < 9) {
            if (this.counter % 2 == 0) {
                element.innerText = 'O';
            } else {
                element.innerText = 'X';
            }
            this.counter++;
        }

        if (element.innerText == 'O') {
            things += 5;
        } else if (element.innerText == 'X') {
            things += 1;
        }
        //// console.log(things);

        let wins = [
            [document.getElementById('0'), document.getElementById('1'), document.getElementById('2')],
            [document.getElementById('3'), document.getElementById('4'), document.getElementById('5')],
            [document.getElementById('6'), document.getElementById('7'), document.getElementById('8')],

            [document.getElementById('0'), document.getElementById('3'), document.getElementById('6')],

            [document.getElementById('1'), document.getElementById('4'), document.getElementById('7')],
            [document.getElementById('2'), document.getElementById('5'), document.getElementById('8')],
            [document.getElementById('0'), document.getElementById('4'), document.getElementById('8')],
            [document.getElementById('2'), document.getElementById('4'), document.getElementById('6')]

        ]

        //console.log('checking wins:\n\n')
        for (let i = 0; i < wins.length; i++) {
            // console.log('new win checking')
            // console.log(wins[i][0].textContent)
            // console.log(wins[i][1].textContent)
            // console.log(wins[i][2].textContent)
            // console.log(wins[i][0].textContent == wins[i][1].textContent == wins[i][2].textContent)
            if (wins[i][0].textContent == wins[i][1].textContent && wins[i][0].textContent == wins[i][2].textContent) {
                console.log('Winner');
            }
            // console.log('\n')
        }


    }
    columns(gridRow) {
        let array = []
        for (let i = 0; i < 9; i++) {

            let gridCol = document.createElement('button');
            gridCol.className = "col-4 border border-danger p-5"
            gridCol.id = i;
            // console.log(gridCol.id);
            gridCol.addEventListener('click', this.handler.bind(this))
            gridRow.append(gridCol);
            array.push(gridCol);
            // console.log(array);
        }
    }
}
class Sheet {

    constructor() {
        this.column = new Model()
    }

    pageload() {
        let body = document.body;
        let page = document.createElement('div');
        let pageRow = document.createElement('div');
        let pageRowCol = document.createElement('div');
        let pageRowColH2 = document.createElement('h1');
        let gridRow = document.createElement('div');
        let buttonRow = document.createElement('div');
        let buttonCol = document.createElement('div');
        let btn = document.createElement('button');

        page.className = "container text-center"
        pageRow.className = "row text-center"
        pageRowCol.className = "column"
        pageRowColH2.className = "heading text-center"
        gridRow.className = "row text-center grid-container" //grid-container 
        buttonRow.className = "row text-center"
        buttonCol.className = "col"
        btn.className = "mt-4 mb-1"

        pageRowColH2.innerText = "Ticky-Tacky-Toes";
        btn.innerText = "Reset";

        body.appendChild(page)
        page.append(pageRow, gridRow, buttonRow);
        this.column.columns(gridRow);

        pageRow.append(pageRowCol);
        pageRowCol.append(pageRowColH2);
        buttonRow.append(buttonCol);
        buttonCol.append(btn);
    }

}






function onload() {
    let mySheet = new Sheet()
    mySheet.pageload()

}
