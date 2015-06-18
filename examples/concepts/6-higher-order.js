function x(y) {
  return y(5);
}

function x() {
  return function(z) {
    return z * 2;
  };
}