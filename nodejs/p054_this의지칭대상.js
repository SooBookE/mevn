function arrow(){
    setTimeout(()=>{
        console.log(this) // arrow{}
    }, 1000);
}
function not_arrow(){
    setTimeout(function(){
        console.log(this) // Node.js에서는 Timeout || 브라우저에서는 Window
    }, 1000);
}
const p1 = new not_arrow(); //timeout이나 window 지칭.( 바로 위의 함수를 지칭하느냐 )
const p2 = new arrow(); // 생성자 함수를 지칭.( 위의 위의 함수를 지칭하느냐 )