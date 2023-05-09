const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const Connectdb = require('./dbConnect.js')
const url="mongodb://localhost:27017/mynewdb";
const userRouter = require('./routes/user')

Connectdb(url);
app.use(cors())
app.use(express.json())


app.use('/api/user', userRouter)

app.listen(PORT,(err)=>{
  if(err){console.log(err)}
  console.log("Listening on PORT ", PORT)
})