// Dependancy
const { application } = require('express');
const path = require('path');

// Route
module.exports = (application) => {
    // Returns /notes.html
    application.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '..public/notes.html'));
    });
    // Returns index.html
    application.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};
