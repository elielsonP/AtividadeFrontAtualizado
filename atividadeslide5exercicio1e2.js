const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())
let Products = [
    { id: 1, name:'Notebook', price: '2500' },
    { id: 2, name:'Smartphone', price: '1500'}
];

app.get('/Products', (req, res) => { 
    res.json(Products);
});

app.post('/Products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = Date.now();
    Products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(port, () => {
    console.log('Api is running on http://localhost:${port}')
}); 