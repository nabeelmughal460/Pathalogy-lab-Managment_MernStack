// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;
const bodyParser =require('body-parser')
 app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.json({
    "name": "Danish",
   "age": "21",
   "occupation": "Software Engineer",
  });
});

// ✅ Move this OUTSIDE the route
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
