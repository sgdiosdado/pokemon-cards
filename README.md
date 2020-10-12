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

## Troubleshoot
If you are experiencing errors related to the client dependecies, install them before running the containers.
This means:
- Run `yarn` at client
- Switch to server and run `yarn` aswell
- Now launch the containers with `docker-compose up`

This bug is currently under resolution, sorry for any inconvenience.