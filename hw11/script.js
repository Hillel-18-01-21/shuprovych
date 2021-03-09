const pushResultFirst = document.getElementById('buttFirst');
const pushResultSecond = document.getElementById('buttSecond');
const pushResultThird = document.getElementById('buttThird');
const spanTempleteFirstEl = document.getElementById('templateFirst').innerHTML;
const spanTempleteSecondEl = document.getElementById('templateSecond').innerHTML;
const spanTempleteThirdEl = document.getElementById('templateThird').innerHTML;

pushResultFirst.addEventListener('click', pushResult);
pushResultSecond.addEventListener('click' )
pushResultThird.addEventListener('click' )

function pushResult (){
    let prev = 0;
    return function fib (n) {
        let next = 1;
        for(let i = 0; i < n; i++){
          next = prev + next;
          prev = next - prev;
        }
        return spanTempleteFirstEl.replace(`{{result}}`, prev);
    }
};