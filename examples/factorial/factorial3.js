function factorial(n) {
  return cond(
    n === 0,
    function() {return 1;},
    function() {return factorial(n - 1) * n}
  );
}

function cond(expr, then, otherwise) {
  if (expr) {
    return then();
  } else {
    return otherwise();
  }
}
