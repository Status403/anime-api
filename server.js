require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const Episode = require('./models/episode');
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/episode', async(req, res) => {
    try {
        const s = req.body.season;
        const e = req.body.episode;
        if (!e || !s) {
            throw Error('Need Season and Episode params!')
        }
        const episode = await Episode.findOne({'season': s, 'episode': e});
        res.status(200).send(episode);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect(process.env.CONN_STRING)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, () => {
        console.log("Api Server listens on", PORT)
    });
}).catch((error) => {
    console.log(error)
})