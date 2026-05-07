const musicModel = require("../models/music.model.js")
const albumModel = require("../models/album.model.js")
const jwt = require("jsonwebtoken")
const {uploadFile} = require("../services/storage.service.js")
const { json } = require("express")


const createMusic = async (req,res)=>{
 

    const {title}= req.body;
    const file = req.file


    const result = await uploadFile(file.buffer.toString('base64'))
   const music = await musicModel.create({
       uri: result.url,
       title,
       artist: req.user.id,
   }) 

   res.status(201).json({
    message: "Music Create Successfully",
    music:{
        id: music._id,
        url:music.uri,
        title:music.title,
        artist:music.artist,
    }
   })

} 



const createAlbum = async (req,res) =>{
   
      
           const {title,musicIds} = req.body;
           const album = await albumModel.create({

              title,
              artist: req.user.id,
              music: musicIds,
           })

           res.status(201).json({
            message: "Album Craeted Successfully",
            album:{
                id:album._id,
                title: album.title,
                artist:album.artist,
                music: album.music,
            }
           })
            
        } 
    
   const getAllMusics = async ()=>{
    const Musics = await musicModel.find().limit(10).populate("artist","Username")

    res.status(200).json({
        messsage: "Music Fetched Successfully",
        musics:musics,
    })
   }


   const getAllAlbums = async (req,res)=>{
    const albums = await albumModel.find().select("title artist").populate("artist","username")

    res.status(200).json({
        message: "Albums fetched Successfully",
        albums:albums,
    })
   }

   const getAlbumById = async ()=>{
    const albumId = req.params.albumId;
    const album = await albumModel.findById(albumId).populate(("artist" ,"username")) 

    res.status(200).json({
        message: "Album Fetched Successfully",
        album:album,
    })
}

module.exports ={createMusic,createAlbum,getAllMusics, getAllAlbums,getAlbumById}
