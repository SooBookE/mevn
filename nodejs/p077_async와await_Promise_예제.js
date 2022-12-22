/* 
물을 끓이고(기다림 2~3초)
라면을 뜯고(기다림 0.5~1.1초)
면을 넣고(기다림 1~1.6초)
스프를 뜯고(기다림 0.5~1초)
라면 익히기(기다림 2~4초)
라면 먹기(기다림 3~6초)
async + await 으로 구현 해보기.
 */
const job1 = ()=>{
    return new Promise(res=>{
        const random = Math.random()*1000+2000;
        setTimeout(()=>{
            console.log(`물을 끓이고(${(random/1000).toFixed(1)}초)`);
            res('job1');
        },random)
    })
}
const job2 = ()=>{
    return new Promise(res=>{
        const random = Math.random()*600+500;
        setTimeout(()=>{
            console.log(`라면을 뜯고(${(random/1000).toFixed(1)}초)`);
            res('job2');
        },random)
    })
}
const job3 = ()=>{
    return new Promise(res=>{
        const random = Math.random()*600+1000;
        setTimeout(()=>{
            console.log(`면을 넣고(${(random/1000).toFixed(1)}초)`);
            res('job3');
        },random)
    })
}
const job4 = ()=>{
    return new Promise(res=>{
        const random = Math.random()*500+500;
        setTimeout(()=>{
            console.log(`스프를 뜯고(${(random/1000).toFixed(1)}초)`);
            res('job4');
        },random)
    })
}
const job5 = ()=>{
    return new Promise(res=>{
        const random = Math.random()*2000+2000;
        setTimeout(()=>{
            console.log(`라면 익히기(${(random/1000).toFixed(1)}초)`);
            res('job5');
        },random)
    })
}
const job6 = ()=>{
    return new Promise(res=>{
        const random = Math.random()*3000+3000;
        setTimeout(()=>{
            console.log(`라면 먹기(${(random/1000).toFixed(1)}초)`);
            res('job6');
        },random)
    })
}

const main = async _ =>{
    await job1();
    await job2();
    await job3();
    await job4();
    await job5();
    await job6();
}
main();