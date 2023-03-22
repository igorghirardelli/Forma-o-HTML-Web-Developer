

cpf.addEventListener('keypress', () => {
    var cpfLength = cpf.value.length

    // MAX LENGHT 14  CPF
    if (cpfLength == 3 || cpfLength == 7) {
        cpf.value += '.'
    }else if (cpfLength == 11) {
        cpf.value += '-'
    }

})

data.addEventListener('keypress', () => {
    var dataLength = data.value.length

    // MAX LENGHT 14  CPF
    if (dataLength == 2 || dataLength == 5) {
        data.value += '/'
    }

})










