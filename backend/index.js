const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const db = require("./db");
const memes = require("./routes/memes");

const app = express();
const swaggerApp = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(cors());
swaggerApp.use(cors());

// Use Routes
app.use("/memes", memes);

//Use and serve static assets
app.use(express.static(__dirname + "/view/"));
app.get("/.*/", (req, res) => res.sendFile(__dirname + "/view/index.html"));

//Use and serve swagger api docs
swaggerApp.use(
  "/swagger-ui",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

const PORT = process.env.PORT || 8081;
const PORT_SWAGGER = process.env.PORT_SWAGGER || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

swaggerApp.listen(PORT_SWAGGER, () => {
  console.log(`Swagger server running on port ${PORT_SWAGGER}...`);
});
