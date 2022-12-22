const job1 = ()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log('job 1');
            res('job 1');
        },Math.random()*1000)
    })
}
const job2 = ()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log('job 2');
            res('job 2');
        },Math.random()*1000)
    })
}
const job3 = ()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            console.log('job 3');
            res('job 3');
        },Math.random()*1000)
    })
}

const main = async () =>{
    await job1();
    await job2();
    await job3();
}
main();