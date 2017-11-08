var spawn = require("child_process").spawn;
var process = spawn('python', ["demo.py"]);

process.stdout.on('data', function(chunk) {
    var textChunk = chunk.toString('utf8'); // buffer to string
    ProcessData(JSON.parse(textChunk));
});

function ProcessData(data) {
    console.log(data.lat);
}