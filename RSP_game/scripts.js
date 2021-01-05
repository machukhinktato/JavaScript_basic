function init(choice) {
    let score = {
        'user': 0,
        'cpu': 0,
    }
    let arr = ['rock', 'scissors', 'paper']
    for (let round = 0; round < 10; round++) {
        let userPick = arr[choice]
        let cpuTurn = arr[cpuChoise()]
        let winner = resCheck(userPick, cpuTurn, score)
        console.log(`${userPick}, ${cpuTurn}`)
        console.log(score)
    }
}

function resCheck(usr, cpu, score) {
    if (usr == cpu) {
        console.log('due')
    } else if ((usr == 'rock' && cpu == 'scissors') || (usr == 'paper' && cpu == 'rock') || (usr == 'scissors' && cpu == 'paper')) {
        score.user += 1
    } else {
        score.cpu += 1
    }
}

function cpuChoise() {
    let choise = Math.floor(Math.random() * 3)
    return choise
}
