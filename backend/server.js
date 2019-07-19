const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const cors = require('cors')

const connect = process.env.MONGODB_URI;
mongoose.connect(connect);
mongoose.connection.on("connected", function (){
    console.log("Success: connected to MongoDB")
});

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use(cors())
app.use(bodyParser.json())
app.use('/db', dbRoutes);

app.listen(3000, () => {
    console.log('Server for React Todo App listening on port 3000!')
  });