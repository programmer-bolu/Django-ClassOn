document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.getElementById('navbar-nav')
    let navstate = document.getElementById('nav-status')
    let toogle = document.getElementById('toogle-nav-collapse')

    navstate.addEventListener('change', () => {
        if (!navstate.checked) {
            navbar.classList.remove('show')
        } else {
            navbar.classList.add('show')
        }
    })

    document.addEventListener('click', (e) => {
        if(!navbar.contains(e.target) && !toogle.contains(e.target)){
            if (navbar.classList.contains('show')) {
                navstate.checked = false
                navbar.classList.remove('show')
            }
        }
    })
})
