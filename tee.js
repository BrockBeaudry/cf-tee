'use strict';

var fs = require('fs');
var fileName = process.argv[2];

var fileWriter = fs.createWriteStream(fileName);

process.stdin.pipe(process.stdout);
process.stdin.pipe(fileWriter);