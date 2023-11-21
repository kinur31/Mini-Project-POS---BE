const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

// const db = require("./models");
// db.sequelize.sync({alter: true})

const PORT = process.env.PORT || 8000;

const app = new express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      process.env.WHITELISTED_DOMAIN &&
        process.env.WHITELISTED_DOMAIN.split(" "),
    ],
  })
);

const transactionRouter = require("./routes/transactionRouter");
app.use("/transaction", transactionRouter);

const productRouter = require("./routes/productRouter");
app.use("/product", productRouter);

const filterRouter = require("./routes/filterRouter");
app.use("/filter", filterRouter);

app.listen(PORT, (req, res) => {
  console.log(`server started on port ${PORT}`);
});
