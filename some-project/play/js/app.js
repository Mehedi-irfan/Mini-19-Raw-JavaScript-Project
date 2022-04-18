// const player1Scor = document.getElementsByClassName('player1Scor')
const player2Scor = document.getElementsByClassName('player2Scor')

const winigDisplay = document.querySelector('p span');

const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('resetBtn');

player1Btn.addEventListener('click', () => {
    let inputScor = document.getElementById('inputScor').value;
    console.log(inputScor);
    document.getElementsByClassName('player1Scor').innertext = inputScor;

})