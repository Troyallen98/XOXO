    //windowLoad
        //sheet
            //3x3 grid sheet of buttons
                //eventlistener for click.
                    // X goes first...add 1.
                        //after click O's turn...add 5.
                        //after O's turn, back to X etc. for 9 total turns.
                            //occurs until 9th turn or Win
                    // through turns 5-9 check for winner
                    // Winner if [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] = 15 || 3
                // each tile should have an ID
                // every button on grid = 0
                // X = 1
                // O = 5
        //btn
            //two states
                //Go! if blank sheet
                //Reset if anything else




//need to run my javascript on the load of the window
    //add an event listener to the window.
        //if window is heard then I should run a function that shows an empty tic tac toe sheet.




//*CLICK FUNCTION
    //count the number of total clicks
        //for clicks 5-9 check for winner.
        //for clicks 1-9
            //click 1 = 1
            //click     2 = 5     
            //click 3 = 1     
            //click     4 = 5     
            //click 5 = 1
            //click     6 = 5
            //click 7 = 1
            //click     8 = 5
            //click 9 = 1
        //if click count % 2 = 0. on click value = 5
        //if click count % 2 = 0. on click value = 1

        // once all buttons are disabled winner or draw is declared.


    //page has go button -> GO! clicked.
        //count the number of clicks
        //button state is set to Reset (grid buttons are set to 0 and locked if pressed)
    // on Go click grid buttons are unlocked.
        //first click = 1, consecutively click adds 1 then 5
        //on click value is added, and button on click is then disabled.
    

//"Go!" button clicked
//buttons.textContent = Reset 
//Reset button will clear grid's textContent and replace each grid with an blank string.
//win
//[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
//draw

//O's go first. then alternate. 

//3x3 grid 
//    1     2     3     Row 1
//    4     5     6     Row 2
//    7     8     9     Row 3

//on click replace grid.textContent with "O" or "X".
//each turn check to see if any grid winning grid combinations.
// if [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] 
// must be all O || X cannot be a mix
//if combinations do not match go to next turn.
//if no combinations match on the 9th turn declare draw


//O's go first. then alternate. 
const body = document.body;

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
btn.innerText = "Go";

body.appendChild(page)
page.append(pageRow, gridRow, buttonRow);
for (let i = 0; i < 9; i++) {
    let gridCol = document.createElement('div');
        gridCol.className = "col-4 border border-danger"
        gridCol.innerText = i;
        gridCol.id = i;
    gridRow.append(gridCol);
}
pageRow.append(pageRowCol);
pageRowCol.append(pageRowColH2);
buttonRow.append(buttonCol);
buttonCol.append(btn);

