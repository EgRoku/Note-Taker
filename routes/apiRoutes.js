// Depenency
const path = require('path');
const fs = require('fs');

// npm package for unique id's
const uniqeId = require('uniqeId');
const {application} = require('express');

// route
// Get /api/notes reads db.json and returns saved notes as Json
module.exports = (application) => {
    application.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });
    // Post /api/notes should receive a new json note to save on the request body, 
    // and add it to the db.json file; then return the new note to the user.
    application.post('/api/notes', (req, res) =>{
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        // creates a body and unique id for each note
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            id: uniqeId(),
        };
        // push created note to db.json
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    // Delete /api/notes:id receives query param with uniqeId for a note to delete
    application.delete('api/notes/:id', (req, res) => {
        // Reads notes from db.json and removes them using uniqueId
        let db = JSON.parse(fs.readFileSync('db/db.json'))
        let deleteNote = db.filter(item => item.id !== req.params.id);
        // Rewrites notes to db.json
        fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
        res.json(deleteNote);
    })
};