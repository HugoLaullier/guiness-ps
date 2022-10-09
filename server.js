const express = require("express");
const records = require("./records.json");
const perfs = require("./perfs.json");

const app = express();

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "GUINESS TPS",
    records: records.records,
    perfs : perfs.perfs
  });
});

app.get("/jardot", (req, res) => {
  res.render("jardot", {
    title: "GUINESS TPS"
  });
});


const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
