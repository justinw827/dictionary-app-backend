import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes/index.js';

const cors = require('cors')
const app = express();

app.use(cors())
mongoose.connect('mongodb://localhost', { useNewUrlParser: true, useUnifiedTopology: true }, () => mongoose.connection.db.dropDatabase());

// Middleware
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});

// Register routes
routes(app);

export default app;