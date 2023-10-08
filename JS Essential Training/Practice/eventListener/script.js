function updatePage(document) {
  // Your code goes here.
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      let target = ev.target
        .querySelector('button')
        .getAttribute('data-target');
      const inputEl = document.getElementById(`${target}-input`);
      const targetEl = document.getElementById(target).querySelector('.value');
      targetEl.textContent = inputEl.value;
    });
  });
}

const inputs = [
  { id: 'name-input', value: 'Adventure Backpack' },
  {
    id: 'description-input',
    value: 'A durable backpack for outdoor adventures',
  },
  { id: 'color-input', value: 'Green' },
  { id: 'volume-input', value: '35L' },
];

updatePage(document);
