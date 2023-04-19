const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
function handleClick() {
  mainMenuElement.classList.toggle('main-menu--show');
}
toggleMenuElement.addEventListener('click', handleClick);
