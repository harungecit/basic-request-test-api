
app.get('/', (req, res) => {
    setInterval(function(){
      
        if(date.getHours() >= 7 && date.getHours() < 19){
          //gündüz
          val += randomIntFromInterval(15, 25);
        }
        else{
          //gece
          val += randomIntFromInterval(30, 50);
        }
        res.json({usd: val});
        
      },  3000);
     //program, 30000);
    
  
});