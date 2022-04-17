

window.addEventListener('load', () => {
    let typeBlack='black'
    let typeWhite='white'
      
    function createBoard(){
            const div = document.createElement('div');
             document.body.appendChild(div);
             div.className='outerBox'
        const table = document.createElement('table');
        div.appendChild(table);
        table.classList.add('board');
       
        for (let i = 0; i < 8; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
            
        
            for (let j = 0; j < 8; j++) {
            const cell=document.createElement('td');
            row.appendChild(cell)
                if (j % 2 === i % 2) {
                    cell.classList.add('white')
                    
    
                } else {
                    cell.classList.add('black');
                }
          }
        }
        // const img =  document.createElement('img');
        // img.src = 'pawns/black/Chess_bdt45.svg';
        // img.classList.add('tool')
        // const cell = document.querySelector('td')
        // cell.appendChild(img)
    };


    // Main game flow
    createBoard();
    addImagesToBoard();
    clickCell();

});










