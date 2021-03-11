const pushResultFirst = document.getElementById('buttFirst');
const pushResultSecond = document.getElementById('buttSecond');
const pushResultThird = document.getElementById('buttThird');
const spanTempleteFirstEl = document.getElementById('templateFirst');
const spanTempleteSecondEl = document.getElementById('templateSecond');
const spanTempleteThirdEl = document.getElementById('templateThird');

pushResultFirst.addEventListener('click', pushResult(spanTempleteFirstEl));
pushResultSecond.addEventListener('click',pushResult(spanTempleteSecondEl));
pushResultThird.addEventListener('click',pushResult(spanTempleteThirdEl));

function pushResult (target){
    let prev = 0;
    let next = 1;
    return function fib () {
        next = prev + next;
        prev = next - prev;
        let result = target.textContent  = `Fibonacci number: ${prev}`;
        return result;
    };
};