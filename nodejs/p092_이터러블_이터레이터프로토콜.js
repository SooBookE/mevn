const log = console.log
function* gen() {
  yield 10
  if (false) yield 20
  yield 30
  return 90
  yield 30
}
let iter = gen()
log([...iter]) // [ 10, 30 ]
// 위 작업으로 gen()을 done까지 한 번 소모한다.

iter = gen()
// 고로 다시 배당을 해줘야 사용 가능하다.
for (const a of iter) {
  log(a) // 10 30
}
