// Dummy Data Example: replace with fetching your dorks.json file in production
const dorks = [
  { dork: "machine:Kioptrix" },
  { dork: "port:80" },
  { dork: "service:http" },
  { dork: "product:mysql" },
  { dork: "version:9" },
  { dork: "platform:infosecwarrior" }
];
// For production: use fetch('dorks.json').then(...)

document.getElementById('count').textContent = dorks.length;

const searchInput = document.getElementById('search');
const tagsDiv = document.getElementById('tags');
const resultsCount = document.getElementById('results-count');

function showTags(filtered) {
  tagsDiv.innerHTML = '';
  filtered.forEach(tag => {
    const pill = document.createElement('span');
    pill.className = 'tag-pill';
    pill.textContent = tag.dork;
    tagsDiv.appendChild(pill);
  });
  resultsCount.textContent = filtered.length;
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = dorks.filter(tag => tag.dork.toLowerCase().includes(query));
  showTags(filtered);
});

// Show all by default
showTags(dorks);
