function init() {
    arr = ['rock', 'scissors', 'paper']
    result = arr[cpuChoise()]
    console.log(result)
}

function cpuChoise() {
    let choise = Math.floor(Math.random() * 3)
    console.log(choise)
    return choise
}

