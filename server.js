const express = require('express');
const path = require('path');
const app = express();
const db = require('./db')
const products = require('./products')
const companies = require('./companies')

const port = 3000

app.use(express.static('public'));


app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/api/products', (req, res, next) => {
    res.send(products);
});

app.get('/api/companies', (req, res, next) => {
    res.send(companies);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))