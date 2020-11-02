# Pokemon cards CRUD
Pokemon cards CRUD for web class

## Setup
To run the project it's necessary that you add a `.env` file at `/` with the following variables:
```yaml
# =========================
# Used only the first time
# =========================
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=MyVeryStrongPassword1234

# =========================
# Used at every connection
# =========================
DB_USERNAME=root
DB_PASSWORD=MyVeryStrongPassword1234 # Already encoded
```
The first two variables will be use to setup the database using mongo on your system. Try to avoid special characters but if you don't, they'll work either way.

The last two will be use to start the connection of the Express.js server with the Mongo database. 

If you used special characters at the `.env` you'll need to encode them as Mongo specifies. For example, if you used `@` then the encoded equivalent is `%40`. Since this is annoying, please keep it simple.

Your file structure will be like this:
```
├── .env
├── .gitignore
├── LICENSE
├── README.md
├── docker-compose.yml
└── server
    ├── Dockerfile
    ├── package.json
    ├── src/
    └── yarn.lock
```

## Run project
Now you are all set to run the project, just execute `docker-compose up --build` and you can start request to the endpoints at `http://localhost:5000/`.

If everything is working, you'll see in console `Example app listening at http://localhost:5000` for the web server, and `Connection successful` for the MongoDB connection.

Available endpoints:

- GET `/cards`
- GET `/card/:exportId`
- POST `/card`
- PUT `/card/:exportId`
- DELETE `/card/:exportId`

For POST and PUT, you'll need to provide a body like:
```JSON
{
  "exportId": "I003",
  "name": "Duskball",
  "type": "Item",
  "description": "This card catches a dark pokemon and removes it from the field.",
  "imagePath": "/my-cool/image/path"
}
```
You can read the comments of routes at `/server/src/index.js` for more details.


## Load data
Send this data set as body to a POST request at `http://localhost:5000/cards`
```
{
    "cards": [
        {
            "exportId": "I001",
            "name": "Pokeball",
            "type": "Item",
            "description": "This card catches a normal pokemon and removes it from the field.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/0/02/latest/20090125150654/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png/150px-Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png"
        },
        {
            "exportId": "I002",
            "name": "Greateball",
            "type": "Item",
            "description": "This card catches a level 3 or lower pokemon and removes it from the field.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/57/latest/20160831125614/Super_Ball_%28Ilustraci%C3%B3n%29.png/120px-Super_Ball_%28Ilustraci%C3%B3n%29.png"
        },
        {
            "exportId": "I003",
            "name": "Ultraball",
            "type": "Item",
            "description": "This card catches a level 5 or lower pokemon and removes it from the field.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/c/c9/latest/20090125150713/Ultra_Ball_%28Ilustraci%C3%B3n%29.png/150px-Ultra_Ball_%28Ilustraci%C3%B3n%29.png"
        },
        {
            "exportId": "I004",
            "name": "Masterball",
            "type": "Item",
            "description": "This card catches any pokemon and removes it from the field.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a9/latest/20120802225204/Master_Ball_%28Ilustraci%C3%B3n%29.png/120px-Master_Ball_%28Ilustraci%C3%B3n%29.png"
        },
        {
            "exportId": "B001",
            "name": "Pomeg",
            "type": "Berry",
            "description": "Any level 4 or lower enemy pokemon becomes ally for 3 turns.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/9/92/latest/20131102213720/Baya_Grana_%28Dream_World%29.png"
        },
        {
            "exportId": "B002",
            "name": "Oran",
            "type": "Berry",
            "description": "A chosen pokemon restores 10 HP points.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/2/2d/latest/20130826183523/Baya_Aranja_%28Dream_World%29.png"
        },
        {
            "exportId": "B003",
            "name": "Lum",
            "type": "Berry",
            "description": "A chosen pokemon restores from any debuff.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/b/be/latest/20130826183525/Baya_Ziuela_%28Dream_World%29.png"
        },
        {
            "exportId": "B004",
            "name": "Roseli",
            "type": "Berry",
            "description": "A chosen pokemon becomnes invulnerable to Fairy attacks for 2 turns.",
            "imagePath": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b9/latest/20140119171658/Baya_Hibis_%28Dream_World%29.png"
        }
    ]
}
```

## Troubleshoot
If you are experiencing errors related to the client dependecies, install them before running the containers.
This means:
- Run `yarn` at client
- Switch to server and run `yarn` aswell
- Now launch the containers with `docker-compose up`

This bug is currently under resolution, sorry for any inconvenience.
