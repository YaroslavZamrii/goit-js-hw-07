import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector(".gallery");
const imagesMarkup = createItemsMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML("beforeend", imagesMarkup);

function createItemsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
