
//server
const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http')

//port
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors())
app.use(express.json())

app.all('*', (req, res)=>{
  res.send('Path does not exist')
});

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  });