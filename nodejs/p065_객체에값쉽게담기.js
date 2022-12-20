const d = _=>({"name":"홍길동","job":"의적"});// 객체를 return값으로 바로 담을 때는 소괄호에 먼저 담아줘야한다.
const {name} = d();
console.log(name); // 홍길동( 키로 값을 꺼내온다. )

const a2 = [1,2];
const [b,c] = a2;
const {e,f} = a2;
const {g} = a2[0];
const {h} = a2[1];
console.log(b,c); // 1 2
console.log(e,f); // undefined undefined
console.log(g,h); // undefined undefined
/* 결론: 배열을 이용한 변수 선언은 배열로 값을 받아야 한다. */

const a3 = {"Name":"돈까스","소스":"기본"};
const {Name, 소스} = a3;
console.log(Name, 소스);// 돈까스 기본( 키로 값을 꺼내온다. )
/* 결론: 객체를 이용한 변수 선언은 객체의 키 값으로 값을 받아야 한다. */