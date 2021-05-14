const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path'); //lets us call other file names by path name reference other files in the file system
const db = require('./models'); //references models file
const app = express();
const PORT = process.env.PORT;


//lets us parse 'application/json' content in http requests
app.use(bodyParser.json());

// this lets us parse 'application/json' content in http requests
app.use(express.json());

// add http request logging to help us debug and audit app use to let us when a request is sente tc.
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api` : want the route api to use all controller actions inside controllers folder . = current folder
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
//tell sequelize to make any changes to db 
db.sequelize.sync({ force: false });

// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}
