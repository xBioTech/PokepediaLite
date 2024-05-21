import './style.scss';
import fetchAllPokemons from './functions/fetchAllPokemons';
import createHeaderComponent from './components/header';
import createSearchBarIconForMobile from './components/searchBarIconForMobile';

fetchAllPokemons();
createHeaderComponent();
createSearchBarIconForMobile();
