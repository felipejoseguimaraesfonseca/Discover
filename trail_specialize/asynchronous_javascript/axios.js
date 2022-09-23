const axios = require('axios').default

axios.get('https://api.github.com/users/felipejoseguimaraesfonseca')
    .then((res) => {
        console.log(res.data)
    })