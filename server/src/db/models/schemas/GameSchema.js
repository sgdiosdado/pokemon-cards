const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  cards: Array,
  createdAt: {type: Date, default: Date.now},
  modifiedAt: {type: Date, default: Date.now}
})

module.exports = GameSchema
