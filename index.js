const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.ip);
    console.log(req.query)
    res.download(path.join(__dirname, 'send.bin'));
})

app.listen(port, () => {
    console.clear();
    console.log(`Example app listening on port ${port}`)
})
