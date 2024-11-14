
// 1-100, 3-coca, 5- cola, 15-coca cola;

for (let i = 0; i <= 100 ; i++) {
    if(i % 15===0){
        console.log("coca cola");
    }
    else if(i % 3 ===0){
        console.log("coca"); 
    }
     else if(i % 5 ===0){
        console.log("cola");
     }
}