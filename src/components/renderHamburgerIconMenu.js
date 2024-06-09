function renderHamburgerIconMenu() {
  const contentDiv = document.getElementById('content');

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu-div');

  const ul = document.createElement('ul');
  ul.classList.add('menu-ul');

  menuDiv.appendChild(ul);

  const li1 = document.createElement('li');
  ul.appendChild(li1);
  const a1 = document.createElement('a');
  a1.href = '#';
  a1.textContent = 'test1';
  li1.appendChild(a1);

  const li2 = document.createElement('li');
  ul.appendChild(li2);
  const a2 = document.createElement('a');
  a2.href = '#';
  a2.textContent = 'test1';
  li2.appendChild(a2);

  const li3 = document.createElement('li');
  ul.appendChild(li3);
  const a3 = document.createElement('a');
  a3.href = '#';
  a3.textContent = 'test1';
  li3.appendChild(a3);

  contentDiv.appendChild(menuDiv);
}
export default renderHamburgerIconMenu;
