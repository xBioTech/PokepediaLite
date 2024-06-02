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
export { attachSearchBarEventListenerForMobile };
