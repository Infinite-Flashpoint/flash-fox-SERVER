const routes = require("express").Router()
const FileController= require("../controllers/FileController")

routes.post("/", FileController.create)
routes.delete("/:id", FileController.delete)
routes.get("/", FileController.findAll)

module.exports = routes