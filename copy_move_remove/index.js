const fs = require("fs-extra");

function Copys() {
    fs
        .copy("demo.py", "out/demos.py")
        .then(() => console.log("success!"))
        .catch(err => console.error(err));
}

function Moves() {
    fs
        .move("demo.py", "out/demos.py")
        .then(() => {
            console.log("success!");
        })
        .catch(err => {
            console.error(err);
        });
}

function Removes() {
    // Promise Usage
    fs.remove('out/xxx.txt')
        .then(() => {
            console.log('success!')
        })
        .catch(err => {
            console.error(err)
        })
}

function CreateFolder() {
    const dir = 'out/demo'
        // With Promises:
    fs.ensureDir(dir)
        .then(() => {
            console.log('success!')
        })
        .catch(err => {
            console.error(err)
        })
}

function WriteFile() {
    const file = 'out/file.txt'
    fs.writeFile(file, 'demo', function(err) {
        if (err) {
            console.log(err);
        }
        console.log("success");
    })
}

function ReadFile() {
    const file = 'out/file.txt'
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
}

function Renames() {
    fs.rename('d.py', 'demos.py', function(err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
}
Renames();