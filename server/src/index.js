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
const Game = require("./db/models/game");
const mongoose = require('mongoose')

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
    .catch(err => res.status(400).json({
      code: 400,
      message: `${err}`,
      data: null
    }))
})

// Create cards with given correct body array (check CardScheme)
app.post("/cards/", (req, res) => {
  for(let card of req.body.cards) {
    const cardDoc = new Card(card)
    cardDoc.save()
  }
  Game.findOne({}, (err, game) => {
    if (err) return err;
    if (!game) {
      const gameDoc = new Game({cards: []})
      gameDoc.save()
    }
  })
  res.json({message: "Created!"})
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

// Draw 5 random cards
app.get("/draw/", (req, res) => {
  Card.aggregate(
    [{$sample: {size: 5}}]
  )
    .then(drawnCards => {
      Game.findOne({}, (err, game) => {
        if(err) return err;
        Game.update({}, {cards: game.cards.concat(drawnCards)}).then(_ => console.log('Updated!'))
      })

      res.json({
        code: 200,
        message: "Drew 5 cards!",
        data: drawnCards
      })
    })
})

app.post("/game/", (req, res) => {
  const game = new Card(req.body)
  game.save()
  .then(_ => res.json({
      code: 200,
      message: 'Game created!',
      data: req.body
    }))
    .catch(err => res.status(400).json({
      code: 400,
      message: `${err}`,
      data: null
    }))
})

app.get("/game/", (req, res) => {
  Game.findOne({}, (err, game) => {
    if(err) return err;
    if (game) {
      res.json({
        code: 200,
        message: "Game exists!",
        data: game,
      })
    } else {
      res.json({
        code: 404,
        message: "No game exists!",
        data: null
      })
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
