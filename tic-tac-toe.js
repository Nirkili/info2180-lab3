var state =[];
var player = ['X','O'];
var current = player[0];

window.addEventListener('DOMContentLoaded', () => {

    let board_ele = (document.getElementById('board')).children;
    let button = document.querySelector('.btn');

    for(let i=0;i < board_ele.length; i++){
        board_ele[i].classList.add('square');

        board_ele[i].addEventListener('click', () => {

            if(board_ele[i].textContent == ''){
                board_ele[i].textContent = current;
                board_ele[i].classList.add(current);
                state.push(current);
                console.log(state);

                if(current == 'X'){
                    current = player[1]
                    board_ele[i].classList.remove(current);
                }
                else{
                    current = player[0]
                    board_ele[i].classList.remove(current);
                }
            }
   
        });   

        board_ele[i].addEventListener('mouseover', () => {
            board_ele[i].classList.add('hover');
        });

        board_ele[i].addEventListener('mouseout', () => {
            board_ele[i].classList.remove('hover');
        });

        button.addEventListener('click', () => {
            board_ele[i].textContent = '';
            board_ele[i].classList.remove('X','O');  
        });

    }


});






    



