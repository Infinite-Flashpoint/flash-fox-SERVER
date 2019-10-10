const File = require("../models/File")

class FileController {
    static create(req, res) {
        let { link } = req.body
        File.create(
            {
                link
            }
        )
        .then ( result => {
            res.status(201).json(result)
        })
        .catch ( err => {
            res.status(500).json(err)
        })
    }
    
    static delete(req, res) {
        let { id } = req.params
        File.findOneAndRemove({
            _id: id
        })
        .then ( result => {
            res.status(200).json(result)
        })
        .catch ( err => {
            res.status(404).json(err)
        })
    }

    static findAll(req, res) {
        File.find()
        .then ( result => {
            res.status(200).json(result)
        })
        .catch ( err => {
            res.status(500).json(err)
        })
    }
}

module.exports = FileController