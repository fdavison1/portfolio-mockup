const path = require('path'); // Usually moved to the start of file
require('dotenv').config()
const express = require('express')
const { SERVER_PORT } = process.env

const app = express()
app.use(express.json())

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use( express.static( `${__dirname}/../build` ) );

app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} is on and ready to copy`))