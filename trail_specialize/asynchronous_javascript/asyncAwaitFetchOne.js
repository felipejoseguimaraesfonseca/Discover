const fetch = require('node-fetch')

async function start() {
    try {
        const response = await fetch('https://api.github.com/users/felipejoseguimaraesfonseca')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos)
    } catch(error) {
        console.log(error)
    }
}

start()