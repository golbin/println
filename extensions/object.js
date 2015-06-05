Object.prototype.println = function () {
  var message = this.toString.apply(this, arguments);

  console.log(message);

  return message;
};
