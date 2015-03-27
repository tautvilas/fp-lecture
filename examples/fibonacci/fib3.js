function fib(n) {
  return cond(n < 2,
    function() {return n;},
    function() {return plus(fib(n - 1), fib(n - 2))});
}

function cond(expr, then, otherwise) {
  if (expr) {
    return then();
  } else {
    return otherwise();
  }
}

function plus(a, b) {
  return a + b;
}

/*

fib(5)
fib(4) + fib(3)
(fib(3) + fib(2)) + (fib(2) + fib(1))

 */