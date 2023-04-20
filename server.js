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
        const episode = await Episode.findOne({'season': s, 'episode': e});
        res.status(200).json(episode);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect('mongodb+srv://marcdecker2004:eRvzSQdpxKdEnhwj@onepiece.mcz9z2w.mongodb.net/onepiece')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, () => {
        console.log("Api Server listens on", PORT)
    });
}).catch((error) => {
    console.log(error)
})