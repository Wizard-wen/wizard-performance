/**
 * @author songxiwen
 * @date 2020/08/31 22:01
 */

const inputSize = 10 ** 7;
const input = [];
for (let index = 1; index <= inputSize; index += 1) {
  input.push(index);
}
const pow2 = (value) => value ** 2;
// loop with map
console.time('map');
input.map(pow2);
console.timeEnd('map'); // map: 6037.319ms
// loop with for
console.time('loop');
const arrayResult = [];
for (let index = 0; index < input.length; index += 1) {
  arrayResult.push(pow2(input[index]));
}
console.timeEnd('loop'); // loop: 941.880ms
// loop with for, assign value using index.
console.time('loopWithoutPush');
const arrayNotPushResult = [];
for (let index = 0; index < input.length; index += 1) {
  arrayNotPushResult[index] = pow2(input[index]);
}
console.timeEnd('loopWithoutPush'); // loopWithoutPush: 803.660ms
