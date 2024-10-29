/*Author: Tara-Lee Donald
Date Last Modified: October 27, 2024*/


var state =Array(9).fill('');//Initialises the array to check for winners.
var player = ['X','O'];//Player switch
var current = player[0];//Current player value
var combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

window.addEventListener('DOMContentLoaded', () => {

    let board_ele = document.querySelectorAll('#board > div');//Selects all div elelements under the id board.

    let button = document.querySelector('.btn');

    board_ele.forEach((box,i) => {
        box.classList.add('square');//Applies style 'square' to every box in the game.

        box.addEventListener('click', () => {

            if(box.textContent == ''){ 
                //Enters the current player letter and class style based on the current player. It then updates state to reflect which box the information was entered then switches to the next player.
                box.textContent = current;
                box.classList.add(current);
                state[i] = current;

                Win_Check();

                if(current == 'X'){
                    current = player[1]
                    box.classList.remove(current);
                }
                else{
                    current = player[0]
                    box.classList.remove(current);
                }
            }
   
        });   

        box.addEventListener('mouseover', () => {
            box.classList.add('hover');//Applies hover style when mouse is over object.
        });

        box.addEventListener('mouseout', () => {
            box.classList.remove('hover');//Removes style when mouse is off the object.
        });
    })


    button.addEventListener('click', () => {
        board_ele.forEach((box, i) =>{
            box.textContent = '';//Removes text from each box
            box.classList.remove('X','O'); //Removes style from each box
        });

        w = document.querySelector('#status');
        w.classList.remove('you-won');//Removes style from the text.
        w.textContent = 'Move your mouse over a square and click to play an X or an O.';

        state =Array(9).fill('');
        current = player[0];
    });

    //Checks for all possible conditions for winning a game.
    function Win_Check(){
        for(let i=0; i < combos.length; i++){
            var check = combos[i];
            var box1 = state[check[0]];
            var box2 = state[check[1]];
            var box3 = state[check[2]];

            if(box1==box2 && box2==box3 && box2 != ""){
                w = document.querySelector('#status');
                w.classList.add('you-won');

                w.textContent = `Congratulations! ${current} has won!`;

                //Intialises the win check state after finding a winning combination.
                state =Array(9).fill('');
                break;
            }

            else{
                continue;
            }
        }
        
    }
});






    



