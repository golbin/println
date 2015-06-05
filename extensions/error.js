Error.prototype.toStringStandard = Error.prototype.toString;

Error.prototype.toString = function (includeStack) {
  if (includeStack) {
    return this.stack;
  } else {
    return this.toStringStandard();
  }
};
