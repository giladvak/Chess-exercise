
//create table element

const table=document.createElement('table');
//apending table
document.body.appendChild(table);
table.classList.add ('board');

//loop
for (let i = 0; i <8 ; i++) {
    const loopOne=document.createElement('tr');
    table.appendChild(loopOne);
   {
        
    }
   for (let j = 0;j < 8; j++) {
       let td=document.createElement('td')
       loopOne.appendChild(td)
       if (j%2===i%2){
        td.classList.add ('white')
        
       }else {
       td.classList.add ('black');}
   }
   
}







