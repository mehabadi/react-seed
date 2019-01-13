const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const client = path.join(__dirname, '../client/build');
const app = express();

// #region Configs
app.use(helmet());
app.use(cors());
mongoose.Promise = global.Promise;

// DB Config
const db = require('./config/keys').mongoURI;
// connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('MongoDB Not Connected');
});

app.use(bodyParser.urlencoded({ extended: true }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cookieParser());
// #endregion

// #region Routes
// Serve static files from the React app
// #homepage
app.use('/', express.static(client));

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
app.get('/api/hi', (req, res) => {
  res.send("Hello World");
});
// #endregion

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(client, 'index.html'));
});

//
// ─── RUN SERVER ─────────────────────────────────────────────────────────────────
//
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server running on port ${port}`));