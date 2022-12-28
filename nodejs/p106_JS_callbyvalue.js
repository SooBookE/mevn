const f1 = (obj) => {
  obj = null
}
let b1 = { a: 1 }
f1(b1)
console.log(b1) // { a: 1 }

const f2 = (array) => {
  array = null
}
let b2 = []
let a2 = b2
f2(b2)
console.log(b2)

const swap = (a, b) => {
  let temp = a
  a = b
  b = temp
}
let x = 1
let y = 2
swap(x, y)
console.log(x, y)
/* 결과 :
{ a: 1 }
[]      
1 2     
*/

// JS는 함수의 매개변수로 넘길 때, call by value로 넘기므로(매개변수가 값만 같은 다른 값으로 복사된다),
// 바깥의 변수에 영향을 주지 않는다.

const a = { a: 1 }
const b = (c) => {
  c.a = 2
} // 익명 함수 선언
b(a) // a를 매개변수로 넣어서 익명 함수 b를 호출.
console.log(a)
/* 결과 :
{ a: 2 }
*/

// 그러나 객체의 속성변화에는 영향을 줄 수 있다.

/* 얕복, 깊복과 비슷한 바이브라고 생각하자.... */
