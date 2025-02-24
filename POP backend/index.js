const express = require('express')
const app = express()
const PORT = 3000

app.get("/",(req, res) => {
    res.send("<h1>Welcome to Backend Server </h1>")
})

app.listen(PORT, () => console.log("Server started successfully."))

