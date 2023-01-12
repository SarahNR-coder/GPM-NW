const express = require('express');

const userRoutes = require('./routes/user');
const usesRoutes = require('./routes/uses');

const app = express();

app.use((req, res, next) => {
    console.log('Accès à app.js, où il y a access-control-allow-origin pour les requetes CORS');   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/use', usesRoutes);

module.exports = app;

