function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Degree is not identified')
    }  else if (celsiusExists) {
        let updatedDegree = parseInt(degree.toUpperCase().replace("C", ""))
        let formula = celsius => celsius * 9/5 + 32
        let degreeSign = '°F'

        return formula(updatedDegree).toFixed(1) + degreeSign
    } else {
        let updatedDegree = parseInt(degree.toUpperCase().replace("F", ""))
        let formula = fahrenheit => (fahrenheit - 32) * 5/9
        let degreeSign = '°C'

        return formula(updatedDegree).toFixed(1) + degreeSign
    }
}

try {
    console.log(transformDegree('50°C'))
    console.log(transformDegree('10°F'))
} catch (error) {
    console.log(error.message)
}