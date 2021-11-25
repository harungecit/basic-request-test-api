const express = require('express');
var cors = require("cors");
const app = express();
const date = new Date();
let val = 287377;
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

function program() { 
  if(date.getHours() >= 7 && date.getHours() < 19){
    //gündüz
    //val += randomIntFromInterval(1, 9);
    val += 1;
  }
  else{
    //gece
    val += 1;
    //val += randomIntFromInterval(9, 18);
  }
  return val;   
}

app.use(cors());
app.get('/', (req, res) => {

  let value = program();
  res.json({usd: padLeadingZeros(value, 6)});
  
});

app.listen(PORT, () => {
 console.log('Uygulama çalıştırıldı...');
});
