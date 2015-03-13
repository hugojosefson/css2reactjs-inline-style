#!/usr/bin/env node
'use strict';

var linereader = require('through2-linereader');
var debounce = require('lodash.debounce');
var css2ReactJsInlineStyle = require('..');

var output = [];

function doFlush() {
    console.log('\n\n' + output.join(',\n'));
    output = [];
}

var flush = debounce(doFlush, 50);

process.stdin
    .pipe(linereader())
    .on('data', function (lineBuffer) {
        var cssLine = lineBuffer.toString();
        var jsLine = css2ReactJsInlineStyle(cssLine);
        output.push(jsLine);
        flush();
    });