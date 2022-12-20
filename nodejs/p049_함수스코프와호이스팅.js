/* 예제1 */
// // function b(){
// //     var i = 3;
// //     for(var i = 0; i<10 ; i++){}
// //     return i;
// // }
// console.log(b()); // 결과는 10.( var를 사용해서 덮어씌워졌다.. 이러면 문제가 생긴다. )

/* 예제2 */
// function b(){
//     for(var i = 0; i<10 ; i++){}
//     return i;
// }
// console.log(b()); // 결과는 10. 호이스팅으로 초기화부터 됐기에 밖으로 튀어나왔다.

/* 예제3 */
// function b(){
//     for(let i=0; i<10 ; i++ ){}
//     return i;
// }
// console.log(b()); // 결과: ReferenceError: i is not defined  호이스팅 x

/* 예제4 */
let a = 1;
if(true){
    console.log(a); // 왜 안 되지..?
    let a = 2;
    console.log(a); // 위를 주석처리하면 출력된다.
}
// var로 선언하면 선언과 undefined로 초기화가 동시에 일어나고, let const는 선언을 하고, 초기 할당을 막기 위해 TDZ로
// 보내는 작업을 한다. 고로 호이스팅은 모두 일어난다.
