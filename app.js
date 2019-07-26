const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const members = require('./routes/api/members');
const todos = require('./routes/api/todos');

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors
app.use(cors());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useFindAndModify: false})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Port
const port = process.env.PORT || 3005;

// Use routes
app.use('/api/members', members);
app.use('/api/todos', todos);

app.listen(port, () => console.log(`server running on port ${port}`));
