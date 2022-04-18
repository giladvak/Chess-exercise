let typeBlack='black'
    let typeWhite='white'
    let selectedCell;
    let pieces=[];
    let pieces1=[];





    class Piece { 
        constructor(row,col,type,player){
            this.row=row
            this.col=col
            this.type=type
            this.player=player
        }
        
      }
      function getInitialBoard(){
          let result=[];
         result.push(new Piece(0,0, 'rook', typeWhite))
         result.push(new Piece(0,1, 'knight',typeWhite))
         result.push(new Piece(0,2, 'bishop', typeWhite))
         result.push(new Piece(0,3, 'king',typeWhite))
         result.push(new Piece(0,4, 'queen', typeWhite))
         result.push(new Piece(0,5, 'bishop',typeWhite))
         result.push(new Piece(0,6, 'knight', typeWhite))
         result.push(new Piece(0,7, 'rook',typeWhite))
         for (let i = 0; i < 8; i++) {
            result.push(new Piece(1,i,'pawn',typeWhite))
             
         }
          return result;
          
      }
      function getInitialBoardBlack(){
        let result=[];
       result.push(new Piece(7,0, 'rook', typeBlack))
       result.push(new Piece(7,1, 'knight',typeBlack))
       result.push(new Piece(7,2, 'bishop', typeBlack))
       result.push(new Piece(7,3, 'king',typeBlack))
       result.push(new Piece(7,4, 'queen', typeBlack))
       result.push(new Piece(7,5, 'bishop',typeBlack))
       result.push(new Piece(7,6, 'knight', typeBlack))
       result.push(new Piece(7,7, 'rook',typeBlack))
       for (let i = 0; i < 8; i++) {
          result.push(new Piece(6,i,'pawn',typeBlack))
           
       }
        return result;
    }
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
            cell.id=(i.toString() + ',' +j.toString())
                if (j % 2 === i % 2) {
                    cell.classList.add('white')
                    
    
                } else {
                    cell.classList.add('black');

                } 
               
                // if (i===0){
                // addImageByIndex(cell,typeWhite,j)
                // } else if (i===7){
                //  addImageByIndex(cell,typeBlack,j)
                // }
                // if (i===1){
                //     getImg(cell,typeWhite,'pawn')
                // }else if (i===6){
                //     getImg(cell,typeBlack,'pawn')}

               
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
                pieces=getInitialBoard();
                pieces1=getInitialBoardBlack();
                blackOrWhite(pieces)
                blackOrWhite(pieces1)
                function blackOrWhite(arr){
                for(let piece of arr){
                    getImg(table.rows[piece.row].cells[piece.col],piece.player,piece.type);
                }
            }
              
               
          }
         
        
        
       
   
    

    
   
    window.addEventListener('load', createBoard);
   
   
   
   
   
    
  


   
    


  