#!/usr/bin/env node
var zalgo = require('.');
var argv = require('minimist')(process.argv.slice(2));

if (argv.h || argv.help) {
  console.log('zalgolize [-pulm] text');
  process.exit(0);
}

var probability = argv.p ? Number(argv.p) : 0.15;
var uppers = argv.u ? Number(argv.u) : 5;
var lowers = argv.l ? Number(argv.l) : 5;
var mids = argv.m ? Number(argv.m) : 3;
var maxs = [uppers, mids, lowers];

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  var text = (chunk != null) ? chunk : argv._.join(' ') + '\n';
  process.stdout.write(zalgo(text, probability, maxs));
  process.exit(0);
});

