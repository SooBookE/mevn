const job1 = ()=>{
    return new Promise((res)=>{
        const random = Math.random()*1000;
        setTimeout(()=>{
            console.log('job 1');
            res('job 1');
        },random)
    })
}
const job2 = ()=>{
    return new Promise((res)=>{
        const random = Math.random()*1000;
        setTimeout(()=>{
            console.log('job 2');
            res('job 2');
        },random)
    })
}
const job3 = ()=>{
    return new Promise((res)=>{
        const random = Math.random()*1000;
        setTimeout(()=>{
            console.log('job 3');
            res('job 3');
        },random)
    })
}

// job1().then(_=>job2()).then(_=>job3()); // 기본
// job1().then(job2).then(job3); // 축약

// 프로미스와 감싸기로 동기적 구성 만들기.


/* 아메리카노 나왔습니다!(1초~2초) 라떼 나왔습니다!(2초~3.5초) 카푸치노 나왔습니다!(4초~5초) 비엔나 나왔습니다!(2초~3초)
결과도 출력하도록 해서, 순서대로 출력되도록 하기.(소수점 한 자리까지 출력.)
*/

const cof1=()=>{
    return new Promise(res=>{
        const random = Math.floor((Math.random()*1000+1001));
        setTimeout(()=>{
            console.log('주문하신 아메리카노 나왔습니다!('+(random/1000).toFixed(1)+'초)');
            res('주문하신 아메리카노 나왔습니다!('+random/1000+'초)');
        },random)
    })
}
const cof2=()=>{
    return new Promise(res=>{
        const random = Math.floor((Math.random()*1500+2001));
        setTimeout(()=>{
            console.log('주문하신 라떼 나왔습니다!('+(random/1000).toFixed(1)+'초)');
            res('주문하신 라떼 나왔습니다!('+random/1000+'초)');
        },random)
    })
}
const cof3=()=>{
    return new Promise(res=>{
        const random = Math.floor((Math.random()*1000+4001));
        setTimeout(()=>{
            console.log('주문하신 카푸치노 나왔습니다!('+(random/1000).toFixed(1)+'초)');
            res('주문하신 카푸치노 나왔습니다!('+random/1000+'초)');
        },random)
    })
}
const cof4=()=>{
    return new Promise(res=>{
        const random = Math.floor((Math.random()*1000+2001));
        setTimeout(()=>{
            console.log('주문하신 비엔나 나왔습니다!('+(random/1000).toFixed(1)+'초)');
            res('주문하신 비엔나 나왔습니다!('+random/1000+'초)');
        },random)
    })
}
cof1().then(cof2).then(cof3).then(cof4);