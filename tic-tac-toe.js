/*Author: Tara-Lee Donald
Date Last Modified: October 27, 2024*/


var state =Array(9).fill('');//Initialises the array to check for winners.
var player = ['X','O'];//Player switch
var current = player[0];//Current player value

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
        p = document.querySelectorAll('#status > p');
        w.classList.remove('you-won');//Removes style from the text.

        p.forEach((para) => {
            para.remove();//Removes every paragraph under status id
        });

        state =Array(9).fill('');
        current = player[0];
    });

    //Checks for all possible conditions for winning a game.
    function Win_Check(){
        if(((state[0] === state[1] && state[1] === state[2] && state[0] !== '') ||(state[0] === state[4] && state[4] === state[8] && state[0] !== '') ||(state[0] === state[3] && state[3] === state[6] && state[0] !== '')) ||((state[3] === state[4] && state[4] === state[5] && state[4] !== '') ||(state[2] === state[4] && state[4] === state[6] && state[4] !== '') ||
        (state[1] === state[4] && state[4] === state[7] && state[4] !== '')) ||((state[6] === state[7] && state[7] === state[8] && state[6] !== '') ||(state[2] === state[5] && state[5] === state[8] && state[8] !== ''))){
            w = document.querySelector('#status');
            w.classList.add('you-won');

            p = document.createElement('p');

            p.textContent = `Congratulations! ${current} has won!`

            w.appendChild(p);
            state =Array(9).fill('');//Intialises the win check state after finding a winning combination.
        }
    }
});






    



