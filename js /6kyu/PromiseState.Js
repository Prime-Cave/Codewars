async function getState(promise){
    const uniqueSymbol = Symbol("pending");

    return Promise.race([
        promise.then(() => 'fulfilled', () => "rejected"),
        new Promise(resolve => setTimeout(() => resolve(uniqueSymbol), 0))
    ]).then(result => {
        return result === uniqueSymbol ? "pending":result
    })
}