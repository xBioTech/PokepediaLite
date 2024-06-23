import createHeaderComponent from '../components/header';
import fetchAllPokemons from './fetchAllPokemons';
import createSearchBarIconForMobile from '../components/searchBarIconForMobile';
import renderSearchBarDesktop from './renderSearchBarDesktop';
import { attachSearchBarEventListenerForMobile, attachHamburgerNavigationMenu } from './eventHandlers';
import createSearchBarDivForMobile from '../components/searchBarDivForMobile';
import renderMainContent from '../components/mainContent';
import { setPokemonDataAll } from './setApiDataAll';
import fetchPokemonDetails from './fetchPokemonDetails';

async function firstPageLoad() {
  createHeaderComponent();
  attachHamburgerNavigationMenu();
  if (window.matchMedia('(max-width: 767px)').matches) {
    createSearchBarIconForMobile();
    createSearchBarDivForMobile();
    attachSearchBarEventListenerForMobile();
  } else {
    renderSearchBarDesktop();
  }
  const apiDataAll = await fetchAllPokemons();
  setPokemonDataAll(apiDataAll);
  const apiDataAllDetails = await fetchPokemonDetails();
  console.log(apiDataAll);
  console.log(apiDataAllDetails);
  renderMainContent(apiDataAll, apiDataAllDetails);
}
export default firstPageLoad;
