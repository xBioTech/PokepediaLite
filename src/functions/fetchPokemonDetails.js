import { getPokemonDataAll } from "./setApiDataAll";

async function fetchPokemonDetails(){
    const data = getPokemonDataAll();
    
    const pokemonPromises = data.results.map(async pokemon =>{
        try {
            const pokemonResponse = await fetch(pokemon.url);

            if(!pokemonResponse.ok){
                throw new Error('something went wrong');
            }

            const pokemonResponseData = await pokemonResponse.json();
            return pokemonResponseData;
        }
        catch (error) {
            console.log(error.message);
          }
    });
    return Promise.all(pokemonPromises);
}

export default fetchPokemonDetails;