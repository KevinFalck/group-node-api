const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [
	{ id: 1, nom: "Alice" },
	{ id: 2, nom: "Bob" },
	{ id: 3, nom: "Charlie" },
];

app.post("/users", (req, res) => {
	const newUser = req.body;
	users.push(newUser);
	res.json(newUser);
});


app.get("/users", (req, res) => {
    res.json(users);
});

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users.splice(index, 1);
        res.status(200).send(`User with ID ${userId} deleted.`);
    } else {
        res.status(404).send(`User with ID ${userId} not found.`);
    }
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});