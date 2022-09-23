const axios = require('axios').default

Promise.all([
    axios.get('https://api.github.com/users/felipejoseguimaraesfonseca'),
    axios.get('https://api.github.com/users/felipejoseguimaraesfonseca/repos')
])
.then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.catch(error => console.log(error.message))