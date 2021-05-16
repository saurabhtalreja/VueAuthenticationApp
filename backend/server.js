const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 2999;

app.use(cors());
app.use(bodyParser.json());

var messages = [
    { user: "Saurabh", text: "hello" },
    { user: "Saurabh", text: "world" },
];
var users = [{ userName: "Saurabh", password: "d&p" }];
app.get("/messages", (req, res) => {
    res.send(messages);
});
app.get("/messages/:id", (req, res) => {
    res.send(messages[req.params.id]);
});
//returning new array after apending value
app.post("/messages", (req, res) => {
    const token = req.header("Authorization");
    const userId = jwt.decode(token, "3487");
    const user = users[userId];
    let msg = { user: user.userName, text: req.body.message };
    messages.push(msg);
    res.json(msg);
});

app.post("/register", (req, res) => {
    let registerData = req.body;
    let newIndex = users.push(registerData);
    let userId = newIndex - 1;

    let token = jwt.sign(userId, "3487");

    res.json(token);
});

app.post("/login", (req, res) => {
    let loginData = req.body;

    let userId = users.findIndex((user) => user.userName == loginData.userName);

    if (userId == -1)
        return res.status(401).send({ message: "name or password is invalid" });

    if (users[userId].password != loginData.password)
        return res.status(401).send({ message: "name or password is invalid" });

    let token = jwt.sign(userId, "3487");

    res.json(token);
});

app.listen(port, () => console.log("app running"));
