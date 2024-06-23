function renderMainContent(apiDataAll, apiDataAllDetails) {
  const contentDiv = document.getElementById('content');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content');

  apiDataAll.results.forEach((pokemon) => {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonDetails = apiDataAllDetails.find(detail => detail.name === pokemon.name);

    if(pokemonDetails && pokemonDetails.sprites && pokemonDetails.sprites.front_default){
      const img = new Image();
      img.src = pokemonDetails.sprites.front_default;
      pokemonCard.appendChild(img);
    
      mainContentDiv.appendChild(pokemonCard);
    } else {
      console.warn(`Sprite not found ${pokemon.name}`);
    }
  });



  contentDiv.appendChild(mainContentDiv);
}

export default renderMainContent;
