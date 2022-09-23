const promess = new Promise(function(resolve, reject) {
    return resolve('ok')
})

async function start() {
    try {
        const result = await promess 
        console.log(result)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('rodar sempre')
    }
}

start()