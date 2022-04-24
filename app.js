const express = require("express");
const bodyParser = require("body-parser");
const translate = require('node-google-translate-skidz');

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Ready for Translating Text. Use POST /translate"));

app.post("/translate", (req, res) => {
	const data = req.body;
  
	translate(
		{
			text: data.text,
			source: data.sourceLang,
			target: data.targetLang,
		},
		function (result) {
			res.status(200).json({
        status: true,
        language: {
          source: data.sourceLang,
          target: data.targetLang,
        },
        sentence: {
          orig: data.text,
          trans: result.translation
        }
      })
		}
	);
});

app.listen(3001, () => console.log("Listening on localhost:3001"));
