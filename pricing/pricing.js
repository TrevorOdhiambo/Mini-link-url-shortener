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