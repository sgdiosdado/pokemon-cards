const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors");
const port = 5000

/**
 * ==================================
 *      Database and models
 * ==================================
 */
const db = require("./db/db.js");
const Card = require("./db/models/card");

app.use(cors());
app.use(express.json());

/**
 * ==================================
 *              ROUTES
 * ==================================
 */

// Get all cards
app.get("/cards", (req, res) => {
  Card.find({}, (err, cards) => {
    if (err) return err
    if (cards) {
      res.json({
        code: 200,
        message: "Resources exists!",
        data: cards,
      })
    } else {
      res.json({
        code: 404,
        message: "Resources doesn't exist!",
        data: null,
      });
    }
  })
})

// Retrieve card by export id
app.get("/card/:exportId", (req, res) => {
  Card.findOne({
    exportId: req.params.exportId
  }, (err, card) => {
    if (err) return err
    if (card) {
      res.json({
        code: 200,
        message: 'Resource exists!',
        data: card
      })
    } else {
      res.json({
        code: 404,
        message: "Resource doesn't exist!",
        data: null,
      })
    }

  })
})

// Create card with given correct body (check CardScheme)
app.post("/card/", (req, res) => {
  const card = new Card(req.body)
  card.save()
  .then(_ => res.json({
      code: 200,
      message: 'Card created!',
      data: req.body
    }))
    .catch(err => res.json({
      code: 400,
      message: `${err}`,
      data: null
    }))
})

// Updates a card with a given export id and correct body (check CardScheme)
app.put("/card/:exportId", (req, res) => {
  Card.update(
    {exportId: req.params.exportId},
    req.body
  )
  .then(_ => res.json({
    code: 200,
    message: "Resource updated successfully!",
    data: req.body
  }))
  .catch(err => res.json({
    code: 400,
    message: `${err}`,
    data: req.body
  }))
})

// Deletes a card that matches given export id
app.delete("/card/:exportId", (req, res) => {
  Card.deleteOne({exportId: req.params.exportId})
  .then(_ => res.json({
    code: 200,
    message: "Resource deleted correctly!",
    data: null
  }))
  .catch(err => res.json({
    code: 400,
    message: `${err}`,
    data: null
  }))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
