const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "This field is required",
  },
  image: {
    type: String,
    required: "This field is required",
  },
  description: {
    type: String,
    required: "This field is required",
  },
  ingredients: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This field is required",
  },
  category: {
    type: Array,
    required: "This field is required",
    enum: ["Thai", "America", "Chinese", "Mexican", "Indian"],
  },
});

const recipe = mongoose.model("Recipe", recipeSchema);
module.exports = recipe;
