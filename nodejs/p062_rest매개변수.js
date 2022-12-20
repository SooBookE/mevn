/* // object 구문 생략해서 선언하기.
const name = "종선";
const age = "27";
const job = "회장";
const data = {name, age, job};
console.log(data); // 결과: { name: '종선', age: '27', job: '회장' }
*/

// 스프래드 연산자
/* 나머지 매개변수 */
const a = (b, ...rest)=>{
    console.log(rest);
}
a(1,2,3); // rest에는 [ 2, 3 ]이 들어간다.

const arr = [1,2,3];
const a2 = (a,b,c)=>console.log(a,b,c);
a2(...arr); // 결과는 1 2 3

const a3 = [1,2,3,4,5];
const [head, ...rest] = a3;
console.log(head, rest);// head에는 1. rest에는 [ 2, 3, 4, 5 ]

/* 배열통합 */
const aa = [1,2,3];
const bb = [4,5,6];
const cc = [...aa,...bb];
console.log(cc);// 결과: [ 1, 2, 3, 4, 5, 6 ]

/* Max 함수 사용 */
const ma = [1,2,3,4];
console.log(Math.max(ma)); // 결과: NaN
console.log(Math.max(...ma)); // 결과: 4

/* 객체 복사 */
const objA = {"name": "홍길동","age": 27};
const objB = {...objA, "key":1};
console.log(objB);