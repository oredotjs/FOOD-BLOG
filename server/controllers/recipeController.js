require("../models/database");
const Category = require("../models/Category");

exports.homepage = async (req, res) => {
  res.render("index", { title: "Cooking Blog" });
};

exports.homepage = async (err, res, req) => {
  try {
    const limit = 5;
    const categories = await Category.find().limit(limit);
    res.render("index", { title: "Cooking Blog - Home", categories });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

//get categories
exports.exploreCategories = async (err, res, req) => {
  try {
    const limit = 20;
    const categories = await Category.find().limit(limit);
    res.render("categories", {
      title: "Cooking Blog - Categories",
      categories,
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

// async function insertDummyData() {
//   try {
//     await Category.insertMany([
//       {
//         name: "Thai",
//         image: "thai-food.jpg",
//       },
//       {
//         name: "American",
//         image: "american-food.jpg",
//       },
//       {
//         name: "Chinese",
//         image: "chinese-food.jpg",
//       },
//       {
//         name: "Mexican",
//         image: "mexican-food.jpg",
//       },
//       {
//         name: "Indian",
//         image: "indian-food.jpg",
//       },
//       {
//         name: "Spanish",
//         image: "spanish-food.jpg",
//       },
//     ]);
//   } catch (error) {
//     console.log("err" + error);
//   }
// }

// insertDummyData();
