// impure fuctions
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

let person = {
    name: 'Rafael Camarda',
    age: 'jovem'
}

function changeName(name) {
    person.name = name
}

// pure functions
const calcCircum = function(pi, radius) {
    return pi * (radius + radius)
} 

// with arrow function 
const calcCir = (pi, radius) => pi * (radius + radius)
const changePersonName = (person, name) => {person, name}