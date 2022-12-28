/* 이터러블한 요소들은 이터레이터를 가지고 있다. */
const a = ['사과', '딸기', '포도', '배']
const it = a[Symbol.iterator]()

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
/* 결과 :
{ value: '사과', done: false }
{ value: '딸기', done: false }
{ value: '포도', done: false }
{ value: '배', done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/
