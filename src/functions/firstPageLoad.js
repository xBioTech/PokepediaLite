import createHeaderComponent from '../components/header';
import fetchAllPokemons from './fetchAllPokemons';
import createSearchBarIconForMobile from '../components/searchBarIconForMobile';
import renderSearchBarDesktop from './renderSearchBarDesktop';
import { attachSearchBarEventListenerForMobile, attachHamburgerNavigationMenu } from './eventHandlers';
import createSearchBarDivForMobile from '../components/searchBarDivForMobile';

function firstPageLoad() {
  createHeaderComponent();
  fetchAllPokemons();
  attachHamburgerNavigationMenu();
  if (window.matchMedia('(max-width: 767px)').matches) {
    createSearchBarIconForMobile();
    createSearchBarDivForMobile();
    attachSearchBarEventListenerForMobile();
  } else {
    renderSearchBarDesktop();
  }
}
export default firstPageLoad;
