const express = require("express");
const mongoose = require("mongoose");
const path=require('path')
const items=require("./routes/api/items")
const config=require('config')
const app = express();

//BODYPARSER MIDDLEWARE
app.use(express.json());

//DB config
const db = config.get('mongoURI')

//connect to mongo
mongoose
  .connect(db)
  .then(() => {
    console.log("mongoose connected");
  })
  .catch(err => console.log(err));

//use routes
app.use('/api/items',items)
app.use('/api/users',require("./routes/api/users"))
app.use('/api/auth',require("./routes/api/auth"))


//serve static assets if in production
if(process.env.NODE_ENV==='production'){
  //set static folder
app.use(express.static('client/build'));
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
}



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
