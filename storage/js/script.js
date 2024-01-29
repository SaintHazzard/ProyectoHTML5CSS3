


function togleMenu() {
  iconMenu = document.getElementById('icon-menu')
  menu = document.querySelector('.menu')
  h1header = document.querySelector('.h1header')

  h1header.style.display = (h1header.style.display === 'block') ? 'none' : 'block';
  menu.classList.toggle('menuMovil')
}