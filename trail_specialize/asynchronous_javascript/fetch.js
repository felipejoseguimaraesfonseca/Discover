const fetch = require('node-fetch')

fetch('https://api.github.com/users/felipejoseguimaraesfonseca')
    .then(response => response.json())
    .then(data => fetch(data.repos_url))
    .then(res => res.json())
    .then(d => console.log(d))
    .catch(err => console.log(err))