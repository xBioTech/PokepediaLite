import createHeaderComponent from '../components/header';
import fetchAllPokemons from './fetchAllPokemons';
import createSearchBarIconForMobile from '../components/searchBarIconForMobile';
import renderSearchBarDesktop from './renderSearchBarDesktop';
import { attachSearchBarEventListenerForMobile, attachHamburgerNavigationMenu } from './eventHandlers';
import createSearchBarDivForMobile from '../components/searchBarDivForMobile';
import renderMainContent from '../components/mainContent';

async function firstPageLoad() {
  createHeaderComponent();
  const apiDataAll = await fetchAllPokemons();
  console.log(apiDataAll);
  attachHamburgerNavigationMenu();
  if (window.matchMedia('(max-width: 767px)').matches) {
    createSearchBarIconForMobile();
    createSearchBarDivForMobile();
    attachSearchBarEventListenerForMobile();
  } else {
    renderSearchBarDesktop();
  }
  renderMainContent(apiDataAll);
}
export default firstPageLoad;
