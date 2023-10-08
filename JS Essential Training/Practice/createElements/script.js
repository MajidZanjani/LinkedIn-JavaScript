// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

function createNavMenu(document) {
  // Your code goes here
  const header = document.querySelector('.siteheader');
  const nav = document.createElement('nav');
  nav.classList.add('main-navigation');
  nav.innerHTML = `<ul>${navContent}</ul>`;
  header.append(nav);
}

createNavMenu(document);

const result = document.querySelector('.siteheader').outerHTML;

console.log(result);
