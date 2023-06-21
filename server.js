// Dependency
const express = require('express');

// set app to use express
const app = express();

// creates enviornment using port 3001
const PORT = process.env.PORT || 3001;



// creates routes ("/") for files in "public" folder
app.use(express.static('public'));
// sets up express to handel data parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



// route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



// application listener - starts the server at the 3001 port
app.listen(PORT, () => { console.log(`Server available at localhost${PORT}`);
});