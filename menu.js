const menu = document.querySelector('.menu')
const navLinks = document.querySelector('#nav-list')
const links = document.querySelectorAll('#nav-list li')

menu.addEventListener('click', ()=>{
    navLinks.classList.toggle('open')
    links.forEach(link=>{
        link.classList.toggle('fade')
    })

    menu.classList.toggle('toggle')
})