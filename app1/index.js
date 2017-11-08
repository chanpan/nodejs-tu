var spawn = require("child_process").spawn;

setTimeout(function() {
    Demo1();
}, 2000);

setTimeout(function() {
    Demo2();
}, 5000);

function Demo1() { ////แบบไม่มี parameter 
    var process = spawn('python', ["demo.py"]);
    process.stdout.on('data', function(chunk) {
        var textChunk = chunk.toString('utf8'); // buffer to string
        console.log(JSON.parse(textChunk));
    });
}

function Demo2() { //แบบมี parameter 
    var process = spawn('python', ["demo2.py", 'demo']);
    process.stdout.on('data', function(chunk) {
        var textChunk = chunk.toString('utf8'); // buffer to string
        console.log(textChunk);
    });
}