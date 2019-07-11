const Express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const handler = require("./handler");
const bikePartsMore = require("./bikePartsMore");



const express = new Express();
express.use(cors());
express.use(bodyParser.json());
express.use(Express.static(__dirname));

express.post("/register", handler.registerUser);
express.get('/api/users', handler.getUsers);
express.get("/api/users/:email",handler.getUserByEmail);
express.put("/user/:email", handler.updateUser);
express.delete("/user/:email", handler.deleteUser);
express.post("/login", handler.loginUser);

express.post("/bikePartsAdd", handler.addBikeParts);
express.get("/getAllBikeParts", handler.getAllBikeParts);
express.post("/upload", handler.uploadImage);

express.put("/Bike/Update/:id",bikePartsMore.updateBikeParts);
express.delete("/Bike/Delete/:id",bikePartsMore.deleteBikeParts);
express.post("/Bike/Addtocart",bikePartsMore.addToCart);
express.get("/addToCart/:email", bikePartsMore.getAddToCarts);
express.put("/buyBikeParts/:email/:id",bikePartsMore.buyBikeParts);


express.listen(3000, () => console.log("Server running on port 3000"));

