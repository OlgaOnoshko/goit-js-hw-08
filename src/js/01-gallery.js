import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems)

// gallery.addEventListener("click", openModal)

gallery.insertAdjacentHTML(("beforeend"), galleryMarkup)

function createGalleryMarkup(items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    }).join("")
}

const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

// console.log(galleryItems);
// console.log(SimpleLightbox)