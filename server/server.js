const express = require('express');
const mongoose = require('mongoose');
const app = express();

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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
app.get('/api/hi', (req, res) => {
  res.send("Hello World");
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

//
// ─── RUN SERVER ─────────────────────────────────────────────────────────────────
//
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server running on port ${port}`));