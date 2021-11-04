function fibonaci(n:number) {
  if (n < 5 || n >= 100) return "input must be greater than 4 and less than 100";
  const sequence = [1, 1, 2, 3];
  n = Math.round(n);
  let prev = 2;
  let curr = 3;

  function getfib(prev:number, curr:number):number[] {
    let next = prev + curr;
    prev = curr;
    curr = next;
    sequence.push(next);

    //if we have found nth + 3 fibonaci sequence
    if (sequence.length == n + 3) {
      //return nth Fibonaci and that of 3 numbers before & after n
      return sequence.slice(n - 4);
    }

    return getfib(prev, curr);
  }

  const nthfib = getfib(prev, curr);

  return nthfib;
}


export default fibonaci;
