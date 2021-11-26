function fibSeries(n) {
  let a = 0,
    b = 1,
    c,
    i;
  if (n == 0) return a;
  for (i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fibSeriesUptoANumb() {
  let n1 = 0,
    n2 = 1,
    nextNumb;
  for (let i = 1; i <= number; i++) {
    nextNumb = n1 + n2;
    n1 = n2;
    n2 = nextNumb;
    console.log(n2);
  }
}
