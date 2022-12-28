/* 제너레이터는 이터레이터를 쉽게 만들 수 있는 함수다. */
const log = console.log
function* gen() {
  yield 10
  if (false) yield 20 // 건너 뛴다.
  if (true) yield 20
  yield 30
  return 90 // 리턴으로 종료.
  yield 30
}
/* 방법 1 */
// let iter = gen()
// console.log(iter)
// log(iter.next())
// log(iter.next())
// log(iter.next())
// log(iter.next())
/* 결과
Object [Generator] {}
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: 90, done: true }
*/

/* 방법 2 */
console.log(...gen()) // 10 20 30 출력
