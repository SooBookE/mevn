console.log("Hi!");
setTimeout(function timeout(){
    console.log("async function1 complete")
},)
setTimeout(function timeout(){
    console.log("async function2 complete")
},)
console.log("kundol!");
// 결과: 1초를 넣어도, 0초나 값을 안 넣어도,
// Hi!
// kundol!
// async function1 complete
// async function2 complete
// console.log들은 call stack에 쌓이고, setTimeout은 webAPI로 잠시 빠져나갔다가
// 큐에 줄 선 다음에 출력 되므로, 딜레이가 생긴다.

// 이 현상을 에니메이션으로 볼 수 있는 사이트
// latentflip.com/loupe