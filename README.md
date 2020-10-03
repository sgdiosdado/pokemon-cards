# Pokemon cards CRUD
Pokemon cards CRUD for web class

## Setup
To run the project it's necessary that you add a `.env` file at `/` with the following variables:
```yaml
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=MyVeryStrongPassword1234
```
These variables will be use to setup the database using mongo on your system. Try to avoid special characters but they'll work.

Then, add another `.env` file at `/server/` with the following variables:
```yaml
DB_USERNAME=root
# Already encoded
DB_PASSWORD=MyVeryStrongPassword1234
```
This will be use to start the connection of the Express.js server with the Mongo database. If you used special characters at the first `.env` you need to encode them as Mongo requires. For example, if you used `@` then the encoded equivalent is `%40`. Since this is annoying, please keep it simple.

Your file structure will be like this:
```
├── .env
├── .gitignore
├── LICENSE
├── README.md
├── docker-compose.yml
└── server
    ├── .env
    ├── Dockerfile
    ├── package.json
    ├── src/
    └── yarn.lock
```

## Run project
Now you are all set to run the project, just execute `docker-compose up --build` and you can start request to the endpoints at `http://localhost:5000`.

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