function getScore(score) {
    
    let scoreFinal

    if (score >= 90 && score <= 100) {
        scoreFinal = "Grade A"
    } else if (score >= 80 && score <= 89) {
        scoreFinal = "Grade B"
    } else if (score >= 70 && score <= 79) {
        scoreFinal = "Grade C"
    } else if (score >= 60 && score <= 69) {
        scoreFinal = "Grade D"
    } else if (score < 60 && score >= 0) {
        scoreFinal = "Grade F"
    } else {
        scoreFinal = "Grade invalid"
    }

    return scoreFinal
}

console.log(getScore(95))
console.log(getScore(85))
console.log(getScore(75))
console.log(getScore(65))
console.log(getScore(55))
console.log(getScore(45))
console.log(getScore(35))
console.log(getScore(25))
console.log(getScore(15))
console.log(getScore(0.5))
console.log(getScore(105))
console.log(getScore(-5))