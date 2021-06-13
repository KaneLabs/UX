/* eslint-disable no-bitwise */
// Greatest Common Divisor algorithm for calculating best aspectRatio

// Just in case you're a performance freak...
//
// The Fastest way (in JavaScript) to compute a rectangle ratio it o use a true binary Great Common Divisor algorithm.
//
// (All speed and timing tests have been done by others, you can check one benchmark here: https://lemire.me/blog/2013/12/26/fastest-way-to-compute-the-greatest-common-divisor/)
//
// Here is it:
//
/* the binary Great Common Divisor calculator */
export function gcd(u, v) {
  if (u === v) return u;
  if (u === 0) return v;
  if (v === 0) return u;

  if (~u & 1) {
    if (v & 1) return gcd(u >> 1, v);
    return gcd(u >> 1, v >> 1) << 1;
  }

  if (~v & 1) return gcd(u, v >> 1);

  if (u > v) return gcd((u - v) >> 1, v);

  return gcd((v - u) >> 1, u);
}

/* returns an array with the ratio */
export function ratio(w, h) {
  const d = gcd(w, h);
  return [w / d, h / d];
}

/* example */
// var r1 = ratio(1600, 900);
// var r2 = ratio(1440, 900);
// var r3 = ratio(1366, 768);
// var r4 = ratio(1280, 1024);
// var r5 = ratio(1280, 720);
// var r6 = ratio(1024, 768);

/* will output this:
r1: [16, 9]
r2: [8, 5]
r3: [683, 384]
r4: [5, 4]
r5: [16, 9]
r6: [4, 3]
*/
