let typeBlack='black'
    let typeWhite='white'
    let selectedCell;
    function getImg(cell,type,name){
        const img =  document.createElement('img');
        img.src = 'pawns/' + type + '/' + name + '.svg'
        img.classList.add('tool')
        cell.appendChild(img)
    }
    function addImageByIndex(cell,type,j){
        if (j===0||j===7) {
            getImg(cell,type,'rook')   
        } else if (j===1||j===6){
            getImg(cell,type,'knight')
        }else if (j===2||j===5){
            getImg(cell,type,'bishop')
        }else if(j===3){
            getImg(cell,type,'king')
        }else if(j===4){
            getImg(cell,type,'queen')
        }
    }
   
      
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
               
                if (i===0){
                addImageByIndex(cell,typeWhite,j)
                } else if (i===7){
                 addImageByIndex(cell,typeBlack,j)
                }
                if (i===1){
                    getImg(cell,typeWhite,'pawn')
                }else if (i===6){
                    getImg(cell,typeBlack,'pawn')}
                    function removeColor(){
                        
                    } 
                    function changeEventColor(e){
                        console.log(e.currentTarget);
                        
                        if(selectedCell!==undefined){
                        selectedCell.classList.remove('selected')
                        }
                      
                        selectedCell=e.currentTarget;
                        cell.classList.add('selected')
                    }
                    cell.addEventListener('click',changeEventColor);
                    
            }
              
            }                                                                                               
                                                                                                           
                 
               
          }
          class Tool { 
            constructor(row,col,type,player){
                this.row=row
                this.col=col
                this.type=type
                this.player=player
            }
            

          }
        
        
       
   
    

    
   
    window.addEventListener('load', createBoard);
   
   
   
   
   
    
  


   
    


  