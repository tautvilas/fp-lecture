/* λx. x */

var identity = function(x) {
  return x;
};

// (λx. x) 5
// identity(5)

/* λx. 5 */

var constant = function(x) {
  return 5;
};

/* λy.λx. x y */

var two_args = function(y) {
  return function(x) {
    return x(y);
  }
}

/* (λx. x x)(λx. x x) */

var omega = function(x) {
  return x(x);
}

omega(omega)