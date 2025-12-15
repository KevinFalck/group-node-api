const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, nom: "Alice" },
    { id: 2, nom: "Bob" }
    { id: 3, nom: "Charlie" }
];

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});