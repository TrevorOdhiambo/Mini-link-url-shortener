// Import stylesheets
import './style.css';

const form = document.getElementById('form');
const validateUrl = (link) => {
    let re = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&amp;a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$', 'i');
    re.test(link) ? shortenUrl(link) : errorMessage(link);
};
const shortenUrl = (link) => {
    fetch('https://www.shareaholic.com/v2/share/shorten_link/').then(response => response.json()).then(data => console.log(data));
};
const errorMessage = (link) => {
    const main = document.getElementById('main');
    const div = document.createElement('div');
    div.classList.add('error');
    const message = document.createElement('p');
    message.classList.add('error-message');
    message.textContent = `${link} is not a valid url`;
    div.appendChild(message);
    main.append(div);
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('url-input');
    validateUrl(input.value);
    input.value = '';
});
