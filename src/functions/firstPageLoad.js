import createHeaderComponent from '../components/header';
import fetchAllPokemons from './fetchAllPokemons';
import createSearchBarIconForMobile from '../components/searchBarIconForMobile';

function firstPageLoad() {
  createHeaderComponent();
  fetchAllPokemons();
  createSearchBarIconForMobile();
}
export default firstPageLoad;
