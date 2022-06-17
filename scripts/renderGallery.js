import { createCartPhoto } from "./createCartPhoto.js";

export const renderGallery = (photos) => {
    const gallery = document.querySelector('.grid');
    const cards = photos.map(createCartPhoto);
    gallery.append(...cards);

};
