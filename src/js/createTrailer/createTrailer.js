import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

const API_KEY = '7752b7319b478a62fea227c419e04b15';
const API_URL = 'https://api.themoviedb.org/3/';

const galleryItemsOverlay = document.querySelector('.films__list');
const body = document.body;
galleryItemsOverlay.removeEventListener('click', onGalleryItemsClick);
galleryItemsOverlay.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(e) {
  // console.log(e.target.className);
  if (
    e.target.className !== 'films__overlay' &&
    e.target.className !== 'films__trailer-text'
  ) {
    console.log('Click Error!');
    return;
  } else {
    e.preventDefault;
    const cardId =
      e.target.parentNode.parentNode.parentNode.parentNode.id ||
      e.target.parentNode.parentNode.parentNode.id;
    openVideoTrailer(cardId);
  }
}

function openVideoTrailer(id) {
  const url = `${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`; //&language=en-US
  Notiflix.Loading.pulse();
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.results[0].key + ' : Youtube key');
      const idFilm = data.results[0].key;
      // const instance = basicLightbox.create(`<iframe src="https://www.youtube.com/embed/${id}" width="560" height="315" frameborder="0"></iframe>`);

      const instance = basicLightbox.create(
        `<iframe width="80%" height="80%" src='https://www.youtube.com/embed/${idFilm}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        {
          onShow: instance => {
            body.style.overflow = 'hidden';
          },
          onClose: instance => {
            body.style.overflow = 'inherit';
          },
        }
      );
      instance.show();
      window.setTimeout(e => {
        Notiflix.Loading.remove();
      }, 2000);
      filmCloseTrailer(instance);
    })
    .catch(() => {
      console.log('Catch Error!');
      const instance = basicLightbox.create(
        `
            <iframe width="0%" height="0%" src='' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            // `,
        {
          //     onShow: (instance) => { body.style.overflow = 'hidden'; },
          //     onClose: (instance) => { body.style.overflow = 'inherit'; }
        }
      );
      instance.show();
      filmCloseTrailer(instance);
      window.setTimeout(e => {
        Notiflix.Loading.remove();
      }, 1500);
      return;
    });
}

function filmCloseTrailer(instance) {
  window.addEventListener('keydown', event => checkPressKey(event, instance));
  const closeBtn = document.querySelector('.basicLightbox--iframe');
  closeBtn.insertAdjacentHTML(
    'afterbegin',
    `<button type="button" class="film-trailer__closeBtn" data-action="close-lightbox">&#10005</button>`
  );

  const trailerCloseBtn = document.querySelector(
    '[data-action="close-lightbox"]'
  );
  trailerCloseBtn.removeEventListener('click', onCloseTrailer);
  trailerCloseBtn.addEventListener('click', onCloseTrailer);

  function onCloseTrailer(e) {
    instance.close();
  }
}
const checkPressKey = (event, instance) => {
  if (event.code === 'Escape') {
    instance.close();
    body.style.overflow = 'inherit';
    window.removeEventListener('keydown', event =>
      checkPressKey(event, instance)
    );
  }
};

