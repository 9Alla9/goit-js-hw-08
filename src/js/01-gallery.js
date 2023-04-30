import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
// galleryContainer.addEventListener('click', onImgClick);

// function createGalleryItemsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join('');
// }

// function onImgClick(e) {
//   e.preventDefault();

//   const isItemImage = e.target.classList.contains('gallery__image');
//   if (!isItemImage) return;

//   const currentImgUrl = e.target.dataset.source;

//   const instance = basicLightbox.create(
//     `
// 		<img src="${currentImgUrl}" width="1280" height="auto"/>
//         `,
//     {
//       onShow: instance => {
//         window.addEventListener('keydown', onEscKeyPress);
//       },
//       onClose: instance => {
//         window.removeEventListener('keydown', onEscKeyPress);
//       },
//     }
//   );
//   instance.show();

//   function onEscKeyPress(e) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = e.code === ESC_KEY_CODE;
//     if (!isEscKey) return;
//     instance.close();
//   }
// }

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
