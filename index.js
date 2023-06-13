const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use("/static", express.static("public"));

app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.send("adss");
});

app.get("/:id", (req, res) => {
  res.send(req.params.id);
});

app.post("/", (req, res) => {
  res.send("men post sorgusuyam");
});

app.put("/:id", (req, res) => {
  res.send("men put sorgusuyam");
});

app.delete("/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
