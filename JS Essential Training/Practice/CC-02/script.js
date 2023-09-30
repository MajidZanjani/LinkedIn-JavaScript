const newObject = {
  title: 'Java Script Learning',
  type: 'Book',
  price: 240,
};

function newArticle(content) {
  const articleEl = document.createElement('articleEl');

  const titleEl = document.createElement('h2');
  titleEl.textContent = content.title;
  articleEl.appendChild(titleEl);

  const typeEl = document.createElement('p');
  typeEl.textContent = content.type;
  articleEl.appendChild(typeEl);

  const priceEl = document.createElement('p');
  priceEl.textContent = `\$${content.price}`;
  articleEl.appendChild(priceEl);

  return articleEl;
}

const articleContainer = document.querySelector('article-container');
const article = newArticle(newObject);
articleContainer.appendChild(article);
