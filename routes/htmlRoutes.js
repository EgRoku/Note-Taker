// Dependancy
//const { application } = require('express');
const path = require('path');

// Route
module.exports = (app) => {
    // Returns /notes.html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    // Returns index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};
