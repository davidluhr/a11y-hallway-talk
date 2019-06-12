const searchTrigger = document.querySelector('[data-search-trigger]');
const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-input');
const searchSubmit = document.querySelector('[data-search-submit');
const searchClose = document.querySelector('[data-search-close');

const keyCodeTab = 9;
const keyCodeEsc = 27;

let searchFormElements = [];

searchFormElements.push(searchInput, searchSubmit, searchClose);

const focusElement = (element) => {
  if (element !== undefined) {
    element.focus();
  }
};

const focusPrevious = () => {
  let entry = document.activeElement;
  let index = searchFormElements.indexOf(entry);

  do {
    index--;
    if (index < 0) {
      index = searchFormElements.length - 1;
    }
    entry = searchFormElements[index];
  } while (entry.disabled);
  focusElement(entry);
};

const focusNext = () => {
  let entry = document.activeElement;
  let index = searchFormElements.indexOf(entry);

  do {
    index++;
    if (index >= searchFormElements.length) {
      index = 0;
    }
    entry = searchFormElements[index];
  } while (entry.disabled);
  focusElement(entry);
};

// On search trigger click, open search form and move focus to search input
searchTrigger.addEventListener('click', () => {
  searchForm.classList.add('search--is-open');
  focusElement(searchInput);
});

window.onkeydown = event => {
  // If the search form is open
  if (searchForm.classList.contains('search--is-open')) {
    // Cycle focus between search input and search submit button
    if (event.keyCode === keyCodeTab) {
      event.preventDefault();
      if (event.shiftKey) {
        focusPrevious();
      } else {
        focusNext();
      }
    }

    // If the user presses "esc", close the search form
    if (event.keyCode === keyCodeEsc) {
      event.preventDefault();
      searchForm.classList.remove('search--is-open');
    }
  }
};

// On search close click, close search form and move focus to search trigger
searchClose.addEventListener('click', () => {
  searchForm.classList.remove('search--is-open');
  focusElement(searchTrigger);
});

// If the user clicks outside of the search form, close the search form
// function hideOnClickOutside(element) {
//   const outsideClickListener = event => {
//     if (!element.contains(event.target)) { // or use: event.target.closest(selector) === null
//       console.log('click outside');
//       if (isVisible(element)) {
//         element.classList.remove('search--is-open');
//         removeClickListener();
//       }
//     }
//   };

//   const removeClickListener = () => {
//     document.removeEventListener('click', outsideClickListener);
//   };

//   document.addEventListener('click', outsideClickListener);
// }

// const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );

// hideOnClickOutside(searchForm);
