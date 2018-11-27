const searchTrigger = document.querySelector('[data-search-trigger]');
const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input');

// On search trigger click, open search form and move focus to search input
searchTrigger.addEventListener('click', () => {
  searchForm.classList.add('search--is-open');
  searchInput.focus();
});

// If the search form is open, cycle focus between search input and search submit button


// If the search form is open and the user presses "esc", close the search form
window.onkeyup = event => {
  if (event.keyCode == '27' && searchForm.classList.contains('search--is-open')) {
    searchForm.classList.remove('search--is-open');
  }
};

// If the user clicks outside of the search form, close the search form
