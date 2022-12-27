const curdate =_=>{
    return new Promise((resolve,reject)=>{
        const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data[0].trade_date);
        })
    })
};
const curtime =_=>{
    return new Promise((resolve,reject)=>{
        const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data[0].trade_time);
        })
    })
};
const value =_=>{
    return new Promise((resolve,reject)=>{
        const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data[0].trade_price);
        })
    })
};
const curhigh =_=>{
    return new Promise((resolve,reject)=>{
        const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data[0].high_price);
        })
    })
};
const curlow =_=>{
    return new Promise((resolve,reject)=>{
        const url = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            resolve(data[0].low_price);
        })
    })
};