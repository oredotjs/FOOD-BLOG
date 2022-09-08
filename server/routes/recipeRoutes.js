const express = require("express");
const Router = express.Router();
const recipeController = require("../controllers/recipeController");

// App Routes
Router.route("/").get(recipeController.homepage);
Router.route("/categories").get(recipeController.exploreCategories);

module.exports = Router;
