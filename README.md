# Easy console.log for lazy programmers

## Install

npm install --save-dev println

## Usage

```js
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
