const axios = require('axios').default

axios
    .get('https://api.github.com/users/felipejoseguimaraesfonseca')
    .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))