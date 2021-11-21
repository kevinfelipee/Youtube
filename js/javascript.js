let menu = document.querySelector('.menu-nav')
let sidebar = document.querySelector('.sidebar')
let container = document.querySelector('.container')

menu.addEventListener('click', function(){
    sidebar.classList.toggle('sidebar-small')
    container.classList.toggle('container-small')
})