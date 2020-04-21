//packages

const mongoose = require('mongoose');
const express = require ('express');


//const for express
const exp = express();

//Port
const port = porcess.env.PORT || 3000;

app.use(express.static('./app/public'));

require ('./app/routes/htmlRoutes')(app);
require('.app/routes/apiRoutes');

app.listen(PORT, function() {
    console.log("app is running on port " + PORT);
});



