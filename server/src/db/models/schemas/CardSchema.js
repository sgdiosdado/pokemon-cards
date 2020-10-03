const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  exportId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  type: String,
  imagePath: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
})

/**
 * Example body
 * 
 * {
 *  "exportId": "I003",
 *  "name": "Duskball",
 *  "type": "Item",
 *  "description": "This card catches a dark pokemon and removes it from the field.",
 *  "imagePath": "/my-cool/image/path"
 * }
 */

module.exports = CardSchema;
