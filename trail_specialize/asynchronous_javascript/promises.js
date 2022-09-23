let accept = true

console.log('Ask for Uber')
const promess = new Promise((resolve, reject) => {
    if(accept){
        return resolve('Order accepted!')
    } 

    return reject('Order denied!')
})

console.log('waiting')

promess
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('finished'))