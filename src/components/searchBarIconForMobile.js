import magnifyingGlassSvg from '../assets/magnify.svg';

function createSearchBarIconForMobile() {
  const headerNavigationDiv = document.querySelector('.header-navigation');

  const magnifyingGlassIcon = new Image();
  magnifyingGlassIcon.src = magnifyingGlassSvg;
  magnifyingGlassIcon.classList.add('magnifying-glass-icon');

  headerNavigationDiv.appendChild(magnifyingGlassIcon);
}

export default createSearchBarIconForMobile;
