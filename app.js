const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.json({ hope: "loop" });
});

app.post("/", function (req, res) {
    const { name } = req.body;
    if (!name || name === "undefined") {
        res.sendStatus(400);
    } else {
        res.json({ input: name });
    }
})


module.exports = app;