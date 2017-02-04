const fs = require('fs-extra');
const request = require('request');

fs.ensureDirSync('dist');

fs.createReadStream('users.json').pipe(fs.createWriteStream('dist/users.json'));
