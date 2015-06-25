#!/usr/bin/env node
'use strict';

var linereader = require('through2-linereader');
var _ = require('lodash');
var css2ReactJsInlineStyle = require('..');

var output = [];

function doFlush() {
    console.log('\n\n' + output.join(',\n'));
    output = [];
}

var flush = _.debounce(doFlush, 50);

process.stdin
    .pipe(linereader())
    .on('data', function (lineBuffer) {
        var cssLine = lineBuffer.toString();
        var js = css2ReactJsInlineStyle(cssLine);
        output.push(js);
        flush();
    });