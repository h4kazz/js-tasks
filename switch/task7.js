"use strict";
const prompt = require("prompt-sync")();

const runCommand = (cmd) => {
  switch(cmd) {
    case 'start':
        return 'Starting...';
    case 'stop':
        return 'Stopping...';
    case 'pause':
        return 'Pausing...';
    case 'resume':
        return 'Resuming...'
    default:
        return 'Unknown command.'
  }
}

console.log(runCommand('stop'));
