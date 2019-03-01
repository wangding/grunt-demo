#!/usr/bin/node

if(process.argv.length !== 4) {
  console.log('./app.js x y');
  process.exit(0);
}

let x = process.argv[2],
    y = process.argv[3];

const add = require('./calc');

console.log(`${x} + ${y} = ${add(x, y)}`);
