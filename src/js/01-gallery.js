import { galleryItems } from './gallery-items';


import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);

import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector(".gallery");
galleryEl.style.listStyle = "none";

const pictureCards = createPictureGalery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', pictureCards);

function createPictureGalery (item){
return galleryItems.map(({preview, original, description}) =>{
    return`
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `  
}).join("");
}
var lightbox = new SimpleLightbox('.gallery a', 
{captionsData: "alt", captionDelay: "250"})

