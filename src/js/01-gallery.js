import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const blockGalleryEl = document.querySelector('.gallery');

const creatingGalleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join('');

blockGalleryEl.insertAdjacentHTML('afterbegin', creatingGalleryItems);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
