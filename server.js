// Dependency
const express = require('express');

// set application to use express
const application = express();

// creates enviornment variable port
const PORT = process.env.PORT || 3001;



// creates routes ("/") for files in "public" folder
application.use(express.static('public'));
// sets up express to handel data parser
application.use(express.urlencoded({ extended: true}));
application.use(express.json());



// route files
require('./routes/apiRoutes')(application);
require('./routes/htmlRoutes')(application);



// application listener - starts the server at the 3001 port
application.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
});