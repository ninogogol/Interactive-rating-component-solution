const selectedNumbers = document.querySelectorAll('div.numbers div');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const submitBtn = document.querySelector('#submit');

let selectedValue;

selectedNumbers.forEach(number => {
    
    number.addEventListener('click', () => {
        selectedNumbers.forEach(num => {
            if(num.classList.contains('selected')) {
                num.classList.remove('selected');
            }
        });

        number.classList.add('selected');
        selectedValue = number.innerText;
    });
});

submitBtn.addEventListener('click', () => {
    if (selectedValue !== undefined) {
        startScreen.style.display = 'none';
        endScreen.innerHTML = `
        <img class="illustration" src="images/illustration-thank-you.svg" alt="tablet illustration">
        <p class="end-txt">You selected ${selectedValue} out of 5</p>
        <h2>Thank you!</h2>
        <p class="end-p">We appreciate you taking the time to give a rating. 
        If you ever need more support, don’t hesitate to get in touch!</p>
        `
    } else {
        return;
    }
})