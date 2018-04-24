process.stdout.write('prompt > ');
// const fs = require('fs');
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

let prompt = function() {
  process.stdout.write('\nprumpt > ');
}

  if(cmd==='pwd') {
    pwd();
  } else if(cmd==='ls') {
    ls();
  } else if(cmd.indexOf(' ')===3) {
    const path = cmd.split(' ')[1];
    // return cat(path);
    cat(path);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }

  prompt();

  // process.stdout.write('\nprompt > ');
});
