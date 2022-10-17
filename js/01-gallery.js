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
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
                </a>
            </div>
        `;
        })
        .join('');
}
 
function onPictureContainerClick(evt) {
    evt.preventDefault();
    

    const isPictureSwatchEl = evt.target.nodeName === 'IMG';

    if (!isPictureSwatchEl) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `, {
        onShow: () => window.addEventListener('keydown', onEscKeyPress),
        onClose: () => window.removeEventListener('keydown', onEscKeyPress)
    });

    instance.show();

    
   
    function onEscKeyPress(event) {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;

        if (isEscKey) {
            instance.close();
        };
    }
   
}







