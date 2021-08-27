const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// defining the Express app
const app = express();

const ads = [
  {title: 'Hello, world !'}
];


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

const port = process.env.PORT || 3000
// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});