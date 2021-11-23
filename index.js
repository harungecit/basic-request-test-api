const express = require('express');
var cors = require("cors");
const app = express();
const date = new Date();
let val = 70000;
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

  function program() { 
      if(date.getHours() >= 7 && date.getHours() < 19){
        //gündüz
        i = randomIntFromInterval(10, 20);
      }
      else{
        //gece
        i = randomIntFromInterval(20, 30);
      }
      return i;   
  }
  function counter(){
    val = val + i;
  }
  setInterval(counter(), 10000);
  res.json({usd: padLeadingZeros(val, 6)});
  setInterval(program(), 50000);
  


});

app.listen(PORT, () => {
 console.log('Uygulama çalıştırıldı...');
 console.log(date.getHours());
 console.log(val);
});
