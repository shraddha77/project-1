const menu=document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')

//Disply Mobile Menu
const mobileMenu=() ==>{
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
}
menu.addEventListener('click',mobileMenu)
