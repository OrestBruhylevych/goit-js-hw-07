import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
    
};


refs.gallery.insertAdjacentHTML('afterbegin', createGalleryItemsMarkup(galleryItems));

const linksEl = document.querySelectorAll('.gallery__link');
linksEl.forEach((link) => {
    addPreventDefaultLink(link);
});

refs.gallery.addEventListener('click', onGalleryItemsClick);



function onGalleryItemsClick(e) {
    const largeImageUrl = e.target.dataset.source;
    console.log(largeImageUrl);
        

}

function addPreventDefaultLink (link) {
   return link.addEventListener('click', (e) => {
        e.preventDefault()})
}

function createGalleryItemsMarkup(images) {
    return images.map(({preview, original, description} ) => {
        return `<div class="gallery__item">
                <a class="gallery__link" 
                   href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"                     
                    />
                </a>
            </div>`
    }).join('');
}




