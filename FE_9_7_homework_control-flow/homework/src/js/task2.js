game();

function game() {
    let isGameStarted = true;
    while(isGameStarted) {
        let confirmation = confirm('Do you want to play a game ?');
        if(confirmation) {
            play();
        } else {
            alert('You did not become millionaire, but can.')
        }
    }
}

function play() {
    const MAX_ATTEMPS = 3;
    let minMagicNumber = 0;
    let maxMagicNumber = 5;
    let magicNumberStep = 5;
    let magicNumber = getMagicNumber(minMagicNumber, maxMagicNumber);
    let attempts = MAX_ATTEMPS;
    let isWin = false;
    let totalPrize = 0;
    let possiblePrize = maxMagicNumber * 2;

    while(attempts && !isWin) {
        let userNumber = parseInt(prompt(`
        Enter a number from ${minMagicNumber} to ${maxMagicNumber}
        Attempts left: ${attempts}
        Total prize: ${totalPrize}
        Possible prize on current attempt:  ${possiblePrize}
        `));

        if(userNumber === magicNumber) {
            totalPrize += possiblePrize;
            maxMagicNumber += magicNumberStep;
            magicNumber = getMagicNumber(minMagicNumber, maxMagicNumber);
            possiblePrize = maxMagicNumber * 2;
            let isContinue = confirm(`Congratulations! Your prize is: ${totalPrize}\nDo you want to continue?\n`);

            if(!isContinue) {
                alert(`Thanks you for a game. Your prize is: ${totalPrize}\n`);
                isWin = true;
            } else {
                attempts = MAX_ATTEMPS;
            }

        } else {
            --attempts;
            possiblePrize = Math.ceil(possiblePrize / 2);

            if(attempts === 0) {
                alert(`Thank you for a game. Your prize is:  ${totalPrize}\n`);
            }
        }
    }
} 

function getMagicNumber(from, to) {
    let randomFix = 1;
    return Math.floor(Math.random() * (to - from + randomFix) + from);
}