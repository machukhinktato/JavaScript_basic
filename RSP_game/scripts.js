function init(choice) {
    arr = ['rock', 'scissors', 'paper']
    console.log(arr[choice])
}

function userPick() {
    let container = document.getElementById('container')
    container.addEventListener(onclick, ok)
    // console.log(container.target)
    // contianer.onclick = ok;
}

function cpuChoise() {
    let choise = Math.floor(Math.random() * 3)
    console.log(choise)
    return choise
}

function ok(eventObj) {
    console.log(eventObj.target);
}

// function evntLstnr() {
//     let evnt = document.getElementById('choice')
//     evnt.onclick(sendInfo, )
//     return aftEvnt
// }
//
// function sendInfo(event) {
//     console.log(event.target)
// }

