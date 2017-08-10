(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euclid = euclid;
var euclidRhythm = require('euclidean-rhythms');

function euclid() {}

},{"euclidean-rhythms":2}],2:[function(require,module,exports){
"use strict";

/**
   *  Returns the calculated pattern of equally distributed pulses in total steps
   *  based on the euclidean rhythms algorithm described by Godfried Toussaint
   *
   *  @method  getPattern
   *  @param {Number} pulses Number of pulses in the pattern
   *  @param {Number} steps  Number of steps in the pattern (pattern length)
   */
var getPattern = function getPattern(pulses, steps) {
  if (pulses < 0 || steps < 0 || steps < pulses) {
    return [];
  }

  // Create the two arrays
  var first = new Array(pulses).fill([1]);
  var second = new Array(steps - pulses).fill([0]);

  var firstLength = first.length;
  var minLength = Math.min(firstLength, second.length);

  var loopThreshold = 0;
  // Loop until at least one array has length gt 2 (1 for first loop)
  while (minLength > loopThreshold) {
    // Allow only loopThreshold to be zero on the first loop
    if (loopThreshold === 0) {
      loopThreshold = 1;
    }

    // For the minimum array loop and concat
    for (var x = 0; x < minLength; x++) {
      first[x] = Array.prototype.concat.call(first[x], second[x]);
    }

    // if the second was the bigger array, slice the remaining elements/arrays and update
    if (minLength === firstLength) {
      second = Array.prototype.slice.call(second, minLength);
    }
    // Otherwise update the second (smallest array) with the remainders of the first
    // and update the first array to include onlt the extended sub-arrays
    else {
        second = Array.prototype.slice.call(first, minLength);
        first = Array.prototype.slice.call(first, 0, minLength);
      }
    firstLength = first.length;
    minLength = Math.min(firstLength, second.length);
  }

  // Build the final array
  var pattern = [];
  first.forEach(function (f) {
    pattern = Array.prototype.concat.call(pattern, f);
  });
  second.forEach(function (s) {
    pattern = Array.prototype.concat.call(pattern, s);
  });

  return pattern;
};

module.exports = {
  getPattern: getPattern
};
},{}]},{},[1]);
