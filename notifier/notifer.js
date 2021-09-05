const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const bodyparser = require('body-parser');
const notifier = require('node-notifier');

app.use(bodyparser.json());

app.get("/health", (req, res) => {res.status(200).send()})
app.post("/notify", (req, res) => {
	notify(req.body, reply => res.send(reply))
})
app.listen(port, () => {console.log(`Server is up and running on port: ${port}`)})

const notify = ({title, message}, callback) => {
	notifier.notify(
		{
			title: title || "unknown title",
			message: message || "unknown message",
			icon: path.join(__dirname, "clock.png"),
			sound: true,
			wait: true,
			reply: true,
			closeLabel: "Completed?",
			timeout: 15,
		},
		(err, response, reply) => {
			callback(reply);
		}
	)
}