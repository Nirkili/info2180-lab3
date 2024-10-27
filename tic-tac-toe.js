var state =Array(9).fill('');
var player = ['X','O'];
var current = player[0];

window.addEventListener('DOMContentLoaded', () => {

    let board_ele = document.querySelectorAll('#board > div');
    let button = document.querySelector('.btn');

    board_ele.forEach((box,i) => {
        box.classList.add('square');

        box.addEventListener('click', () => {

            if(box.textContent == ''){
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
            box.classList.add('hover');
        });

        box.addEventListener('mouseout', () => {
            box.classList.remove('hover');
        });
    })


    button.addEventListener('click', () => {
        board_ele.forEach((box, i) =>{
            box.textContent = '';
            box.classList.remove('X','O'); 
        });

        w = document.querySelector('#status');
        p = document.querySelectorAll('#status > p');
        w.classList.remove('you-won');

        p.forEach((para) => {
            para.remove();
        });

        state =Array(9).fill('');
        current = player[0];
    });

    function Win_Check(){
        if(((state[0] === state[1] && state[1] === state[2] && state[0] !== '') ||(state[0] === state[4] && state[4] === state[8] && state[0] !== '') ||(state[0] === state[3] && state[3] === state[6] && state[0] !== '')) ||((state[3] === state[4] && state[4] === state[5] && state[4] !== '') ||(state[2] === state[4] && state[4] === state[6] && state[4] !== '') ||
        (state[1] === state[4] && state[4] === state[7] && state[4] !== '')) ||((state[6] === state[7] && state[7] === state[8] && state[6] !== '') ||(state[2] === state[5] && state[5] === state[8] && state[8] !== ''))){
            w = document.querySelector('#status');
            w.classList.add('you-won');

            p = document.createElement('p');

            p.textContent = `Congratulations! ${current} has won!`

            w.appendChild(p);
            state =Array(9).fill('');
        }
    }
});






    



