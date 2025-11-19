const searchInput = document.getElementById('search');
const resultsList = document.getElementById('results');
let dorksData = [];

fetch('dorks.json')
  .then(res => res.json())
  .then(data => {
    dorksData = data;
    displayResults(dorksData);
  });

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = dorksData.filter(dork =>
    dork.dork.toLowerCase().includes(query) ||
    dork.category.toLowerCase().includes(query) ||
    dork.purpose.toLowerCase().includes(query)
  );
  displayResults(filtered);
});

function displayResults(items) {
  resultsList.innerHTML = '';
  if(items.length === 0) {
    resultsList.innerHTML = '<li>No results found</li>';
    return;
  }
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${item.dork}</strong><br/><em>${item.category}</em><br/>${item.purpose}`;
    resultsList.appendChild(li);
  });
}
