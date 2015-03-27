function add(a, b) {
  return a + b;
}

function add_curried(a) {
  return function(b) {
    return a + b;
  }
}
