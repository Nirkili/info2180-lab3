window.addEventListener('load', () => {
    let board_ele = (document.getElementById('board')).children;
    for(let i=0;i < board_ele.length; i++){
        board_ele[i].classList.add('square');
    }
});


