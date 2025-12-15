const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
	console.log(`Serveur en écoute sur http://localhost:${port}`);
});

app.get("/users", (req, res) => {
	res.send({
		[user]: ["123", "456", "789"],
	});
});
