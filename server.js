// web: node server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9090;
var cors = require('cors');app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/notes', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/folders', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
