const mongoose = require('mongoose');

let schema = mongoose.Schema;

let articleschema = new Schema ({
    URL: {
        type: String,
    },
    img:{
        type: String,
    },
    summary:{
        type: String,
    }
});


modeule.exports = article;
