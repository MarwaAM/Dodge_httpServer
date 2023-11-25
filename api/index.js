const express = require('express')
const { createClient } = require('@vercel/kv')
require("dotenv").config();

const app = express();
const port = 3000;
app.use(express.json());


const highScores = createClient({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
});

app.get('/hs', async (req, res) => {
    const id = req.query.id

    if (!id) {
        return res.send(undefined)
    }

    const highScore = await highScores.get(id)

    res.send(String(highScore))
});

app.post('/hs', async (req, res) => {
    const id = req.query.id
    const highScore = req.body.highScore
    if (!id || !highScore) {
        res.send(404)
    }

   await highScores.set(id, highScore);

    res.send(201);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;