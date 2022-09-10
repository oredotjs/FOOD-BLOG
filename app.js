const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const routes = require("./server/routes/recipeRoutes.js");
const { json } = require("express");

const app = express();

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));
app.use(express.static("public"));
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", routes);

app.listen(port, () => console.log(`listening to port ${port}`));
