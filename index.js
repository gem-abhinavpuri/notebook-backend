const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Send welcome message
app.get('/', (req, res) => {
    res.send('Welcome to Notebook backend!');
});

app.listen(port, () => {
    console.log(`Notebook backend listening at http://localhost:${port}`);
});
