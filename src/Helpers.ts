function fibonaci(position: number) {
  const sequence = [1, 1, 2, 3];
  position = Math.round(position);
  let prev = 2;
  let curr = 3;

  function getfib(prev: number, curr: number): number[] {
    let next = prev + curr;
    prev = curr;
    curr = next;
    sequence.push(next);

    //if we have found nth + 3 fibonaci sequence
    if (sequence.length == position + 3) {
      //return nth Fibonaci and that of 3 numbers before & after n
      return sequence.slice(position - 4);
    }

    return getfib(prev, curr);
  }

  const nthfib = getfib(prev, curr);

  return nthfib;
}

export default fibonaci;
