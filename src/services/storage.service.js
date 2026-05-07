const ImageKit = require("@imagekit/nodejs");

const imagekitClient = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = async (file) => {
    const result = await imagekitClient.upload({
        file: file,
        fileName: "music_" + Date.now(),
        folder: "Vishal-music/music"
    });

    return result;
};

module.exports = { uploadFile };