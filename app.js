const searchTrigger = document.querySelector('[data-search-trigger]');
const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input');

// On search trigger click, open search form and move focus to search input
searchTrigger.addEventListener('click', () => {
  searchForm.classList.add('search--is-open');
  searchInput.focus();
});
