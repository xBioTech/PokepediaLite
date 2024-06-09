import renderHamburgerIconMenu from '../components/renderHamburgerIconMenu';

function attachSearchBarEventListenerForMobile() {
  const searchBarDiv = document.querySelector('.searchbar-mobile');
  const searchBarIcon = document.querySelector('.magnifying-glass-icon');

  searchBarIcon.addEventListener('click', () => {
    const inputField = document.createElement('input');
    inputField.type = 'search';
    inputField.placeholder = 'Search for Pokemon';
    inputField.classList.add('search-bar-mobile');
    searchBarDiv.appendChild(inputField);
  });
}

function attachHamburgerNavigationMenu() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  hamburgerIcon.addEventListener('click', () => {
    renderHamburgerIconMenu();
  });
}

export { attachSearchBarEventListenerForMobile, attachHamburgerNavigationMenu };
