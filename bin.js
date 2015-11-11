#!/usr/bin/env node
var zalgo = require('.')

var zalgolized = zalgo(process.argv.slice(2).join(' '));
if (zalgolized.length) {
  console.log(zalgolized);
}
