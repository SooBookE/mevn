const 조건 = e=>e.height>=180;
const 친구들 = [
    {"name": "박종선","height":173},
    {"name": "연제호","height":175},
    {"name": "윤성용","height":180},
    {"name": "최주원","height":190}
];
const 키큰친구 = 친구들.find(조건);
console.log(키큰친구); // 결과 { name: '윤성용', height: 180 }
const 키큰친구인덱스 = 친구들.findIndex(조건);
console.log(키큰친구인덱스); // 결과 2
// 0부터 시작해서 하나만 뽑고 종료하는게 특징이다.
// 아무것도 없다면, find()는 undefined 출력.
// 아무것도 없다면, findIndex()는 -1 출력.

/* includes, findIndex 예제 */
const a = [1,2,3,4,5];
console.log(a.includes(3)); // 배열에 3이란게 있냐 없냐? 결과: true

const ret1 = a.indexOf(3);
const ret2 = a.findIndex(e=>e===3); // 얘가 더 빠르다.
console.log(ret1); // 결과: 2
console.log(ret2); // 결과: 2
// indexOf와 마찬가지로 findIndex도 가장 빠른 인덱스를 출력하고, 출력 내용이 없으면
// -1을 반환한다. 보통 findIndex가 indexOf보다 빠르다는 걸 인지할 것!