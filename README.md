# Easy console.log for lazy programmers

[![NPM](https://img.shields.io/npm/v/println.svg)](https://www.npmjs.com/package/println)
[![Build Status](https://travis-ci.org/golbin/println.svg?branch=master)](https://travis-ci.org/golbin/println)
[![Coverage](https://img.shields.io/coveralls/golbin/println.svg)](https://coveralls.io/r/golbin/println)

## Install

npm install --save-dev println

## Usage

```js
require('println');

var number = 1;

number.println();
("[" + number + "]").println();

"====".println();

try {
  raiseError();
} catch (err) {
  err.println();
  err.println(true) // console.log(err.stack);
}
```
