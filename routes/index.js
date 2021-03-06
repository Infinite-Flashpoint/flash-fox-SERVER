'use strict'
const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images'),
      FileRouter = require("./FileRouter")

/* GET main endpoint. */

router.use("/", FileRouter)
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

module.exports = router
