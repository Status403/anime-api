const mongoose = require('mongoose')
const episodeSchema = mongoose.Schema(
    {
        redirect_id: String,
        episode: Number,
        season: Number 
    }
)

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = Episode