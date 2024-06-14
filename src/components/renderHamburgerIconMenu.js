function renderHamburgerIconMenu() {
  const contentDiv = document.getElementById('content');

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  const ul = document.createElement('ul');
  ul.classList.add('menu-ul');

  menuDiv.appendChild(ul);

  const hElement = document.createElement('h4');
  hElement.textContent = 'Filter for Pokemon Type';
  hElement.classList.add('menu-div-headline');
  ul.appendChild(hElement);

  const li1 = document.createElement('li');
  ul.appendChild(li1);
  const a1 = document.createElement('a');
  a1.href = '#';
  a1.textContent = 'normal';
  li1.appendChild(a1);

  const li2 = document.createElement('li');
  ul.appendChild(li2);
  const a2 = document.createElement('a');
  a2.href = '#';
  a2.textContent = 'fighting';
  li2.appendChild(a2);

  const li3 = document.createElement('li');
  ul.appendChild(li3);
  const a3 = document.createElement('a');
  a3.href = '#';
  a3.textContent = 'flying';
  li3.appendChild(a3);

  const li4 = document.createElement('li');
  ul.appendChild(li4);
  const a4 = document.createElement('a');
  a4.href = '#';
  a4.textContent = 'poison';
  li4.appendChild(a4);

  const li5 = document.createElement('li');
  ul.appendChild(li5);
  const a5 = document.createElement('a');
  a5.href = '#';
  a5.textContent = 'ground';
  li5.appendChild(a5);

  const li6 = document.createElement('li');
  ul.appendChild(li6);
  const a6 = document.createElement('a');
  a6.href = '#';
  a6.textContent = 'rock';
  li6.appendChild(a6);

  const li7 = document.createElement('li');
  ul.appendChild(li7);
  const a7 = document.createElement('a');
  a7.href = '#';
  a7.textContent = 'bug';
  li7.appendChild(a7);

  const li8 = document.createElement('li');
  ul.appendChild(li8);
  const a8 = document.createElement('a');
  a8.href = '#';
  a8.textContent = 'ghost';
  li8.appendChild(a8);

  const li9 = document.createElement('li');
  ul.appendChild(li9);
  const a9 = document.createElement('a');
  a9.href = '#';
  a9.textContent = 'steel';
  li9.appendChild(a9);

  const li10 = document.createElement('li');
  ul.appendChild(li10);
  const a10 = document.createElement('a');
  a10.href = '#';
  a10.textContent = 'fire';
  li10.appendChild(a10);

  const li11 = document.createElement('li');
  ul.appendChild(li11);
  const a11 = document.createElement('a');
  a11.href = '#';
  a11.textContent = 'water';
  li11.appendChild(a11);

  const li12 = document.createElement('li');
  ul.appendChild(li12);
  const a12 = document.createElement('a');
  a12.href = '#';
  a12.textContent = 'grass';
  li12.appendChild(a12);

  const li13 = document.createElement('li');
  ul.appendChild(li13);
  const a13 = document.createElement('a');
  a13.href = '#';
  a13.textContent = 'electric';
  li13.appendChild(a13);

  const li14 = document.createElement('li');
  ul.appendChild(li14);
  const a14 = document.createElement('a');
  a14.href = '#';
  a14.textContent = 'psychic';
  li14.appendChild(a14);

  const li15 = document.createElement('li');
  ul.appendChild(li15);
  const a15 = document.createElement('a');
  a15.href = '#';
  a15.textContent = 'ice';
  li15.appendChild(a15);

  const li16 = document.createElement('li');
  ul.appendChild(li16);
  const a16 = document.createElement('a');
  a16.href = '#';
  a16.textContent = 'dragon';
  li16.appendChild(a16);

  const li17 = document.createElement('li');
  ul.appendChild(li17);
  const a17 = document.createElement('a');
  a17.href = '#';
  a17.textContent = 'dark';
  li17.appendChild(a17);

  const li18 = document.createElement('li');
  ul.appendChild(li18);
  const a18 = document.createElement('a');
  a18.href = '#';
  a18.textContent = 'fairy';
  li18.appendChild(a18);

  const li19 = document.createElement('li');
  ul.appendChild(li19);
  const a19 = document.createElement('a');
  a19.href = '#';
  a19.textContent = 'shadow';
  li19.appendChild(a19);

  contentDiv.appendChild(menuDiv);
}
export default renderHamburgerIconMenu;
