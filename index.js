const express = require('express');
var cors = require("cors");
const app = express();
const date = new Date();
let val = 60000;
let i=1;
const PORT = process.env.PORT || 3000

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function padLeadingZeros(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

 

app.use(cors());
app.get('/', (req, res) => {


  function program() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      
      do{
        if(date.getHours() >= 7 && date.getHours() < 19){
          //gündüz
          val += randomIntFromInterval(10, 15);
        }
        else{
          //gece
          val += randomIntFromInterval(15, 20);
        }
        
        i++
  
      }
      while(i > date.getHours() + i);
    
        res.json({usd: padLeadingZeros(val, 6)});
      //  increment the counter
      if (i > date.getHours() + i) {           //  if the counter < 10, call the loop function
        program();             //  ..  again which will trigger another 
      }                       //  ..  setTimeout()
    }, 8400)
  }
  
  program(); 

});

app.listen(PORT, () => {
 console.log('Uygulama çalıştırıldı...');
 console.log(date.getHours());
});