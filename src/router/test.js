function runAsync(x) {
    return new Promise(r => setTimeout(() => {
        r(x, console.log("async",x))
    }, 1000 * x))
}

function runReject(x) {
    return new Promise((res, rej) => setTimeout(() => {
        rej(`ERR${x}`, console.log("reject",x))
    }, x * 1000))
}


Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)]).then(res => {
    console.log("res",res)
}).catch(err => {
    console.log("err",err)
})