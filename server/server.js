const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())



app.listen(4000, () => {

    console.log("Server live on 4000")
})