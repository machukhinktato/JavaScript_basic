function init() {
    arr = ['rock', 'scissors', 'paper']
    result = arr[cpuChoise()]
    console.log(result)
}
function userPick() {
    let choise = [...prompt('enter a number')]
    console.log(choise)
}
function cpuChoise() {
    let choise = Math.floor(Math.random() * 3)
    console.log(choise)
    return choise
}

