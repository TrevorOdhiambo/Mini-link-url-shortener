//navigation bar iife
(function navigation(){
    const menu = document.querySelector('.menu')
    const navList = document.querySelector('#nav-list')
    const navItems = document.querySelectorAll('.nav-item')
    menu.addEventListener('click',()=>[
        navList.classList.toggle('active')
    ])
    navItems.forEach(item=>{
        item.addEventListener('click', ()=>{
            navList.classList.remove('active')
        })
    })
})()
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
const shortenUrl = async(link) => {
    const token = 'iUhax5TtUXfyNvY88Qcwvdi81bWOI1Zc4oAVoG4YEnfpQJmY8bTinW37vemc'
    const response = await fetch('https://api.tinyurl.com/create',
        {
            method : 'POST',
            headers : {
                'Authorization' : `Bearer ${token}`,
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                "url": `${link}`,
                "domain": "tiny.one"
            })
        }
    )
    const data = await response.json()
    console.log(data)
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
