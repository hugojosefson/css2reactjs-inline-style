'use strict';

var camelCase = require('camel-case');
var endsWith = require('ends-with');
var quote = require('quote')({quotes: '\''});
var jsStringEscape = require('js-string-escape');

function cssLine2js(line) {
    var parts = line.split(': ');
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
        value = quote(jsStringEscape(value));
    }
    return key + ': ' + value;
}

function css2js(css) {
    return css.split('\n').map(cssLine2js).join(',\n')
}

module.exports = css2js;