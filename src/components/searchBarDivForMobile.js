function createSearchBarDivForMobile() {
  const contentDiv = document.getElementById('content');

  const searchBarDiv = document.createElement('div');
  searchBarDiv.classList.add('searchbar-mobile');

  contentDiv.appendChild(searchBarDiv);
}

export default createSearchBarDivForMobile;
