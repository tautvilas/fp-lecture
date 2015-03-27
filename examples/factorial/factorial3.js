function factorial(n) {
  return cond(
    n < 2,
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

/* We can expand using substitution

factorial(4)
cond(4 < 2, {return 1}, {return factorial(4 - 1) * 4})
4 * factorial(4 - 1)

 */