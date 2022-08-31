const express = require('express')
const app = express()
const Configure = require('./Configure.js')


Configure(app, express)


app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port ${process.env.APP_PORT}!`)
})

