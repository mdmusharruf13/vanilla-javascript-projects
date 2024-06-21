const button = document.querySelectorAll('.button');
const counter = document.querySelector('.counter');
let count = 0;

button.forEach((btn) => {
    btn.addEventListener("click", (event) => {

        let list = event.target.classList;
        if (list.contains('decrement')) {
            count--;
        }
        else if (list.contains('increment')) {
            count++;
        }
        else {
            count = 0;
        }
        counter.textContent = count;
        counter.style.color = (count > 0 ? 'green' : (count < 0 ? 'red' : 'black'));
    })
})
