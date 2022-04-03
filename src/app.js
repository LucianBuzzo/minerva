const PINK = '#bc51cf'
const ORANGE = '#d98d00'
const TEAL = '#2cbbc2'

let interval = null

function applyColor(color) {
    document.querySelectorAll('.panel').forEach(function (panel) {
        panel.style.background = color
    })
}

function reset() {
    if (interval) {
        window.clearInterval(interval);
    }
}

function minerva1() {
    applyColor(PINK)
}

function minerva2() {
    applyColor(ORANGE)
}

function minerva3() {
    applyColor(TEAL)
}

window.auto = function() {
    let counter = 1;
    minerva1()
    reset()
    interval = setInterval(function() {
        counter++
        console.log('transitioning to minerva' + counter)
        window[`minerva${counter}`]()
        if (counter === 3) {
            counter = 0;
        }
    }, 6000)
}

auto()

window.reset = reset;
window.minerva1 = minerva1;
window.minerva2 = minerva2;
window.minerva3 = minerva3;
