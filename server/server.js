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

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
app.get('/api/hi', (req, res) => {
  res.send("Hello World");
});

//
// ─── RUN SERVER ─────────────────────────────────────────────────────────────────
//
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server running on port ${port}`));