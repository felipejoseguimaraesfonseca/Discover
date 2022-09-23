function printData(data) {
    console.log('outras tarefas')
    console.log(data())
}

printData(function () {
    return 'Olá mundo'
})

