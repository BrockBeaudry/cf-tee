'use strict';

var fs = require('fs');
var fileName = process.argv[2];
var encoding ='utf8';

var fileWriter = fs.createWriteStream(fileName, { encoding: encoding });

process.stdin.setEncoding(encoding);

process.stdin.on('data', function(input) {
    process.stdout.write('stdout: ' + input);
    fileWriter.write(input);
});

process.stdin.on('end', function() {
    fileWriter.end();
});