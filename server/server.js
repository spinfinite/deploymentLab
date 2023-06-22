const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static('${__dirname}/public'))
app.get('/', (req,res) => {

    res.status(200).sendFile(path.join(__dirname,"../public/index.html"))

})

app.listen(4000, () => {

    console.log("Server live on 4000")
})