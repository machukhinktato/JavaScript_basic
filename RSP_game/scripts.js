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
    winner = null
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


function rock_game(user) {
    let terminator_ans = Math.floor(Math.random() * 3);
    let names = ['Rock', 'Scissors', 'Paper'];
    let game = {
        user: user,
        terminator: terminator_ans,
        winner: null,
        check() {
            let winner = null;


            if ((this.user == 0 && this.terminator == 1) || (this.user == 1 && this.terminator == 2) || (this.user == 2 && this.terminator == 0)) {
                this.winner = 'user';
            } else if (this.user == this.terminator) {
                this.winner = 'Both';
            } else {
                this.winner = 'pc';
            }

            this._render();
        },
        _render() {
            let userText = names[this.user];
            let pcText = names[this.terminator];

            let userSpan = document.querySelector('#user-variant');
            let pcSpan = document.querySelector('#pc-variant');
            let resultBlock = document.querySelector('#score');

            userSpan.innerText = userText;
            pcSpan.innerText = pcText;

            resultBlock.innerHTML += `${this.winner} победил; Человечество: ${userText}, Машинный разум улья: ${pcText}<br>`
        }
    };
    game.check()
}