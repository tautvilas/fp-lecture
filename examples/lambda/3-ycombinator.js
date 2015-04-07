/* λf. (λx. f (x x))(λx. f (x x)) */

function Y(f) {
  var p = function(h) {
    return function(x) {
      return f(h(h))(x);
    };
  };
  return p(p);
}

function factorial(f) {
  return function(n) {
    return cond(
      n === 0,
      function() {return 1;},
      function() {return f(n - 1) * n}
    );
  }
}

function cond(expr, then, otherwise) {
  if (expr) {
    return then();
  } else {
    return otherwise();
  }
}

Y(factorial)(5);