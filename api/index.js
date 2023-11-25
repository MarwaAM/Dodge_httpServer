const express = require('express')
const fs = require('fs')

const app = express();
const port = 3001;
app.use(express.json());

app.get('/hs', (req, res) => {
    // const id = req.query.id

    // if (!id) {
    //     return res.send(undefined)
    // }
    
    // const data = JSON.parse(fs.readFileSync('./highScores.json',
    // { encoding: 'utf8', flag: 'r' }))

    // res.send(String(data[id]))
});

app.post('/hs', (req, res) => {
    // const id = req.query.id
    // if (!id) {
    //     res.send(404)
    // }
    
    // const data = JSON.parse(fs.readFileSync('./highScores.json',
    // { encoding: 'utf8', flag: 'r' }));
    // data[id] = req.body.newHighScore;

    // fs.writeFileSync('./highScores.json', JSON.stringify(data),  { encoding: 'utf8', flag: 'w' })

    // res.send(201);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;