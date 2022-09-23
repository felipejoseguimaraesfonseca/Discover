const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            userName.textContent = response.data.name
            userCity.textContent = response.data.city
            userID.textContent = response.data.id
            userAvatar.src = response.data.avatar
        })
        .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

deleteUser(3)

const userUpdated = {
    name: "Barry Allen",
    avatar: "https://picsum.photos/200/300",
    city: "Central City"
}


//updateUser(3, userUpdated)

getUsers()
getUser(2)

const newUser = {
    name: "Antônio Brito",
    avatar: "https://picsum.photos/200/300",
    city: "Nova Ponte"
}

//addNewUser(newUser)