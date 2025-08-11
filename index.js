// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;
const bodyParser =require('body-parser')
app.use(bodyParser.json())
const Testroutes =require('./Routes/testroute')// export testroute from test route Folder
const Pateintroutes =require('./Routes/patientroute') // export testroute from test route Folder
require('./Connection.js')
const cors=require('cors')
app.use(cors())
app.use('/test',Testroutes) //'test' is end point .Testroutes
app.use('/patient',Pateintroutes) //'test' is end point .Pateintroutes

// app.get('/', (req, res) => {
//   res.json({
//     "name": "Danish",
//    "age": "21",
//    "occupation": "Software Engineer",
//   });
// });

// ✅ Move this OUTSIDE the route
app.listen(port, () => {
  console.log(`Server Local Host is running on port ${port}`);
});
