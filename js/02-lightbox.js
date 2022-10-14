import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);
galleryContainer.addEventListener('click', onPictureContainerClick);


function createPicturesCards(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
        })
        .join('');
}

function onPictureContainerClick(evt) {
    evt.preventDefault();

    const isPictureSwatchEl = evt.target.classList.contains('gallery__image');

    if (!isPictureSwatchEl) {
        return;
    }

    
    var lightbox = new SimpleLightbox('.gallery a',
        {
        captionsData: 'alt',
        captionDelay: 250,
        }
    );
}