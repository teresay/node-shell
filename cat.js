const fs = require('fs');

const cat = function(path) {
  fs.readFile(path, (err,data) => {
    if (err) throw err;
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
  })
}

module.exports = cat;
