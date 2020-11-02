const mongoose =require("mongoose")
const GameSchema = require("./schemas/GameSchema")

module.exports = Game = mongoose.model("Game", GameSchema)
