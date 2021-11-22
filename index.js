const express = require('express');
var sleep = require('system-sleep');
const app = express();
const date = new Date();
let val = 0;
let i=1;


function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get('/', (req, res) => {

  function program() {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
      
      do{
        if(date.getHours() >= 7 && date.getHours() < 19){
          //gündüz
          val += randomIntFromInterval(15, 25);
        }
        else{
          //gece
          val += randomIntFromInterval(30, 50);
        }
        
        i++
  
      }
      while(i > date.getHours() + i);
        res.json({usd: val});
      //  increment the counter
      if (i > date.getHours() + i) {           //  if the counter < 10, call the loop function
        program();             //  ..  again which will trigger another 
      }                       //  ..  setTimeout()
    }, 3000)
  }
  
  program(); 

/*
    do{
      if(date.getHours() >= 7 && date.getHours() < 19){
        //gündüz
        val += randomIntFromInterval(15, 25);
      }
      else{
        //gece
        val += randomIntFromInterval(30, 50);
      }
      
      i++

    }
    while(i > date.getHours() + i);
      res.json({usd: val});
*/
});

app.listen(3000, () => {
 console.log('Uygulama çalıştırıldı...');
 console.log(date.getHours());
});