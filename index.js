const express = require('express');
var cors = require("cors");
const app = express();
const date = new Date();
let val = 102000;
let i=1;
const PORT = process.env.PORT || 3000

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.use(cors());
app.get('/', (req, res) => {

  function program() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      
      do{
        if(date.getHours() >= 7 && date.getHours() < 19){
          //gündüz
          val += randomIntFromInterval(10, 20);
        }
        else{
          //gece
          val += randomIntFromInterval(20, 40);
        }
        
        i++
  
      }
      while(i > date.getHours() + i);
        res.json({usd: val});
      //  increment the counter
      if (i > date.getHours() + i) {           //  if the counter < 10, call the loop function
        program();             //  ..  again which will trigger another 
      }                       //  ..  setTimeout()
    }, 10000)
  }
  
  program(); 

});

app.listen(PORT, () => {
 console.log('Uygulama çalıştırıldı...');
 console.log(date.getHours());
});