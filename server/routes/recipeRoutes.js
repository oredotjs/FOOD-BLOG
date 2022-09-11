const express = require("express");
const Router = express.Router();
const recipeController = require("../controllers/recipeController");

// App Routes
Router.route("/").get(recipeController.homepage);
Router.route("/categories").get(recipeController.exploreCategories);
Router.route("/categories/:id").get(recipeController.exploreCategoryById);

Router.route("/recipe/:id").get(recipeController.exploreRecipe);

module.exports = Router;
