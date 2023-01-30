
async function handlerTrendingPagination(evt) {
  function renderNewMoviesPage(pageNum) {
    localStorage.getItem(pageNum).then(data => {
      renderMoviesCards(data.results);
      renderPagination(data.page, data.total_pages);
      saveMoviesToLoсalStorage(data.results);
    });
  }

  if (evt.target.nodeName !== 'LI') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  if (evt.target.textContent === '🡸') {
    renderNewMoviesPage((globalCurrentPage -= 1));
    return;
  }
  if (evt.target.textContent === '🡺') {
    renderNewMoviesPage((globalCurrentPage += 1));
    return;
  }
  const page = evt.target.textContent;
  renderNewMoviesPage(page);
}

let notesOnPage = 20;
let countOfItems = Math.ceil(localStorage.length / notesOnPage);

//   1 стр - 0 - 20
//   2 стр - 20 - 40
//   3 стр - 40 - 60

let start = (globalCurrentPage - 1) * notesOnPage;
let end = start + notesOnPage;
let notes = localStorage.slice(start, end);
