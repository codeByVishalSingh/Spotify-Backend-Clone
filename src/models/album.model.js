const mongoose = require("mongoose");


const alnumSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    music:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:  "music",

    }],
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
})
const albumModel = mongoose.model("album", alnumSchema)

module.exports = albumModel;