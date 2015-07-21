#!/usr/bin/env node
var nonary2bts = require('./').nonary2bts;
var bts2nonary = require('./').bts2nonary;

// TODO: refactor with balanced-ternary module?
// if the string could possibly represent balanced ternary
function maybe_bts(s) {
  return !!s.match(/^[01i]+$/);
}

function maybe_nonary(s) {
  return !!s.match(/^[abcd0wxyz]+$/);
}


process.argv.slice(2).forEach(function(arg) {
  // ternary -> nonary

  if (maybe_bts(arg)) {
    console.log(arg+' = '+bts2nonary(arg));
  }

  if (maybe_nonary(arg)) {
    console.log(nonary2bts(arg)+' = '+arg);
  }
});

