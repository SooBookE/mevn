/*
※ fxjs가 설치 돼있어야 쓸 수 있다.

제너레이터를 이용한 지연평가를 사용하는 이유.
만약 어떤 배열에 대해 배열에 대한 함수를 3개를 사용한다고 하자.
그러면 각 함수의 동작 레인지가 다르므로, 동작 횟수가 늘어난다.
ex ) a=[1,2,3] , map() ,filter(), take()
총 횟수 : 6+take()값.

그러나 지연평가를 사용하면, 첫 동작 순서에서 map, filter, take 에서 평가할 때 모두 참이면 다음 동작을
시행하므로, 동작 횟수가 획기적으로 줄어든다.
ex ) a=[1,2,3] , map() ,filter(), take()
총 횟수 : take()값 만큼의 횟수.
*/

const _ = require('fxjs/Strict')
const L = require('fxjs/Lazy')
const C = require('fxjs/Concurrency')

const a = [1, 2, 3, 4, 5, 6, 7, 8]
const ret = _.go(
  a,
  _.map((a) => a),
  _.filter((a) => a % 2),
  _.take(2)
)
console.time('그냥')
console.log(ret) // 결과 : [ 1, 3 ]
console.timeEnd('그냥')
// 그냥: 8.199ms

const ret_lazy = _.go(
  a,
  L.map((a) => a),
  L.filter((a) => a % 2),
  L.take(2)
)
console.time('지연')
console.log([...ret_lazy]) // 결과 : [ 1, 3 ]
console.timeEnd('지연')
// 지연: 1.862ms

/* 속도 차이가 확 나는 것을 볼 수 있다. */
