const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.getElementById('container')
const body = document.getElementById('body')

open.addEventListener('click', showNav)

close.addEventListener('click', hideNav)

document.body.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName == 'A') {
        hideNav()
    }
})

function showNav() {
    container.classList.add('show-nav')
    container.addEventListener('click', hideNav, true)
    body.classList.add('nav-open')
    setTimeout(()=> {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300)
}

function hideNav() {
    container.classList.remove('show-nav')
    body.classList.remove('nav-open')
}