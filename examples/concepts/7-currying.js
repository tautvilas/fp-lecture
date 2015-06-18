function add(a, b) {
  return a + b;
}

function add(x) {
  return x[0] + x[1];
}

function add_curried(a) {
  return function(b) {
    return a + b;
  }
}
