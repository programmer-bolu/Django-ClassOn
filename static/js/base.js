document.addEventListener('DOMContentLoaded', () => {
    let searchInput = document.getElementById('navsearch')
    let form = document.querySelector('.navbar-search')
    let searchButton = document.querySelector('.navbar-search-btn')
    searchInput.addEventListener('input', () => {
        if (searchInput.value.length > 0) {
            form.classList.add('active')
            searchButton.classList.add('show')
        } else {
            form.classList.remove('active')
            searchButton.classList.remove('show')
        }
    })
})
let navbar = document.getElementById('navbar-nav')
let navstate = document.getElementById('nav-status')

navstate.addEventListener('change', () => {
    if (!navstate.checked) {
        navbar.classList.remove('show')
    } else {
        navbar.classList.add('show')
    }
})