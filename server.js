const express = require('express');
const path = require('path');
const app = express();
const db = require('./db')

const products = require('./products')
const port = 3000
const react = require('react')



app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/api/products', (req, res, next) => {

    res.send(products);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))