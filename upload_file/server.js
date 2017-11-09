var express = require('express');
var multer = require('multer');

var app = express();
//app.use(multer({ dest: 'uploads/' }).any());
app.use(multer({
    dest: __dirname + '/uploads/',
    rename: function(fieldname, filename) {
        return Date.now();
    },
    limits: {
        fileSize: 100000
    },
    onFileSizeLimit: function(file) {
        console.log('Failed: ' + file.originalname + ' is limited');
        fs.unlink(file.path);
    }
}).any());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', function(req, res) {
    console.log(req.files[0].mimetype);
    res.send(req.files);
});


app.listen(5555, function() {
    console.log('App running on http://localhost:5555');
});