//before ES5

function a(){
    return 1;
}
console.log(a()); // 결과: 1.

// after ES6
const b = _=>1;
console.log(b()); // 결과: 1.( 저자는 한 줄짜리 화살표 함수를 즐겨쓰므로 주의! )

const c = (b = 2)=> b; // 매개변수 b에 초깃값 할당.
console.log(c()); // 결과: 2.