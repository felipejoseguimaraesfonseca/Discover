const fetch = require('node-fetch')

async function start() {
    const response = await fetch('https://api.github.com/users/felipejoseguimaraesfonseca')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
}

start().catch(error => console.log(error))