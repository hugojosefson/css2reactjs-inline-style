#!/usr/bin/env node
'use strict';

var linereader = require('through2-linereader');
var camelCase = require('camel-case');
var endsWith = require('ends-with');

process.stdin
    .pipe(linereader())
    .on('data', function (line) {
        var l = line.toString();
        var parts = l.split(': ');
        var key = camelCase(parts[0]);
        var value = parts[1];
        if (endsWith(value, ';')) {
            value = value.substring(0, value.length - 1);
        }
        if (value === '@light') {
            value = 'weight.light';
        } else if (value === '@regular') {
            value = 'weight.regular';
        } else if (value === '@medium') {
            value = 'weight.medium';
        } else if (isNaN(Number(value))) {
            value = '\'' + value + '\'';
        }
        console.log(key + ': ' + value);
    });