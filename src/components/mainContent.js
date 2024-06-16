function renderMainContent(apiDataAll) {
  const contentDiv = document.getElementById('content');

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content');

  apiDataAll.results.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('pokemon-card');
    mainContentDiv.appendChild(div);
  });

  contentDiv.appendChild(mainContentDiv);
}

export default renderMainContent;
