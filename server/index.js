const express = require("express");
const router = require("./routes.js");
const compress = require("compression");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(morgan('dev'));
app.use(compress());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/:id", express.static(path.join(__dirname, "../client/dist")));
app.use("/", router);

app.listen(3011, () => console.log("Server Working!!!"));
