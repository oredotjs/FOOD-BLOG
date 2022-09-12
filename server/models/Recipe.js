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
    type: Array,
    required: "This field is required",
  },
  email: {
    type: String,
    required: "This field is required",
  },
  category: {
    type: String,
    required: "This field is required",
    enum: ["Thai", "American", "Chinese", "Mexican", "Indian"],
  },
});

recipeSchema.index({ name: "text", description: "text" });

const recipe = mongoose.model("Recipe", recipeSchema);
module.exports = recipe;
