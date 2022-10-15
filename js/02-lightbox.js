import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createPicturesCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);


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
    
    const lightbox = new SimpleLightbox('.gallery a',
        {
        captionsData: 'alt',
        captionDelay: 250,
        }
    );
