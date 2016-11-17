var express = require('express');
var app = express();
//use statuic folder
app.use(express.static('public'));

// app.get('/',function(req,res){
//   res.render('Hello')
// })

app.listen(3000,function(){
  console.log('Listening to Port:3000')
})
