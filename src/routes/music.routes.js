const express = require('express')
const multer = require("multer")
const musicController = require("../controllers/music.controller")
const authMidlleware = require("../middleware/auth.middleware")


const upload = multer({
    storage: multer.memoryStorage()
})
   

const router = express.Router();

 router.post("/upload",authMidlleware.authArtist, upload.single("music"),musicController.createMusic)
 router.post("/album",authMidlleware.authArtist, musicController.createAlbum)
 router.get("/",authMidlleware.authUser, musicController.getAllMusics)
 router.get("/albums",authMidlleware.authUser, musicController.getAllAlbums)
  router.get("/albums/:albumId",authMidlleware.authUser, musicController.getAlbumById)

module.exports = router