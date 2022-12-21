const Job1 = ()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log('난 1번',b)
    },b)
}
const Job2 = ()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log('난 2번',b)
    },b)
}
const Job3 = ()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log('난 3번',b)
    },b)
}

Job1();
Job2();
Job3();
// 호출은 순서대로 했지만, 비동기+랜덤이므로 먼저 완료된 녀석부터 출력된다.