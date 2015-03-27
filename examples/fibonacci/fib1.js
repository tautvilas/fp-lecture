function fib(n) {
  var current = 0;
  var next = 1;
  for (var i = 2; i <= n; i++) {
    var tmp = next;
    next = current + next;
    current = tmp;
  }
  return next;
}