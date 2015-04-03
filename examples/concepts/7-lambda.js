var True = function(x, y) {
  return x;
};

var False = function(x, y) {
  return y;
}

function cond(expr, then, otherwise) {
  return expr(then, otherwise);
}
